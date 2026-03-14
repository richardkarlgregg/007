import * as THREE from "three";
import type { AtlasManifest, ModelGraphData, ModelGraphNode, PropModelGeometry } from "./StageLoader";
import { buildAtlasMaterial, buildPropGeometry, type FogUniforms } from "./DebugLayers";

interface BondClipKeyframe {
  t: number;
  yawDeg: number;
  weaponRaise: number;
  lean: number;
}

interface BondClip {
  name: string;
  durationSec: number;
  keyframes: BondClipKeyframe[];
}

/** Minimal mirror of IntroSwirlCamRecord from parseSetup.ts */
interface IntroSwirlCamRecord {
  x: number; y: number; z: number;
  theta: number; verta: number; duration: number;
}

/** Minimal mirror of IntroFixedCamRecord from parseSetup.ts */
export interface IntroFixedCamRecord {
  x: number; y: number; z: number;
  horzRad: number; vertRad: number; durationFrames: number;
}

export interface SetupIntroData {
  fixedCams: IntroFixedCamRecord[];
  swirlCams: IntroSwirlCamRecord[];
  [key: string]: unknown;
}

interface BondIntroAsset {
  atlas?: AtlasManifest;
  /** Parsed intro camera data from the level setup file. */
  intro?: SetupIntroData;
  actor: {
    name: string;
    modelHint: string;
    headHint: string;
    source: string;
    scale: number;
    bodyBoundingRadius: number;
    headBoundingRadius: number;
  };
  rig: {
    eyeHeight: number;
    shoulderWidth: number;
    handForward: number;
  };
  fpWeapon?: {
    statsName?: string;
    posX?: number;
    posY?: number;
    posZ?: number;
    sway?: number;
  };
  models: {
    body: PropModelGeometry;
    head: PropModelGeometry;
    gun?: PropModelGeometry;
    gunSourceScale?: number;
    gunIntro?: PropModelGeometry;
    gunIntroSourceScale?: number;
    gunFp?: PropModelGeometry;
    gunFpSourceScale?: number;
    gunFpBoundingRadius?: number;
  };
  joints: {
    body: Array<{
      index: number;
      parentIndex: number;
      opcode: number;
      jointId: number;
      origin: { x: number; y: number; z: number };
    }>;
    head: Array<{
      index: number;
      parentIndex: number;
      opcode: number;
      jointId: number;
      origin: { x: number; y: number; z: number };
    }>;
  };
  switches: {
    body: Array<{
      index: number;
      nodeOpcode: number;
      accumulatedOrigin: { x: number; y: number; z: number };
    }>;
  };
  graph?: {
    body: ModelGraphData;
    head: ModelGraphData;
    gunFp?: ModelGraphData;
  };
  clips: BondClip[];
}

export interface BondPoseSample {
  yawRad: number;
  weaponRaise: number;
  lean: number;
}

export class BondIntroActor {
  readonly group = new THREE.Group();
  readonly eyeAnchor = new THREE.Object3D();
  readonly weaponAnchor = new THREE.Object3D();

  /** Intro camera data from the level setup file (may be absent for older exports). */
  get introData(): SetupIntroData | undefined { return this.asset.intro; }
  get fpWeaponConfig(): Required<NonNullable<BondIntroAsset["fpWeapon"]>> {
    const fp = this.asset.fpWeapon ?? {};
    return {
      statsName: fp.statsName ?? "wppk",
      posX: fp.posX ?? 11.0,
      posY: fp.posY ?? -20.8,
      posZ: fp.posZ ?? -33.5,
      sway: fp.sway ?? 8.5,
    };
  }

  private readonly bodyPivot = new THREE.Object3D();
  private readonly clip: BondClip;
  private readonly clipDuration: number;
  private elapsed = 0;
  private readonly gunMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, vertexColors: true });
  private readonly gunAtlasMaterial: THREE.ShaderMaterial | null = null;
  private bodyGraphRuntime: GraphRuntime | null = null;
  private headGraphRuntime: GraphRuntime | null = null;
  private lodLevel = 0;

  setLodLevel(level: number): void {
    this.lodLevel = level;
    if (this.bodyGraphRuntime) applyGraphRelations(this.bodyGraphRuntime, this.lodLevel);
  }

  /** Reset clip playback to the beginning (call before entering SwirlOrbit). */
  resetClip(): void {
    this.elapsed = 0;
  }

  constructor(
    private readonly asset: BondIntroAsset,
    worldScale = 1.0,
    enableGraphRuntime = true,
    atlasTexture?: THREE.Texture,
    fogUniforms?: FogUniforms,
  ) {
    if (!asset.clips[0]) {
      throw new Error("Bond intro asset missing required clip");
    }
    this.clip = asset.clips[0];
    this.clipDuration = Math.max(0.001, this.clip.durationSec);

    // Build atlas material if atlas data + texture are available; otherwise fall
    // back to the debug checker material so the skeleton is always renderable.
    const atlasMat = (asset.atlas && atlasTexture)
      ? buildAtlasMaterial(asset.atlas, atlasTexture, fogUniforms)
      : null;
    this.gunAtlasMaterial = atlasMat;

    if (enableGraphRuntime && asset.graph?.body?.nodes?.length && asset.graph?.body?.chunks?.length) {
      this.bodyGraphRuntime = buildGraphRuntime(asset.graph.body, atlasMat);
      this.bodyPivot.add(this.bodyGraphRuntime.root);
      if (asset.graph.head?.nodes?.length && asset.graph.head?.chunks?.length) {
        this.headGraphRuntime = buildGraphRuntime(asset.graph.head, atlasMat);
        const headPlaceholderId = asset.graph.body.headPlaceholderNodeId;
        const headPlaceholderNode = headPlaceholderId !== null
          ? this.bodyGraphRuntime.nodesById.get(headPlaceholderId)
          : undefined;
        if (headPlaceholderNode) {
          headPlaceholderNode.object.add(this.headGraphRuntime.root);
        } else {
          this.bodyPivot.add(this.headGraphRuntime.root);
        }
      }
      applyGraphRelations(this.bodyGraphRuntime, this.lodLevel);
    } else {
      const bodyMesh = meshFromPropModel(
        asset.models.body,
        new THREE.MeshBasicMaterial({ color: 0xffffff, vertexColors: true }),
        false,
        asset.actor.bodyBoundingRadius > 0 ? asset.actor.bodyBoundingRadius : undefined
      );
      bodyMesh.position.y = 0;
      this.bodyPivot.add(bodyMesh);

      const headMesh = meshFromPropModel(
        asset.models.head,
        new THREE.MeshBasicMaterial({ color: 0xffffff, vertexColors: true }),
        false,
        asset.actor.headBoundingRadius > 0 ? asset.actor.headBoundingRadius : undefined
      );
      headMesh.position.set(0, 58, 1.1);
      this.bodyPivot.add(headMesh);
    }

    this.group.add(this.bodyPivot);
    this.group.scale.setScalar(worldScale * (asset.actor.scale || 1.0));

    const anchors = deriveAnchorsFromJoints(asset);
    if (this.bodyGraphRuntime && asset.graph?.body?.switchTable?.length) {
      const switchMap = new Map<number, number>();
      for (const s of asset.graph.body.switchTable) switchMap.set(s.index, s.nodeId);
      const headNodeId = switchMap.get(4);
      const handNodeId = switchMap.get(3);
      const headNode = headNodeId !== undefined ? this.bodyGraphRuntime.nodesById.get(headNodeId) : undefined;
      const handNode = handNodeId !== undefined ? this.bodyGraphRuntime.nodesById.get(handNodeId) : undefined;
      if (headNode) {
        headNode.object.add(this.eyeAnchor);
        this.eyeAnchor.position.set(0, 8.0, 1.5);
      } else {
        this.eyeAnchor.position.copy(anchors.eye);
        this.group.add(this.eyeAnchor);
      }
      if (handNode) {
        handNode.object.add(this.weaponAnchor);
        this.weaponAnchor.position.set(0, 0, 0);
      } else {
        this.weaponAnchor.position.copy(anchors.weapon);
        this.group.add(this.weaponAnchor);
      }
    } else {
      this.eyeAnchor.position.copy(anchors.eye);
      this.weaponAnchor.position.copy(anchors.weapon);
      this.group.add(this.eyeAnchor);
      this.group.add(this.weaponAnchor);
    }
  }

  setWorldPosition(position: THREE.Vector3): void {
    this.group.position.copy(position);
  }

  setFacingFromOrientation(orientation: THREE.Vector3): void {
    const yaw = Math.atan2(orientation.x, orientation.z);
    this.group.rotation.y = yaw;
  }

  tick(deltaSec: number): BondPoseSample {
    this.elapsed = Math.min(this.clipDuration, this.elapsed + deltaSec);
    const pose = sampleClip(this.clip, this.elapsed);
    this.bodyPivot.rotation.y = pose.yawRad;
    this.bodyPivot.rotation.z = pose.lean;
    if (this.bodyGraphRuntime) {
      applyGraphRelations(this.bodyGraphRuntime, this.lodLevel);
    }
    return pose;
  }

  get normalizedTime(): number {
    return this.elapsed / this.clipDuration;
  }

  createIntroGunMesh(): THREE.Mesh {
    const geo = this.asset.models.gunIntro ?? this.asset.models.gun;
    const sourceScale = this.asset.models.gunIntroSourceScale ?? this.asset.models.gunSourceScale ?? 1.0;
    if (!geo) throw new Error("Bond intro asset missing intro gun geometry");
    return this.createGunMeshFromGeo(geo, sourceScale);
  }

  createFpGunMesh(): THREE.Object3D {
    const gunGraph = this.asset.graph?.gunFp;
    if (!gunGraph?.nodes?.length || !gunGraph?.chunks?.length) {
      throw new Error("Bond intro asset missing strict first-person gun graph");
    }
    const runtime = buildGraphRuntime(gunGraph, this.gunAtlasMaterial);
    applyGraphRelations(runtime, 0);

    // Source gun.c: matrix_scalar_multiply(D_80053E04, matrix) where D_80053E04
    // = 0.10000001. Scales the 3×3 rotation sub-matrix (entries 0-11),
    // leaving translation untouched. This is a uniform geometry scale of 0.1.
    runtime.root.scale.multiplyScalar(0.10000001);

    // Gun viewmodel: marked transparent with high renderOrder (10000) so
    // Three.js sorts it into the transparent pass AFTER decals (renderOrder 0)
    // but AFTER the depth-clear sentinel (renderOrder 9999).  This matches
    // GoldenEye's draw order: opaque geo → decals (ZMODE_DEC) → Z-clear →
    // hand weapon.  depthTest/depthWrite stay ON for correct self-sorting.
    runtime.root.traverse((node: THREE.Object3D) => {
      if (!(node instanceof THREE.Mesh)) return;
      node.frustumCulled = false;
      node.renderOrder = 10000;
      const mats = Array.isArray(node.material) ? node.material : [node.material];
      for (const mat of mats) {
        mat.depthTest = true;
        mat.depthWrite = true;
        mat.transparent = true;
        mat.opacity = 1.0;
        mat.side = THREE.DoubleSide;
        mat.needsUpdate = true;
      }
    });

    let meshCount = 0;
    let vertexCount = 0;
    runtime.root.traverse((node: THREE.Object3D) => {
      if (!(node instanceof THREE.Mesh)) return;
      meshCount += 1;
      const pos = node.geometry.getAttribute("position");
      if (pos) vertexCount += pos.count;
    });
    console.log("[fpGun:create]", {
      graphNodes: gunGraph.nodes.length,
      graphChunks: gunGraph.chunks.length,
      meshCount,
      vertexCount,
      scale: runtime.root.scale.toArray(),
    });
    return runtime.root;
  }

  private createGunMeshFromGeo(geo: PropModelGeometry, sourceScale: number, targetRadius?: number): THREE.Mesh {
    if (this.gunAtlasMaterial) {
      const geometry = buildPropGeometry(geo);
      const gun = new THREE.Mesh(geometry, this.gunAtlasMaterial);
      let scale = sourceScale;
      if (targetRadius && targetRadius > 0) {
        const cur = boundsRadius(geo.sourceBounds ?? geo.bounds);
        if (cur > 0.0001) scale *= targetRadius / cur;
      }
      gun.scale.setScalar(scale);
      return gun;
    }
    const gun = meshFromPropModel(geo, this.gunMaterial, true, targetRadius);
    gun.scale.setScalar(sourceScale);
    return gun;
  }
}

function boundsRadius(
  bounds:
    | { min: { x: number; y: number; z: number }; max: { x: number; y: number; z: number } }
    | undefined
): number {
  if (!bounds) return 0;
  const corners: Array<{ x: number; y: number; z: number }> = [
    { x: bounds.min.x, y: bounds.min.y, z: bounds.min.z },
    { x: bounds.min.x, y: bounds.min.y, z: bounds.max.z },
    { x: bounds.min.x, y: bounds.max.y, z: bounds.min.z },
    { x: bounds.min.x, y: bounds.max.y, z: bounds.max.z },
    { x: bounds.max.x, y: bounds.min.y, z: bounds.min.z },
    { x: bounds.max.x, y: bounds.min.y, z: bounds.max.z },
    { x: bounds.max.x, y: bounds.max.y, z: bounds.min.z },
    { x: bounds.max.x, y: bounds.max.y, z: bounds.max.z },
  ];
  let r = 0;
  for (const c of corners) {
    const d = Math.sqrt(c.x * c.x + c.y * c.y + c.z * c.z);
    if (d > r) r = d;
  }
  return r;
}

interface GraphRuntimeNode {
  def: ModelGraphNode;
  object: THREE.Object3D;
}

interface GraphRuntime {
  root: THREE.Group;
  nodesById: Map<number, GraphRuntimeNode>;
  rootNodeId: number;
}

function buildGraphRuntime(
  graph: ModelGraphData,
  atlasMaterial: THREE.ShaderMaterial | null,
  targetRadius?: number
): GraphRuntime {
  const root = new THREE.Group();
  const nodesById = new Map<number, GraphRuntimeNode>();
  // Fallback debug checker material used when no atlas is available.
  const debugMap = atlasMaterial ? null : getBondDebugCheckerTexture();
  for (const def of graph.nodes) {
    const object = new THREE.Object3D();
    if (def.origin) object.position.set(def.origin.x, def.origin.y, def.origin.z);
    nodesById.set(def.id, { def, object });
  }
  for (const n of nodesById.values()) {
    if (n.def.parentId === null) root.add(n.object);
    else nodesById.get(n.def.parentId)?.object.add(n.object);
  }
  for (const chunk of graph.chunks) {
    const tempGeo: PropModelGeometry = {
      triangles: chunk.triangles,
      materialIds: chunk.materialIds,
      bounds: chunk.bounds,
      sourceBounds: graph.sourceBounds,
    };
    let mesh: THREE.Mesh;
    if (atlasMaterial) {
      // Use the same atlas geometry builder as props so the shader attributes
      // (aMaterialId, aTexelUV, aVertexColor) are all present.
      const geo = buildPropGeometry(tempGeo);
      mesh = new THREE.Mesh(geo, atlasMaterial);
    } else {
      const mat = new THREE.MeshBasicMaterial({
        color: colorFromNodeId(chunk.nodeId),
        map: debugMap!,
        side: THREE.DoubleSide,
      });
      mesh = meshFromPropModel(tempGeo, mat, false);
    }
    const node = nodesById.get(chunk.nodeId);
    if (node) node.object.add(mesh);
  }
  if (targetRadius && targetRadius > 0) {
    const s = computeGraphRadiusScale(graph, targetRadius);
    if (Number.isFinite(s) && s > 0) {
      root.scale.setScalar(s);
    }
  }
  return { root, nodesById, rootNodeId: graph.rootNodeId };
}

function computeGraphRadiusScale(graph: ModelGraphData, targetRadius: number): number {
  let curR = 0;
  const src = graph.sourceBounds;
  if (src) {
    const corners: Array<{ x: number; y: number; z: number }> = [
      { x: src.min.x, y: src.min.y, z: src.min.z },
      { x: src.min.x, y: src.min.y, z: src.max.z },
      { x: src.min.x, y: src.max.y, z: src.min.z },
      { x: src.min.x, y: src.max.y, z: src.max.z },
      { x: src.max.x, y: src.min.y, z: src.min.z },
      { x: src.max.x, y: src.min.y, z: src.max.z },
      { x: src.max.x, y: src.max.y, z: src.min.z },
      { x: src.max.x, y: src.max.y, z: src.max.z },
    ];
    for (const c of corners) {
      const r = Math.sqrt(c.x * c.x + c.y * c.y + c.z * c.z);
      if (r > curR) curR = r;
    }
  } else {
    // FP gun graph exports currently omit sourceBounds; derive a strict radius
    // from chunk bounds to preserve source-scale normalization.
    for (const chunk of graph.chunks) {
      const b = chunk.bounds;
      const corners: Array<{ x: number; y: number; z: number }> = [
        { x: b.min.x, y: b.min.y, z: b.min.z },
        { x: b.min.x, y: b.min.y, z: b.max.z },
        { x: b.min.x, y: b.max.y, z: b.min.z },
        { x: b.min.x, y: b.max.y, z: b.max.z },
        { x: b.max.x, y: b.min.y, z: b.min.z },
        { x: b.max.x, y: b.min.y, z: b.max.z },
        { x: b.max.x, y: b.max.y, z: b.min.z },
        { x: b.max.x, y: b.max.y, z: b.max.z },
      ];
      for (const c of corners) {
        const r = Math.sqrt(c.x * c.x + c.y * c.y + c.z * c.z);
        if (r > curR) curR = r;
      }
    }
  }
  if (!(curR > 0.0001)) return 1.0;
  return targetRadius / curR;
}

let bondDebugCheckerTexture: THREE.CanvasTexture | null = null;

function getBondDebugCheckerTexture(): THREE.CanvasTexture {
  if (bondDebugCheckerTexture) return bondDebugCheckerTexture;
  const c = document.createElement("canvas");
  c.width = 128;
  c.height = 128;
  const ctx = c.getContext("2d");
  if (!ctx) {
    const fallback = new THREE.CanvasTexture(c);
    fallback.wrapS = THREE.RepeatWrapping;
    fallback.wrapT = THREE.RepeatWrapping;
    fallback.repeat.set(2, 2);
    bondDebugCheckerTexture = fallback;
    return fallback;
  }
  const sz = 16;
  for (let y = 0; y < c.height; y += sz) {
    for (let x = 0; x < c.width; x += sz) {
      const on = ((x / sz) + (y / sz)) % 2 === 0;
      ctx.fillStyle = on ? "#d9d9d9" : "#3f3f3f";
      ctx.fillRect(x, y, sz, sz);
    }
  }
  ctx.strokeStyle = "#202020";
  ctx.lineWidth = 2;
  ctx.strokeRect(0, 0, c.width, c.height);
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(2, 2);
  tex.needsUpdate = true;
  bondDebugCheckerTexture = tex;
  return tex;
}

function colorFromNodeId(id: number): THREE.Color {
  const hue = ((id * 0.173) % 1 + 1) % 1;
  return new THREE.Color().setHSL(hue, 0.55, 0.62);
}

/**
 * Activate the correct subset of graph nodes matching the requested LOD level.
 * lodLevel 0 = highest quality (first/nearest LOD per group, default).
 * lodLevel 1 = second quality level. lodLevel -1 = show all LOD levels.
 *
 * Mirrors native modelUpdateMatrices / modelApply* traversal:
 *   - SWITCH (0x12): descend into controlsNodeId (default visible=true)
 *   - LOD (0x08): only activate the Nth sibling LOD for each body part
 *   - All others: descend into childId then follow nextId chain
 */
function applyGraphRelations(runtime: GraphRuntime, lodLevel = 0): void {
  const active = new Set<number>();
  // Track how many LOD nodes we've encountered per parent — used to pick
  // the correct LOD level in each sibling chain.
  const lodCountByParent = new Map<number | null, number>();

  const visitList = (startId: number | null | undefined, allowNext = true): void => {
    let cur = startId;
    let guard = 0;
    while (cur !== null && cur !== undefined && guard < 100000) {
      guard += 1;
      if (active.has(cur)) break;
      const n = runtime.nodesById.get(cur);
      if (!n) break;

      if (n.def.opcode === 0x08) {
        // LOD node: track which index within the sibling LOD group this is.
        const parentId = n.def.parentId ?? null;
        const count = lodCountByParent.get(parentId) ?? 0;
        lodCountByParent.set(parentId, count + 1);
        // Skip this LOD if it doesn't match the requested level.
        // lodLevel -1 means show all levels.
        if (lodLevel >= 0 && count !== lodLevel) {
          cur = n.def.nextId;
          continue;
        }
      }

      active.add(cur);

      let childStart: number | null | undefined = n.def.childId;
      if (n.def.opcode === 0x12) {
        childStart = n.def.controlsNodeId ?? n.def.childId;
      } else if (n.def.opcode === 0x08) {
        childStart = n.def.affectsNodeId ?? n.def.childId;
      }
      if (childStart !== null && childStart !== undefined) {
        // Mirror traversal constraints used by model tree walk:
        // switch-controlled branch should not implicitly traverse sibling masks.
        visitList(childStart, n.def.opcode !== 0x12);
      }
      if (n.def.opcode === 0x09) {
        // BSP nodes reorder two sibling groups for painter's order.
        // Both sides remain part of traversal; only order changes at runtime.
        if (n.def.leftNodeId !== null && n.def.leftNodeId !== undefined) {
          visitList(n.def.leftNodeId, true);
        }
        if (n.def.rightNodeId !== null && n.def.rightNodeId !== undefined) {
          visitList(n.def.rightNodeId, true);
        }
      }

      cur = allowNext ? n.def.nextId : null;
    }
  };

  visitList(runtime.rootNodeId);

  for (const [id, n] of runtime.nodesById.entries()) {
    n.object.visible = active.has(id);
  }
}

function deriveAnchorsFromJoints(asset: BondIntroAsset): { eye: THREE.Vector3; weapon: THREE.Vector3 } {
  const eye = new THREE.Vector3(0, asset.rig.eyeHeight, 1.6);
  const weapon = new THREE.Vector3(asset.rig.shoulderWidth * 0.58, asset.rig.eyeHeight - 7, asset.rig.handForward);
  const sw = asset.switches?.body ?? [];
  // Source attachment indices used in native code:
  // right hand = Switches[3], head = Switches[4], left hand = Switches[5]
  const swHead = sw.find((s) => s.index === 4);
  const swRight = sw.find((s) => s.index === 3);
  if (swHead) {
    eye.set(swHead.accumulatedOrigin.x, swHead.accumulatedOrigin.y + 8.0, swHead.accumulatedOrigin.z + 1.5);
  }
  if (swRight) {
    weapon.set(swRight.accumulatedOrigin.x, swRight.accumulatedOrigin.y, swRight.accumulatedOrigin.z);
  }
  return { eye, weapon };
}

function sampleClip(clip: BondClip, t: number): BondPoseSample {
  if (clip.keyframes.length === 0) {
    return { yawRad: 0, weaponRaise: 1, lean: 0 };
  }
  if (clip.keyframes.length === 1) {
    const k = clip.keyframes[0];
    return { yawRad: THREE.MathUtils.degToRad(k.yawDeg), weaponRaise: k.weaponRaise, lean: k.lean };
  }
  const clampedT = THREE.MathUtils.clamp(t, 0, clip.durationSec);
  for (let i = 0; i < clip.keyframes.length - 1; i += 1) {
    const a = clip.keyframes[i];
    const b = clip.keyframes[i + 1];
    if (clampedT > b.t) continue;
    const span = Math.max(0.0001, b.t - a.t);
    const alpha = THREE.MathUtils.clamp((clampedT - a.t) / span, 0, 1);
    const yawDeg = THREE.MathUtils.lerp(a.yawDeg, b.yawDeg, alpha);
    return {
      yawRad: THREE.MathUtils.degToRad(yawDeg),
      weaponRaise: THREE.MathUtils.lerp(a.weaponRaise, b.weaponRaise, alpha),
      lean: THREE.MathUtils.lerp(a.lean, b.lean, alpha),
    };
  }
  const tail = clip.keyframes[clip.keyframes.length - 1];
  return { yawRad: THREE.MathUtils.degToRad(tail.yawDeg), weaponRaise: tail.weaponRaise, lean: tail.lean };
}

function meshFromPropModel(
  geo: PropModelGeometry,
  material: THREE.Material,
  remapToSourceBounds = false,
  targetRadius?: number
): THREE.Mesh {
  if (!geo.triangles || geo.triangles.length === 0) {
    throw new Error("Prop model geometry has no triangles");
  }
  const positions: number[] = [];
  const colors: number[] = [];
  const uvs: number[] = [];
  for (const tri of geo.triangles) {
    for (const v of [tri.a, tri.b, tri.c]) {
      positions.push(v.x, v.y, v.z);
      colors.push(v.r / 255, v.g / 255, v.b / 255);
      uvs.push(v.u / 32.0, v.v / 32.0);
    }
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
  geometry.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));
  if (remapToSourceBounds && geo.sourceBounds) {
    remapGeometryToSourceBounds(geometry, geo);
  }
  if (targetRadius && targetRadius > 0) {
    applyTargetRadiusScale(geometry, targetRadius);
  }
  geometry.computeVertexNormals();
  return new THREE.Mesh(geometry, material);
}

function remapGeometryToSourceBounds(geometry: THREE.BufferGeometry, geo: PropModelGeometry): void {
  if (!geo.sourceBounds) return;
  geometry.computeBoundingBox();
  const bb = geometry.boundingBox;
  const pos = geometry.getAttribute("position") as THREE.BufferAttribute | undefined;
  if (!bb || !pos) return;
  const src = geo.sourceBounds;

  const remap = (value: number, inMin: number, inMax: number, outMin: number, outMax: number): number => {
    const den = inMax - inMin;
    if (Math.abs(den) < 1e-8) return outMin;
    const t = (value - inMin) / den;
    return outMin + (outMax - outMin) * t;
  };

  for (let i = 0; i < pos.count; i += 1) {
    pos.setXYZ(
      i,
      remap(pos.getX(i), bb.min.x, bb.max.x, src.min.x, src.max.x),
      remap(pos.getY(i), bb.min.y, bb.max.y, src.min.y, src.max.y),
      remap(pos.getZ(i), bb.min.z, bb.max.z, src.min.z, src.max.z)
    );
  }
  pos.needsUpdate = true;
}

function applyTargetRadiusScale(geometry: THREE.BufferGeometry, targetRadius: number): void {
  const pos = geometry.getAttribute("position") as THREE.BufferAttribute | undefined;
  if (!pos) return;
  const r2s: number[] = [];
  for (let i = 0; i < pos.count; i += 1) {
    const x = pos.getX(i);
    const y = pos.getY(i);
    const z = pos.getZ(i);
    const r2 = x * x + y * y + z * z;
    r2s.push(r2);
  }
  if (r2s.length === 0) return;
  r2s.sort((a, b) => a - b);
  // Use robust radius (98th percentile) instead of absolute max so a few
  // decode outliers don't collapse overall character scale.
  const pIndex = Math.max(0, Math.min(r2s.length - 1, Math.floor(r2s.length * 0.98)));
  const curR = Math.sqrt(r2s[pIndex]);
  if (!(curR > 0.0001)) return;
  const s = targetRadius / curR;
  for (let i = 0; i < pos.count; i += 1) {
    pos.setXYZ(i, pos.getX(i) * s, pos.getY(i) * s, pos.getZ(i) * s);
  }
  pos.needsUpdate = true;
}

export interface BondIntroLoadOptions {
  forceLegacy?: boolean;
  atlasTexture?: THREE.Texture;
  fogUniforms?: FogUniforms;
}

export async function loadBondIntroAsset(path: string, worldScale = 1.0, options: BondIntroLoadOptions = {}): Promise<BondIntroActor> {
  const response = await fetch(path);
  if (!response.ok) {
    throw new Error(`Failed to load Bond intro asset: ${response.status}`);
  }
  const asset = (await response.json()) as BondIntroAsset;
  return new BondIntroActor(asset, worldScale, !options.forceLegacy, options.atlasTexture, options.fogUniforms);
}
