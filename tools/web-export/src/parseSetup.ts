import { readFileSync } from "node:fs";

export interface Vec3 {
  x: number;
  y: number;
  z: number;
}

export interface PadRecord {
  name: string;
  position: Vec3;
  up: Vec3;
  orientation: Vec3;
  flags: number;
}

export interface BoundPadRecord {
  name: string;
  position: Vec3;
  up: Vec3;
  orientation: Vec3;
  flags: number;
  bbox: {
    xmin: number;
    xmax: number;
    ymin: number;
    ymax: number;
    zmin: number;
    zmax: number;
  };
}

export interface PropPlacement {
  index: number;
  type: string;
  /** Lower 16 bits of word 1: index into padlist for position/orientation. */
  padIndex: number;
  /** Which setup pad table this placement references. */
  padSource?: "pad" | "boundPad";
  /**
   * Upper 16 bits of word 1: type-specific primary identifier.
   * - StandardProp / Door / SingleMonitor: 0-based model index into propItemModelFileRecord.
   * - Guard: body / chr model index.
   * - Collectable / AmmoBox: item-type index.
   * - Others: varies.
   */
  primaryIndex: number;
  /**
   * PropDefHeaderRecord.extrascale — u8.8 fixed-point multiplier stored in the
   * first word of the propDef entry: _mkword(extraScale, _mkshort(0, type)).
   * Divide by 256 to get a float; e.g. 256 → 1.0 (identity), 332 → ~1.297.
   * The effective render scale = PitemZ_entries[primaryIndex].scale × (extraScale / 256).
   */
  extraScale: number;
  /** ObjectRecord.flags bitfield (third word in propDefs entry). */
  objectFlags: number;
}

/** One entry from propItemModelFileRecord.inc.c (PitemZ_entries[]). */
export interface PropModelEntry {
  /** Model name, used to locate the binary P<name>Z.bin. */
  name: string;
  /**
   * Scale factor from PROPFILERECORD(name, scale).
   * Applied to the model's rotation matrix at render time (modelSetScale).
   * Most props use 0.1; door models typically use 1.0.
   */
  scale: number;
}

export interface IntroSpawnRecord {
  pad: number;
  isDemoPlayback: number;
}

export interface IntroStartWeaponRecord {
  itemRight: number;
  itemLeft: number;
  isDemoPlayback: number;
}

export interface IntroStartAmmoRecord {
  ammoType: number;
  amount: number;
  isDemoPlayback: number;
}

export interface IntroSwirlCamRecord {
  flags: number;
  x: number;
  y: number;
  z: number;
  theta: number;
  duration: number;
  padIndex: number;
}

/**
 * Decoded SetupIntroCamera record (type = FixedCam / INTROTYPE_CAMERA).
 *
 * Native struct SetupIntroCamera layout (bondtypes.h):
 *   unk04/08/0C = world XYZ × 100  →  divide by 100.0 to get N64 world units
 *   unk10       = horizontal look angle × 65536  →  divide by 65536.0 = radians
 *   unk14       = vertical look angle × 65536    →  divide by 65536.0 = radians
 *   unk18       = hold duration in frames (@ 60 fps)
 *
 * Look-at direction in native code (bondview.c):
 *   lookX = cos(vertRad) * sin(horzRad)
 *   lookY = sin(vertRad)
 *   lookZ = -cos(vertRad) * cos(horzRad)
 */
export interface IntroFixedCamRecord {
  /** Camera world X in N64 units. */
  x: number;
  /** Camera world Y in N64 units. */
  y: number;
  /** Camera world Z in N64 units. */
  z: number;
  /** Horizontal look angle in radians. */
  horzRad: number;
  /** Vertical look angle in radians. */
  vertRad: number;
  /** How long to hold this camera, in frames (@ 60 fps). */
  durationFrames: number;
}

export interface SetupIntroData {
  spawns: IntroSpawnRecord[];
  startWeapons: IntroStartWeaponRecord[];
  startAmmo: IntroStartAmmoRecord[];
  swirlCams: IntroSwirlCamRecord[];
  fixedCams: IntroFixedCamRecord[];
  watchTimeSeconds?: number;
  watchTimeTenths?: number;
  cuffFlags?: number;
  /** Index into stage_intro_anim_table (INTROTYPE_ANIM). Defaults to 0. */
  animIndex?: number;
}

/**
 * Parse propItemModelFileRecord.inc.c to produce a 0-indexed array of
 * { name, scale } entries matching PitemZ_entries[].
 *
 * Entries appear as:
 *   #include <assets/obseg/prop/NAME/propFileRecord.inc.c>   (scale defaults to 0.1)
 *   PROPFILERECORD(NAME, SCALE)
 */
export function parsePropModelEntries(path: string): PropModelEntry[] {
  const source = readFileSync(path, "utf8");
  const entries: PropModelEntry[] = [];
  for (const line of source.split("\n")) {
    const inc = line.match(/#include\s+<assets\/obseg\/prop\/(\w+)\/propFileRecord\.inc\.c>/);
    if (inc) {
      // The included file uses PROPFILERECORD with scale=0.1 (macro default).
      entries.push({ name: inc[1], scale: 0.1 });
      continue;
    }
    // PROPFILERECORD(NAME, SCALE) — explicit scale (may differ from 0.1 for doors etc.)
    const rec = line.match(/PROPFILERECORD\((\w+),\s*([\d.]+)\s*\)/);
    if (rec) {
      entries.push({ name: rec[1], scale: Number.parseFloat(rec[2]) });
    }
  }
  return entries;
}

/**
 * Parse propDefs[] from a setup C source file.
 * Returns only entries whose type has a meaningful 3-D position (pad reference).
 *
 * Each propDef line has the format:
 *   _mkword(extraScale, _mkshort(0, typeId)), _mkword(primaryIndex, padIndex), ...
 * The extraScale is the PropDefHeaderRecord.extrascale field (u8.8 fixed-point).
 */
export function parseSetupPropdefs(path: string): PropPlacement[] {
  const source = readFileSync(path, "utf8");

  const propDefsBlock = source.match(/s32\s+propDefs\[\]\s*=\s*\{([\s\S]*?)\n\};/);
  if (!propDefsBlock) {
    throw new Error(`Could not find propDefs[] in ${path}`);
  }
  const block = propDefsBlock[1];

  const results: PropPlacement[] = [];

  // Each data line begins with _mkword(EXTRASCALE, _mkshort(0, TYPEID)) followed
  // by _mkword(PRIMARYINDEX, PADINDEX).  Capture all three integer arguments.
  const entryRegex =
    /\/\* Type = (\w+); index = (\d+) \*\/[^\r\n]*[\r\n]+\s*_mkword\((\d+),\s*_mkshort\(0,\s*\d+\)\)\s*,\s*_mkword\((\d+),\s*(\d+)\)\s*,\s*([^\s,]+)/g;

  let match: RegExpExecArray | null = null;
  while ((match = entryRegex.exec(block)) !== null) {
    const type = match[1];

    const index = Number.parseInt(match[2], 10);
    const extraScale = Number.parseInt(match[3], 10);
    const primaryIndex = Number.parseInt(match[4], 10);
    const rawPadIndex = Number.parseInt(match[5], 10);
    const objectFlags = Number.parseInt(match[6], 0);

    // Runtime pad addressing:
    //   0..9999   => g_CurrentSetup.pads[pad]
    //   >=10000   => g_CurrentSetup.boundpads[getBoundPadNum(pad)] (pad3dlist)
    const padSource: "pad" | "boundPad" = rawPadIndex >= 10000 ? "boundPad" : "pad";
    const padIndex = rawPadIndex >= 10000 ? rawPadIndex - 10000 : rawPadIndex;
    if (padIndex < 0) continue;

    results.push({ index, type, padIndex, padSource, primaryIndex, extraScale, objectFlags });
  }

  return results;
}

const NUMBER = "[-+]?(?:\\d*\\.\\d+|\\d+)(?:e[-+]?\\d+)?";

function parseFloatNumber(input: string): number {
  return Number.parseFloat(input);
}

export function parseSetupPadlist(path: string): PadRecord[] {
  const source = readFileSync(path, "utf8");
  const padlistBlock = source.match(/PadRecord\s+padlist\[\]\s*=\s*\{([\s\S]*?)\n\};/);
  if (!padlistBlock) {
    throw new Error(`Could not find PadRecord padlist in ${path}`);
  }

  const entryRegex = new RegExp(
    `\\{\\s*\\{\\s*(${NUMBER})f?\\s*,\\s*(${NUMBER})f?\\s*,\\s*(${NUMBER})f?\\s*\\},\\s*` +
      `\\{\\s*(${NUMBER})f?\\s*,\\s*(${NUMBER})f?\\s*,\\s*(${NUMBER})f?\\s*\\},\\s*` +
      `\\{\\s*(${NUMBER})f?\\s*,\\s*(${NUMBER})f?\\s*,\\s*(${NUMBER})f?\\s*\\},\\s*` +
      `"([^"]+)"\\s*,\\s*(-?\\d+)\\s*\\}`,
    "gi"
  );

  const pads: PadRecord[] = [];
  let match: RegExpExecArray | null = null;
  while ((match = entryRegex.exec(padlistBlock[1])) !== null) {
    pads.push({
      name: match[10],
      position: {
        x: parseFloatNumber(match[1]),
        y: parseFloatNumber(match[2]),
        z: parseFloatNumber(match[3])
      },
      up: {
        x: parseFloatNumber(match[4]),
        y: parseFloatNumber(match[5]),
        z: parseFloatNumber(match[6])
      },
      orientation: {
        x: parseFloatNumber(match[7]),
        y: parseFloatNumber(match[8]),
        z: parseFloatNumber(match[9])
      },
      flags: Number.parseInt(match[11], 10)
    });
  }

  return pads;
}

export function parseSetupPad3dlist(path: string): BoundPadRecord[] {
  const source = readFileSync(path, "utf8");
  const blockMatch = source.match(/BoundPadRecord\s+pad3dlist\[\]\s*=\s*\{([\s\S]*?)\n\};/);
  if (!blockMatch) {
    throw new Error(`Could not find BoundPadRecord pad3dlist[] in ${path}`);
  }

  const entryRegex = new RegExp(
    `\\{\\s*\\{\\s*(${NUMBER})f?\\s*,\\s*(${NUMBER})f?\\s*,\\s*(${NUMBER})f?\\s*\\},\\s*` +
      `\\{\\s*(${NUMBER})f?\\s*,\\s*(${NUMBER})f?\\s*,\\s*(${NUMBER})f?\\s*\\},\\s*` +
      `\\{\\s*(${NUMBER})f?\\s*,\\s*(${NUMBER})f?\\s*,\\s*(${NUMBER})f?\\s*\\},\\s*` +
      `("([^"]*)"|NULL)\\s*,\\s*(-?\\d+)\\s*,\\s*\\{\\s*` +
      `(${NUMBER})f?\\s*,\\s*(${NUMBER})f?\\s*,\\s*(${NUMBER})f?\\s*,\\s*` +
      `(${NUMBER})f?\\s*,\\s*(${NUMBER})f?\\s*,\\s*(${NUMBER})f?\\s*\\}\\s*\\}`,
    "gi"
  );

  const results: BoundPadRecord[] = [];
  let match: RegExpExecArray | null = null;
  while ((match = entryRegex.exec(blockMatch[1])) !== null) {
    const nameLiteral = match[11];
    // Terminator entry is NULL + all zero vectors/bbox.
    if (!nameLiteral) continue;

    results.push({
      name: nameLiteral,
      position: {
        x: parseFloatNumber(match[1]),
        y: parseFloatNumber(match[2]),
        z: parseFloatNumber(match[3]),
      },
      up: {
        x: parseFloatNumber(match[4]),
        y: parseFloatNumber(match[5]),
        z: parseFloatNumber(match[6]),
      },
      orientation: {
        x: parseFloatNumber(match[7]),
        y: parseFloatNumber(match[8]),
        z: parseFloatNumber(match[9]),
      },
      flags: Number.parseInt(match[12], 10),
      bbox: {
        xmin: parseFloatNumber(match[13]),
        xmax: parseFloatNumber(match[14]),
        ymin: parseFloatNumber(match[15]),
        ymax: parseFloatNumber(match[16]),
        zmin: parseFloatNumber(match[17]),
        zmax: parseFloatNumber(match[18]),
      },
    });
  }

  return results;
}

function parseNumericToken(raw: string): number {
  const token = raw.trim();
  if (token.length === 0) return 0;
  return Number(token);
}

function parsePayloadInts(entryBody: string): number[] {
  const mkwordEnd = entryBody.indexOf(")),");
  const payload = mkwordEnd >= 0 ? entryBody.slice(mkwordEnd + 3) : entryBody;
  const nums = payload.match(/-?0x[0-9a-fA-F]+|-?\d+/g) ?? [];
  return nums.map(parseNumericToken);
}

/**
 * Parse setup intro[] records from setup C source.
 *
 * This is intentionally type-focused for web runtime parity:
 * Spawn / StartWeapon / StartAmmo / SwirlCam / FixedCam plus watch/cuff fields.
 */
export function parseSetupIntro(path: string): SetupIntroData {
  const source = readFileSync(path, "utf8");
  const blockMatch = source.match(/s32\s+intro\[\]\s*=\s*\{([\s\S]*?)\n\};/);
  if (!blockMatch) {
    throw new Error(`Could not find intro[] in ${path}`);
  }

  const intro: SetupIntroData = {
    spawns: [],
    startWeapons: [],
    startAmmo: [],
    swirlCams: [],
    fixedCams: [],
  };

  const entryRegex = /\/\* Type = ([^;]+); index = (\d+) \*\/([\s\S]*?)(?=\/\* Type =|$)/g;
  const block = blockMatch[1];
  let match: RegExpExecArray | null = null;
  while ((match = entryRegex.exec(block)) !== null) {
    const type = match[1].trim();
    const body = match[3];
    const ints = parsePayloadInts(body);

    if (type === "Spawn" && ints.length >= 2) {
      intro.spawns.push({ pad: ints[0], isDemoPlayback: ints[1] });
      continue;
    }
    if (type === "StartWeapon" && ints.length >= 3) {
      intro.startWeapons.push({
        itemRight: ints[0],
        itemLeft: ints[1],
        isDemoPlayback: ints[2],
      });
      continue;
    }
    if (type === "StartAmmo" && ints.length >= 3) {
      intro.startAmmo.push({
        ammoType: ints[0],
        amount: ints[1],
        isDemoPlayback: ints[2],
      });
      continue;
    }
    if (type === "SwirlCam" && ints.length >= 7) {
      const s32 = (v: number): number => v | 0;
      intro.swirlCams.push({
        flags: ints[0],
        x: s32(ints[1]) / 65536.0,
        y: s32(ints[2]) / 65536.0,
        z: s32(ints[3]) / 65536.0,
        theta: s32(ints[4]) / 65536.0,
        duration: s32(ints[5]) / 65536.0,
        padIndex: s32(ints[6]),
      });
      continue;
    }
    if (type === "FixedCam" && ints.length >= 6) {
      // parsePayloadInts strips the _mkword(0,_mkshort(0,6)) type header,
      // so ints[0..5] = camX×100, camY×100, camZ×100, horz×65536, vert×65536, durationFrames.
      // The source array is s32; large hex literals must be sign-extended with | 0.
      const s32 = (v: number): number => v | 0;
      intro.fixedCams.push({
        x: s32(ints[0]) / 100.0,
        y: s32(ints[1]) / 100.0,
        z: s32(ints[2]) / 100.0,
        horzRad: s32(ints[3]) / 65536.0,
        vertRad: s32(ints[4]) / 65536.0,
        durationFrames: s32(ints[5]),
      });
      continue;
    }
    if (type === "WatchTime" && ints.length >= 2) {
      intro.watchTimeSeconds = ints[0];
      intro.watchTimeTenths = ints[1];
      continue;
    }
    if (type === "Cuff" && ints.length >= 1) {
      intro.cuffFlags = ints[0];
      continue;
    }
    if (type === "Anim" && ints.length >= 1) {
      intro.animIndex = ints[0];
    }
  }

  return intro;
}
