/**
 * parsePropBinaryModel.ts
 *
 * Parses a GoldenEye 007 prop model binary segment extracted from the ROM.
 * Each `.bin` file at `assets/obseg/prop/P<name>Z.bin` is extracted (and
 * decompressed) by `scripts/extract_baserom.u.sh` via `tools/extractor`.
 * The resulting file is the raw N64 binary segment, loaded at runtime into
 * address 0x05000000.
 *
 * ModelRoData_DisplayList_CollisionRecord layout (32 bytes, from bondtypes.h):
 *   +0x00  Gfx*    Primary              — primary GFX display list ptr
 *   +0x04  Gfx*    Secondary            — secondary GFX ptr (or 0)
 *   +0x08  Vertex* Vertices             — vertex array ptr
 *   +0x0C  s16     numVertices          — vertex count (1–128)
 *   +0x0E  s16     numCollisionVertices
 *   +0x10  Vertex* CollisionVertices    — col vertex ptr (or 0)
 *   +0x14  s16*    PointUsage           — point usage ptr (or 0)
 *   +0x18  s16     ModelType
 *   +0x1A  u16     RwDataIndex
 *   +0x1C  void*   BaseAddr
 *   Total = 32 bytes
 *
 * ModelFileTextures layout (12 bytes, from bondtypes.h):
 *   +0x00  u32  TextureID   — 0-based images.def index
 *   +0x04  u8   Width
 *   +0x05  u8   Height
 *   +0x06  u8   MipMapTiles
 *   +0x07  u8   Type
 *   +0x08  u8   RenderDepth
 *   +0x09  u8   sflags
 *   +0x0A  u8   tflags
 *   +0x0B  u8   padding
 *   Total = 12 bytes
 *
 * GFX command opcodes (matching parseBg.ts):
 *   0x04  G_VTX   load N vertices from segment-4 byte offset into 64-slot cache
 *   0xB1  TRI4    up to 4 triangles, 4-bit vertex indices
 *   0xBF  TRI1    1 triangle, v*10 indices in word1 bytes 5-7
 *   0xC0  SETTEX  GoldenEye material/texture-ID change (word1 low 16 bits = 0-based)
 *   0xB8  ENDDL   end display list
 *
 * NOTE: gsSP2Triangles is #defined as gsSP4Triangles (0xB1) via gbi_extension.h,
 * so all prop triangle commands are either 0xB1 or 0xBF.
 */

import { existsSync, readFileSync } from "node:fs";
import { inflateRawSync, inflateSync } from "node:zlib";

/** N64 segment base address for prop model segments. */
const SEGMENT_BASE = 0x05000000;
const SEGMENT_MAX  = 0x05100000; // generous upper bound
const MAX_MODEL_VERTICES = 4096;

// ─── Low-level binary helpers ────────────────────────────────────────────────

function readU32BE(buf: Uint8Array, off: number): number {
  return (
    ((buf[off] << 24) | (buf[off + 1] << 16) | (buf[off + 2] << 8) | buf[off + 3]) >>> 0
  );
}

function readI16BE(buf: Uint8Array, off: number): number {
  const v = (buf[off] << 8) | buf[off + 1];
  return v & 0x8000 ? v - 0x10000 : v;
}

function readU16BE(buf: Uint8Array, off: number): number {
  return ((buf[off] << 8) | buf[off + 1]) >>> 0;
}

function readF32BE(buf: Uint8Array, off: number): number {
  const dv = new DataView(buf.buffer, buf.byteOffset, buf.byteLength);
  return dv.getFloat32(off, false);
}

/** True when `v` looks like a valid pointer into the prop segment. */
function isSegAddr(v: number): boolean {
  return v >= SEGMENT_BASE + 4 && v < SEGMENT_MAX;
}

// ─── Binary loading ──────────────────────────────────────────────────────────

/**
 * Load a prop binary.  The extracted `.bin` files are already decompressed by
 * the extractor tool.  However, if the file starts with the legacy Rare 0x1172
 * magic bytes, fall back to zlib inflate (covers any future compressed sources).
 */
function loadPropBinary(filePath: string): Uint8Array | null {
  const raw = new Uint8Array(readFileSync(filePath));
  if (raw.length < 16) return null;

  // Check for Rare 0x1172 rzip magic — if present, inflate the payload.
  if (raw[0] === 0x11 && raw[1] === 0x72) {
    const payload = raw.subarray(2);
    const attempts: Array<() => Uint8Array> = [
      () => inflateRawSync(payload),
      () => inflateSync(payload),
    ];
    for (const fn of attempts) {
      try {
        return fn();
      } catch {
        // try next
      }
    }
    return null;
  }

  // Already decompressed — use as-is.
  return raw;
}

// ─── Vertex parsing ──────────────────────────────────────────────────────────

interface N64Vertex {
  x: number; y: number; z: number;
  u: number; v: number;
  r: number; g: number; b: number;
}

function cloneVertex(v: N64Vertex): N64Vertex {
  return {
    x: v.x, y: v.y, z: v.z,
    u: v.u, v: v.v,
    r: v.r, g: v.g, b: v.b,
  };
}

function vertexPlausibilityScore(v: N64Vertex): number {
  // Lower is better. Real GE model-space vertices are typically far smaller
  // than decode artifacts caused by reading the wrong segment source.
  return Math.max(Math.abs(v.x), Math.abs(v.y), Math.abs(v.z));
}

function readVertex(buf: Uint8Array, off: number): N64Vertex {
  return {
    x: readI16BE(buf, off),
    y: readI16BE(buf, off + 2),
    z: readI16BE(buf, off + 4),
    // bytes +6,+7 = padding / collision index — ignored
    u: readI16BE(buf, off + 8),
    v: readI16BE(buf, off + 10),
    r: buf[off + 12],
    g: buf[off + 13],
    b: buf[off + 14],
    // byte +15 = alpha
  };
}

// ─── TRI4 decoding (identical to parseBg.ts decodeTri4) ─────────────────────

function decodeTri4(w0: number, w1: number): [number, number, number][] {
  return [
    [w1 & 0xf,          (w1 >>> 4) & 0xf,  w0 & 0xf],
    [(w1 >>> 8)  & 0xf, (w1 >>> 12) & 0xf, (w0 >>> 4)  & 0xf],
    [(w1 >>> 16) & 0xf, (w1 >>> 20) & 0xf, (w0 >>> 8)  & 0xf],
    [(w1 >>> 24) & 0xf, (w1 >>> 28) & 0xf, (w0 >>> 12) & 0xf],
  ];
}

function decodeTri2ByStride(w0: number, w1: number, stride: number): [number, number, number][] {
  const t0: [number, number, number] = [
    (w0 >>> 16) & 0xff,
    (w0 >>> 8) & 0xff,
    w0 & 0xff,
  ];
  const t1: [number, number, number] = [
    (w1 >>> 16) & 0xff,
    (w1 >>> 8) & 0xff,
    w1 & 0xff,
  ];
  const asIndex = (v: number): number | null => (v % stride === 0 ? (v / stride) : null);
  const a0 = asIndex(t0[0]); const a1 = asIndex(t0[1]); const a2 = asIndex(t0[2]);
  const b0 = asIndex(t1[0]); const b1 = asIndex(t1[1]); const b2 = asIndex(t1[2]);
  const out: [number, number, number][] = [];
  if (a0 !== null && a1 !== null && a2 !== null) out.push([a0, a1, a2]);
  if (b0 !== null && b1 !== null && b2 !== null) out.push([b0, b1, b2]);
  return out;
}

function decodeTriWordByStride(word: number, stride: number): [number, number, number] | null {
  const b0 = (word >>> 16) & 0xff;
  const b1 = (word >>> 8) & 0xff;
  const b2 = word & 0xff;
  if ((b0 % stride) !== 0 || (b1 % stride) !== 0 || (b2 % stride) !== 0) return null;
  const i0 = b0 / stride;
  const i1 = b1 / stride;
  const i2 = b2 / stride;
  if (i0 < 0 || i0 >= 64 || i1 < 0 || i1 >= 64 || i2 < 0 || i2 >= 64) return null;
  return [i0, i1, i2];
}

// ─── Public types ────────────────────────────────────────────────────────────

export interface PropVertex {
  x: number; y: number; z: number;
  u: number; v: number;
  r: number; g: number; b: number;
}

export interface PropTriangle {
  /** 1-based atlas material ID (matching atlas imageN.bin naming). */
  materialId: number;
  a: PropVertex;
  b: PropVertex;
  c: PropVertex;
}

export interface PropModelGeometry {
  /** All triangles in model-local space. */
  triangles: PropTriangle[];
  /** Unique 1-based material IDs used by this model. */
  materialIds: number[];
  /** Local-space bounds from decoded geometry, used for source-accurate placement. */
  bounds: {
    min: { x: number; y: number; z: number };
    max: { x: number; y: number; z: number };
  };
  /**
   * Optional model bounding-box record (ModelRoData_BoundingBoxRecord) read from
   * header->RootNode->Child->Data. Doors in GE size against this box.
   */
  sourceBounds?: {
    min: { x: number; y: number; z: number };
    max: { x: number; y: number; z: number };
  };
}

export interface ModelJoint {
  index: number;
  parentIndex: number;
  opcode: number;
  jointId: number;
  origin: { x: number; y: number; z: number };
}

export interface ModelSwitchAnchor {
  index: number;
  nodeOpcode: number;
  accumulatedOrigin: { x: number; y: number; z: number };
}

export interface ModelGraphSwitchEntry {
  index: number;
  nodeId: number;
}

export interface ModelGraphNode {
  id: number;
  opcode: number;
  parentId: number | null;
  nextId: number | null;
  childId: number | null;
  origin?: { x: number; y: number; z: number };
  controlsNodeId?: number | null;
  affectsNodeId?: number | null;
  leftNodeId?: number | null;
  rightNodeId?: number | null;
}

export interface ModelGraphChunk {
  nodeId: number;
  triangles: PropTriangle[];
  materialIds: number[];
  bounds: {
    min: { x: number; y: number; z: number };
    max: { x: number; y: number; z: number };
  };
}

export interface ModelGraphData {
  rootNodeId: number;
  nodes: ModelGraphNode[];
  switchTable: ModelGraphSwitchEntry[];
  headPlaceholderNodeId: number | null;
  chunks: ModelGraphChunk[];
  sourceBounds?: {
    min: { x: number; y: number; z: number };
    max: { x: number; y: number; z: number };
  };
}

// ─── GFX display-list decoder ────────────────────────────────────────────────

/**
 * Decode one Gfx display list that starts at `gfxOffset` within `binary`.
 * Vertices are loaded from segment-4, which points to `vtxBinaryOffset` in `binary`.
 */
function decodeGfx(
  binary: Uint8Array,
  gfxOffset: number,
  vtxBinaryOffset: number,
  baseBinaryOffset: number | null,
  seg3PreferBase: boolean,
  preferTri2B1: boolean
): PropTriangle[] {
  const triangles: PropTriangle[] = [];
  const cache: Array<N64Vertex | null> = new Array(64).fill(null);
  let materialId = 0;

  const limit = binary.length - 8;
  let pos = gfxOffset;
  const returnStack: number[] = [];
  let iters = 0;

  while (iters < 65536) {
    if (pos < 0 || pos > limit) {
      if (returnStack.length > 0) {
        pos = returnStack.pop()!;
        continue;
      }
      break;
    }

    iters++;
    const opcode = binary[pos];
    const w0 = readU32BE(binary, pos);
    const w1 = readU32BE(binary, pos + 4);
    pos += 8;

    if (opcode === 0xb8) {
      // G_ENDDL — return from sub-DL if this was gsSPDisplayList.
      if (returnStack.length > 0) {
        pos = returnStack.pop()!;
        continue;
      }
      break;
    }

    if (opcode === 0xde) {
      // G_DL / G_BRANCHLIST
      const target = w1 & 0x00ffffff;
      if (target >= 0 && target <= limit) {
        // gbi.h: G_DL_NOPUSH = 1, G_DL_PUSH = 0 (low 8 bits of w0 parameter)
        const noPush = (w0 & 0xff) === 0x01;
        if (!noPush && returnStack.length < 128) {
          returnStack.push(pos);
        }
        pos = target;
      }
      continue;
    }

    if (opcode === 0x04 || opcode === 0x01) {
      // G_VTX — load vertices into the 64-slot RSP cache.
      let n = 0;
      let v0 = 0;
      if (opcode === 0x01) {
        // F3DEX2 encoding (gbi.h G_VTX=0x01 on some microcodes).
        n = (w0 >>> 12) & 0xff;
        const v0pn = (w0 >>> 1) & 0x7f;
        v0 = v0pn - n;
      } else {
        // F3D/F3DEX style encoding used by most GE room/prop lists.
        const packed = (w0 >>> 16) & 0xff;
        const lengthFld = w0 & 0xffff;
        n = ((packed >>> 4) & 0x0f) + 1;
        v0 = packed & 0x0f;
        if (lengthFld !== n * 16) {
          // F3DEX2 fallback.
          n = (w0 >>> 12) & 0xff;
          const v0pn = (w0 >>> 1) & 0x7f;
          v0 = v0pn - n;
        }
      }
      if (n <= 0 || n > 64 || v0 < 0 || v0 + n > 64) continue;
      // Segment-selected byte offset -> index into vertex array.
      // GE props use:
      // - seg 0x04: Vertices table
      // - seg 0x03: BaseAddr table
      const seg = (w1 >>> 24) & 0xff;
      const byteOff  = w1 & 0x00ffffff;
      const baseIdx  = Math.floor(byteOff / 16);
      for (let i = 0; i < n; i++) {
        const idx = baseIdx + i;
        const candidates: Array<number | null> = (seg === 0x03)
          ? (seg3PreferBase ? [baseBinaryOffset, vtxBinaryOffset] : [vtxBinaryOffset, baseBinaryOffset])
          : [vtxBinaryOffset];
        let loaded: N64Vertex | null = null;
        let bestScore = Number.POSITIVE_INFINITY;
        for (const srcBase of candidates) {
          if (srcBase === null) continue;
          const vOff = srcBase + idx * 16;
          if (vOff + 15 >= binary.length) continue;
          const candidateVertex = readVertex(binary, vOff);
          const score = vertexPlausibilityScore(candidateVertex);
          if (loaded === null || score < bestScore) {
            loaded = candidateVertex;
            bestScore = score;
          }
        }
        cache[v0 + i] = loaded;
      }
      continue;
    }

    if (opcode === 0xc0) {
      // G_SETTEX: GoldenEye material-change.  word1[15:0] = 0-based images.def
      // index; +1 → 1-based atlas file ID (image1.bin = index 0, image2.bin = 1…)
      materialId = (w1 & 0xffff) + 1;
      continue;
    }

    if (opcode === 0xb1) {
      // 0xB1 is GE TRI4 in many model lists, but some records use
      // standard F3D TRI2 byte/10 encoding. Detect TRI2 when all bytes
      // are /10-style indices; otherwise fall back to TRI4 nibble decode.
      const tri2Bytes = [
        (w0 >>> 16) & 0xff, (w0 >>> 8) & 0xff, w0 & 0xff,
        (w1 >>> 16) & 0xff, (w1 >>> 8) & 0xff, w1 & 0xff,
      ];
      const tri2By10 = decodeTri2ByStride(w0, w1, 10);
      // Require all six bytes to be valid /10 indices before treating as TRI2.
      // Partial matches (only one triangle decodes) are common in TRI4 streams
      // and cause missing/warped faces if misclassified.
      const validTri2By10 = tri2Bytes.every((v) => v % 10 === 0 && (v / 10) < 64)
        && tri2By10.length === 2;
      const tri2By2 = decodeTri2ByStride(w0, w1, 2);
      const validTri2By2 = tri2Bytes.every((v) => v % 2 === 0 && (v / 2) < 64)
        && tri2By2.length === 2;
      let tris: [number, number, number][];
      if (preferTri2B1) {
        tris = validTri2By10 ? tri2By10 : validTri2By2 ? tri2By2 : decodeTri4(w0, w1);
      } else {
        tris = validTri2By10 ? tri2By10 : decodeTri4(w0, w1);
      }
      for (const [i0, i1, i2] of tris) {
        if (i0 === 0 && i1 === 0 && i2 === 0) continue;
        const va = cache[i0]; const vb = cache[i1]; const vc = cache[i2];
        if (va && vb && vc) triangles.push({ materialId, a: cloneVertex(va), b: cloneVertex(vb), c: cloneVertex(vc) });
      }
      continue;
    }

    if (opcode === 0xbf) {
      // G_TRI1: single triangle, GE F3DEX — v*10 in word1 bytes.
      const i0 = ((w1 >>> 16) & 0xff) / 10;
      const i1 = ((w1 >>>  8) & 0xff) / 10;
      const i2 = (w1 & 0xff) / 10;
      if (Number.isInteger(i0) && Number.isInteger(i1) && Number.isInteger(i2)) {
        if (!(i0 === i1 && i1 === i2)) {
          const va = cache[i0]; const vb = cache[i1]; const vc = cache[i2];
          if (va && vb && vc) triangles.push({ materialId, a: cloneVertex(va), b: cloneVertex(vb), c: cloneVertex(vc) });
        }
      }
      continue;
    }

    if (opcode === 0xb5) {
      // G_QUAD: represented as two triangles (w0 + w1 triangle payload words).
      // Try byte/10 (F3D style) first, then byte/2 (F3DEX style).
      const triA10 = decodeTriWordByStride(w0, 10);
      const triB10 = decodeTriWordByStride(w1, 10);
      const triA2 = triA10 ? null : decodeTriWordByStride(w0, 2);
      const triB2 = triB10 ? null : decodeTriWordByStride(w1, 2);
      const tris: Array<[number, number, number]> = [];
      if (triA10 && triB10) {
        tris.push(triA10, triB10);
      } else {
        if (triA2) tris.push(triA2);
        if (triB2) tris.push(triB2);
      }
      for (const [i0, i1, i2] of tris) {
        if (i0 === i1 && i1 === i2) continue;
        const va = cache[i0]; const vb = cache[i1]; const vc = cache[i2];
        if (va && vb && vc) triangles.push({ materialId, a: cloneVertex(va), b: cloneVertex(vb), c: cloneVertex(vc) });
      }
      continue;
    }
    // All other commands (texture setup, geometry modes, etc.) — skip.
  }

  return triangles;
}

function translateTriangle(tri: PropTriangle, tx: number, ty: number, tz: number): PropTriangle {
  if (tx === 0 && ty === 0 && tz === 0) return tri;
  return {
    ...tri,
    a: { ...tri.a, x: tri.a.x + tx, y: tri.a.y + ty, z: tri.a.z + tz },
    b: { ...tri.b, x: tri.b.x + tx, y: tri.b.y + ty, z: tri.b.z + tz },
    c: { ...tri.c, x: tri.c.x + tx, y: tri.c.y + ty, z: tri.c.z + tz },
  };
}

// ─── DLCollisionRecord scanner ────────────────────────────────────────────────

interface DLCollisionInfo {
  primaryGfxOffset: number;
  secondaryGfxOffset: number | null;
  vtxBinaryOffset: number;
  baseBinaryOffset: number | null;
  vtxCount: number;
  sourceOpcode: number;
  tx: number;
  ty: number;
  tz: number;
}

function ptrToOffset(ptr: number, binaryLen: number): number | null {
  if (!isSegAddr(ptr)) return null;
  const off = ptr - SEGMENT_BASE;
  if (off < 0 || off >= binaryLen) return null;
  return off;
}

function countReachableNodesFromRoot(binary: Uint8Array, rootOff: number): number {
  if (rootOff < 0 || rootOff + 0x18 > binary.length) return 0;
  const stack: Array<{ nodeOff: number; allowNext: boolean }> = [{ nodeOff: rootOff, allowNext: true }];
  const seen = new Set<number>();
  let guard = 0;
  while (stack.length > 0 && guard < 250000) {
    guard += 1;
    const { nodeOff, allowNext } = stack.pop()!;
    if (nodeOff < 0 || nodeOff + 0x18 > binary.length) continue;
    if (seen.has(nodeOff)) continue;
    seen.add(nodeOff);

    const opcode = readU16BE(binary, nodeOff) & 0xff;
    const dataPtr = readU32BE(binary, nodeOff + 0x04);
    const nextPtr = readU32BE(binary, nodeOff + 0x0c);
    let childPtr = readU32BE(binary, nodeOff + 0x14);
    const dataOff = ptrToOffset(dataPtr, binary.length);

    if (dataOff !== null) {
      if (opcode === 0x08 && dataOff + 0x0c <= binary.length) {
        childPtr = readU32BE(binary, dataOff + 0x08);
      } else if (opcode === 0x12 && dataOff + 0x04 <= binary.length) {
        childPtr = readU32BE(binary, dataOff + 0x00);
      } else if (opcode === 0x09 && dataOff + 0x20 <= binary.length) {
        const leftOff = ptrToOffset(readU32BE(binary, dataOff + 0x18), binary.length);
        const rightOff = ptrToOffset(readU32BE(binary, dataOff + 0x1c), binary.length);
        if (leftOff !== null) stack.push({ nodeOff: leftOff, allowNext: true });
        if (rightOff !== null) stack.push({ nodeOff: rightOff, allowNext: true });
      }
    }

    if (opcode === 0x17) {
      // Head placeholder: runtime attaches separate head model data here.
      // Do not descend into placeholder child branches for static body decode.
      childPtr = 0;
    }
    const nextOff = ptrToOffset(nextPtr, binary.length);
    const childOff = ptrToOffset(childPtr, binary.length);
    if (allowNext && nextOff !== null) stack.push({ nodeOff: nextOff, allowNext: true });
    if (childOff !== null) stack.push({ nodeOff: childOff, allowNext: opcode !== 0x12 });
  }
  return seen.size;
}

/**
 * Walk a chr node's Parent pointer chain to reach the true scene-root node.
 * The binary[0x00] pointer for chr files lands mid-tree (e.g. on a joint);
 * the real HEADER node (opcode 0x01, null parent) is reached by following
 * Parent links upward, exactly as modelInitRwData would traverse from the top.
 */
function walkToSceneRoot(binary: Uint8Array, startOff: number): number {
  let cur = startOff;
  const visited = new Set<number>();
  while (visited.size < 500) {
    if (cur < 0 || cur + 0x18 > binary.length) break;
    if (visited.has(cur)) break;
    visited.add(cur);
    const parentPtr = readU32BE(binary, cur + 0x08);
    const parentOff = ptrToOffset(parentPtr, binary.length);
    if (parentOff === null) return cur; // null parent = this is the root
    cur = parentOff;
  }
  return cur;
}

function resolveModelRootOffset(binary: Uint8Array, allowAlternateHeaderRoots: boolean): number | null {
  if (binary.length < 0x1c) return null;

  if (allowAlternateHeaderRoots) {
    // For chr models: binary[0x00] is a pointer that lands mid-tree.
    // Walk Parent links from there to find the true HEADER root (null parent).
    const candidateHeaderOffsets = [0x00, 0x04, 0x14, 0x18];
    let bestRoot: number | null = null;
    let bestScore = -1;
    for (const hdrOff of candidateHeaderOffsets) {
      const ptr = readU32BE(binary, hdrOff);
      const startOff = ptrToOffset(ptr, binary.length);
      if (startOff === null) continue;
      const trueRoot = walkToSceneRoot(binary, startOff);
      const score = countReachableNodesFromRoot(binary, trueRoot);
      if (score > bestScore) {
        bestScore = score;
        bestRoot = trueRoot;
      }
    }
    return bestRoot;
  }

  // For non-chr models, use the existing simple approach.
  const ptr = readU32BE(binary, 0x00);
  const rootOff = ptrToOffset(ptr, binary.length);
  return rootOff;
}

/**
 * Walk model nodes from ModelFileHeader.RootNode and collect all display-list
 * payload records that carry explicit vertex tables.
 */
function collectDisplayListRecordsFromModelTree(binary: Uint8Array, allowAlternateHeaderRoots: boolean): DLCollisionInfo[] {
  const rootOff = resolveModelRootOffset(binary, allowAlternateHeaderRoots);
  if (rootOff === null) return [];

  const out: DLCollisionInfo[] = [];
  const stack: Array<{ nodeOff: number; tx: number; ty: number; tz: number; allowNext: boolean }> = [
    { nodeOff: rootOff, tx: 0, ty: 0, tz: 0, allowNext: true },
  ];
  let guard = 0;

  while (stack.length > 0 && guard < 100000) {
    guard += 1;
    const { nodeOff, tx, ty, tz, allowNext } = stack.pop()!;
    if (nodeOff < 0 || nodeOff + 24 > binary.length) continue;

    const opcode = readU16BE(binary, nodeOff) & 0xff;
    const dataPtr = readU32BE(binary, nodeOff + 4);
    const nextPtr = readU32BE(binary, nodeOff + 0x0c);
    let childPtr = readU32BE(binary, nodeOff + 0x14);

    const dataOff = ptrToOffset(dataPtr, binary.length);
    let childTx = tx;
    let childTy = ty;
    let childTz = tz;

    // Group nodes offset their child subtree by Origin.
    if ((opcode === 0x0002 || opcode === 0x0015) && dataOff !== null && dataOff + 12 <= binary.length) {
      childTx += readF32BE(binary, dataOff + 0);
      childTy += readF32BE(binary, dataOff + 4);
      childTz += readF32BE(binary, dataOff + 8);
    }

    // Runtime behavior from modelInitRwData():
    // - LOD child points at rodata->Affects.
    // - Switch child points at rodata->Controls.
    if (dataOff !== null) {
      if (opcode === 0x0008 && dataOff + 0x0c <= binary.length) {
        childPtr = readU32BE(binary, dataOff + 0x08);
      } else if (opcode === 0x0012 && dataOff + 0x04 <= binary.length) {
        childPtr = readU32BE(binary, dataOff + 0x00);
      }
    }
    const nextOff = ptrToOffset(nextPtr, binary.length);
    const childOff = ptrToOffset(childPtr, binary.length);
    if (opcode === 0x17) {
      // Head placeholder branch is populated dynamically at runtime.
      // Skip static traversal into child subtrees to avoid mixed body/head decode.
      if (allowNext && nextOff !== null) stack.push({ nodeOff: nextOff, tx, ty, tz, allowNext: true });
      continue;
    }

    if (allowNext && nextOff !== null) stack.push({ nodeOff: nextOff, tx, ty, tz, allowNext: true });
    if (childOff !== null) stack.push({ nodeOff: childOff, tx: childTx, ty: childTy, tz: childTz, allowNext: opcode !== 0x12 });

    // Runtime behavior from modelInitRwData():
    // - BSP nodes can reference left/right child branches in rodata.
    //   Include both so we don't miss sub-meshes that aren't wired through
    //   ModelNode.child directly in extracted binaries.
    if (opcode === 0x0009 && dataOff !== null && dataOff + 0x20 <= binary.length) {
      const leftPtr = readU32BE(binary, dataOff + 0x18);
      const rightPtr = readU32BE(binary, dataOff + 0x1c);
      const leftOff = ptrToOffset(leftPtr, binary.length);
      const rightOff = ptrToOffset(rightPtr, binary.length);
      if (leftOff !== null) stack.push({ nodeOff: leftOff, tx, ty, tz, allowNext: true });
      if (rightOff !== null) stack.push({ nodeOff: rightOff, tx, ty, tz, allowNext: true });
    }

    if (dataOff === null) continue;

    let rec: DLCollisionInfo | null = null;
    if (opcode === 0x0004) {
      // Opcode 4: ModelRoData_DisplayListRecord
      if (dataOff + 0x14 <= binary.length) {
        const priPtr = readU32BE(binary, dataOff + 0x00);
        const secPtr = readU32BE(binary, dataOff + 0x04);
        const basePtr = readU32BE(binary, dataOff + 0x08);
        const vtxPtr = readU32BE(binary, dataOff + 0x0c);
        const numVtx = readU16BE(binary, dataOff + 0x10);
        const priOff = ptrToOffset(priPtr, binary.length);
        const secOff = secPtr === 0 ? null : ptrToOffset(secPtr, binary.length);
        const baseOff = basePtr === 0 ? null : ptrToOffset(basePtr, binary.length);
        const vtxOff = ptrToOffset(vtxPtr, binary.length);
        if (priOff !== null && (secPtr === 0 || secOff !== null) && (basePtr === 0 || baseOff !== null) && vtxOff !== null && numVtx >= 1 && numVtx <= MAX_MODEL_VERTICES) {
          rec = {
            primaryGfxOffset: priOff,
            secondaryGfxOffset: secPtr === 0 ? null : secOff,
            vtxBinaryOffset: vtxOff,
            baseBinaryOffset: basePtr === 0 ? null : baseOff,
            vtxCount: numVtx,
            sourceOpcode: opcode,
            tx,
            ty,
            tz,
          };
        }
      }
    } else if (opcode === 0x0016) {
      // Opcode 22: ModelRoData_DisplayListPrimaryRecord
      if (dataOff + 0x10 <= binary.length) {
        const numVtx = readU32BE(binary, dataOff + 0x00);
        const vtxPtr = readU32BE(binary, dataOff + 0x04);
        const priPtr = readU32BE(binary, dataOff + 0x08);
        const priOff = ptrToOffset(priPtr, binary.length);
        const vtxOff = ptrToOffset(vtxPtr, binary.length);
        if (priOff !== null && vtxOff !== null && numVtx >= 1 && numVtx <= MAX_MODEL_VERTICES) {
          rec = {
            primaryGfxOffset: priOff,
            secondaryGfxOffset: null,
            vtxBinaryOffset: vtxOff,
            baseBinaryOffset: null,
            vtxCount: numVtx,
            sourceOpcode: opcode,
            tx,
            ty,
            tz,
          };
        }
      }
    } else if (opcode === 0x0018) {
      // Opcode 24: ModelRoData_DisplayList_CollisionRecord
      if (dataOff + 0x20 <= binary.length) {
        const priPtr = readU32BE(binary, dataOff + 0x00);
        const secPtr = readU32BE(binary, dataOff + 0x04);
        const vtxPtr = readU32BE(binary, dataOff + 0x08);
        const numVtx = readU16BE(binary, dataOff + 0x0c);
        const basePtr = readU32BE(binary, dataOff + 0x1c);
        const priOff = ptrToOffset(priPtr, binary.length);
        const secOff = secPtr === 0 ? null : ptrToOffset(secPtr, binary.length);
        const vtxOff = ptrToOffset(vtxPtr, binary.length);
        const baseOff = basePtr === 0 ? null : ptrToOffset(basePtr, binary.length);
        if (priOff !== null && (secPtr === 0 || secOff !== null) && (basePtr === 0 || baseOff !== null) && vtxOff !== null && numVtx >= 1 && numVtx <= MAX_MODEL_VERTICES) {
          rec = {
            primaryGfxOffset: priOff,
            secondaryGfxOffset: secPtr === 0 ? null : secOff,
            vtxBinaryOffset: vtxOff,
            baseBinaryOffset: basePtr === 0 ? null : baseOff,
            vtxCount: numVtx,
            sourceOpcode: opcode,
            tx,
            ty,
            tz,
          };
        }
      }
    }

    if (rec) {
      out.push(rec);
    }
  }

  return out;
}

function parseModelBoundingBox(binary: Uint8Array, allowAlternateHeaderRoots: boolean): PropModelGeometry["sourceBounds"] | null {
  const rootOff = resolveModelRootOffset(binary, allowAlternateHeaderRoots);
  if (rootOff === null) return null;

  const stack: Array<{ nodeOff: number; allowNext: boolean }> = [{ nodeOff: rootOff, allowNext: true }];
  const seen = new Set<number>();
  let guard = 0;

  while (stack.length > 0 && guard < 200000) {
    guard += 1;
    const { nodeOff, allowNext } = stack.pop()!;
    if (nodeOff < 0 || nodeOff + 0x18 > binary.length) continue;
    if (seen.has(nodeOff)) continue;
    seen.add(nodeOff);

    const opcode = readU16BE(binary, nodeOff) & 0xff;
    const dataPtr = readU32BE(binary, nodeOff + 0x04);
    const nextPtr = readU32BE(binary, nodeOff + 0x0c);
    let childPtr = readU32BE(binary, nodeOff + 0x14);
    const dataOff = ptrToOffset(dataPtr, binary.length);

    if (opcode === 0x0a && dataOff !== null && dataOff + 0x1c <= binary.length) {
      const xmin = readF32BE(binary, dataOff + 0x04);
      const xmax = readF32BE(binary, dataOff + 0x08);
      const ymin = readF32BE(binary, dataOff + 0x0c);
      const ymax = readF32BE(binary, dataOff + 0x10);
      const zmin = readF32BE(binary, dataOff + 0x14);
      const zmax = readF32BE(binary, dataOff + 0x18);
      if ([xmin, xmax, ymin, ymax, zmin, zmax].every((v) => Number.isFinite(v))) {
        return {
          min: { x: xmin, y: ymin, z: zmin },
          max: { x: xmax, y: ymax, z: zmax },
        };
      }
    }

    if (dataOff !== null) {
      if (opcode === 0x08 && dataOff + 0x0c <= binary.length) {
        childPtr = readU32BE(binary, dataOff + 0x08);
      } else if (opcode === 0x12 && dataOff + 0x04 <= binary.length) {
        childPtr = readU32BE(binary, dataOff + 0x00);
      } else if (opcode === 0x09 && dataOff + 0x20 <= binary.length) {
        const leftPtr = readU32BE(binary, dataOff + 0x18);
        const rightPtr = readU32BE(binary, dataOff + 0x1c);
        const leftOff = ptrToOffset(leftPtr, binary.length);
        const rightOff = ptrToOffset(rightPtr, binary.length);
        if (leftOff !== null) stack.push({ nodeOff: leftOff, allowNext: true });
        if (rightOff !== null) stack.push({ nodeOff: rightOff, allowNext: true });
      }
    }

    if (opcode === 0x17) {
      childPtr = 0;
    }
    const nextOff = ptrToOffset(nextPtr, binary.length);
    const childOff = ptrToOffset(childPtr, binary.length);
    if (allowNext && nextOff !== null) stack.push({ nodeOff: nextOff, allowNext: true });
    if (childOff !== null) stack.push({ nodeOff: childOff, allowNext: opcode !== 0x12 });
  }

  return null;
}

/**
 * Scan the binary for ModelRoData_DisplayList_CollisionRecord structures.
 * A valid record matches:
 *   [+0x00] primary GFX ptr   in segment range
 *   [+0x04] secondary GFX ptr in segment range OR == 0
 *   [+0x08] vertex array ptr  in segment range
 *   [+0x0C] numVertices (s16) in [1, MAX_MODEL_VERTICES]
 *   [+0x0E] numColVtx  (s16)  in [0, MAX_MODEL_VERTICES]
 */
function scanDLCollisionRecords(binary: Uint8Array): DLCollisionInfo[] {
  const records: DLCollisionInfo[] = [];
  const seen = new Set<number>();

  for (let off = 0; off + 32 <= binary.length; off += 4) {
    const priPtr = readU32BE(binary, off);
    if (!isSegAddr(priPtr)) continue;

    const secPtr = readU32BE(binary, off + 4);
    if (secPtr !== 0 && !isSegAddr(secPtr)) continue;

    const vtxPtr = readU32BE(binary, off + 8);
    if (!isSegAddr(vtxPtr)) continue;

    // numVertices and numCollisionVertices are s16 packed at +0xC and +0xE
    const numVtx    = readI16BE(binary, off + 0x0C);
    const numColVtx = readI16BE(binary, off + 0x0E);
    if (numVtx < 1 || numVtx > MAX_MODEL_VERTICES) continue;
    if (numColVtx < 0 || numColVtx > MAX_MODEL_VERTICES) continue;

    // Validate that pointed-to GFX + vertex offsets are within binary bounds
    const priOff = priPtr - SEGMENT_BASE;
    const vtxOff = vtxPtr - SEGMENT_BASE;
    if (priOff < 0 || priOff + 8 > binary.length) continue;
    if (vtxOff < 0 || vtxOff + numVtx * 16 > binary.length) continue;

    // The GFX array should start with a recognizable opcode
    const firstOpcode = binary[priOff];
    const knownOpcodes = new Set([
      0x01, 0x04, 0xb1, 0xbf, 0xb8, 0xc0,
      0xe7, 0xf0, 0xf3, 0xf5, 0xfa, 0xfc, 0xfd, 0xfe, // DP commands
      0xba, 0xbb, 0xbc, 0xb9, 0xbe,                    // SP state commands
    ]);
    if (!knownOpcodes.has(firstOpcode)) continue;

    if (seen.has(off)) continue;
    seen.add(off);

    records.push({
      primaryGfxOffset:   priOff,
      secondaryGfxOffset: secPtr !== 0 ? secPtr - SEGMENT_BASE : null,
      vtxBinaryOffset:    vtxOff,
      baseBinaryOffset:   (() => {
        const basePtr = readU32BE(binary, off + 0x1c);
        return basePtr !== 0 && isSegAddr(basePtr) ? (basePtr - SEGMENT_BASE) : null;
      })(),
      vtxCount:           numVtx,
      sourceOpcode: 0,
      tx: 0,
      ty: 0,
      tz: 0,
    });
  }

  return records;
}

/**
 * Scan for ModelRoData_DisplayListRecord (opcode 4) payloads.
 * Layout (20 bytes):
 *   +0x00 primary GFX ptr
 *   +0x04 secondary GFX ptr (optional)
 *   +0x08 base addr (typically 0x05000000)
 *   +0x0C vertex ptr
 *   +0x10 u16 numVertices
 *   +0x12 s8 modelType (0..4)
 */
function scanDisplayListRecords(binary: Uint8Array): DLCollisionInfo[] {
  const records: DLCollisionInfo[] = [];
  const seen = new Set<string>();

  for (let off = 0; off + 20 <= binary.length; off += 4) {
    const priPtr = readU32BE(binary, off);
    if (!isSegAddr(priPtr)) continue;

    const secPtr = readU32BE(binary, off + 4);
    if (secPtr !== 0 && !isSegAddr(secPtr)) continue;

    const basePtr = readU32BE(binary, off + 8);
    if (basePtr !== 0 && !isSegAddr(basePtr)) continue;

    const vtxPtr = readU32BE(binary, off + 0x0c);
    if (!isSegAddr(vtxPtr)) continue;

    const numVtx = readU16BE(binary, off + 0x10);
    if (numVtx < 1 || numVtx > MAX_MODEL_VERTICES) continue;

    const modelType = binary[off + 0x12];
    if (modelType > 4) continue;

    const priOff = priPtr - SEGMENT_BASE;
    const vtxOff = vtxPtr - SEGMENT_BASE;
    if (priOff < 0 || priOff + 8 > binary.length) continue;
    if (vtxOff < 0 || vtxOff + numVtx * 16 > binary.length) continue;

    const firstOpcode = binary[priOff];
    const knownOpcodes = new Set([
      0x01, 0x04, 0xb1, 0xbf, 0xb8, 0xc0,
      0xe7, 0xf0, 0xf3, 0xf5, 0xfa, 0xfc, 0xfd, 0xfe,
      0xba, 0xbb, 0xbc, 0xb9, 0xbe,
    ]);
    if (!knownOpcodes.has(firstOpcode)) continue;

    const key = `${priOff}:${vtxOff}`;
    if (seen.has(key)) continue;
    seen.add(key);
    records.push({
      primaryGfxOffset: priOff,
      secondaryGfxOffset: secPtr !== 0 ? secPtr - SEGMENT_BASE : null,
      vtxBinaryOffset: vtxOff,
      baseBinaryOffset: basePtr !== 0 ? basePtr - SEGMENT_BASE : null,
      vtxCount: numVtx,
      sourceOpcode: 0,
      tx: 0,
      ty: 0,
      tz: 0,
    });
  }

  return records;
}

function computeTriangleBounds(triangles: PropTriangle[]): {
  min: { x: number; y: number; z: number };
  max: { x: number; y: number; z: number };
} {
  let minX = Number.POSITIVE_INFINITY;
  let minY = Number.POSITIVE_INFINITY;
  let minZ = Number.POSITIVE_INFINITY;
  let maxX = Number.NEGATIVE_INFINITY;
  let maxY = Number.NEGATIVE_INFINITY;
  let maxZ = Number.NEGATIVE_INFINITY;
  for (const tri of triangles) {
    for (const v of [tri.a, tri.b, tri.c]) {
      if (v.x < minX) minX = v.x;
      if (v.y < minY) minY = v.y;
      if (v.z < minZ) minZ = v.z;
      if (v.x > maxX) maxX = v.x;
      if (v.y > maxY) maxY = v.y;
      if (v.z > maxZ) maxZ = v.z;
    }
  }
  return {
    min: { x: minX, y: minY, z: minZ },
    max: { x: maxX, y: maxY, z: maxZ },
  };
}

function filterChrTrianglesBySourceBounds(
  triangles: PropTriangle[],
  sourceBounds: PropModelGeometry["sourceBounds"]
): PropTriangle[] {
  if (!sourceBounds || triangles.length === 0) return triangles;
  const cx = (sourceBounds.min.x + sourceBounds.max.x) * 0.5;
  const cy = (sourceBounds.min.y + sourceBounds.max.y) * 0.5;
  const cz = (sourceBounds.min.z + sourceBounds.max.z) * 0.5;
  const ex = (sourceBounds.max.x - sourceBounds.min.x) * 0.5;
  const ey = (sourceBounds.max.y - sourceBounds.min.y) * 0.5;
  const ez = (sourceBounds.max.z - sourceBounds.min.z) * 0.5;
  const margin = 10.0;
  let filtered = triangles.filter((tri) => {
    const within = (x: number, y: number, z: number): boolean =>
      Math.abs(x - cx) <= ex * margin
      && Math.abs(y - cy) <= ey * margin
      && Math.abs(z - cz) <= ez * margin;
    return within(tri.a.x, tri.a.y, tri.a.z)
      && within(tri.b.x, tri.b.y, tri.b.z)
      && within(tri.c.x, tri.c.y, tri.c.z);
  });
  if (filtered.length === 0) filtered = triangles;

  const mags: number[] = [];
  for (const tri of filtered) {
    for (const v of [tri.a, tri.b, tri.c]) {
      mags.push(Math.max(Math.abs(v.x), Math.abs(v.y), Math.abs(v.z)));
    }
  }
  if (mags.length === 0) return filtered;
  mags.sort((a, b) => a - b);
  const p = Math.max(0, Math.min(mags.length - 1, Math.floor(mags.length * 0.99)));
  const spikeThreshold = mags[p] * 1.15;
  const deSpiked = filtered.filter((tri) => {
    const ok = (v: PropVertex): boolean =>
      Math.max(Math.abs(v.x), Math.abs(v.y), Math.abs(v.z)) <= spikeThreshold;
    return ok(tri.a) && ok(tri.b) && ok(tri.c);
  });
  return deSpiked.length > 0 ? deSpiked : filtered;
}

/**
 * Per-chunk spike filter for joint-local geometry in the graph model pipeline.
 *
 * `filterChrTrianglesBySourceBounds` uses model-space sourceBounds against
 * joint-local vertex coordinates — wrong coordinate frame.  When the joint
 * origin is, say, (-95, -107, 0) from the hip, the joint-local vertex
 * magnitudes are small (e.g. ~115 for a thigh centred near that pivot) but
 * distal-end vertices at the knee can have magnitudes of ~400+.  Using 99th
 * percentile × 1.15 would set the threshold at ~133, incorrectly culling the
 * entire knee-end of the limb and causing the "pieces don't fit" gap at every
 * joint boundary.
 *
 * This filter instead uses a lenient multiple of the MEDIAN magnitude so only
 * true outlier spikes (decode garbage) are removed while all valid geometry
 * extending along the bone axis is preserved.
 */
function filterChunkByMagnitude(triangles: PropTriangle[], maxMultiple: number): PropTriangle[] {
  if (triangles.length === 0) return triangles;
  const mags: number[] = [];
  for (const t of triangles) {
    for (const v of [t.a, t.b, t.c]) {
      mags.push(Math.max(Math.abs(v.x), Math.abs(v.y), Math.abs(v.z)));
    }
  }
  mags.sort((a, b) => a - b);
  const median = mags[Math.floor(mags.length / 2)];
  if (!(median > 0)) return triangles;
  const threshold = median * maxMultiple;
  const filtered = triangles.filter((t) => {
    for (const v of [t.a, t.b, t.c]) {
      if (Math.max(Math.abs(v.x), Math.abs(v.y), Math.abs(v.z)) > threshold) return false;
    }
    return true;
  });
  return filtered.length > 0 ? filtered : triangles;
}

// ─── Main export ─────────────────────────────────────────────────────────────

/**
 * Parse a prop model binary file extracted from the GoldenEye ROM.
 * Returns decoded geometry or `null` if the file is missing or unparseable.
 */
export function parsePropModel(binPath: string): PropModelGeometry | null {
  if (!existsSync(binPath)) return null;

  const binary = loadPropBinary(binPath);
  if (!binary) return null;

  const isChrModel = /[\\/]+chr[\\/]+/i.test(binPath);
  const sourceBounds = parseModelBoundingBox(binary, isChrModel) ?? undefined;
  const treeRecords = collectDisplayListRecordsFromModelTree(binary, isChrModel);
  const dlRecords: DLCollisionInfo[] = [];
  const seenKeys = new Set<string>();
  const seenPrimary = new Set<number>();

  // Tree traversal is authoritative when available (correct node + transform).
  for (const rec of treeRecords) {
    const key = `${rec.primaryGfxOffset}:${rec.secondaryGfxOffset ?? -1}:${rec.vtxBinaryOffset}:${rec.baseBinaryOffset ?? -1}:${rec.tx}:${rec.ty}:${rec.tz}`;
    if (seenKeys.has(key)) continue;
    seenKeys.add(key);
    seenPrimary.add(rec.primaryGfxOffset);
    dlRecords.push(rec);
  }

  // Fallback scans are only used when tree traversal yields nothing.
  // For complex models (plane/tank), scan matches can include non-node records
  // that decode into huge invalid spike meshes. Source traversal is authoritative.
  if (treeRecords.length === 0) {
    for (const rec of [...scanDLCollisionRecords(binary), ...scanDisplayListRecords(binary)]) {
      if (seenPrimary.has(rec.primaryGfxOffset)) continue;
      const key = `${rec.primaryGfxOffset}:${rec.secondaryGfxOffset ?? -1}:${rec.vtxBinaryOffset}:${rec.baseBinaryOffset ?? -1}:0:0:0`;
      if (seenKeys.has(key)) continue;
      seenKeys.add(key);
      dlRecords.push(rec);
    }
  }
  if (dlRecords.length === 0) return null;

  let allTriangles: PropTriangle[] = [];
  const materialIdSet = new Set<number>();
  // Segment-3 vertex loads in chr binaries can point at either BaseAddr or
  // the main Vertices table depending on record. Prefer Vertices by default;
  // BaseAddr-first decoding produces large outlier spike meshes for Bond body.
  const seg3PreferBase = false;
  const preferTri2B1 = /[\\/]+chr[\\/]+/i.test(binPath);

  for (const rec of dlRecords) {
    const priTris = decodeGfx(binary, rec.primaryGfxOffset, rec.vtxBinaryOffset, rec.baseBinaryOffset, seg3PreferBase, preferTri2B1);
    for (const t of priTris) {
      // Apply static group-origin translation accumulated from the model tree.
      // Dynamic joint animation is still handled at runtime.
      allTriangles.push(translateTriangle(t, rec.tx, rec.ty, rec.tz));
      if (t.materialId > 0) materialIdSet.add(t.materialId);
    }

    if (rec.secondaryGfxOffset !== null) {
      const secTris = decodeGfx(binary, rec.secondaryGfxOffset, rec.vtxBinaryOffset, rec.baseBinaryOffset, seg3PreferBase, preferTri2B1);
      for (const t of secTris) {
        allTriangles.push(translateTriangle(t, rec.tx, rec.ty, rec.tz));
        if (t.materialId > 0) materialIdSet.add(t.materialId);
      }
    }
  }

  if (allTriangles.length === 0) return null;

  if (isChrModel && sourceBounds) {
    allTriangles = filterChrTrianglesBySourceBounds(allTriangles, sourceBounds);
  }
  const bounds = computeTriangleBounds(allTriangles);

  return {
    triangles:   allTriangles,
    materialIds: [...materialIdSet].sort((a, b) => a - b),
    bounds,
    sourceBounds,
  };
}

interface PendingGraphNode {
  id: number;
  nodeOff: number;
  opcode: number;
  parentId: number | null;
  origin?: { x: number; y: number; z: number };
  nextOff: number | null;
  childOff: number | null;
  controlsOff?: number | null;
  affectsOff?: number | null;
  leftOff?: number | null;
  rightOff?: number | null;
}

export function parseModelGraph(binPath: string): ModelGraphData | null {
  if (!existsSync(binPath)) return null;
  const binary = loadPropBinary(binPath);
  if (!binary) return null;

  const isChrModel = /[\\/]+chr[\\/]+/i.test(binPath);
  const sourceBounds = parseModelBoundingBox(binary, isChrModel) ?? undefined;
  const rootOff = resolveModelRootOffset(binary, isChrModel);
  if (rootOff === null) {
    const fallback = parsePropModel(binPath);
    if (!fallback) return null;
    return {
      rootNodeId: 0,
      nodes: [{ id: 0, opcode: 0x18, parentId: null, nextId: null, childId: null }],
      switchTable: [],
      headPlaceholderNodeId: null,
      chunks: [{
        nodeId: 0,
        triangles: fallback.triangles,
        materialIds: fallback.materialIds,
        bounds: fallback.bounds,
      }],
      sourceBounds: fallback.sourceBounds,
    };
  }

  // -------------------------------------------------------------------------
  // Phase 1: Collect every reachable node offset using a DFS that respects
  // LOD/SWITCH child-pointer overrides (reads from rodata) and follows both
  // child and next-sibling chains.  Uses a visited set to handle any cycles.
  // -------------------------------------------------------------------------
  const reachableOffsets: number[] = [];
  const visitedOffsets = new Set<number>();
  const dfsStack: number[] = [rootOff];
  let guard = 0;
  while (dfsStack.length > 0 && guard < 400000) {
    guard += 1;
    const off = dfsStack.pop()!;
    if (off < 0 || off + 0x18 > binary.length) continue;
    if (visitedOffsets.has(off)) continue;
    visitedOffsets.add(off);
    reachableOffsets.push(off);

    const opcode = readU16BE(binary, off) & 0xff;
    const dataPtr = readU32BE(binary, off + 0x04);
    const nextPtr = readU32BE(binary, off + 0x0c);
    let childPtr = readU32BE(binary, off + 0x14);
    const dataOff = ptrToOffset(dataPtr, binary.length);

    // Override childPtr for LOD and SWITCH nodes — the effective child pointer
    // comes from their rodata (Affects / Controls), not the binary node field,
    // since modelCalculateRwDataIndexes patches node->Child at runtime.
    if (dataOff !== null) {
      if (opcode === 0x08 && dataOff + 0x0c <= binary.length) {
        childPtr = readU32BE(binary, dataOff + 0x08); // LOD.Affects
      } else if (opcode === 0x12 && dataOff + 0x04 <= binary.length) {
        childPtr = readU32BE(binary, dataOff + 0x00); // SWITCH.Controls
      } else if (opcode === 0x09 && dataOff + 0x20 <= binary.length) {
        // BSP: push both left/right children
        const leftPtr = readU32BE(binary, dataOff + 0x18);
        const rightPtr = readU32BE(binary, dataOff + 0x1c);
        const leftOff = ptrToOffset(leftPtr, binary.length);
        const rightOff = ptrToOffset(rightPtr, binary.length);
        if (leftOff !== null) dfsStack.push(leftOff);
        if (rightOff !== null) dfsStack.push(rightOff);
      }
    }

    // HEAD placeholder: do NOT descend into child (head model attached at runtime)
    const effectiveChildPtr = opcode === 0x17 ? null : childPtr;

    const nextOff = ptrToOffset(nextPtr, binary.length);
    const childOff = ptrToOffset(effectiveChildPtr ?? 0, binary.length);
    if (nextOff !== null) dfsStack.push(nextOff);
    if (childOff !== null) dfsStack.push(childOff);
  }

  // -------------------------------------------------------------------------
  // Phase 2: Assign sequential IDs and build node definitions.
  // Use the BINARY's Parent/Next pointers to determine relationships —
  // not traversal order.  Each GROUP's Origin is its LOCAL rest-position
  // (parent-space), exactly as process_02_position uses it to compute
  // render_pos[MatrixID0] = parent_matrix * local_matrix(origin).
  // -------------------------------------------------------------------------
  const nodeIdByOff = new Map<number, number>();
  for (let i = 0; i < reachableOffsets.length; i += 1) {
    nodeIdByOff.set(reachableOffsets[i], i);
  }

  const resolveId = (ptr: number): number | null => {
    const off = ptrToOffset(ptr, binary.length);
    if (off === null) return null;
    return nodeIdByOff.get(off) ?? null;
  };

  const nodes: ModelGraphNode[] = [];
  const chunks: ModelGraphChunk[] = [];

  for (const nodeOff of reachableOffsets) {
    const id = nodeIdByOff.get(nodeOff)!;
    const opcode = readU16BE(binary, nodeOff) & 0xff;
    const dataPtr = readU32BE(binary, nodeOff + 0x04);
    const parentPtr = readU32BE(binary, nodeOff + 0x08);
    const nextPtr = readU32BE(binary, nodeOff + 0x0c);
    let childPtr = readU32BE(binary, nodeOff + 0x14);
    const dataOff = ptrToOffset(dataPtr, binary.length);

    // Use binary Parent pointer for authoritative parentId
    const parentId = resolveId(parentPtr);
    const nextId = resolveId(nextPtr);

    let origin: { x: number; y: number; z: number } | undefined;
    let controlsNodeId: number | null = null;
    let affectsNodeId: number | null = null;
    let leftNodeId: number | null = null;
    let rightNodeId: number | null = null;

    if (dataOff !== null) {
      if (opcode === 0x02 || opcode === 0x15) {
        // GROUP / GROUPSIMPLE: Origin is at data[0x00..0x0B] (3×f32 local pivot)
        if (dataOff + 0x0c <= binary.length) {
          origin = {
            x: readF32BE(binary, dataOff + 0x00),
            y: readF32BE(binary, dataOff + 0x04),
            z: readF32BE(binary, dataOff + 0x08),
          };
        }
      } else if (opcode === 0x08 && dataOff + 0x0c <= binary.length) {
        // LOD: effective child comes from rodata->Affects
        const affectsPtr = readU32BE(binary, dataOff + 0x08);
        childPtr = affectsPtr;
        affectsNodeId = resolveId(affectsPtr);
      } else if (opcode === 0x12 && dataOff + 0x04 <= binary.length) {
        // SWITCH: effective child comes from rodata->Controls
        const controlsPtr = readU32BE(binary, dataOff + 0x00);
        childPtr = controlsPtr;
        controlsNodeId = resolveId(controlsPtr);
      } else if (opcode === 0x09 && dataOff + 0x20 <= binary.length) {
        leftNodeId = resolveId(readU32BE(binary, dataOff + 0x18));
        rightNodeId = resolveId(readU32BE(binary, dataOff + 0x1c));
      }
    }

    // HEAD placeholder: child is null at rest (attached at runtime by modelAttachHead)
    const childId = opcode === 0x17 ? null : resolveId(childPtr);

    nodes.push({
      id,
      opcode,
      parentId,
      nextId,
      childId,
      origin,
      controlsNodeId,
      affectsNodeId,
      leftNodeId: leftNodeId ?? undefined,
      rightNodeId: rightNodeId ?? undefined,
    } as ModelGraphNode);

    // Collect geometry from DL / DLPRIMARY / DLCOLLISION nodes
    const pushChunk = (trianglesRaw: PropTriangle[]): void => {
      let triangles = trianglesRaw;
      if (isChrModel && triangles.length > 0) {
        // Use per-chunk median-based filter: removes only true outlier spikes
        // (decode garbage), preserving valid distal-end geometry at joint
        // boundaries.  filterChrTrianglesBySourceBounds is intentionally NOT
        // used here because it compares joint-local vertices against model-space
        // sourceBounds, causing it to cull the knee/elbow ends of every limb.
        triangles = filterChunkByMagnitude(triangles, 8.0);
      }
      if (triangles.length === 0) return;
      const materialSet = new Set<number>();
      for (const t of triangles) if (t.materialId > 0) materialSet.add(t.materialId);
      chunks.push({
        nodeId: id,
        triangles,
        materialIds: [...materialSet].sort((a, b) => a - b),
        bounds: computeTriangleBounds(triangles),
      });
    };

    if (dataOff !== null) {
      if (opcode === 0x04 && dataOff + 0x14 <= binary.length) {
        const priOff = ptrToOffset(readU32BE(binary, dataOff + 0x00), binary.length);
        const secPtr = readU32BE(binary, dataOff + 0x04);
        const secOff = secPtr === 0 ? null : ptrToOffset(secPtr, binary.length);
        const baseOff = ptrToOffset(readU32BE(binary, dataOff + 0x08), binary.length);
        const vtxOff = ptrToOffset(readU32BE(binary, dataOff + 0x0c), binary.length);
        const numVtx = readU16BE(binary, dataOff + 0x10);
        if (priOff !== null && vtxOff !== null && numVtx >= 1 && numVtx <= MAX_MODEL_VERTICES) {
          pushChunk(decodeGfx(binary, priOff, vtxOff, baseOff, false, isChrModel));
          if (secOff !== null) pushChunk(decodeGfx(binary, secOff, vtxOff, baseOff, false, isChrModel));
        }
      } else if (opcode === 0x16 && dataOff + 0x10 <= binary.length) {
        const numVtx = readU32BE(binary, dataOff + 0x00);
        const vtxOff = ptrToOffset(readU32BE(binary, dataOff + 0x04), binary.length);
        const priOff = ptrToOffset(readU32BE(binary, dataOff + 0x08), binary.length);
        if (priOff !== null && vtxOff !== null && numVtx >= 1 && numVtx <= MAX_MODEL_VERTICES) {
          pushChunk(decodeGfx(binary, priOff, vtxOff, null, false, isChrModel));
        }
      } else if (opcode === 0x18 && dataOff + 0x20 <= binary.length) {
        const priOff = ptrToOffset(readU32BE(binary, dataOff + 0x00), binary.length);
        const secPtr = readU32BE(binary, dataOff + 0x04);
        const secOff = secPtr === 0 ? null : ptrToOffset(secPtr, binary.length);
        const vtxOff = ptrToOffset(readU32BE(binary, dataOff + 0x08), binary.length);
        const numVtx = readU16BE(binary, dataOff + 0x0c);
        const baseOff = ptrToOffset(readU32BE(binary, dataOff + 0x1c), binary.length);
        if (priOff !== null && vtxOff !== null && numVtx >= 1 && numVtx <= MAX_MODEL_VERTICES) {
          pushChunk(decodeGfx(binary, priOff, vtxOff, baseOff, false, isChrModel));
          if (secOff !== null) pushChunk(decodeGfx(binary, secOff, vtxOff, baseOff, false, isChrModel));
        }
      }
    }
  }

  // -------------------------------------------------------------------------
  // Switch table: the ModelFileHeader.Switches array lives in ROM code (not in
  // the chr binary), so we cannot read it from binary[0x00]+0x08.  Instead,
  // scan the collected nodes for SWITCH nodes (opcode 0x12) and emit them in
  // discovery order.  The runtime uses controlsNodeId directly, not the index.
  // -------------------------------------------------------------------------
  const switchTable: ModelGraphSwitchEntry[] = [];
  for (const n of nodes) {
    if (n.opcode === 0x12 && n.controlsNodeId !== null && n.controlsNodeId !== undefined) {
      switchTable.push({ index: switchTable.length, nodeId: n.id });
    }
  }

  const headPlaceholderNode = nodes.find((n) => n.opcode === 0x17) ?? null;
  const rootNodeId = nodeIdByOff.get(rootOff);
  if (rootNodeId === undefined) return null;

  return {
    rootNodeId,
    nodes,
    switchTable,
    headPlaceholderNodeId: headPlaceholderNode ? headPlaceholderNode.id : null,
    chunks,
    sourceBounds,
  };
}

/**
 * Build the canonical path for a prop binary given the repo root and model name.
 * Convention: `assets/obseg/prop/P<name>Z.bin`
 */
export function propBinPath(repoRoot: string, modelName: string): string {
  return `${repoRoot}/assets/obseg/prop/P${modelName}Z.bin`;
}

export function parseModelJoints(filePath: string): ModelJoint[] {
  if (!existsSync(filePath)) return [];
  const binary = loadPropBinary(filePath);
  if (!binary || binary.length < 8) return [];
  const allowAlternateHeaderRoots = /[\\/]+chr[\\/]+/i.test(filePath);
  const rootOff = resolveModelRootOffset(binary, allowAlternateHeaderRoots);
  if (rootOff === null) return [];

  const joints: ModelJoint[] = [];
  const stack: Array<{ nodeOff: number; parentJoint: number; allowNext: boolean }> = [{ nodeOff: rootOff, parentJoint: -1, allowNext: true }];
  const seen = new Set<number>();
  let guard = 0;

  while (stack.length > 0 && guard < 200000) {
    guard += 1;
    const { nodeOff, parentJoint, allowNext } = stack.pop()!;
    if (nodeOff < 0 || nodeOff + 0x18 > binary.length) continue;
    if (seen.has(nodeOff)) continue;
    seen.add(nodeOff);

    const opcode = readU16BE(binary, nodeOff) & 0xff;
    const dataPtr = readU32BE(binary, nodeOff + 0x04);
    const nextPtr = readU32BE(binary, nodeOff + 0x0c);
    let childPtr = readU32BE(binary, nodeOff + 0x14);
    const dataOff = ptrToOffset(dataPtr, binary.length);

    let currentParent = parentJoint;
    if ((opcode === 0x0002 || opcode === 0x0015) && dataOff !== null && dataOff + 0x14 <= binary.length) {
      const idx = joints.length;
      joints.push({
        index: idx,
        parentIndex: parentJoint,
        opcode,
        jointId: opcode === 0x0002 ? readU16BE(binary, dataOff + 0x0c) : -1,
        origin: {
          x: readF32BE(binary, dataOff + 0),
          y: readF32BE(binary, dataOff + 4),
          z: readF32BE(binary, dataOff + 8),
        },
      });
      currentParent = idx;
    }

    if (dataOff !== null) {
      if (opcode === 0x0008 && dataOff + 0x0c <= binary.length) {
        childPtr = readU32BE(binary, dataOff + 0x08);
      } else if (opcode === 0x0012 && dataOff + 0x04 <= binary.length) {
        childPtr = readU32BE(binary, dataOff + 0x00);
      } else if (opcode === 0x0009 && dataOff + 0x20 <= binary.length) {
        const leftPtr = readU32BE(binary, dataOff + 0x18);
        const rightPtr = readU32BE(binary, dataOff + 0x1c);
        const leftOff = ptrToOffset(leftPtr, binary.length);
        const rightOff = ptrToOffset(rightPtr, binary.length);
        if (leftOff !== null) stack.push({ nodeOff: leftOff, parentJoint: currentParent, allowNext: true });
        if (rightOff !== null) stack.push({ nodeOff: rightOff, parentJoint: currentParent, allowNext: true });
      }
    }

    if (opcode === 0x17) {
      childPtr = 0;
    }
    const nextOff = ptrToOffset(nextPtr, binary.length);
    const childOff = ptrToOffset(childPtr, binary.length);
    if (allowNext && nextOff !== null) stack.push({ nodeOff: nextOff, parentJoint, allowNext: true });
    if (childOff !== null) stack.push({ nodeOff: childOff, parentJoint: currentParent, allowNext: opcode !== 0x12 });
  }

  return joints;
}

export function parseModelSwitchAnchors(filePath: string): ModelSwitchAnchor[] {
  if (!existsSync(filePath)) return [];
  const binary = loadPropBinary(filePath);
  if (!binary || binary.length < 0x10) return [];

  // Many chr binaries begin with a pointer to the actual ModelFileHeader.
  // Resolve switches from header->Switches when possible; fall back to legacy
  // direct offset parsing for non-chr/legacy layouts.
  let switchesOff: number | null = null;
  let headerNumSwitches: number | null = null;
  const headerPtr = readU32BE(binary, 0x00);
  const headerOff = ptrToOffset(headerPtr, binary.length);
  if (headerOff !== null && headerOff + 0x10 <= binary.length) {
    const swPtr = readU32BE(binary, headerOff + 0x08);
    const swOff = ptrToOffset(swPtr, binary.length);
    if (swOff !== null) {
      switchesOff = swOff;
      headerNumSwitches = readU16BE(binary, headerOff + 0x0c);
    }
  }
  if (switchesOff === null) {
    const switchesPtr = readU32BE(binary, 0x08);
    switchesOff = ptrToOffset(switchesPtr, binary.length);
  }
  if (switchesOff === null) return [];

  const anchors: ModelSwitchAnchor[] = [];
  // Prefer explicit header count when sane; otherwise scan with invalid-streak
  // fallback for legacy binaries where count is unreliable.
  const maxScan = (headerNumSwitches !== null && headerNumSwitches > 0 && headerNumSwitches <= 1024)
    ? headerNumSwitches
    : 512;
  let invalidStreak = 0;
  for (let i = 0; i < maxScan; i += 1) {
    const ptrOff = switchesOff + i * 4;
    if (ptrOff + 4 > binary.length) break;
    const nodePtr = readU32BE(binary, ptrOff);
    const nodeOff = ptrToOffset(nodePtr, binary.length);
    if (nodeOff === null || nodeOff + 0x18 > binary.length) {
      invalidStreak += 1;
      if (invalidStreak >= 16 && i > 24) break;
      continue;
    }
    const nodeOpcode = readU16BE(binary, nodeOff) & 0xff;
    if (nodeOpcode > 0x0018) {
      invalidStreak += 1;
      if (invalidStreak >= 16 && i > 24) break;
      continue;
    }
    invalidStreak = 0;

    const accum = { x: 0, y: 0, z: 0 };
    const seen = new Set<number>();
    let walkOff: number | null = nodeOff;
    let guard = 0;
    while (walkOff !== null && guard < 512) {
      guard += 1;
      if (seen.has(walkOff)) break;
      seen.add(walkOff);
      if (walkOff + 0x18 > binary.length) break;
      const op = readU16BE(binary, walkOff) & 0xff;
      const dataPtr = readU32BE(binary, walkOff + 0x04);
      const dataOff = ptrToOffset(dataPtr, binary.length);
      if ((op === 0x0002 || op === 0x0015) && dataOff !== null && dataOff + 0x0c <= binary.length) {
        accum.x += readF32BE(binary, dataOff + 0);
        accum.y += readF32BE(binary, dataOff + 4);
        accum.z += readF32BE(binary, dataOff + 8);
      }
      const parentPtr = readU32BE(binary, walkOff + 0x08);
      walkOff = ptrToOffset(parentPtr, binary.length);
    }

    anchors.push({
      index: i,
      nodeOpcode,
      accumulatedOrigin: accum,
    });
  }
  return anchors;
}
