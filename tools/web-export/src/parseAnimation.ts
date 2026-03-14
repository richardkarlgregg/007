/**
 * parseAnimation.ts
 *
 * Parses GoldenEye 007 animation data from the decompiled C source files:
 *   - assets/animationtable_data.c  — ANIM_DATA_* arrays (ModelAnimation headers)
 *   - assets/animationtable_data.h  — PTR_ANIM_* offset defines
 *   - assets/animationtable_entries.c — ANIM_ENTRY_* arrays (packed frame data)
 *
 * The native animation system works as follows:
 *   1. ptr_animation_table->data holds all ANIM_DATA arrays concatenated.
 *      PTR_ANIM_<name> is a byte offset into this segment.
 *   2. At that offset sits a ModelAnimation header whose `address` field
 *      (after runtime fixup) points into the entries segment.
 *   3. The entries segment (ANIM_ENTRY_* arrays) holds the actual packed
 *      frame data — one bitstream per frame, with per-joint Euler XYZ
 *      rotations packed at `bitsPerComponent` bits each.
 *   4. The skeleton (ModelSkeleton -> Joints[]) maps each jointIndex to a
 *      bit-position index (`mtxB`).  bitOffset = mtxB * bitsPerComponent.
 *
 * ModelAnimation header layout (from bondtypes.h):
 *   +0x00  s32  address   — PTR_ANIM_ENTRY_* (ROM offset before fixup)
 *   +0x04  u16  unk04     — frame count
 *   +0x06  u16  unk06     — high byte = bits per component
 *   +0x08  u16  unk08
 *   +0x0A  u16  unk0A
 *   +0x0C  u16  unk0C
 *   +0x0E  u16  unk0E     — frame size in bits; >> 3 = bytes per frame
 */

import { readFileSync } from "node:fs";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface AnimationHeader {
  name: string;
  frameCount: number;
  bitsPerComponent: number;
  frameSizeBits: number;
  bytesPerFrame: number;
}

export interface JointRotation {
  rx: number;
  ry: number;
  rz: number;
}

export interface SkeletonJoint {
  nodeType: number;
  mtxA: number;
  mtxB: number;
}

// ---------------------------------------------------------------------------
// Skeleton parsing from C source
// ---------------------------------------------------------------------------

/**
 * Parse a JOINTLIST from a skeleton .inc.c file.
 * Format: ModelJoint JOINTLIST(name)[] = { {0x401, 0x0, 0x0}, {0x02, 0x03, 0x03}, ... };
 */
function parseJointListFromC(source: string, skelName: string): SkeletonJoint[] | null {
  const escapedName = skelName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(
    `ModelJoint\\s+JOINTLIST\\(${escapedName}\\)\\s*\\[\\]\\s*=\\s*\\{([\\s\\S]*?)\\};`,
  );
  const m = source.match(re);
  if (!m) return null;

  const joints: SkeletonJoint[] = [];
  const entryRe = /\{\s*(0x[0-9a-fA-F]+|\d+)\s*,\s*(0x[0-9a-fA-F]+|\d+)\s*,\s*(0x[0-9a-fA-F]+|\d+)\s*\}/g;
  let entry: RegExpExecArray | null;
  while ((entry = entryRe.exec(m[1])) !== null) {
    joints.push({
      nodeType: Number(entry[1]),
      mtxA: Number(entry[2]),
      mtxB: Number(entry[3]),
    });
  }
  return joints.length > 0 ? joints : null;
}

/**
 * Determine which skeleton a chr model uses by parsing chrModelFileHeaders.inc.c.
 * Returns the skeleton name (e.g. "guard").
 */
function findSkeletonName(headersSource: string, modelName: string): string | null {
  const escaped = modelName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(
    `MODELFILEHEADER\\(${escaped}\\s*,.*?&SKELETON\\((\\w+)\\)`,
  );
  const m = headersSource.match(re);
  return m ? m[1] : null;
}

/**
 * Load the skeleton joints for a given character model.
 * Reads chrModelFileHeaders.inc.c to find the skeleton name,
 * then parses the JOINTLIST from assets/embedded/skeletons/<name>.inc.c.
 */
export function loadSkeleton(repoRoot: string, modelName: string): SkeletonJoint[] | null {
  const headersPath = `${repoRoot}/assets/obseg/chr/chrModelFileHeaders.inc.c`;
  const headersSource = readFileSync(headersPath, "utf8");
  const skelName = findSkeletonName(headersSource, modelName);
  if (!skelName) return null;

  const skelPath = `${repoRoot}/assets/embedded/skeletons/${skelName}.inc.c`;
  let skelSource: string;
  try {
    skelSource = readFileSync(skelPath, "utf8");
  } catch {
    return null;
  }
  return parseJointListFromC(skelSource, skelName);
}

export interface DecodedAnimation {
  name: string;
  frameCount: number;
  bitsPerComponent: number;
  bytesPerFrame: number;
  jointCount: number;
  /** frames[frameIndex][jointIndex] = Euler XYZ in radians */
  frames: JointRotation[][];
}

// ---------------------------------------------------------------------------
// C source parsing helpers
// ---------------------------------------------------------------------------

/**
 * Extract a single u32[] array by name from a C source file.
 * Returns a Uint8Array of the array contents in big-endian byte order.
 *
 * Handles symbolic constants (like PTR_ANIM_ENTRY_*) by resolving them
 * via the provided defines map, or substituting 0 for unresolved names.
 */
function parseU32ArrayFromC(
  source: string,
  arrayName: string,
  defines?: Map<string, number>,
): Uint8Array | null {
  const escapedName = arrayName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(
    `u32\\s+${escapedName}\\s*\\[\\]\\s*=\\s*\\{([\\s\\S]*?)\\};`,
  );
  const m = source.match(re);
  if (!m) return null;

  const body = m[1];
  const values: number[] = [];
  const tokenRe = /(?:0x[0-9a-fA-F]+|\d+|[A-Za-z_]\w*)/g;
  let tok: RegExpExecArray | null;
  while ((tok = tokenRe.exec(body)) !== null) {
    const t = tok[0];
    if (/^(?:0x[0-9a-fA-F]+|\d+)$/.test(t)) {
      values.push(Number(t) >>> 0);
    } else if (defines?.has(t)) {
      values.push(defines.get(t)! >>> 0);
    } else {
      values.push(0);
    }
  }

  const buf = new Uint8Array(values.length * 4);
  const dv = new DataView(buf.buffer);
  for (let i = 0; i < values.length; i++) {
    dv.setUint32(i * 4, values[i], false);
  }
  return buf;
}

/**
 * Extract #define values from a C header.
 * Returns a Map<name, numericValue>.
 */
function parseDefines(source: string): Map<string, number> {
  const out = new Map<string, number>();
  const re = /^#define\s+(\S+)\s+(0x[0-9a-fA-F]+|\d+)/gm;
  let m: RegExpExecArray | null;
  while ((m = re.exec(source)) !== null) {
    out.set(m[1], Number(m[2]) >>> 0);
  }
  return out;
}

// ---------------------------------------------------------------------------
// Header parsing
// ---------------------------------------------------------------------------

function readU16BE(buf: Uint8Array, off: number): number {
  return ((buf[off] << 8) | buf[off + 1]) >>> 0;
}

/**
 * Parse the ModelAnimation header from an ANIM_DATA buffer.
 * The buffer is the raw bytes of one ANIM_DATA_<name> array.
 */
export function parseAnimHeader(name: string, dataBuf: Uint8Array): AnimationHeader {
  if (dataBuf.length < 16) {
    throw new Error(`ANIM_DATA_${name} too short (${dataBuf.length} bytes)`);
  }
  const frameCount = readU16BE(dataBuf, 0x04);
  const unk06 = readU16BE(dataBuf, 0x06);
  const bitsPerComponent = (unk06 >> 8) & 0xff;
  const frameSizeBits = readU16BE(dataBuf, 0x0e);
  const bytesPerFrame = frameSizeBits >> 3;

  return { name, frameCount, bitsPerComponent, frameSizeBits, bytesPerFrame };
}

// ---------------------------------------------------------------------------
// Bitstream extraction
// ---------------------------------------------------------------------------

/**
 * Extract `width` bits starting at `bitOffset` from `buf`.
 * Returns an unsigned integer (0 to 2^width - 1).
 * Mirrors native sub_GAME_7F06DE04.
 */
function extractBits(buf: Uint8Array, bitOffset: number, width: number): number {
  let result = 0;
  for (let i = 0; i < width; i++) {
    const byteIdx = (bitOffset + i) >> 3;
    const bitIdx = 7 - ((bitOffset + i) & 7);
    if (byteIdx < buf.length) {
      result = (result << 1) | ((buf[byteIdx] >> bitIdx) & 1);
    } else {
      result = result << 1;
    }
  }
  return result >>> 0;
}

/**
 * Convert an unsigned N-bit binary angle to signed radians.
 * Native: raw * 2pi / (1 << bitsPerComponent), with values >= half-range
 * treated as negative (two's complement binary angle).
 */
function binaryAngleToRadians(raw: number, bitsPerComponent: number): number {
  const range = 1 << bitsPerComponent;
  const half = range >>> 1;
  const signed = raw >= half ? raw - range : raw;
  return (signed * 2 * Math.PI) / range;
}

// ---------------------------------------------------------------------------
// Frame decoding
// ---------------------------------------------------------------------------

/**
 * Decode all frames of an animation.
 *
 * @param header      Parsed ModelAnimation header
 * @param entryBuf    Raw bytes of the ANIM_ENTRY_<name> array (frame data)
 * @param skeleton    Array of SkeletonJoint from the model binary
 */
export function decodeAnimationFrames(
  header: AnimationHeader,
  entryBuf: Uint8Array,
  skeleton: SkeletonJoint[],
): JointRotation[][] {
  const { frameCount, bitsPerComponent, bytesPerFrame } = header;
  const frames: JointRotation[][] = [];

  for (let f = 0; f < frameCount; f++) {
    const frameByteOff = f * bytesPerFrame;
    const frameSlice = entryBuf.subarray(frameByteOff, frameByteOff + bytesPerFrame);

    const joints: JointRotation[] = [];
    for (const joint of skeleton) {
      const baseBit = joint.mtxB * bitsPerComponent;
      const rx = binaryAngleToRadians(extractBits(frameSlice, baseBit, bitsPerComponent), bitsPerComponent);
      const ry = binaryAngleToRadians(extractBits(frameSlice, baseBit + bitsPerComponent, bitsPerComponent), bitsPerComponent);
      const rz = binaryAngleToRadians(extractBits(frameSlice, baseBit + 2 * bitsPerComponent, bitsPerComponent), bitsPerComponent);
      joints.push({ rx, ry, rz });
    }
    frames.push(joints);
  }

  return frames;
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Load and parse an animation by name from the C source files.
 * Returns header + raw entry buffer (for later decoding with a skeleton).
 */
export function loadAnimation(
  repoRoot: string,
  animName: string,
): { header: AnimationHeader; entryBuf: Uint8Array } {
  const dataSource = readFileSync(
    `${repoRoot}/assets/animationtable_data.c`,
    "utf8",
  );
  // Parse PTR_ANIM_ENTRY_* defines so symbolic constants in ANIM_DATA arrays resolve
  const entryDefines = parseDefines(
    readFileSync(`${repoRoot}/assets/animationtable_entries.h`, "utf8"),
  );
  const dataBuf = parseU32ArrayFromC(dataSource, `ANIM_DATA_${animName}`, entryDefines);
  if (!dataBuf) {
    throw new Error(`Could not find ANIM_DATA_${animName} in animationtable_data.c`);
  }

  const header = parseAnimHeader(animName, dataBuf);

  const entrySource = readFileSync(
    `${repoRoot}/assets/animationtable_entries.c`,
    "utf8",
  );
  const entryBuf = parseU32ArrayFromC(entrySource, `ANIM_ENTRY_${animName}`);
  if (!entryBuf) {
    throw new Error(`Could not find ANIM_ENTRY_${animName} in animationtable_entries.c`);
  }

  const expectedSize = header.frameCount * header.bytesPerFrame;
  if (entryBuf.length < expectedSize) {
    throw new Error(
      `ANIM_ENTRY_${animName} too short: ${entryBuf.length} bytes, ` +
      `expected ${expectedSize} (${header.frameCount} frames × ${header.bytesPerFrame} bytes)`,
    );
  }

  return { header, entryBuf };
}

/**
 * Hardcoded reproduction of stage_intro_anim_table[] from bondview.c.
 * Each entry: { animName, startFrame, endFrame (-1 = play to end), speed }
 */
export const STAGE_INTRO_ANIM_TABLE = [
  { animName: "extending_left_hand",                          startFrame: 95, endFrame: -1, speed: 0.02 },
  { animName: "fire_standing_draw_one_handed_weapon_fast",    startFrame: 7,  endFrame: 40, speed: 0.5  },
  { animName: "draw_one_handed_weapon_and_look_around",       startFrame: 0,  endFrame: -1, speed: 0.5  },
  { animName: "draw_one_handed_weapon_and_stand_up",          startFrame: 0,  endFrame: -1, speed: 0.5  },
  { animName: "aim_one_handed_weapon_left_right",             startFrame: 0,  endFrame: -1, speed: 0.5  },
  { animName: "cock_one_handed_weapon_and_turn_around",       startFrame: 0,  endFrame: -1, speed: 0.5  },
  { animName: "cock_one_handed_weapon_turn_around_and_stand_up", startFrame: 0, endFrame: -1, speed: 0.5 },
  { animName: "draw_one_handed_weapon_and_turn_around",       startFrame: 0,  endFrame: -1, speed: 0.5  },
  { animName: "bond_eye_fire_alt",                            startFrame: 0,  endFrame: -1, speed: 0.5  },
];
