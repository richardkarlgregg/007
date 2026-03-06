import { readFileSync } from "node:fs";
import { inflateRawSync, inflateSync } from "node:zlib";
function parseIntAuto(input) {
    const value = input.trim();
    if (/^0x/i.test(value)) {
        return Number.parseInt(value.replace(/^0x/i, ""), 16);
    }
    return Number.parseInt(value, 10);
}
function parseFloatNumber(input) {
    return Number.parseFloat(input.trim());
}
function parseU32Arrays(source) {
    const arrays = new Map();
    const regex = /u32\s+([A-Za-z0-9_]+)\[\]\s*=\s*\{([\s\S]*?)\n[ \t]*\};/g;
    let match = null;
    while ((match = regex.exec(source)) !== null) {
        const name = match[1];
        const body = match[2];
        const tokens = body.match(/0x[0-9a-fA-F]+/g) ?? [];
        const bytes = new Uint8Array(tokens.length * 4);
        for (let i = 0; i < tokens.length; i += 1) {
            const value = Number.parseInt(tokens[i], 16) >>> 0;
            const offset = i * 4;
            bytes[offset] = (value >>> 24) & 0xff;
            bytes[offset + 1] = (value >>> 16) & 0xff;
            bytes[offset + 2] = (value >>> 8) & 0xff;
            bytes[offset + 3] = value & 0xff;
        }
        arrays.set(name, bytes);
    }
    return arrays;
}
function decompressRzipLike(data) {
    if (data.length < 3) {
        return null;
    }
    const payload = data.slice(2);
    const attempts = [
        () => inflateRawSync(payload),
        () => inflateSync(payload),
        () => inflateRawSync(data),
        () => inflateSync(data)
    ];
    for (const attempt of attempts) {
        try {
            return attempt();
        }
        catch {
            // Keep trying alternate wrappers.
        }
    }
    return null;
}
function readI16BE(data, offset) {
    const value = (data[offset] << 8) | data[offset + 1];
    return value & 0x8000 ? value - 0x10000 : value;
}
function parseVertexTable(data) {
    const vertices = [];
    for (let offset = 0; offset + 15 < data.length; offset += 16) {
        vertices.push({
            x: readI16BE(data, offset),
            y: readI16BE(data, offset + 2),
            z: readI16BE(data, offset + 4),
            // N64 vertex texture coordinates are signed 10.5 fixed-point.
            u: readI16BE(data, offset + 8),
            v: readI16BE(data, offset + 10),
            // N64 vertex colour (bytes 12–14).  Used for SHADE * TEXEL combining.
            r: data[offset + 12],
            g: data[offset + 13],
            b: data[offset + 14]
        });
    }
    return vertices;
}
function parseRoomDataRefs(source) {
    const tableMatch = source.match(/struct\s+room_data_table_entry\s+room_data_table\[\]\s*=\s*\{([\s\S]*?)\n\};/);
    if (!tableMatch) {
        throw new Error("Could not find room_data_table");
    }
    const refs = [];
    const entryRegex = /\{\s*([^,]+)\s*,\s*([^,]+)\s*,\s*([^,]+)\s*,\s*(-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)\s*\}/g;
    let match = null;
    let roomIndex = 0;
    while ((match = entryRegex.exec(tableMatch[1])) !== null) {
        const pointRaw = match[1].trim();
        const priRaw = match[2].trim();
        const secRaw = match[3].trim();
        const pointArrayName = pointRaw === "0" ? null : pointRaw.replace(/^&/, "");
        const priArrayName = priRaw === "0" ? null : priRaw.replace(/^&/, "");
        const secArrayName = secRaw === "0" ? null : secRaw.replace(/^&/, "");
        refs.push({
            roomIndex,
            pointArrayName,
            priArrayName,
            secArrayName,
            center: {
                x: parseFloatNumber(match[4]),
                y: parseFloatNumber(match[5]),
                z: parseFloatNumber(match[6])
            }
        });
        roomIndex += 1;
    }
    return refs;
}
function decodeTri4(triWord0, triWord1) {
    const tri1 = [triWord1 & 0xf, (triWord1 >>> 4) & 0xf, triWord0 & 0xf];
    const tri2 = [(triWord1 >>> 8) & 0xf, (triWord1 >>> 12) & 0xf, (triWord0 >>> 4) & 0xf];
    const tri3 = [(triWord1 >>> 16) & 0xf, (triWord1 >>> 20) & 0xf, (triWord0 >>> 8) & 0xf];
    const tri4 = [(triWord1 >>> 24) & 0xf, (triWord1 >>> 28) & 0xf, (triWord0 >>> 12) & 0xf];
    return [tri1, tri2, tri3, tri4];
}
function pushTriangle(triangles, room, materialId, isSecondary, a, b, c) {
    triangles.push({
        roomIndex: room.roomIndex,
        materialId,
        isSecondary,
        a: { x: a.x + room.center.x, y: a.y + room.center.y, z: a.z + room.center.z },
        b: { x: b.x + room.center.x, y: b.y + room.center.y, z: b.z + room.center.z },
        c: { x: c.x + room.center.x, y: c.y + room.center.y, z: c.z + room.center.z },
        uvA: { u: a.u, v: a.v },
        uvB: { u: b.u, v: b.v },
        uvC: { u: c.u, v: c.v },
        colA: { r: a.r, g: a.g, b: a.b },
        colB: { r: b.r, g: b.g, b: b.b },
        colC: { r: c.r, g: c.g, b: c.b }
    });
}
function decodeRoomTrianglesFromMapping(room, mappingCompressed, arrays, isSecondary) {
    if (!room.pointArrayName) {
        return [];
    }
    const pointCompressed = arrays.get(room.pointArrayName);
    if (!pointCompressed) {
        return [];
    }
    const vertexBuffer = decompressRzipLike(pointCompressed);
    const mappingBuffer = decompressRzipLike(mappingCompressed);
    if (!vertexBuffer || !mappingBuffer) {
        return [];
    }
    const vertices = parseVertexTable(vertexBuffer);
    const cache = new Array(64).fill(null);
    const triangles = [];
    let currentMaterialId = 0;
    // Some display lists start with geometry rendered in environment-colour
    // (no-texture) mode before any material command.  These are atmospheric/fog
    // meshes that should not carry a texture in the viewer.  Track the current
    // G_SETCOMBINE state and skip triangle emission while in no-texture mode.
    // The no-texture combine is identified by the lower 3 bytes of word0 all
    // being 0xFF (pattern: 0xFC FF FF FF).
    let isNoTexMode = false;
    for (let offset = 0; offset + 7 < mappingBuffer.length; offset += 8) {
        const word0 = (mappingBuffer[offset] << 24) |
            (mappingBuffer[offset + 1] << 16) |
            (mappingBuffer[offset + 2] << 8) |
            mappingBuffer[offset + 3];
        const word1 = (mappingBuffer[offset + 4] << 24) |
            (mappingBuffer[offset + 5] << 16) |
            (mappingBuffer[offset + 6] << 8) |
            mappingBuffer[offset + 7];
        const command = (word0 >>> 24) & 0xff;
        // G_SETCOMBINE (0xFC): update no-texture mode flag.
        if (command === 0xfc) {
            isNoTexMode = (word0 & 0x00ffffff) === 0x00ffffff;
            continue;
        }
        // GE custom state command used by room display lists for material/texture selection.
        if (command === 0xc0) {
            currentMaterialId = word1 & 0xffff;
            continue;
        }
        // F3DEX2 G_VTX command.
        if (command === 0x04) {
            const packed = (word0 >>> 16) & 0xff;
            const length = word0 & 0xffff;
            let n = ((packed >>> 4) & 0x0f) + 1;
            let v0 = packed & 0x0f;
            // Fallback to F3DEX2 decoding if this command doesn't look like F3D layout.
            if (length !== n * 16) {
                n = (word0 >>> 12) & 0xff;
                const v0plusN = (word0 >>> 1) & 0x7f;
                v0 = v0plusN - n;
            }
            const byteAddress = word1 & 0x00ffffff;
            const baseIndex = Math.floor(byteAddress / 16);
            for (let i = 0; i < n; i += 1) {
                cache[v0 + i] = vertices[baseIndex + i] ?? null;
            }
            continue;
        }
        // Command 0xB1 is TRI4 in GE's microcode extension.
        if (command === 0xb1) {
            if (!isNoTexMode) {
                for (const [i0, i1, i2] of decodeTri4(word0 >>> 0, word1 >>> 0)) {
                    if (i0 === 0 && i1 === 0 && i2 === 0) {
                        continue;
                    }
                    const a = cache[i0];
                    const b = cache[i1];
                    const c = cache[i2];
                    if (!a || !b || !c) {
                        continue;
                    }
                    pushTriangle(triangles, room, currentMaterialId, isSecondary, a, b, c);
                }
            }
            continue;
        }
        // Command 0xBF is G_TRI1 in GE's F3DEX microcode.
        // Indices are stored in w1 as (v*10) per byte: bits [23:16], [15:8], [7:0].
        if (command === 0xbf) {
            if (!isNoTexMode) {
                const i0 = ((word1 >>> 16) & 0xff) / 10;
                const i1 = ((word1 >>> 8) & 0xff) / 10;
                const i2 = (word1 & 0xff) / 10;
                if (i0 !== i1 || i1 !== i2) {
                    const a = cache[i0];
                    const b = cache[i1];
                    const c = cache[i2];
                    if (a && b && c) {
                        pushTriangle(triangles, room, currentMaterialId, isSecondary, a, b, c);
                    }
                }
            }
            continue;
        }
        // 0xB8 is G_ENDDL in GE's F3DEX microcode.
        if (command === 0xb8) {
            break;
        }
    }
    return triangles;
}
function decodeRoomTriangles(room, arrays) {
    const triangles = [];
    if (room.priArrayName) {
        const priCompressed = arrays.get(room.priArrayName);
        if (priCompressed) {
            triangles.push(...decodeRoomTrianglesFromMapping(room, priCompressed, arrays, false));
        }
    }
    if (room.secArrayName && room.secArrayName !== room.priArrayName) {
        const secCompressed = arrays.get(room.secArrayName);
        if (secCompressed) {
            // Secondary display list always uses G_RM_AA_ZB_XLU_DECAL2 in GoldenEye
            // (see DL_LUT_SECONDARY_ADDFOG in bg.c) — mark every triangle accordingly.
            triangles.push(...decodeRoomTrianglesFromMapping(room, secCompressed, arrays, true));
        }
    }
    return triangles;
}
function parsePortalStructs(source) {
    const portalMap = new Map();
    const structRegex = /struct\s+portal_\d+_point\s+(portal_\d+)\s*=\s*\{([^;]+)\};/g;
    let match = null;
    while ((match = structRegex.exec(source)) !== null) {
        const name = match[1];
        const body = match[2];
        const numberTokens = body.match(/-?0x[0-9a-fA-F]+|-?(?:\d*\.?\d+)(?:e[-+]?\d+)?/g);
        if (!numberTokens || numberTokens.length < 4) {
            continue;
        }
        const pointCount = parseIntAuto(numberTokens[0]);
        const coords = numberTokens.slice(4).map(parseFloatNumber);
        if (coords.length < pointCount * 3) {
            continue;
        }
        const points = [];
        for (let i = 0; i < pointCount; i += 1) {
            const offset = i * 3;
            points.push({
                x: coords[offset],
                y: coords[offset + 1],
                z: coords[offset + 2]
            });
        }
        portalMap.set(name, points);
    }
    return portalMap;
}
function parsePortalTable(source, portalStructs) {
    const tableMatch = source.match(/struct\s+portal_data_table_entry\s+portal_data_table\[\]\s*=\s*\{([\s\S]*?)\n\};/);
    if (!tableMatch) {
        throw new Error("Could not find portal_data_table");
    }
    const entryRegex = /\{\s*&?(portal_\d+)\s*,\s*0x([0-9a-fA-F]+)\s*,\s*0x([0-9a-fA-F]+)\s*,\s*0x([0-9a-fA-F]+)\s*\}/g;
    const portals = [];
    let match = null;
    while ((match = entryRegex.exec(tableMatch[1])) !== null) {
        const name = match[1];
        portals.push({
            name,
            roomA: parseIntAuto(`0x${match[2]}`),
            roomB: parseIntAuto(`0x${match[3]}`),
            flags: parseIntAuto(`0x${match[4]}`),
            points: portalStructs.get(name) ?? []
        });
    }
    return portals;
}
function parseRoomCenters(source) {
    const tableMatch = source.match(/struct\s+room_data_table_entry\s+room_data_table\[\]\s*=\s*\{([\s\S]*?)\n\};/);
    if (!tableMatch) {
        throw new Error("Could not find room_data_table");
    }
    const entryRegex = /\{\s*[^,]+,\s*[^,]+,\s*[^,]+,\s*(-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)\s*\}/g;
    const rooms = [];
    let match = null;
    let roomIndex = 0;
    while ((match = entryRegex.exec(tableMatch[1])) !== null) {
        const x = parseFloatNumber(match[1]);
        const y = parseFloatNumber(match[2]);
        const z = parseFloatNumber(match[3]);
        // Skip sentinel rows that contain no usable room center.
        if (!(x === 0 && y === 0 && z === 0)) {
            rooms.push({
                roomIndex,
                center: { x, y, z }
            });
        }
        roomIndex += 1;
    }
    return rooms;
}
export function parseBgFile(path) {
    const source = readFileSync(path, "utf8");
    const portalStructs = parsePortalStructs(source);
    const portals = parsePortalTable(source, portalStructs);
    const roomCenters = parseRoomCenters(source);
    const arrays = parseU32Arrays(source);
    const roomRefs = parseRoomDataRefs(source);
    const roomTriangles = roomRefs.flatMap((room) => decodeRoomTriangles(room, arrays));
    return { portals, roomCenters, roomTriangles };
}
