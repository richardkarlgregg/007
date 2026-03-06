import * as THREE from "three";
import type { AtlasManifest, PadRecord, Portal, RoomTriangle, StanTile } from "./StageLoader";

function tileColorHex(tile: StanTile): number {
  const r = Math.max(0, Math.min(15, tile.color.r)) * 17;
  const g = Math.max(0, Math.min(15, tile.color.g)) * 17;
  const b = Math.max(0, Math.min(15, tile.color.b)) * 17;
  return (r << 16) | (g << 8) | b;
}

export function buildStanMesh(tiles: StanTile[]): THREE.Mesh {
  const positions: number[] = [];
  const colors: number[] = [];

  for (const tile of tiles) {
    if (tile.points.length < 3) {
      continue;
    }

    const baseColor = new THREE.Color(tileColorHex(tile));
    const p0 = tile.points[0];
    for (let i = 1; i < tile.points.length - 1; i += 1) {
      const p1 = tile.points[i];
      const p2 = tile.points[i + 1];

      positions.push(p0.x, p0.y, p0.z, p1.x, p1.y, p1.z, p2.x, p2.y, p2.z);

      for (let n = 0; n < 3; n += 1) {
        colors.push(baseColor.r, baseColor.g, baseColor.b);
      }
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
  geometry.computeVertexNormals();

  const material = new THREE.MeshStandardMaterial({
    side: THREE.DoubleSide,
    vertexColors: true,
    metalness: 0.0,
    roughness: 1.0,
    transparent: true,
    opacity: 0.9
  });

  return new THREE.Mesh(geometry, material);
}


export function buildBgMesh(triangles: RoomTriangle[]): THREE.Group {
  const group = new THREE.Group();
  group.name = "bg-mesh";

  // Group triangles by room so each room gets its own vivid solid colour.
  const byRoom = new Map<number, Array<{ tri: RoomTriangle; triId: number }>>();
  triangles.forEach((tri, triId) => {
    const list = byRoom.get(tri.roomIndex) ?? [];
    list.push({ tri, triId });
    byRoom.set(tri.roomIndex, list);
  });

  // Use a golden-ratio hue step so adjacent room indices never share a similar
  // hue, making every room clearly distinct at a glance.
  const PHI = 0.6180339887;

  for (const [roomIndex, tris] of byRoom) {
    const positions: number[] = [];
    const triangleIds: number[] = [];

    for (const { tri, triId } of tris) {
      positions.push(
        tri.a.x, tri.a.y, tri.a.z,
        tri.b.x, tri.b.y, tri.b.z,
        tri.c.x, tri.c.y, tri.c.z
      );
      triangleIds.push(triId);
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    geometry.computeVertexNormals();

    const hue = (roomIndex * PHI) % 1;
    const color = new THREE.Color().setHSL(hue, 0.85, 0.55);

    const material = new THREE.MeshStandardMaterial({
      color,
      side:      THREE.DoubleSide,
      metalness: 0.0,
      roughness: 0.9
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.name = `bg-room-${roomIndex}`;
    mesh.userData.triangleIds = triangleIds;
    group.add(mesh);
  }

  return group;
}

// ---------------------------------------------------------------------------
// Atlas tile shader — resolves N64 multi-wrap UVs correctly.
//
// Problem: N64 vertex UV values can span many texture repeats (e.g. rawU=8220
// for a 64-texel-wide texture = 4.013 wraps). Applying fract() in JS before
// passing to Three.js collapses the span to ~0–0.013, so the GPU interpolates
// only a tiny slice of the texture across the triangle.
//
// Fix: pass raw texel coordinates as vertex attributes and do mod() per
// fragment in GLSL so the GPU interpolates the full 0→256 range, then wraps
// each pixel independently.
// ---------------------------------------------------------------------------
const ATLAS_VERTEX_SHADER = /* glsl */ `
  attribute float aMaterialId;
  attribute vec2  aTexelUV;
  attribute vec3  aVertexColor;
  varying   float vMaterialId;
  varying   vec2  vTexelUV;
  varying   vec3  vVertexColor;

  #include <fog_pars_vertex>

  void main() {
    vMaterialId  = aMaterialId;
    vTexelUV     = aTexelUV;
    vVertexColor = aVertexColor;

    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mvPosition;

    #include <fog_vertex>
  }
`;

const ATLAS_FRAGMENT_SHADER = /* glsl */ `
  precision highp float;

  #include <fog_pars_fragment>

  uniform sampler2D uAtlas;
  // 1-D lookup texture: each texel i stores (x, y, w, h) in atlas pixels
  // for the material whose ID equals i.
  uniform sampler2D uLookup;
  uniform vec2  uAtlasSize;
  uniform float uLookupWidth;

  varying float vMaterialId;
  varying vec2  vTexelUV;
  varying vec3  vVertexColor;

  void main() {
    float lu   = (vMaterialId + 0.5) / uLookupWidth;
    vec4  info = texture2D(uLookup, vec2(lu, 0.5));

    float itemX = info.r;
    float itemY = info.g;
    float itemW = info.b;
    float itemH = info.a;

    vec3 shade = clamp(vVertexColor / 255.0, 0.0, 1.0);

    if (itemW <= 0.0 || itemH <= 0.0) {
      // Magenta checkerboard for unmapped materials (scale by /32 for 10.5 fp).
      float chk = mod(floor(vTexelUV.x / 256.0) + floor(vTexelUV.y / 256.0), 2.0);
      gl_FragColor = vec4(chk, 0.0, chk, 1.0);
      return;
    }

    // vTexelUV is already in texel units (raw 10.5-fp divided by 32 on the
    // CPU side).  mod() wraps at texture boundaries; GLSL mod() handles
    // negative values correctly: mod(-x, w) = w - mod(x, w) >= 0.
    float u = mod(vTexelUV.x, itemW) / itemW;
    float v = mod(vTexelUV.y, itemH) / itemH;

    vec2 atlasUV = vec2(
      (itemX + u * itemW) / uAtlasSize.x,
      (itemY + v * itemH) / uAtlasSize.y
    );

    vec4 tex = texture2D(uAtlas, atlasUV);

    // GoldenEye uses 1-bit alpha (RGBA5551 / CI8 palette entries with alpha 0
    // or 255).  Discard fully-transparent texels so fences, foliage, and other
    // cut-out surfaces render correctly.  Now that the materialId off-by-one
    // is fixed every texture is correct, so the alpha test gives the right result.
    if (tex.a < 0.5) discard;

    // N64 SHADE * TEXEL0 combine: vertex shade modulates the texture colour.
    vec3 rgb = shade * tex.rgb;
    gl_FragColor = vec4(rgb, 1.0);

    #include <fog_fragment>
  }
`;

export function buildBgMeshWithAtlas(
  triangles: RoomTriangle[],
  atlas: AtlasManifest,
  atlasTexture: THREE.Texture
): THREE.Group {
  // ── Atlas item lookup texture ──────────────────────────────────────────────
  // One texel per possible material ID (up to 2500).  Each RGBA32F texel stores
  // (x, y, width, height) in atlas pixels so the fragment shader can tile UVs.
  const LOOKUP_WIDTH = 2500;
  const lookupData = new Float32Array(LOOKUP_WIDTH * 4); // zeros = not in atlas
  for (const [idStr, item] of Object.entries(atlas.items)) {
    const id = parseInt(idStr, 10);
    if (id >= 0 && id < LOOKUP_WIDTH) {
      lookupData[id * 4 + 0] = item.x;
      lookupData[id * 4 + 1] = item.y;
      lookupData[id * 4 + 2] = item.width;
      lookupData[id * 4 + 3] = item.height;
    }
  }
  const lookupTex = new THREE.DataTexture(lookupData, LOOKUP_WIDTH, 1, THREE.RGBAFormat, THREE.FloatType);
  lookupTex.magFilter = THREE.NearestFilter;
  lookupTex.minFilter = THREE.NearestFilter;
  lookupTex.needsUpdate = true;

  // ── Texture setup ──────────────────────────────────────────────────────────
  atlasTexture.flipY     = false;
  atlasTexture.wrapS     = THREE.ClampToEdgeWrapping;
  atlasTexture.wrapT     = THREE.ClampToEdgeWrapping;
  // NearestFilter matches N64 point-sampling and prevents bilinear bleed of
  // transparent padding pixels into texture edges within the atlas.
  atlasTexture.magFilter = THREE.NearestFilter;
  atlasTexture.minFilter = THREE.NearestFilter;
  atlasTexture.needsUpdate = true;

  const sharedUniforms = {
    uAtlas:       { value: atlasTexture },
    uLookup:      { value: lookupTex },
    uAtlasSize:   { value: new THREE.Vector2(atlas.width, atlas.height) },
    uLookupWidth: { value: LOOKUP_WIDTH }
  };

  // Base material — primary-DL geometry, no polygon offset.
  const baseMaterial = new THREE.ShaderMaterial({
    uniforms:       { ...sharedUniforms, ...THREE.UniformsLib.fog },
    vertexShader:   ATLAS_VERTEX_SHADER,
    fragmentShader: ATLAS_FRAGMENT_SHADER,
    side:           THREE.DoubleSide,
    fog:            true
  });

  // Decal material — secondary-DL geometry.  GoldenEye renders these with
  // G_RM_AA_ZB_XLU_DECAL2 (ZMODE_DECAL) which tells the RDP to keep the
  // existing depth value when drawing the surface so it always appears on top
  // of co-planar base geometry.  We replicate that with polygonOffset.
  const decalMaterial = new THREE.ShaderMaterial({
    uniforms:            { ...sharedUniforms, ...THREE.UniformsLib.fog },
    vertexShader:        ATLAS_VERTEX_SHADER,
    fragmentShader:      ATLAS_FRAGMENT_SHADER,
    side:                THREE.DoubleSide,
    fog:                 true,
    polygonOffset:       true,
    polygonOffsetFactor: -2,
    polygonOffsetUnits:  -4
  });

  // ── Group triangles by material in display-list order ──────────────────────
  // Track which materials have at least one secondary-DL triangle so we can
  // assign them the decal material (polygon offset) in the viewer.
  const materialOrder: number[] = [];
  const byMaterial = new Map<
    number,
    { pos: number[]; ids: number[]; uvs: number[]; cols: number[]; triIds: number[]; hasSecondary: boolean }
  >();

  triangles.forEach((tri, triId) => {
    if (!byMaterial.has(tri.materialId)) {
      materialOrder.push(tri.materialId);
      byMaterial.set(tri.materialId, { pos: [], ids: [], uvs: [], cols: [], triIds: [], hasSecondary: false });
    }
    const buf = byMaterial.get(tri.materialId)!;
    if (tri.isSecondary) {
      buf.hasSecondary = true;
    }
    buf.pos.push(
      tri.a.x, tri.a.y, tri.a.z,
      tri.b.x, tri.b.y, tri.b.z,
      tri.c.x, tri.c.y, tri.c.z
    );
    buf.ids.push(tri.materialId, tri.materialId, tri.materialId);
    buf.uvs.push(
      tri.uvA.u / 32.0, tri.uvA.v / 32.0,
      tri.uvB.u / 32.0, tri.uvB.v / 32.0,
      tri.uvC.u / 32.0, tri.uvC.v / 32.0
    );
    // N64 vertex shade colours (0–255 per channel).
    buf.cols.push(
      tri.colA.r, tri.colA.g, tri.colA.b,
      tri.colB.r, tri.colB.g, tri.colB.b,
      tri.colC.r, tri.colC.g, tri.colC.b
    );
    buf.triIds.push(triId);
  });

  // ── Build one mesh per material ────────────────────────────────────────────
  const group = new THREE.Group();
  group.name = "bg-atlas";

  materialOrder.forEach((matId, orderIdx) => {
    const buf = byMaterial.get(matId)!;

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position",     new THREE.Float32BufferAttribute(buf.pos,  3));
    geometry.setAttribute("aMaterialId",  new THREE.Float32BufferAttribute(buf.ids,  1));
    geometry.setAttribute("aTexelUV",     new THREE.Float32BufferAttribute(buf.uvs,  2));
    geometry.setAttribute("aVertexColor", new THREE.Float32BufferAttribute(buf.cols, 3));
    geometry.computeVertexNormals();

    // Secondary-DL materials use decalMaterial (polygon offset) so they appear
    // on top of co-planar primary-DL surfaces, matching GoldenEye's ZMODE_DECAL.
    const mat = buf.hasSecondary ? decalMaterial : baseMaterial;

    const mesh = new THREE.Mesh(geometry, mat);
    mesh.name        = `bg-mat-${matId}`;
    mesh.userData.triangleIds = buf.triIds;
    // Higher renderOrder = drawn later = wins depth ties with earlier layers.
    mesh.renderOrder = orderIdx;
    group.add(mesh);
  });

  return group;
}

export function buildPadsLayer(pads: PadRecord[]): THREE.Group {
  const group = new THREE.Group();
  group.name = "pads";

  const markerGeometry = new THREE.SphereGeometry(6, 8, 8);
  const markerMaterial = new THREE.MeshBasicMaterial({ color: 0x00d9ff });

  for (const pad of pads) {
    const marker = new THREE.Mesh(markerGeometry, markerMaterial);
    marker.position.set(pad.position.x, pad.position.y, pad.position.z);
    group.add(marker);

    const dir = new THREE.Vector3(pad.orientation.x, pad.orientation.y, pad.orientation.z)
      .normalize()
      .multiplyScalar(40);

    const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffff00 });
    const lineGeometry = new THREE.BufferGeometry().setFromPoints([
      marker.position.clone(),
      marker.position.clone().add(dir)
    ]);
    group.add(new THREE.Line(lineGeometry, lineMaterial));
  }

  return group;
}

// ---------------------------------------------------------------------------
// Room labels — one canvas-texture sprite per room centre.
// ---------------------------------------------------------------------------
function makeRoomLabelSprite(label: string, colour: string): THREE.Sprite {
  const W = 256, H = 80;
  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d")!;

  ctx.fillStyle = "rgba(0,0,0,0.65)";
  ctx.beginPath();
  ctx.roundRect(4, 4, W - 8, H - 8, 12);
  ctx.fill();

  ctx.strokeStyle = colour;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.roundRect(4, 4, W - 8, H - 8, 12);
  ctx.stroke();

  ctx.fillStyle = colour;
  ctx.font = "bold 30px 'Courier New', monospace";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(label, W / 2, H / 2);

  const tex = new THREE.CanvasTexture(canvas);
  const mat = new THREE.SpriteMaterial({ map: tex, depthTest: false, sizeAttenuation: true });
  const sprite = new THREE.Sprite(mat);
  sprite.scale.set(160, 50, 1);
  return sprite;
}

export function buildRoomLabelsLayer(roomCenters: { roomIndex: number; center: { x: number; y: number; z: number } }[]): THREE.Group {
  const group = new THREE.Group();
  group.name = "room-labels";

  for (const rc of roomCenters) {
    const hue = ((rc.roomIndex * 47) % 360) / 360;
    const colour = new THREE.Color().setHSL(hue, 0.9, 0.7).getStyle();
    const sprite = makeRoomLabelSprite(`Room ${rc.roomIndex}`, colour);
    sprite.position.set(rc.center.x, rc.center.y + 80, rc.center.z);
    group.add(sprite);
  }

  return group;
}

export function buildPortalsLayer(portals: Portal[]): THREE.Group {
  const group = new THREE.Group();
  group.name = "portals";

  const lineMaterial = new THREE.LineBasicMaterial({ color: 0xff5f5f });

  for (const portal of portals) {
    if (portal.points.length < 2) {
      continue;
    }

    const points = portal.points.map((p) => new THREE.Vector3(p.x, p.y, p.z));
    points.push(points[0].clone());
    const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
    group.add(new THREE.Line(lineGeometry, lineMaterial));
  }

  return group;
}
