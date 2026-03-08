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

/** Prop types that carry a valid pad reference in their second word. */
const SPATIAL_PROP_TYPES = new Set([
  "Guard",
  "StandardProp",
  "Door",
  "AmmoBox",
  "Collectable",
  "Tank",
  "SingleMonitor",
  "Key",
  "Drone",
  "Glass",
  "GlassWindow",
]);

export interface PropPlacement {
  index: number;
  type: string;
  /** Lower 16 bits of word 1: index into padlist for position/orientation. */
  padIndex: number;
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
    if (!SPATIAL_PROP_TYPES.has(type)) continue;

    const index = Number.parseInt(match[2], 10);
    const extraScale = Number.parseInt(match[3], 10);
    const primaryIndex = Number.parseInt(match[4], 10);
    const padIndex = Number.parseInt(match[5], 10);
    const objectFlags = Number.parseInt(match[6], 0);

    // Pad indices > 9999 are virtual pads (e.g. intro camera positions) — skip.
    if (padIndex > 9999) continue;

    results.push({ index, type, padIndex, primaryIndex, extraScale, objectFlags });
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
