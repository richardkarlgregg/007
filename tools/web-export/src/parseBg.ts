import { readFileSync } from "node:fs";
import { inflateRawSync, inflateSync } from "node:zlib";

export interface Vec3 {
  x: number;
  y: number;
  z: number;
}

export interface RoomCenter {
  roomIndex: number;
  center: Vec3;
}

export interface Portal {
  name: string;
  roomA: number;
  roomB: number;
  flags: number;
  points: Vec3[];
}

export interface RoomTriangle {
  roomIndex: number;
  a: Vec3;
  b: Vec3;
  c: Vec3;
}

function parseIntAuto(input: string): number {
  const value = input.trim();
  if (/^0x/i.test(value)) {
    return Number.parseInt(value.replace(/^0x/i, ""), 16);
  }
  return Number.parseInt(value, 10);
}

function parseFloatNumber(input: string): number {
  return Number.parseFloat(input.trim());
}

function parseU32Arrays(source: string): Map<string, Uint8Array> {
  const arrays = new Map<string, Uint8Array>();
  const regex = /u32\s+([A-Za-z0-9_]+)\[\]\s*=\s*\{([\s\S]*?)\n\};/g;
  let match: RegExpExecArray | null = null;

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

function decompressRzipLike(data: Uint8Array): Uint8Array | null {
  if (data.length < 3) {
    return null;
  }

  const payload = data.slice(2);
  const attempts: Array<() => Uint8Array> = [
    () => inflateRawSync(payload),
    () => inflateSync(payload),
    () => inflateRawSync(data),
    () => inflateSync(data)
  ];

  for (const attempt of attempts) {
    try {
      return attempt();
    } catch {
      // Keep trying alternate wrappers.
    }
  }
  return null;
}

interface ParsedVertex {
  x: number;
  y: number;
  z: number;
}

function readI16BE(data: Uint8Array, offset: number): number {
  const value = (data[offset] << 8) | data[offset + 1];
  return value & 0x8000 ? value - 0x10000 : value;
}

function parseVertexTable(data: Uint8Array): ParsedVertex[] {
  const vertices: ParsedVertex[] = [];
  for (let offset = 0; offset + 15 < data.length; offset += 16) {
    vertices.push({
      x: readI16BE(data, offset),
      y: readI16BE(data, offset + 2),
      z: readI16BE(data, offset + 4)
    });
  }
  return vertices;
}

interface RoomDataRef {
  roomIndex: number;
  pointArrayName: string | null;
  priArrayName: string | null;
  secArrayName: string | null;
  center: Vec3;
}

function parseRoomDataRefs(source: string): RoomDataRef[] {
  const tableMatch = source.match(/struct\s+room_data_table_entry\s+room_data_table\[\]\s*=\s*\{([\s\S]*?)\n\};/);
  if (!tableMatch) {
    throw new Error("Could not find room_data_table");
  }

  const refs: RoomDataRef[] = [];
  const entryRegex =
    /\{\s*([^,]+)\s*,\s*([^,]+)\s*,\s*([^,]+)\s*,\s*(-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)\s*\}/g;
  let match: RegExpExecArray | null = null;
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

function decodeTri4(triWord0: number, triWord1: number): [number, number, number][] {
  const tri1: [number, number, number] = [triWord1 & 0xf, (triWord1 >>> 4) & 0xf, triWord0 & 0xf];
  const tri2: [number, number, number] = [(triWord1 >>> 8) & 0xf, (triWord1 >>> 12) & 0xf, (triWord0 >>> 4) & 0xf];
  const tri3: [number, number, number] = [(triWord1 >>> 16) & 0xf, (triWord1 >>> 20) & 0xf, (triWord0 >>> 8) & 0xf];
  const tri4: [number, number, number] = [(triWord1 >>> 24) & 0xf, (triWord1 >>> 28) & 0xf, (triWord0 >>> 12) & 0xf];
  return [tri1, tri2, tri3, tri4];
}

function decodeRoomTrianglesFromMapping(room: RoomDataRef, mappingCompressed: Uint8Array, arrays: Map<string, Uint8Array>): RoomTriangle[] {
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
  const cache: Array<ParsedVertex | null> = new Array(64).fill(null);
  const triangles: RoomTriangle[] = [];

  for (let offset = 0; offset + 7 < mappingBuffer.length; offset += 8) {
    const word0 =
      (mappingBuffer[offset] << 24) |
      (mappingBuffer[offset + 1] << 16) |
      (mappingBuffer[offset + 2] << 8) |
      mappingBuffer[offset + 3];
    const word1 =
      (mappingBuffer[offset + 4] << 24) |
      (mappingBuffer[offset + 5] << 16) |
      (mappingBuffer[offset + 6] << 8) |
      mappingBuffer[offset + 7];
    const command = (word0 >>> 24) & 0xff;

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
        triangles.push({
          roomIndex: room.roomIndex,
          a: { x: a.x + room.center.x, y: a.y + room.center.y, z: a.z + room.center.z },
          b: { x: b.x + room.center.x, y: b.y + room.center.y, z: b.z + room.center.z },
          c: { x: c.x + room.center.x, y: c.y + room.center.y, z: c.z + room.center.z }
        });
      }
      continue;
    }

    // Most room DLs terminate explicitly.
    if (command === 0xdf) {
      break;
    }
  }

  return triangles;
}

function decodeRoomTriangles(room: RoomDataRef, arrays: Map<string, Uint8Array>): RoomTriangle[] {
  const triangles: RoomTriangle[] = [];

  if (room.priArrayName) {
    const priCompressed = arrays.get(room.priArrayName);
    if (priCompressed) {
      triangles.push(...decodeRoomTrianglesFromMapping(room, priCompressed, arrays));
    }
  }

  if (room.secArrayName) {
    const secCompressed = arrays.get(room.secArrayName);
    if (secCompressed) {
      triangles.push(...decodeRoomTrianglesFromMapping(room, secCompressed, arrays));
    }
  }

  return triangles;
}

function parsePortalStructs(source: string): Map<string, Vec3[]> {
  const portalMap = new Map<string, Vec3[]>();
  const structRegex = /struct\s+portal_\d+_point\s+(portal_\d+)\s*=\s*\{([^;]+)\};/g;

  let match: RegExpExecArray | null = null;
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

    const points: Vec3[] = [];
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

function parsePortalTable(source: string, portalStructs: Map<string, Vec3[]>): Portal[] {
  const tableMatch = source.match(/struct\s+portal_data_table_entry\s+portal_data_table\[\]\s*=\s*\{([\s\S]*?)\n\};/);
  if (!tableMatch) {
    throw new Error("Could not find portal_data_table");
  }

  const entryRegex = /\{\s*&?(portal_\d+)\s*,\s*0x([0-9a-fA-F]+)\s*,\s*0x([0-9a-fA-F]+)\s*,\s*0x([0-9a-fA-F]+)\s*\}/g;
  const portals: Portal[] = [];
  let match: RegExpExecArray | null = null;
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

function parseRoomCenters(source: string): RoomCenter[] {
  const tableMatch = source.match(/struct\s+room_data_table_entry\s+room_data_table\[\]\s*=\s*\{([\s\S]*?)\n\};/);
  if (!tableMatch) {
    throw new Error("Could not find room_data_table");
  }

  const entryRegex =
    /\{\s*[^,]+,\s*[^,]+,\s*[^,]+,\s*(-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)\s*\}/g;
  const rooms: RoomCenter[] = [];
  let match: RegExpExecArray | null = null;
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

export function parseBgFile(path: string): { portals: Portal[]; roomCenters: RoomCenter[]; roomTriangles: RoomTriangle[] } {
  const source = readFileSync(path, "utf8");
  const portalStructs = parsePortalStructs(source);
  const portals = parsePortalTable(source, portalStructs);
  const roomCenters = parseRoomCenters(source);
  const arrays = parseU32Arrays(source);
  const roomRefs = parseRoomDataRefs(source);

  const roomTriangles = roomRefs.flatMap((room) => decodeRoomTriangles(room, arrays));

  return { portals, roomCenters, roomTriangles };
}
