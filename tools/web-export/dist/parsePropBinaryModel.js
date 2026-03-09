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
const SEGMENT_MAX = 0x05100000; // generous upper bound
const MAX_MODEL_VERTICES = 4096;
// ─── Low-level binary helpers ────────────────────────────────────────────────
function readU32BE(buf, off) {
    return (((buf[off] << 24) | (buf[off + 1] << 16) | (buf[off + 2] << 8) | buf[off + 3]) >>> 0);
}
function readI16BE(buf, off) {
    const v = (buf[off] << 8) | buf[off + 1];
    return v & 0x8000 ? v - 0x10000 : v;
}
function readU16BE(buf, off) {
    return ((buf[off] << 8) | buf[off + 1]) >>> 0;
}
function readF32BE(buf, off) {
    const dv = new DataView(buf.buffer, buf.byteOffset, buf.byteLength);
    return dv.getFloat32(off, false);
}
/** True when `v` looks like a valid pointer into the prop segment. */
function isSegAddr(v) {
    return v >= SEGMENT_BASE + 4 && v < SEGMENT_MAX;
}
// ─── Binary loading ──────────────────────────────────────────────────────────
/**
 * Load a prop binary.  The extracted `.bin` files are already decompressed by
 * the extractor tool.  However, if the file starts with the legacy Rare 0x1172
 * magic bytes, fall back to zlib inflate (covers any future compressed sources).
 */
function loadPropBinary(filePath) {
    const raw = new Uint8Array(readFileSync(filePath));
    if (raw.length < 16)
        return null;
    // Check for Rare 0x1172 rzip magic — if present, inflate the payload.
    if (raw[0] === 0x11 && raw[1] === 0x72) {
        const payload = raw.subarray(2);
        const attempts = [
            () => inflateRawSync(payload),
            () => inflateSync(payload),
        ];
        for (const fn of attempts) {
            try {
                return fn();
            }
            catch {
                // try next
            }
        }
        return null;
    }
    // Already decompressed — use as-is.
    return raw;
}
function cloneVertex(v) {
    return {
        x: v.x, y: v.y, z: v.z,
        u: v.u, v: v.v,
        r: v.r, g: v.g, b: v.b,
    };
}
function readVertex(buf, off) {
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
function decodeTri4(w0, w1) {
    return [
        [w1 & 0xf, (w1 >>> 4) & 0xf, w0 & 0xf],
        [(w1 >>> 8) & 0xf, (w1 >>> 12) & 0xf, (w0 >>> 4) & 0xf],
        [(w1 >>> 16) & 0xf, (w1 >>> 20) & 0xf, (w0 >>> 8) & 0xf],
        [(w1 >>> 24) & 0xf, (w1 >>> 28) & 0xf, (w0 >>> 12) & 0xf],
    ];
}
function decodeTri2ByStride(w0, w1, stride) {
    const t0 = [
        (w0 >>> 16) & 0xff,
        (w0 >>> 8) & 0xff,
        w0 & 0xff,
    ];
    const t1 = [
        (w1 >>> 16) & 0xff,
        (w1 >>> 8) & 0xff,
        w1 & 0xff,
    ];
    const asIndex = (v) => (v % stride === 0 ? (v / stride) : null);
    const a0 = asIndex(t0[0]);
    const a1 = asIndex(t0[1]);
    const a2 = asIndex(t0[2]);
    const b0 = asIndex(t1[0]);
    const b1 = asIndex(t1[1]);
    const b2 = asIndex(t1[2]);
    const out = [];
    if (a0 !== null && a1 !== null && a2 !== null)
        out.push([a0, a1, a2]);
    if (b0 !== null && b1 !== null && b2 !== null)
        out.push([b0, b1, b2]);
    return out;
}
function decodeTriWordByStride(word, stride) {
    const b0 = (word >>> 16) & 0xff;
    const b1 = (word >>> 8) & 0xff;
    const b2 = word & 0xff;
    if ((b0 % stride) !== 0 || (b1 % stride) !== 0 || (b2 % stride) !== 0)
        return null;
    const i0 = b0 / stride;
    const i1 = b1 / stride;
    const i2 = b2 / stride;
    if (i0 < 0 || i0 >= 64 || i1 < 0 || i1 >= 64 || i2 < 0 || i2 >= 64)
        return null;
    return [i0, i1, i2];
}
// ─── GFX display-list decoder ────────────────────────────────────────────────
/**
 * Decode one Gfx display list that starts at `gfxOffset` within `binary`.
 * Vertices are loaded from segment-4, which points to `vtxBinaryOffset` in `binary`.
 */
function decodeGfx(binary, gfxOffset, vtxBinaryOffset, baseBinaryOffset) {
    const triangles = [];
    const cache = new Array(64).fill(null);
    let materialId = 0;
    const limit = binary.length - 8;
    let pos = gfxOffset;
    const returnStack = [];
    let iters = 0;
    while (iters < 65536) {
        if (pos < 0 || pos > limit) {
            if (returnStack.length > 0) {
                pos = returnStack.pop();
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
                pos = returnStack.pop();
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
            }
            else {
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
            if (n <= 0 || n > 64 || v0 < 0 || v0 + n > 64)
                continue;
            // Segment-selected byte offset -> index into vertex array.
            // GE props use:
            // - seg 0x04: Vertices table
            // - seg 0x03: BaseAddr table
            const seg = (w1 >>> 24) & 0xff;
            const byteOff = w1 & 0x00ffffff;
            const baseIdx = Math.floor(byteOff / 16);
            for (let i = 0; i < n; i++) {
                const idx = baseIdx + i;
                const candidates = (seg === 0x03)
                    ? [baseBinaryOffset, vtxBinaryOffset] // seg3 can be BaseAddr; fallback keeps legacy models alive
                    : [vtxBinaryOffset];
                let loaded = null;
                for (const srcBase of candidates) {
                    if (srcBase === null)
                        continue;
                    const vOff = srcBase + idx * 16;
                    if (vOff + 15 >= binary.length)
                        continue;
                    loaded = readVertex(binary, vOff);
                    break;
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
            const tris = validTri2By10 ? tri2By10 : decodeTri4(w0, w1);
            for (const [i0, i1, i2] of tris) {
                if (i0 === 0 && i1 === 0 && i2 === 0)
                    continue;
                const va = cache[i0];
                const vb = cache[i1];
                const vc = cache[i2];
                if (va && vb && vc)
                    triangles.push({ materialId, a: cloneVertex(va), b: cloneVertex(vb), c: cloneVertex(vc) });
            }
            continue;
        }
        if (opcode === 0xbf) {
            // G_TRI1: single triangle, GE F3DEX — v*10 in word1 bytes.
            const i0 = ((w1 >>> 16) & 0xff) / 10;
            const i1 = ((w1 >>> 8) & 0xff) / 10;
            const i2 = (w1 & 0xff) / 10;
            if (Number.isInteger(i0) && Number.isInteger(i1) && Number.isInteger(i2)) {
                if (!(i0 === i1 && i1 === i2)) {
                    const va = cache[i0];
                    const vb = cache[i1];
                    const vc = cache[i2];
                    if (va && vb && vc)
                        triangles.push({ materialId, a: cloneVertex(va), b: cloneVertex(vb), c: cloneVertex(vc) });
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
            const tris = [];
            if (triA10 && triB10) {
                tris.push(triA10, triB10);
            }
            else {
                if (triA2)
                    tris.push(triA2);
                if (triB2)
                    tris.push(triB2);
            }
            for (const [i0, i1, i2] of tris) {
                if (i0 === i1 && i1 === i2)
                    continue;
                const va = cache[i0];
                const vb = cache[i1];
                const vc = cache[i2];
                if (va && vb && vc)
                    triangles.push({ materialId, a: cloneVertex(va), b: cloneVertex(vb), c: cloneVertex(vc) });
            }
            continue;
        }
        // All other commands (texture setup, geometry modes, etc.) — skip.
    }
    return triangles;
}
function ptrToOffset(ptr, binaryLen) {
    if (!isSegAddr(ptr))
        return null;
    const off = ptr - SEGMENT_BASE;
    if (off < 0 || off >= binaryLen)
        return null;
    return off;
}
/**
 * Walk model nodes from ModelFileHeader.RootNode and collect all display-list
 * payload records that carry explicit vertex tables.
 */
function collectDisplayListRecordsFromModelTree(binary) {
    if (binary.length < 4)
        return [];
    const rootPtr = readU32BE(binary, 0);
    const rootOff = ptrToOffset(rootPtr, binary.length);
    if (rootOff === null)
        return [];
    const out = [];
    const stack = [
        { nodeOff: rootOff, tx: 0, ty: 0, tz: 0 },
    ];
    let guard = 0;
    while (stack.length > 0 && guard < 100000) {
        guard += 1;
        const { nodeOff, tx, ty, tz } = stack.pop();
        if (nodeOff < 0 || nodeOff + 24 > binary.length)
            continue;
        const opcode = readU16BE(binary, nodeOff);
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
            }
            else if (opcode === 0x0012 && dataOff + 0x04 <= binary.length) {
                childPtr = readU32BE(binary, dataOff + 0x00);
            }
        }
        const nextOff = ptrToOffset(nextPtr, binary.length);
        const childOff = ptrToOffset(childPtr, binary.length);
        if (nextOff !== null)
            stack.push({ nodeOff: nextOff, tx, ty, tz });
        if (childOff !== null)
            stack.push({ nodeOff: childOff, tx: childTx, ty: childTy, tz: childTz });
        // Runtime behavior from modelInitRwData():
        // - BSP nodes can reference left/right child branches in rodata.
        //   Include both so we don't miss sub-meshes that aren't wired through
        //   ModelNode.child directly in extracted binaries.
        if (opcode === 0x0009 && dataOff !== null && dataOff + 0x20 <= binary.length) {
            const leftPtr = readU32BE(binary, dataOff + 0x18);
            const rightPtr = readU32BE(binary, dataOff + 0x1c);
            const leftOff = ptrToOffset(leftPtr, binary.length);
            const rightOff = ptrToOffset(rightPtr, binary.length);
            if (leftOff !== null)
                stack.push({ nodeOff: leftOff, tx, ty, tz });
            if (rightOff !== null)
                stack.push({ nodeOff: rightOff, tx, ty, tz });
        }
        if (dataOff === null)
            continue;
        let rec = null;
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
        }
        else if (opcode === 0x0016) {
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
        }
        else if (opcode === 0x0018) {
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
function parseModelBoundingBox(binary) {
    if (binary.length < 4)
        return null;
    const rootPtr = readU32BE(binary, 0);
    if (!isSegAddr(rootPtr))
        return null;
    const rootOff = rootPtr - SEGMENT_BASE;
    if (rootOff < 0 || rootOff + 0x18 > binary.length)
        return null;
    const childPtr = readU32BE(binary, rootOff + 0x14);
    if (!isSegAddr(childPtr))
        return null;
    const childOff = childPtr - SEGMENT_BASE;
    if (childOff < 0 || childOff + 0x18 > binary.length)
        return null;
    const opcode = readU16BE(binary, childOff);
    // ModelRoData_BoundingBoxRecord = opcode 10 (0x0A)
    if (opcode !== 0x000a)
        return null;
    const dataPtr = readU32BE(binary, childOff + 0x04);
    if (!isSegAddr(dataPtr))
        return null;
    const dataOff = dataPtr - SEGMENT_BASE;
    if (dataOff < 0 || dataOff + 0x1c > binary.length)
        return null;
    const xmin = readF32BE(binary, dataOff + 0x04);
    const xmax = readF32BE(binary, dataOff + 0x08);
    const ymin = readF32BE(binary, dataOff + 0x0c);
    const ymax = readF32BE(binary, dataOff + 0x10);
    const zmin = readF32BE(binary, dataOff + 0x14);
    const zmax = readF32BE(binary, dataOff + 0x18);
    if (![xmin, xmax, ymin, ymax, zmin, zmax].every((v) => Number.isFinite(v)))
        return null;
    return {
        min: { x: xmin, y: ymin, z: zmin },
        max: { x: xmax, y: ymax, z: zmax },
    };
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
function scanDLCollisionRecords(binary) {
    const records = [];
    const seen = new Set();
    for (let off = 0; off + 32 <= binary.length; off += 4) {
        const priPtr = readU32BE(binary, off);
        if (!isSegAddr(priPtr))
            continue;
        const secPtr = readU32BE(binary, off + 4);
        if (secPtr !== 0 && !isSegAddr(secPtr))
            continue;
        const vtxPtr = readU32BE(binary, off + 8);
        if (!isSegAddr(vtxPtr))
            continue;
        // numVertices and numCollisionVertices are s16 packed at +0xC and +0xE
        const numVtx = readI16BE(binary, off + 0x0C);
        const numColVtx = readI16BE(binary, off + 0x0E);
        if (numVtx < 1 || numVtx > MAX_MODEL_VERTICES)
            continue;
        if (numColVtx < 0 || numColVtx > MAX_MODEL_VERTICES)
            continue;
        // Validate that pointed-to GFX + vertex offsets are within binary bounds
        const priOff = priPtr - SEGMENT_BASE;
        const vtxOff = vtxPtr - SEGMENT_BASE;
        if (priOff < 0 || priOff + 8 > binary.length)
            continue;
        if (vtxOff < 0 || vtxOff + numVtx * 16 > binary.length)
            continue;
        // The GFX array should start with a recognizable opcode
        const firstOpcode = binary[priOff];
        const knownOpcodes = new Set([
            0x01, 0x04, 0xb1, 0xbf, 0xb8, 0xc0,
            0xe7, 0xf0, 0xf3, 0xf5, 0xfa, 0xfc, 0xfd, 0xfe, // DP commands
            0xba, 0xbb, 0xbc, 0xb9, 0xbe, // SP state commands
        ]);
        if (!knownOpcodes.has(firstOpcode))
            continue;
        if (seen.has(off))
            continue;
        seen.add(off);
        records.push({
            primaryGfxOffset: priOff,
            secondaryGfxOffset: secPtr !== 0 ? secPtr - SEGMENT_BASE : null,
            vtxBinaryOffset: vtxOff,
            baseBinaryOffset: (() => {
                const basePtr = readU32BE(binary, off + 0x1c);
                return basePtr !== 0 && isSegAddr(basePtr) ? (basePtr - SEGMENT_BASE) : null;
            })(),
            vtxCount: numVtx,
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
function scanDisplayListRecords(binary) {
    const records = [];
    const seen = new Set();
    for (let off = 0; off + 20 <= binary.length; off += 4) {
        const priPtr = readU32BE(binary, off);
        if (!isSegAddr(priPtr))
            continue;
        const secPtr = readU32BE(binary, off + 4);
        if (secPtr !== 0 && !isSegAddr(secPtr))
            continue;
        const basePtr = readU32BE(binary, off + 8);
        if (basePtr !== 0 && !isSegAddr(basePtr))
            continue;
        const vtxPtr = readU32BE(binary, off + 0x0c);
        if (!isSegAddr(vtxPtr))
            continue;
        const numVtx = readU16BE(binary, off + 0x10);
        if (numVtx < 1 || numVtx > MAX_MODEL_VERTICES)
            continue;
        const modelType = binary[off + 0x12];
        if (modelType > 4)
            continue;
        const priOff = priPtr - SEGMENT_BASE;
        const vtxOff = vtxPtr - SEGMENT_BASE;
        if (priOff < 0 || priOff + 8 > binary.length)
            continue;
        if (vtxOff < 0 || vtxOff + numVtx * 16 > binary.length)
            continue;
        const firstOpcode = binary[priOff];
        const knownOpcodes = new Set([
            0x01, 0x04, 0xb1, 0xbf, 0xb8, 0xc0,
            0xe7, 0xf0, 0xf3, 0xf5, 0xfa, 0xfc, 0xfd, 0xfe,
            0xba, 0xbb, 0xbc, 0xb9, 0xbe,
        ]);
        if (!knownOpcodes.has(firstOpcode))
            continue;
        const key = `${priOff}:${vtxOff}`;
        if (seen.has(key))
            continue;
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
// ─── Main export ─────────────────────────────────────────────────────────────
/**
 * Parse a prop model binary file extracted from the GoldenEye ROM.
 * Returns decoded geometry or `null` if the file is missing or unparseable.
 */
export function parsePropModel(binPath) {
    if (!existsSync(binPath))
        return null;
    const binary = loadPropBinary(binPath);
    if (!binary)
        return null;
    const treeRecords = collectDisplayListRecordsFromModelTree(binary);
    const dlRecords = [];
    const seenKeys = new Set();
    const seenPrimary = new Set();
    // Tree traversal is authoritative when available (correct node + transform).
    for (const rec of treeRecords) {
        const key = `${rec.primaryGfxOffset}:${rec.secondaryGfxOffset ?? -1}:${rec.vtxBinaryOffset}:${rec.baseBinaryOffset ?? -1}:${rec.tx}:${rec.ty}:${rec.tz}`;
        if (seenKeys.has(key))
            continue;
        seenKeys.add(key);
        seenPrimary.add(rec.primaryGfxOffset);
        dlRecords.push(rec);
    }
    // Fallback scans are only used when tree traversal yields nothing.
    // For complex models (plane/tank), scan matches can include non-node records
    // that decode into huge invalid spike meshes. Source traversal is authoritative.
    if (treeRecords.length === 0) {
        for (const rec of [...scanDLCollisionRecords(binary), ...scanDisplayListRecords(binary)]) {
            if (seenPrimary.has(rec.primaryGfxOffset))
                continue;
            const key = `${rec.primaryGfxOffset}:${rec.secondaryGfxOffset ?? -1}:${rec.vtxBinaryOffset}:${rec.baseBinaryOffset ?? -1}:0:0:0`;
            if (seenKeys.has(key))
                continue;
            seenKeys.add(key);
            dlRecords.push(rec);
        }
    }
    if (dlRecords.length === 0)
        return null;
    const allTriangles = [];
    const materialIdSet = new Set();
    for (const rec of dlRecords) {
        const priTris = decodeGfx(binary, rec.primaryGfxOffset, rec.vtxBinaryOffset, rec.baseBinaryOffset);
        for (const t of priTris) {
            if ((rec.sourceOpcode === 0x0004 || rec.sourceOpcode === 0x0016 || rec.sourceOpcode === 0x0018) && (rec.tx !== 0 || rec.ty !== 0 || rec.tz !== 0)) {
                t.a.x += rec.tx;
                t.a.y += rec.ty;
                t.a.z += rec.tz;
                t.b.x += rec.tx;
                t.b.y += rec.ty;
                t.b.z += rec.tz;
                t.c.x += rec.tx;
                t.c.y += rec.ty;
                t.c.z += rec.tz;
            }
            allTriangles.push(t);
            if (t.materialId > 0)
                materialIdSet.add(t.materialId);
        }
        if (rec.secondaryGfxOffset !== null) {
            const secTris = decodeGfx(binary, rec.secondaryGfxOffset, rec.vtxBinaryOffset, rec.baseBinaryOffset);
            for (const t of secTris) {
                if ((rec.sourceOpcode === 0x0004 || rec.sourceOpcode === 0x0016 || rec.sourceOpcode === 0x0018) && (rec.tx !== 0 || rec.ty !== 0 || rec.tz !== 0)) {
                    t.a.x += rec.tx;
                    t.a.y += rec.ty;
                    t.a.z += rec.tz;
                    t.b.x += rec.tx;
                    t.b.y += rec.ty;
                    t.b.z += rec.tz;
                    t.c.x += rec.tx;
                    t.c.y += rec.ty;
                    t.c.z += rec.tz;
                }
                allTriangles.push(t);
                if (t.materialId > 0)
                    materialIdSet.add(t.materialId);
            }
        }
    }
    if (allTriangles.length === 0)
        return null;
    let minX = Number.POSITIVE_INFINITY;
    let minY = Number.POSITIVE_INFINITY;
    let minZ = Number.POSITIVE_INFINITY;
    let maxX = Number.NEGATIVE_INFINITY;
    let maxY = Number.NEGATIVE_INFINITY;
    let maxZ = Number.NEGATIVE_INFINITY;
    for (const tri of allTriangles) {
        for (const v of [tri.a, tri.b, tri.c]) {
            if (v.x < minX)
                minX = v.x;
            if (v.y < minY)
                minY = v.y;
            if (v.z < minZ)
                minZ = v.z;
            if (v.x > maxX)
                maxX = v.x;
            if (v.y > maxY)
                maxY = v.y;
            if (v.z > maxZ)
                maxZ = v.z;
        }
    }
    const sourceBounds = parseModelBoundingBox(binary) ?? undefined;
    return {
        triangles: allTriangles,
        materialIds: [...materialIdSet].sort((a, b) => a - b),
        bounds: {
            min: { x: minX, y: minY, z: minZ },
            max: { x: maxX, y: maxY, z: maxZ },
        },
        sourceBounds,
    };
}
/**
 * Build the canonical path for a prop binary given the repo root and model name.
 * Convention: `assets/obseg/prop/P<name>Z.bin`
 */
export function propBinPath(repoRoot, modelName) {
    return `${repoRoot}/assets/obseg/prop/P${modelName}Z.bin`;
}
