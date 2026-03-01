export interface Vec3 {
  x: number;
  y: number;
  z: number;
}

export interface StanPoint extends Vec3 {
  link: number;
}

export interface StanTile {
  id: number;
  room: number;
  flags: number;
  color: { r: number; g: number; b: number };
  points: StanPoint[];
}

export interface PadRecord {
  name: string;
  position: Vec3;
  up: Vec3;
  orientation: Vec3;
  flags: number;
}

export interface Portal {
  name: string;
  roomA: number;
  roomB: number;
  flags: number;
  points: Vec3[];
}

export interface RoomCenter {
  roomIndex: number;
  center: Vec3;
}

export interface RoomTriangle {
  roomIndex: number;
  a: Vec3;
  b: Vec3;
  c: Vec3;
}

export interface StageData {
  stage: string;
  sourceFiles: {
    bg: string;
    setup: string;
    stan: string;
  };
  stanTiles: StanTile[];
  pads: PadRecord[];
  portals: Portal[];
  roomCenters: RoomCenter[];
  roomTriangles: RoomTriangle[];
}

export async function loadStageData(path: string): Promise<StageData> {
  const response = await fetch(path);
  if (!response.ok) {
    throw new Error(`Failed to load stage data from ${path}: ${response.status}`);
  }

  const data = (await response.json()) as StageData;
  if (!data.stanTiles || !data.pads || !data.portals) {
    throw new Error("Invalid stage JSON format");
  }

  return data;
}
