import * as THREE from "three";
import type { AtlasManifest, PadRecord, Portal, PropModelGeometry, PropPlacement, RoomTriangle, StanTile } from "./StageLoader";
import type { LoadedOverride } from "./OverrideLoader";

// ---------------------------------------------------------------------------
// Fog uniforms — shared object so main.ts can update values at runtime and
// the ShaderMaterial automatically picks them up on the next render frame.
// ---------------------------------------------------------------------------
export interface FogUniforms {
  uFogNear:    { value: number };
  uFogFar:     { value: number };
  uFogColor:   { value: THREE.Color };
  uFogEnabled: { value: number };  // 1.0 = on, 0.0 = off
}

export function makeFogUniforms(): FogUniforms {
  return {
    uFogNear:    { value: 1500 },
    uFogFar:     { value: 7000 },
    uFogColor:   { value: new THREE.Color(16 / 255, 48 / 255, 64 / 255) },
    uFogEnabled: { value: 1.0 }
  };
}

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
  #include <common>
  #include <normal_pars_vertex>
  #include <shadowmap_pars_vertex>
  attribute float aMaterialId;
  attribute vec2  aTexelUV;
  attribute vec3  aVertexColor;
  varying   float vMaterialId;
  varying   vec2  vTexelUV;
  varying   vec3  vVertexColor;
  varying   float vFogDepth;
  varying   float vWorldY;

  void main() {
    vec3 transformed = vec3(position);
    #include <beginnormal_vertex>
    #include <defaultnormal_vertex>

    vMaterialId  = aMaterialId;
    vTexelUV     = aTexelUV;
    vVertexColor = aVertexColor;

    vec4 worldPos   = modelMatrix * vec4(transformed, 1.0);
    vWorldY         = worldPos.y;

    vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    #include <worldpos_vertex>
    #include <shadowmap_vertex>

    // Eye-space depth (positive = in front of camera).
    vFogDepth = -mvPosition.z;
  }
`;

const ATLAS_FRAGMENT_SHADER = /* glsl */ `
  precision highp float;
  #include <common>
  #include <packing>
  #include <bsdfs>
  #include <lights_pars_begin>
  #include <shadowmap_pars_fragment>
  #include <shadowmask_pars_fragment>

  uniform sampler2D uAtlas;
  // 1-D lookup texture: each texel i stores (x, y, w, h) in atlas pixels
  // for the material whose ID equals i.
  uniform sampler2D uLookup;
  uniform vec2  uAtlasSize;
  uniform float uLookupWidth;

  // Fog — controlled directly so the G-key toggle is instant and reliable.
  uniform float uFogNear;
  uniform float uFogFar;
  uniform vec3  uFogColor;
  uniform float uFogEnabled; // 1.0 = on, 0.0 = off

  varying float vMaterialId;
  varying vec2  vTexelUV;
  varying vec3  vVertexColor;
  varying float vFogDepth;
  varying float vWorldY;

  void main() {
    float lu   = (vMaterialId + 0.5) / uLookupWidth;
    vec4  info = texture2D(uLookup, vec2(lu, 0.5));

    float itemX = info.r;
    float itemY = info.g;
    float itemW = info.b;
    float itemH = info.a;

    vec3 shade = clamp(vVertexColor / 255.0, 0.0, 1.0);

    if (itemW <= 0.0 || itemH <= 0.0) {
      // Magenta checkerboard for unmapped materials.
      float chk = mod(floor(vTexelUV.x / 256.0) + floor(vTexelUV.y / 256.0), 2.0);
      gl_FragColor = vec4(chk, 0.0, chk, 1.0);
      float chkDist   = clamp((vFogDepth - uFogNear) / (uFogFar - uFogNear), 0.0, 1.0);
      float chkHeight = clamp((vWorldY - 80.0) / (320.0 - 80.0), 0.0, 1.0) * 0.7;
      float chkFog    = clamp(max(chkDist, chkHeight), 0.0, 1.0) * uFogEnabled;
      gl_FragColor.rgb = mix(gl_FragColor.rgb, uFogColor, chkFog);
      return;
    }

    // vTexelUV is in texel units (raw 10.5-fp / 32).  mod() wraps at texture
    // boundaries; GLSL mod() handles negatives: mod(-x,w) = w - mod(x,w) >= 0.
    float u = mod(vTexelUV.x, itemW) / itemW;
    float v = mod(vTexelUV.y, itemH) / itemH;

    vec2 atlasUV = vec2(
      (itemX + u * itemW) / uAtlasSize.x,
      (itemY + v * itemH) / uAtlasSize.y
    );

    vec4 tex = texture2D(uAtlas, atlasUV);

    // 1-bit alpha: discard fully transparent texels (fences, foliage, etc.)
    if (tex.a < 0.5) discard;

    // N64 SHADE * TEXEL0 combine: vertex shade modulates texture colour.
    vec3 rgb = shade * tex.rgb;

    // Receive directional-light shadows in remaster mode.
    float shadowMask = getShadowMask();
    rgb *= mix(0.55, 1.0, shadowMask);

    // Distance fog — eye-space depth linear ramp.
    float distFog = clamp((vFogDepth - uFogNear) / (uFogFar - uFogNear), 0.0, 1.0);

    // Height fog — cliff tops and elevated geometry pick up extra haze even
    // when the camera is nearby.  Map Y range: -239 (floor) → 360 (cliff tops).
    // Ramps from 0 at Y=80 (above runway floor) to 0.7 at Y=320 (cliff summits).
    float heightFog = clamp((vWorldY - 80.0) / (320.0 - 80.0), 0.0, 1.0) * 0.7;

    // Take the stronger of the two, then scale by enabled flag.
    float fogFactor = clamp(max(distFog, heightFog), 0.0, 1.0) * uFogEnabled;
    rgb = mix(rgb, uFogColor, fogFactor);

    gl_FragColor = vec4(rgb, 1.0);
  }
`;

export function buildBgMeshWithAtlas(
  triangles: RoomTriangle[],
  atlas: AtlasManifest,
  atlasTexture: THREE.Texture,
  /** Material IDs handled by PBR overrides — excluded from the atlas shader. */
  excludeIds: ReadonlySet<number> = new Set(),
  /** Shared fog uniform values — update .value fields to change fog live. */
  fogUniforms: FogUniforms = makeFogUniforms()
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

  // Fog uniforms are passed in by reference — updating .value fields in the
  // caller automatically propagates to the GPU on the next render frame.
  const sharedUniforms = {
    ...THREE.UniformsLib.lights,
    uAtlas:       { value: atlasTexture },
    uLookup:      { value: lookupTex },
    uAtlasSize:   { value: new THREE.Vector2(atlas.width, atlas.height) },
    uLookupWidth: { value: LOOKUP_WIDTH },
    // Spread fog uniforms by reference so live updates from applyFog() work.
    uFogNear:    fogUniforms.uFogNear,
    uFogFar:     fogUniforms.uFogFar,
    uFogColor:   fogUniforms.uFogColor,
    uFogEnabled: fogUniforms.uFogEnabled
  };

  // Base material — primary-DL geometry, no polygon offset.
  const baseMaterial = new THREE.ShaderMaterial({
    uniforms:       sharedUniforms,
    vertexShader:   ATLAS_VERTEX_SHADER,
    fragmentShader: ATLAS_FRAGMENT_SHADER,
    side:           THREE.DoubleSide,
    lights:         true
  });

  // Decal material — secondary-DL geometry with polygon offset (ZMODE_DECAL).
  const decalMaterial = new THREE.ShaderMaterial({
    uniforms:            sharedUniforms,
    vertexShader:        ATLAS_VERTEX_SHADER,
    fragmentShader:      ATLAS_FRAGMENT_SHADER,
    side:                THREE.DoubleSide,
    lights:              true,
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
    // Skip triangles whose material is handled by a PBR override.
    if (excludeIds.has(tri.materialId)) return;

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

// ---------------------------------------------------------------------------
// PBR override meshes
//
// For each LoadedOverride, collect the triangles whose materialId is in the
// override's set, build a BufferGeometry with properly-normalised UVs, and
// attach a MeshStandardMaterial using the loaded PBR maps.
//
// UV normalisation: raw N64 UVs ÷ 32 = texel-space floats.  Dividing again
// by the atlas item's pixel width/height gives a repeating UV in [0..N] where
// N is the number of texture tiles.  THREE.RepeatWrapping then handles the
// tiling per-fragment — exactly equivalent to the atlas shader's mod().
// ---------------------------------------------------------------------------
export function buildPbrOverrideMeshes(
  triangles: RoomTriangle[],
  atlas: AtlasManifest,
  overrides: LoadedOverride[]
): THREE.Group {
  const group = new THREE.Group();
  group.name = "bg-pbr-overrides";

  for (const override of overrides) {
    if (override.materialIds.size === 0) continue;

    // Build separate buffers per material ID so UV normalisation uses the
    // correct texel size for each atlas item.
    const byMat = new Map<
      number,
      { pos: number[]; uvs: number[]; triIds: number[] }
    >();

    triangles.forEach((tri, triId) => {
      if (!override.materialIds.has(tri.materialId)) return;
      const item = atlas.items[String(tri.materialId)];
      if (!item) return; // no atlas entry — skip

      if (!byMat.has(tri.materialId)) {
        byMat.set(tri.materialId, { pos: [], uvs: [], triIds: [] });
      }
      const buf = byMat.get(tri.materialId)!;
      const uw = item.width;
      const uh = item.height;

      buf.pos.push(
        tri.a.x, tri.a.y, tri.a.z,
        tri.b.x, tri.b.y, tri.b.z,
        tri.c.x, tri.c.y, tri.c.z
      );
      // Divide raw N64 texel UV by atlas item dimensions → repeats-domain [0..N]
      // so THREE.RepeatWrapping tiles the PBR texture the same number of times
      // as the original N64 texture would.
      buf.uvs.push(
        (tri.uvA.u / 32.0) / uw, (tri.uvA.v / 32.0) / uh,
        (tri.uvB.u / 32.0) / uw, (tri.uvB.v / 32.0) / uh,
        (tri.uvC.u / 32.0) / uw, (tri.uvC.v / 32.0) / uh
      );
      buf.triIds.push(triId);
    });

    if (byMat.size === 0) continue;

    // Merge all per-material buffers into one geometry for this override entry.
    const allPos: number[] = [];
    const allUvs: number[] = [];
    const allTriIds: number[] = [];
    for (const buf of byMat.values()) {
      for (const v of buf.pos)    allPos.push(v);
      for (const v of buf.uvs)    allUvs.push(v);
      for (const v of buf.triIds) allTriIds.push(v);
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.Float32BufferAttribute(allPos, 3));
    geometry.setAttribute("uv",       new THREE.Float32BufferAttribute(allUvs, 2));
    // uv2 is required by THREE.MeshStandardMaterial's aoMap.
    geometry.setAttribute("uv2",      new THREE.Float32BufferAttribute(allUvs, 2));
    geometry.computeVertexNormals();

    const { maps } = override;
    const mat = new THREE.MeshStandardMaterial({
      side:    THREE.DoubleSide,
      // Colour maps
      map:             maps.albedo,
      // Detail / surface maps
      normalMap:       maps.normal,
      roughnessMap:    maps.roughness,
      aoMap:           maps.ao,
      aoMapIntensity:  1.0,
      metalnessMap:    maps.metallic,
      displacementMap: maps.height,
      displacementScale: maps.heightScale,
      // When a map is provided the scalar must be 1.0 so the map drives the
      // value fully.  Without a map, use sensible physical defaults for rock/snow.
      metalness: maps.metallic  ? 1.0 : 0.0,
      roughness: maps.roughness ? 1.0 : 0.75,
      // Polygon offset pushes PBR geometry closer to the camera than the
      // co-planar atlas mesh so it wins depth tests without z-fighting.
      polygonOffset:       true,
      polygonOffsetFactor: -2,
      polygonOffsetUnits:  -4
    });

    const mesh = new THREE.Mesh(geometry, mat);
    mesh.name = `pbr-override-${override.name}`;
    mesh.userData.triangleIds = allTriIds;
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    group.add(mesh);
  }

  return group;
}

let remasterPlaceholderTex: THREE.Texture | null = null;

function getRemasterPlaceholderTexture(): THREE.Texture {
  if (remasterPlaceholderTex) return remasterPlaceholderTex;

  const size = 64;
  const data = new Uint8Array(size * size * 4);
  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      const i = (y * size + x) * 4;
      const checker = ((Math.floor(x / 8) + Math.floor(y / 8)) & 1) === 0;
      const grid = (x % 8 === 0) || (y % 8 === 0);
      const c = grid ? 112 : checker ? 172 : 148;
      data[i + 0] = c;
      data[i + 1] = c;
      data[i + 2] = c;
      data[i + 3] = 255;
    }
  }

  const tex = new THREE.DataTexture(data, size, size, THREE.RGBAFormat);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.magFilter = THREE.LinearFilter;
  tex.minFilter = THREE.LinearMipmapLinearFilter;
  tex.needsUpdate = true;
  remasterPlaceholderTex = tex;
  return tex;
}

export function buildRemasterPlaceholderMeshes(
  triangles: RoomTriangle[],
  atlas: AtlasManifest,
  overriddenIds: ReadonlySet<number>
): THREE.Group {
  const group = new THREE.Group();
  group.name = "bg-remaster-placeholders";

  const primary = { pos: [] as number[], uvs: [] as number[], triIds: [] as number[] };
  const secondary = { pos: [] as number[], uvs: [] as number[], triIds: [] as number[] };

  triangles.forEach((tri, triId) => {
    if (overriddenIds.has(tri.materialId)) return;
    const item = atlas.items[String(tri.materialId)];
    if (!item) return;

    const target = tri.isSecondary ? secondary : primary;
    const uw = item.width;
    const uh = item.height;

    target.pos.push(
      tri.a.x, tri.a.y, tri.a.z,
      tri.b.x, tri.b.y, tri.b.z,
      tri.c.x, tri.c.y, tri.c.z
    );
    target.uvs.push(
      (tri.uvA.u / 32.0) / uw, (tri.uvA.v / 32.0) / uh,
      (tri.uvB.u / 32.0) / uw, (tri.uvB.v / 32.0) / uh,
      (tri.uvC.u / 32.0) / uw, (tri.uvC.v / 32.0) / uh
    );
    target.triIds.push(triId);
  });

  const placeholderMap = getRemasterPlaceholderTexture();
  const baseMat = new THREE.MeshStandardMaterial({
    side: THREE.DoubleSide,
    color: 0xf0f0f0,
    map: placeholderMap,
    metalness: 0.0,
    roughness: 0.92
  });
  const decalMat = new THREE.MeshStandardMaterial({
    side: THREE.DoubleSide,
    color: 0xf0f0f0,
    map: placeholderMap,
    metalness: 0.0,
    roughness: 0.92,
    polygonOffset: true,
    polygonOffsetFactor: -2,
    polygonOffsetUnits: -4
  });

  function addMesh(
    buf: { pos: number[]; uvs: number[]; triIds: number[] },
    mat: THREE.MeshStandardMaterial,
    name: string
  ): void {
    if (buf.pos.length === 0) return;
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.Float32BufferAttribute(buf.pos, 3));
    geometry.setAttribute("uv", new THREE.Float32BufferAttribute(buf.uvs, 2));
    geometry.setAttribute("uv2", new THREE.Float32BufferAttribute(buf.uvs, 2));
    geometry.computeVertexNormals();

    const mesh = new THREE.Mesh(geometry, mat);
    mesh.name = name;
    mesh.userData.triangleIds = buf.triIds;
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    group.add(mesh);
  }

  addMesh(primary, baseMat, "bg-remaster-placeholder-primary");
  addMesh(secondary, decalMat, "bg-remaster-placeholder-secondary");
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

// ---------------------------------------------------------------------------
// Props layer — color-coded 3-D markers for map object placements.
// ---------------------------------------------------------------------------

/** Per-type visual configuration: mesh geometry + colour + vertical size. */
const PROP_TYPE_STYLE: Record<string, { color: number; geo: "box" | "sphere" | "cylinder"; h: number }> = {
  Guard:         { color: 0xff3030, geo: "cylinder", h: 80 },
  StandardProp:  { color: 0xd4c27a, geo: "box",      h: 30 },
  Door:          { color: 0x4488ff, geo: "box",       h: 90 },
  AmmoBox:       { color: 0xff8800, geo: "box",       h: 24 },
  Collectable:   { color: 0xffee00, geo: "sphere",    h: 20 },
  Tank:          { color: 0x446644, geo: "box",       h: 60 },
  SingleMonitor: { color: 0x00cccc, geo: "box",       h: 40 },
  Key:           { color: 0xffd700, geo: "sphere",    h: 16 },
  Drone:         { color: 0xcc44ff, geo: "sphere",    h: 22 },
  Glass:         { color: 0x88ddff, geo: "box",       h: 60 },
  GlassWindow:   { color: 0x88ddff, geo: "box",       h: 60 },
};

const DEFAULT_PROP_STYLE = { color: 0xaaaaaa, geo: "box" as const, h: 30 };

/**
 * Build a label sprite for a prop marker so viewers can identify it on hover /
 * without needing tooltips.  Returns a small canvas-texture Sprite.
 */
function makePropLabelSprite(label: string, color: number): THREE.Sprite {
  const W = 320, H = 64;
  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d")!;

  ctx.fillStyle = "rgba(0,0,0,0.7)";
  ctx.beginPath();
  ctx.roundRect(2, 2, W - 4, H - 4, 8);
  ctx.fill();

  const hex = `#${color.toString(16).padStart(6, "0")}`;
  ctx.fillStyle = hex;
  ctx.font = "bold 22px 'Courier New', monospace";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(label, W / 2, H / 2);

  const tex = new THREE.CanvasTexture(canvas);
  const mat = new THREE.SpriteMaterial({ map: tex, depthTest: false, sizeAttenuation: true });
  const sprite = new THREE.Sprite(mat);
  sprite.scale.set(140, 28, 1);
  return sprite;
}

export interface PropLayerOptions {
  /** When true, draw a small name label above each marker. Default false. */
  showLabels?: boolean;
  /**
   * Stage-level scale from src/game/bg.c (room_data_float1). Props are authored
   * in model units that include this factor at runtime.
   */
  stageLevelScale?: number;
  /** Optional room triangles for source-like floor placement at pad X/Z. */
  groundTriangles?: RoomTriangle[];
}

/** Prop types for which primaryIndex is a model index into propModelNames. */
// Doors use a BG-matrix rendering pipeline in-game (not pad-based positioning),
// so they are excluded from the real-geometry layer and shown as placeholders only.
const PROP_TYPES_WITH_MODEL = new Set(["StandardProp", "SingleMonitor"]);

/**
 * Build a Three.js BufferGeometry from decoded prop triangles.
 * Vertex colors from the N64 shade buffer are included as vertex attributes.
 */
function buildPropGeometry(geo: PropModelGeometry): THREE.BufferGeometry {
  const positions: number[] = [];
  const colors: number[] = [];

  for (const tri of geo.triangles) {
    for (const v of [tri.a, tri.b, tri.c]) {
      positions.push(v.x, v.y, v.z);
      // N64 vertex colors are 0-255; normalize to 0-1 for Three.js
      colors.push(v.r / 255, v.g / 255, v.b / 255);
    }
  }

  const bufGeo = new THREE.BufferGeometry();
  bufGeo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  bufGeo.setAttribute("color",    new THREE.Float32BufferAttribute(colors, 3));
  bufGeo.computeVertexNormals();
  return bufGeo;
}

export function buildPropsLayer(
  placements: PropPlacement[],
  pads: PadRecord[],
  modelNames: string[],
  options: PropLayerOptions = {},
  propModels: Record<string, PropModelGeometry> = {}
): THREE.Group {
  const stageLevelScale = options.stageLevelScale ?? 1.0;
  const groundTriangles = options.groundTriangles ?? [];

  function barycentricYAtXZ(
    px: number,
    pz: number,
    a: { x: number; y: number; z: number },
    b: { x: number; y: number; z: number },
    c: { x: number; y: number; z: number }
  ): number | null {
    const den = (b.z - c.z) * (a.x - c.x) + (c.x - b.x) * (a.z - c.z);
    if (Math.abs(den) < 1e-8) return null;
    const w1 = ((b.z - c.z) * (px - c.x) + (c.x - b.x) * (pz - c.z)) / den;
    const w2 = ((c.z - a.z) * (px - c.x) + (a.x - c.x) * (pz - c.z)) / den;
    const w3 = 1 - w1 - w2;
    if (w1 < -1e-6 || w2 < -1e-6 || w3 < -1e-6) return null;
    return (w1 * a.y) + (w2 * b.y) + (w3 * c.y);
  }

  function sampleGroundY(x: number, z: number): number | null {
    let best: number | null = null;
    for (const tri of groundTriangles) {
      if (tri.isSecondary) continue;
      const y = barycentricYAtXZ(x, z, tri.a, tri.b, tri.c);
      if (y === null) continue;
      if (best === null || y > best) best = y;
    }
    return best;
  }

  const group = new THREE.Group();
  group.name = "props";

  // Cache decoded prop geometries so each model binary is only parsed once.
  const modelGeoCache = new Map<string, THREE.BufferGeometry | null>();
  const modelMatCache = new Map<string, THREE.MeshBasicMaterial>();

  function getPropGeo(modelName: string): THREE.BufferGeometry | null {
    if (!modelGeoCache.has(modelName)) {
      const geo = propModels[modelName];
      modelGeoCache.set(modelName, geo ? buildPropGeometry(geo) : null);
    }
    return modelGeoCache.get(modelName)!;
  }

  function getPropMat(modelName: string): THREE.MeshBasicMaterial {
    if (!modelMatCache.has(modelName)) {
      modelMatCache.set(
        modelName,
        new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.DoubleSide })
      );
    }
    return modelMatCache.get(modelName)!;
  }

  // Fallback placeholder caches (used when no binary geometry is available).
  const placeholderGeoCache = new Map<string, THREE.BufferGeometry>();
  const placeholderMatCache = new Map<number, THREE.MeshBasicMaterial>();

  function getPlaceholderGeo(key: string, style: typeof DEFAULT_PROP_STYLE): THREE.BufferGeometry {
    if (!placeholderGeoCache.has(key)) {
      let geo: THREE.BufferGeometry;
      if (style.geo === "sphere") {
        geo = new THREE.SphereGeometry(style.h * 0.55, 8, 8);
      } else if (style.geo === "cylinder") {
        geo = new THREE.CylinderGeometry(12, 12, style.h, 8);
      } else {
        geo = new THREE.BoxGeometry(30, style.h, 30);
      }
      placeholderGeoCache.set(key, geo);
    }
    return placeholderGeoCache.get(key)!;
  }

  function getPlaceholderMat(color: number): THREE.MeshBasicMaterial {
    if (!placeholderMatCache.has(color)) {
      placeholderMatCache.set(color, new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.82 }));
    }
    return placeholderMatCache.get(color)!;
  }

  for (const placement of placements) {
    const pad = pads[placement.padIndex];
    if (!pad) continue;

    const style = PROP_TYPE_STYLE[placement.type] ?? DEFAULT_PROP_STYLE;
    const modelName = PROP_TYPES_WITH_MODEL.has(placement.type)
      ? (modelNames[placement.primaryIndex] ?? null)
      : null;

    const realGeo = modelName ? getPropGeo(modelName) : null;

    let mesh: THREE.Mesh;
    if (realGeo && modelName) {
      // Render using the pre-computed renderScale from the export pipeline.
      // renderScale = PitemZ_entries[primaryIndex].scale × (extraScale / 256)
      // This replicates the game's modelSetScale() call chain exactly.
      const renderScale = (placement.renderScale ?? 0.1) * stageLevelScale;
      mesh = new THREE.Mesh(realGeo, getPropMat(modelName));
      mesh.scale.setScalar(renderScale);
    } else {
      // Fallback: type-colored placeholder primitive.
      mesh = new THREE.Mesh(
        getPlaceholderGeo(placement.type, style),
        getPlaceholderMat(style.color)
      );
    }

    mesh.position.set(pad.position.x, pad.position.y, pad.position.z);
    if (realGeo && modelName) {
      const model = propModels[modelName];
      const renderScale = (placement.renderScale ?? 0.1) * stageLevelScale;
      const groundY = sampleGroundY(pad.position.x, pad.position.z);
      if (groundY !== null) {
        // Match game intent from sub_GAME_7F04088C:
        // place object relative to floor using model Y-min and small +4 lift.
        mesh.position.y = groundY - (model.bounds.min.y * renderScale) + (4 * stageLevelScale);
      }
    }

    // Apply yaw from the pad orientation vector (x,z components give heading).
    const ori = pad.orientation;
    if (ori.x !== 0 || ori.z !== 0) {
      mesh.rotation.y = Math.atan2(ori.x, ori.z);
    }

    // Store metadata for future click inspection.
    mesh.userData = {
      propIndex:      placement.index,
      propType:       placement.type,
      propPadIndex:   placement.padIndex,
      propPrimaryIndex: placement.primaryIndex,
      propModelName:  modelName ?? `model_${placement.primaryIndex}`,
      hasRealGeometry: realGeo !== null,
    };

    group.add(mesh);

    if (options.showLabels) {
      const label = modelName ?? placement.type;
      const sprite = makePropLabelSprite(label, style.color);
      sprite.position.set(
        pad.position.x,
        pad.position.y + style.h + 24,
        pad.position.z
      );
      group.add(sprite);
    }
  }

  return group;
}
