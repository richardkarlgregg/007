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
// ─── GFX display-list decoder ────────────────────────────────────────────────
/**
 * Decode one Gfx display list that starts at `gfxOffset` within `binary`.
 * Vertices are loaded from segment-4, which points to `vtxBinaryOffset` in `binary`.
 */
function decodeGfx(binary, gfxOffset, vtxBinaryOffset) {
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
        if (opcode === 0x04) {
            // G_VTX — load vertices into the 64-slot RSP cache.
            // parseBg.ts uses the F3DEX2 fallback path when `length !== n*16`.
            // For prop models this path is always used.
            const packed = (w0 >>> 16) & 0xff;
            const lengthFld = w0 & 0xffff;
            let n = ((packed >>> 4) & 0x0f) + 1;
            let v0 = packed & 0x0f;
            if (lengthFld !== n * 16) {
                // F3DEX2 encoding
                n = (w0 >>> 12) & 0xff;
                const v0pn = (w0 >>> 1) & 0x7f;
                v0 = v0pn - n;
            }
            // Segment-4 byte offset → index into vertex array
            const byteOff = w1 & 0x00ffffff;
            const baseIdx = Math.floor(byteOff / 16);
            for (let i = 0; i < n; i++) {
                const vOff = vtxBinaryOffset + (baseIdx + i) * 16;
                cache[v0 + i] = (vOff + 15 < binary.length) ? readVertex(binary, vOff) : null;
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
            // GE TRI4: up to 4 triangles with 4-bit vertex indices.
            for (const [i0, i1, i2] of decodeTri4(w0, w1)) {
                if (i0 === 0 && i1 === 0 && i2 === 0)
                    continue;
                const va = cache[i0];
                const vb = cache[i1];
                const vc = cache[i2];
                if (va && vb && vc)
                    triangles.push({ materialId, a: va, b: vb, c: vc });
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
                        triangles.push({ materialId, a: va, b: vb, c: vc });
                }
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
    const seenNodes = new Set();
    const seenRecords = new Set();
    const stack = [rootOff];
    while (stack.length > 0) {
        const nodeOff = stack.pop();
        if (seenNodes.has(nodeOff))
            continue;
        seenNodes.add(nodeOff);
        if (nodeOff < 0 || nodeOff + 24 > binary.length)
            continue;
        const opcode = readU16BE(binary, nodeOff);
        const dataPtr = readU32BE(binary, nodeOff + 4);
        const nextPtr = readU32BE(binary, nodeOff + 0x0c);
        const childPtr = readU32BE(binary, nodeOff + 0x14);
        const nextOff = ptrToOffset(nextPtr, binary.length);
        const childOff = ptrToOffset(childPtr, binary.length);
        if (nextOff !== null)
            stack.push(nextOff);
        if (childOff !== null)
            stack.push(childOff);
        const dataOff = ptrToOffset(dataPtr, binary.length);
        if (dataOff === null)
            continue;
        let rec = null;
        if (opcode === 0x0004) {
            // Opcode 4: ModelRoData_DisplayListRecord
            if (dataOff + 0x14 <= binary.length) {
                const priPtr = readU32BE(binary, dataOff + 0x00);
                const secPtr = readU32BE(binary, dataOff + 0x04);
                const vtxPtr = readU32BE(binary, dataOff + 0x0c);
                const numVtx = readU16BE(binary, dataOff + 0x10);
                const priOff = ptrToOffset(priPtr, binary.length);
                const secOff = secPtr === 0 ? null : ptrToOffset(secPtr, binary.length);
                const vtxOff = ptrToOffset(vtxPtr, binary.length);
                if (priOff !== null && (secPtr === 0 || secOff !== null) && vtxOff !== null && numVtx >= 1 && numVtx <= 255) {
                    rec = {
                        primaryGfxOffset: priOff,
                        secondaryGfxOffset: secPtr === 0 ? null : secOff,
                        vtxBinaryOffset: vtxOff,
                        vtxCount: numVtx,
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
                if (priOff !== null && vtxOff !== null && numVtx >= 1 && numVtx <= 255) {
                    rec = {
                        primaryGfxOffset: priOff,
                        secondaryGfxOffset: null,
                        vtxBinaryOffset: vtxOff,
                        vtxCount: numVtx,
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
                const priOff = ptrToOffset(priPtr, binary.length);
                const secOff = secPtr === 0 ? null : ptrToOffset(secPtr, binary.length);
                const vtxOff = ptrToOffset(vtxPtr, binary.length);
                if (priOff !== null && (secPtr === 0 || secOff !== null) && vtxOff !== null && numVtx >= 1 && numVtx <= 255) {
                    rec = {
                        primaryGfxOffset: priOff,
                        secondaryGfxOffset: secPtr === 0 ? null : secOff,
                        vtxBinaryOffset: vtxOff,
                        vtxCount: numVtx,
                    };
                }
            }
        }
        if (rec) {
            const key = `${rec.primaryGfxOffset}:${rec.secondaryGfxOffset ?? -1}:${rec.vtxBinaryOffset}`;
            if (!seenRecords.has(key)) {
                seenRecords.add(key);
                out.push(rec);
            }
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
 *   [+0x0C] numVertices (s16) in [1, 128]
 *   [+0x0E] numColVtx  (s16)  in [0, 128]
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
        if (numVtx < 1 || numVtx > 128)
            continue;
        if (numColVtx < 0 || numColVtx > 128)
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
            0x04, 0xb1, 0xbf, 0xb8, 0xc0,
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
            vtxCount: numVtx,
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
        if (numVtx < 1 || numVtx > 255)
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
            0x04, 0xb1, 0xbf, 0xb8, 0xc0,
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
            vtxCount: numVtx,
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
    const dedup = new Map();
    for (const rec of [
        ...collectDisplayListRecordsFromModelTree(binary),
        ...scanDLCollisionRecords(binary),
        ...scanDisplayListRecords(binary),
    ]) {
        const key = `${rec.primaryGfxOffset}:${rec.secondaryGfxOffset ?? -1}:${rec.vtxBinaryOffset}`;
        if (!dedup.has(key))
            dedup.set(key, rec);
    }
    const dlRecords = [...dedup.values()];
    if (dlRecords.length === 0)
        return null;
    const allTriangles = [];
    const materialIdSet = new Set();
    for (const rec of dlRecords) {
        const priTris = decodeGfx(binary, rec.primaryGfxOffset, rec.vtxBinaryOffset);
        for (const t of priTris) {
            allTriangles.push(t);
            if (t.materialId > 0)
                materialIdSet.add(t.materialId);
        }
        if (rec.secondaryGfxOffset !== null) {
            const secTris = decodeGfx(binary, rec.secondaryGfxOffset, rec.vtxBinaryOffset);
            for (const t of secTris) {
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
