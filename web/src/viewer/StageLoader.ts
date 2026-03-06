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

export interface VertexColour {
  r: number;
  g: number;
  b: number;
}

export interface RoomTriangle {
  roomIndex: number;
  materialId: number;
  /** True when the triangle originates from the room's secondary display list.
   *  GoldenEye renders secondary-DL geometry in G_RM_AA_ZB_XLU_DECAL2 (transparent
   *  decal), so these triangles need polygon-offset treatment in the viewer. */
  isSecondary: boolean;
  a: Vec3;
  b: Vec3;
  c: Vec3;
  uvA: { u: number; v: number };
  uvB: { u: number; v: number };
  uvC: { u: number; v: number };
  /** Per-vertex N64 shade colours (0–255 per channel).  The shader applies
   *  SHADE * TEXEL combining: transparent texture pixels show the shade colour
   *  rather than black, matching the N64's colour combiner behaviour. */
  colA: VertexColour;
  colB: VertexColour;
  colC: VertexColour;
}

export interface AtlasItem {
  x: number;
  y: number;
  width: number;
  height: number;
  decoded: boolean;
  imageName: string;
}

export interface AtlasManifest {
  atlasImage: string;
  width: number;
  height: number;
  items: Record<string, AtlasItem>;
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
  atlas?: AtlasManifest;
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
