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

export interface PropPlacement {
  index: number;
  type: string;
  /**
   * Lower 16 bits of propDefs word 1: type-specific pad index.
   * Most props use `pads`; doors use `boundPads`.
   */
  padIndex: number;
  /** Which setup pad table this placement references. */
  padSource?: "pad" | "boundPad";
  /**
   * Upper 16 bits of propDefs word 1.
   * - StandardProp / SingleMonitor: 0-based PitemZ model index.
   * - Guard: body / chr model index.
   * - Collectable / AmmoBox: item-type index.
   */
  primaryIndex: number;
  /**
   * PropDefHeaderRecord.extrascale (u8.8 fixed-point, divide by 256 for float).
   * e.g. 256 → 1.0 (identity), 332 → ~1.297.
   */
  extraScale: number;
  /** ObjectRecord.flags bitfield from propDefs (third data word). */
  objectFlags?: number;
  /**
   * Pre-computed effective render scale = PitemZ_entries[primaryIndex].scale × (extraScale / 256).
   * Only present on StandardProp and SingleMonitor placements that have a decoded model.
   */
  renderScale?: number;
}

/** A single vertex in N64 model-local space. */
export interface PropVertex {
  x: number;
  y: number;
  z: number;
  u: number;
  v: number;
  r: number;
  g: number;
  b: number;
}

/** One decoded triangle from a prop model's GFX display list. */
export interface PropTriangle {
  /** 1-based atlas material ID (matching atlas imageN.bin naming). */
  materialId: number;
  a: PropVertex;
  b: PropVertex;
  c: PropVertex;
}

/** Decoded geometry for one prop model, in model-local space. */
export interface PropModelGeometry {
  triangles: PropTriangle[];
  /** Unique 1-based material IDs included in this model. */
  materialIds: number[];
  /** Local-space bounds from decoded geometry. */
  bounds: {
    min: Vec3;
    max: Vec3;
  };
  /** Optional source bbox from ModelRoData_BoundingBoxRecord. */
  sourceBounds?: {
    min: Vec3;
    max: Vec3;
  };
}

export interface StageData {
  stage: string;
  /** src/game/bg.c levelinfotable[].levelscale for this stage. */
  stageLevelScale?: number;
  sourceFiles: {
    bg: string;
    setup: string;
    stan: string;
  };
  stanTiles: StanTile[];
  pads: PadRecord[];
  boundPads?: BoundPadRecord[];
  portals: Portal[];
  roomCenters: RoomCenter[];
  roomTriangles: RoomTriangle[];
  atlas?: AtlasManifest;
  /** Spatial prop placements parsed from the setup file's propDefs[]. */
  propPlacements?: PropPlacement[];
  /** 0-indexed array mapping PitemZ index → model name (from propItemModelFileRecord). */
  propModelNames?: string[];
  /**
   * Per-model render scale from PitemZ_entries[i].scale (e.g. 0.1 for most props,
   * 1.0 for door models).  Keyed by model name.
   */
  propModelScales?: Record<string, number>;
  /** Decoded geometry keyed by model name (only present after ROM extraction). */
  propModels?: Record<string, PropModelGeometry>;
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
