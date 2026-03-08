import * as THREE from "three";
import { buildBgMesh, buildBgMeshWithAtlas, buildPbrOverrideMeshes, buildRemasterPlaceholderMeshes, buildPadsLayer, buildPortalsLayer, buildPropsLayer, buildRoomLabelsLayer, buildStanMesh, makeFogUniforms } from "./viewer/DebugLayers";
import type { FogUniforms } from "./viewer/DebugLayers";
import { loadStageData } from "./viewer/StageLoader";
import type { AtlasManifest, RoomTriangle } from "./viewer/StageLoader";
import { collectOverriddenIds, loadOverrides } from "./viewer/OverrideLoader";

async function bootstrap(): Promise<void> {
  const root = document.getElementById("app");
  if (!root) {
    throw new Error("Missing #app element");
  }

  // ── Fog — derived from src/game/fog.c, LEVELID_RUNWAY ──────────────────────
  //
  // Technical reality (from source):
  //   BlendMultiplier = 10   → znear clip plane (world units)
  //   FarFog          = 15000 → zfar clip plane (draw distance)
  //   dif_ght  = 0x3E4 (996) → gSPFogPosition min (0-1000 clip-space)
  //   far_alight = 0x3E8 (1000) → gSPFogPosition max
  //
  //   Converting clip-space to world-space:
  //     fogStart = (996/1000) × (15000-10) + 10 = 14,940 world units
  //     fogEnd   = (1000/1000) × (15000-10) + 10 = 15,000 world units
  //
  //   The RSP fog ramp is only ~60 world units wide, right at the far clip.
  //   NearFog=6000 is the CPU prop-culling distance, NOT a visual fog onset.
  //   The N64 "haze" effect comes from:
  //     (a) sky/background colour == fog colour (objects fade into the sky)
  //     (b) hard far-clip at 15000, blurred by 320×240 + CRT display
  //     (c) G_AD_NOISE dither on fog alpha, softening the clip edge
  //
  // Sky colour: RGB(0x10, 0x30, 0x40) = (16, 48, 64) — dark pre-dawn steel blue
  //
  // Three fog modes (cycle with G key):
  //   0 – N64 Accurate : thin LINEAR ramp just before the 15000 clip plane
  //   1 – Hazy         : FogExp2 soft atmospheric haze (best for high-res)
  //   2 – Off          : no fog, dark neutral background (debug)

  const FOG_COLOR = new THREE.Color(16 / 255, 48 / 255, 64 / 255); // N64 sky
  const NO_FOG_BG = new THREE.Color(0x080c14);                      // debug bg

  // fog_tables[] per-level data (NTSC) — for reference / future multi-stage use
  // Stage        znear  zfar   fogStart  fogEnd   R     G     B
  // RUNWAY          10  15000   14940    15000   0x10  0x30  0x40
  // DAM              5  15000   14940    15000   0x10  0x30  0x60
  // SURFACE          2   2500    2495     2500   0x60  0x60  0x80
  // FACILITY        10   5000    4970     5000   0x10  0x20  0x10
  // CRADLE          10   9500    9461     9500   0x60  0x80  0xA0
  // EGYPT           10  20000   19940    20000   0x10  0x30  0x60
  // BUNKER2         10  10000    9970    10000   0x10  0x00  0x00

  // Three fog modes (cycle with G):
  //
  //  "gameplay"  — matches N64 draw-distance feel: NearFog=6000 (prop culling),
  //                FarFog=15000 (zfar clip).  Linear ramp 6000→15000.
  //                Clear sky close-up, horizon fully fogged at the clip distance.
  //
  //  "hazy"      — stronger effect for high-res viewing.  Fog builds from ~1500u
  //                so you feel the atmosphere while flying around the map:
  //                  ~0 % at 1500u  |  ~50 % at 4250u  |  ~100 % at 7000u
  //
  //  "off"       — no fog, neutral dark sky (debug / wireframe use)

  type FogMode = "gameplay" | "hazy" | "off";
  let fogMode: FogMode = "hazy";

  // Shared fog uniform objects — the atlas ShaderMaterial holds references to
  // these same objects, so updating .value here is reflected on the next frame.
  const fogUniforms: FogUniforms = makeFogUniforms();

  function applyFog(): void {
    if (fogMode === "off") {
      scene.fog        = null;
      scene.background = NO_FOG_BG.clone();
      fogUniforms.uFogEnabled.value = 0.0;
      return;
    }
    scene.background = FOG_COLOR.clone();
    fogUniforms.uFogEnabled.value = 1.0;
    fogUniforms.uFogColor.value.copy(FOG_COLOR);

    if (fogMode === "gameplay") {
      // Scaled to map bounds (X:257-1592, Z:-2806 to -99 ≈ 2700u deep).
      // Clear nearby, heavy at the far edge of the runway.
      scene.fog = new THREE.Fog(FOG_COLOR.clone(), 500, 2500);
      fogUniforms.uFogNear.value = 500;
      fogUniforms.uFogFar.value  = 2500;
    } else {
      // Hazy: ~50% fog at ~600u so distant rooms/mountains fade visibly.
      scene.fog = new THREE.Fog(FOG_COLOR.clone(), 200, 1200);
      fogUniforms.uFogNear.value = 200;
      fogUniforms.uFogFar.value  = 1200;
    }
  }

  const scene = new THREE.Scene();
  applyFog(); // sets initial fog on both scene and fogUniforms

  const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 20000);
  camera.position.set(850, 420, -1250);
  // Establish initial look direction, then bake into yaw/pitch for fly camera.
  camera.rotation.order = "YXZ";
  camera.lookAt(850, 0, -900);
  let yaw   = camera.rotation.y;
  let pitch = camera.rotation.x;

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.toneMapping = THREE.NoToneMapping;
  renderer.toneMappingExposure = 1.0;
  renderer.shadowMap.enabled = false;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  root.appendChild(renderer.domElement);

  // ── Pointer-lock free-fly ────────────────────────────────────────────────
  let flyMode = false;
  const flyOverlay = document.getElementById("fly-overlay");
  const flyHint    = document.getElementById("fly-hint");

  function setFlyMode(active: boolean): void {
    flyMode = active;
    if (flyOverlay) flyOverlay.style.display = active ? "none" : "flex";
    if (flyHint)    flyHint.textContent       = active ? "Esc — exit fly mode" : "";
  }
  setFlyMode(false);

  document.addEventListener("pointerlockchange", () => {
    setFlyMode(document.pointerLockElement === renderer.domElement);
  });

  document.addEventListener("mousemove", (e: MouseEvent) => {
    if (!flyMode) return;
    const sensitivity = 0.002;
    yaw   -= e.movementX * sensitivity;
    pitch -= e.movementY * sensitivity;
    pitch  = Math.max(-Math.PI / 2 + 0.01, Math.min(Math.PI / 2 - 0.01, pitch));
    camera.rotation.order = "YXZ";
    camera.rotation.y = yaw;
    camera.rotation.x = pitch;
  });

  // Lighting rigs:
  // - "n64" mode keeps scene lighting subdued so atlas/vertex-shaded rendering
  //   remains the visual baseline.
  // - "remaster" mode enables stronger physically-based lighting + shadows.
  // Atlas ShaderMaterial remains driven by its own vertex shade math either way.
  const ambient = new THREE.AmbientLight(0xffffff, 0.0);
  scene.add(ambient);

  const hemi = new THREE.HemisphereLight(0xdce8ff, 0x303040, 0.25);
  scene.add(hemi);

  const directional = new THREE.DirectionalLight(0xfff4e0, 0.3);
  directional.position.set(1700, 2300, -900);
  directional.castShadow = false;
  directional.shadow.mapSize.set(4096, 4096);
  directional.shadow.camera.near = 50;
  directional.shadow.camera.far = 9000;
  directional.shadow.camera.left = -3000;
  directional.shadow.camera.right = 3000;
  directional.shadow.camera.top = 2500;
  directional.shadow.camera.bottom = -2500;
  directional.shadow.bias = -0.0003;
  directional.shadow.normalBias = 0.55;
  directional.target.position.set(900, 0, -1400);
  scene.add(directional.target);
  scene.add(directional);

  // Fill light from the opposite side to soften shadow contrast.
  const fill = new THREE.DirectionalLight(0xb0c8ff, 0.1);
  fill.position.set(-900, 700, 500);
  scene.add(fill);

  const sunHelper = new THREE.DirectionalLightHelper(directional, 180, 0xffddaa);
  sunHelper.visible = false;
  scene.add(sunHelper);
  const shadowHelper = new THREE.CameraHelper(directional.shadow.camera);
  shadowHelper.visible = false;
  scene.add(shadowHelper);

  const grid = new THREE.GridHelper(6000, 120, 0x3f4558, 0x202633);
  scene.add(grid);
  grid.visible = false;

  const stageDataPath = `${import.meta.env.BASE_URL}data/stages/runway.json`;
  const stage = await loadStageData(stageDataPath);

  let atlasPath = "";
  let atlasTextureForProps: THREE.Texture | null = null;
  // Flat-colour mesh is always built; atlas mesh is built when atlas data exists.
  const flatBgMesh: THREE.Object3D = buildBgMesh(stage.roomTriangles);
  let atlasBgMesh: THREE.Object3D | null = null;

  // ── PBR overrides ──────────────────────────────────────────────────────────
  // Try to load runway_overrides.json; silently no-ops if the file is absent or
  // all entries have empty materialIds arrays (first-time setup).
  const overridesPath = `${import.meta.env.BASE_URL}data/stages/runway_overrides.json`;
  const pbr = await loadOverrides(overridesPath, import.meta.env.BASE_URL);
  const overriddenIds = collectOverriddenIds(pbr);
  let pbrOverrideGroup: THREE.Group | null = null;
  let remasterPlaceholderGroup: THREE.Group | null = null;
  // true = remaster PBR is shown (when available); can be toggled with R key.
  let pbrEnabled = true;

  if (stage.atlas) {
    atlasPath = `${import.meta.env.BASE_URL}data/stages/${stage.atlas.atlasImage}`;
    const atlasTexture = await new THREE.TextureLoader().loadAsync(atlasPath);
    atlasTextureForProps = atlasTexture;
    // Atlas mesh always covers all materials.  PBR layer sits on top via
    // polygon offset so toggling it off cleanly reveals the N64 texture below.
    // Pass fogUniforms so the shader can update fog live via the G key.
    atlasBgMesh = buildBgMeshWithAtlas(stage.roomTriangles, stage.atlas, atlasTexture, new Set(), fogUniforms);

    if (pbr.length > 0) {
      pbrOverrideGroup = buildPbrOverrideMeshes(stage.roomTriangles, stage.atlas, pbr);
      scene.add(pbrOverrideGroup);
    }
    remasterPlaceholderGroup = buildRemasterPlaceholderMeshes(stage.roomTriangles, stage.atlas, overriddenIds);
    scene.add(remasterPlaceholderGroup);
  }

  // Start in textured mode if atlas is available, otherwise flat colours.
  let useAtlas = atlasBgMesh !== null;
  let bgMesh: THREE.Object3D = useAtlas ? atlasBgMesh! : flatBgMesh;
  scene.add(bgMesh);

  // Track user-requested visibility separately from the visibility we may
  // temporarily clear for remaster mode.  bgMesh itself can be atlasBgMesh,
  // so reading bgMesh.visible after hiding the atlas for remaster would
  // return false and break the R-key toggle.
  let bgVisible = true;

  function hasRemasterLayers(): boolean {
    const hasOverrides = Boolean(pbrOverrideGroup && pbrOverrideGroup.children.length > 0);
    const hasPlaceholders = Boolean(remasterPlaceholderGroup && remasterPlaceholderGroup.children.length > 0);
    return hasOverrides || hasPlaceholders;
  }

  function syncRemasterLayers(): void {
    const showRemaster = Boolean(
      hasRemasterLayers() &&
      pbrEnabled &&
      useAtlas &&
      bgVisible
    );

    // Always drive actual visibility from bgVisible so the atlas is never
    // permanently lost.  In remaster mode hide atlas so placeholders show.
    if (atlasBgMesh) {
      atlasBgMesh.visible = useAtlas && bgVisible && !showRemaster;
    }
    // flatBgMesh is shown when not in atlas mode.
    flatBgMesh.visible = !useAtlas && bgVisible;
    if (pbrOverrideGroup) pbrOverrideGroup.visible = showRemaster;
    if (remasterPlaceholderGroup) remasterPlaceholderGroup.visible = showRemaster;
  }
  syncRemasterLayers();

  type LightingMode = "n64" | "remaster";
  let lightingMode: LightingMode | null = null;

  interface RemasterLightingConfig {
    exposure: number;
    hemiIntensity: number;
    sunIntensity: number;
    fillIntensity: number;
    ambientIntensity: number;
    sunAzimuthDeg: number;
    sunElevationDeg: number;
    sunDistance: number;
    targetX: number;
    targetY: number;
    targetZ: number;
    shadowEnabled: boolean;
    shadowMapSize: number;
    shadowRadius: number;
    shadowNear: number;
    shadowFar: number;
    shadowBias: number;
    shadowNormalBias: number;
    flareEnabled: boolean;
    flareIntensity: number;
    showHelpers: boolean;
  }

  type LightingPresetName = "midday" | "dawn" | "overcast";

  const remasterPresets: Record<LightingPresetName, RemasterLightingConfig> = {
    midday: {
      exposure: 1.18,
      hemiIntensity: 0.85,
      sunIntensity: 2.55,
      fillIntensity: 0.42,
      ambientIntensity: 0.08,
      sunAzimuthDeg: -28,
      sunElevationDeg: 52,
      sunDistance: 3300,
      targetX: 900,
      targetY: 0,
      targetZ: -1400,
      shadowEnabled: true,
      shadowMapSize: 4096,
      shadowRadius: 2800,
      shadowNear: 50,
      shadowFar: 9000,
      shadowBias: -0.00030,
      shadowNormalBias: 0.55,
      flareEnabled: true,
      flareIntensity: 1.0,
      showHelpers: false
    },
    dawn: {
      exposure: 1.23,
      hemiIntensity: 0.95,
      sunIntensity: 2.25,
      fillIntensity: 0.55,
      ambientIntensity: 0.12,
      sunAzimuthDeg: -70,
      sunElevationDeg: 18,
      sunDistance: 3500,
      targetX: 900,
      targetY: 0,
      targetZ: -1400,
      shadowEnabled: true,
      shadowMapSize: 4096,
      shadowRadius: 3000,
      shadowNear: 30,
      shadowFar: 9500,
      shadowBias: -0.00035,
      shadowNormalBias: 0.65,
      flareEnabled: true,
      flareIntensity: 0.9,
      showHelpers: false
    },
    overcast: {
      exposure: 1.10,
      hemiIntensity: 1.25,
      sunIntensity: 1.15,
      fillIntensity: 0.70,
      ambientIntensity: 0.20,
      sunAzimuthDeg: -40,
      sunElevationDeg: 40,
      sunDistance: 3200,
      targetX: 900,
      targetY: 0,
      targetZ: -1400,
      shadowEnabled: true,
      shadowMapSize: 2048,
      shadowRadius: 2800,
      shadowNear: 50,
      shadowFar: 9000,
      shadowBias: -0.00025,
      shadowNormalBias: 0.45,
      flareEnabled: true,
      flareIntensity: 0.55,
      showHelpers: false
    }
  };

  const remasterLighting: RemasterLightingConfig = { ...remasterPresets.midday };

  function clamp(value: number, min: number, max: number): number {
    return Math.max(min, Math.min(max, value));
  }

  function applySunPositionFromConfig(): void {
    const az = THREE.MathUtils.degToRad(remasterLighting.sunAzimuthDeg);
    const el = THREE.MathUtils.degToRad(remasterLighting.sunElevationDeg);
    const horiz = Math.cos(el) * remasterLighting.sunDistance;

    directional.target.position.set(remasterLighting.targetX, remasterLighting.targetY, remasterLighting.targetZ);
    directional.position.set(
      remasterLighting.targetX + Math.cos(az) * horiz,
      remasterLighting.targetY + Math.sin(el) * remasterLighting.sunDistance,
      remasterLighting.targetZ + Math.sin(az) * horiz
    );
    directional.target.updateMatrixWorld();
    sunHelper.update();
  }

  function applyShadowSettingsFromConfig(): void {
    const mapSize = Number.isFinite(remasterLighting.shadowMapSize) ? remasterLighting.shadowMapSize : 2048;
    directional.shadow.mapSize.set(mapSize, mapSize);
    if (directional.shadow.map) {
      directional.shadow.map.dispose();
      directional.shadow.map = null;
    }
    directional.shadow.camera.near = Math.max(0.1, remasterLighting.shadowNear);
    directional.shadow.camera.far = Math.max(remasterLighting.shadowNear + 1, remasterLighting.shadowFar);
    const r = Math.max(100, remasterLighting.shadowRadius);
    directional.shadow.camera.left = -r;
    directional.shadow.camera.right = r;
    directional.shadow.camera.top = r;
    directional.shadow.camera.bottom = -r;
    directional.shadow.bias = remasterLighting.shadowBias;
    directional.shadow.normalBias = remasterLighting.shadowNormalBias;
    directional.shadow.camera.updateProjectionMatrix();
    directional.shadow.needsUpdate = true;
    shadowHelper.update();
  }

  function applyHelpersVisibility(): void {
    sunHelper.visible = remasterLighting.showHelpers;
    shadowHelper.visible = remasterLighting.showHelpers;
  }

  function makeFlareTexture(stops: Array<{ offset: number; color: string }>, size = 256): THREE.Texture {
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      const fallback = new THREE.Texture();
      fallback.needsUpdate = true;
      return fallback;
    }
    const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
    for (const s of stops) g.addColorStop(s.offset, s.color);
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, size, size);
    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.needsUpdate = true;
    return tex;
  }

  const flareRootTex = makeFlareTexture([
    { offset: 0.0, color: "rgba(255,250,210,1.0)" },
    { offset: 0.2, color: "rgba(255,232,170,0.9)" },
    { offset: 0.5, color: "rgba(255,200,120,0.45)" },
    { offset: 1.0, color: "rgba(255,170,90,0.0)" }
  ]);
  const flareGhostTex = makeFlareTexture([
    { offset: 0.0, color: "rgba(175,210,255,0.85)" },
    { offset: 0.55, color: "rgba(140,180,255,0.22)" },
    { offset: 1.0, color: "rgba(140,180,255,0.0)" }
  ]);

  function createFlareSprite(tex: THREE.Texture, size: number): THREE.Sprite {
    const mat = new THREE.SpriteMaterial({
      map: tex,
      transparent: true,
      depthWrite: false,
      depthTest: false,
      blending: THREE.AdditiveBlending
    });
    const sprite = new THREE.Sprite(mat);
    sprite.scale.set(size, size, 1);
    sprite.renderOrder = 999;
    return sprite;
  }

  const sunFlareGroup = new THREE.Group();
  sunFlareGroup.name = "sun-flare";
  sunFlareGroup.visible = false;
  scene.add(sunFlareGroup);

  const flareCore = createFlareSprite(flareRootTex, 760);
  const flareHalo = createFlareSprite(flareRootTex, 1600);
  const flareGhostA = createFlareSprite(flareGhostTex, 360);
  const flareGhostB = createFlareSprite(flareGhostTex, 230);
  const flareGhostC = createFlareSprite(flareGhostTex, 140);
  sunFlareGroup.add(flareCore, flareHalo, flareGhostA, flareGhostB, flareGhostC);

  function setFlareOpacity(scale: number): void {
    (flareCore.material as THREE.SpriteMaterial).opacity = 0.72 * scale;
    (flareHalo.material as THREE.SpriteMaterial).opacity = 0.26 * scale;
    (flareGhostA.material as THREE.SpriteMaterial).opacity = 0.22 * scale;
    (flareGhostB.material as THREE.SpriteMaterial).opacity = 0.17 * scale;
    (flareGhostC.material as THREE.SpriteMaterial).opacity = 0.12 * scale;
  }

  function updateSunFlare(): void {
    if (!sunFlareGroup.visible) return;
    const target = directional.target.position;
    const sunDir = directional.position.clone().sub(target).normalize();
    const sunWorld = camera.position.clone().addScaledVector(sunDir, 8500);
    const sunNdc = sunWorld.clone().project(camera);

    const inFront = sunNdc.z > -1 && sunNdc.z < 1;
    const onScreen = Math.abs(sunNdc.x) <= 1.35 && Math.abs(sunNdc.y) <= 1.35;
    if (!inFront || !onScreen) {
      setFlareOpacity(0);
      return;
    }

    const edgeFade = 1.0 - clamp(Math.max(Math.abs(sunNdc.x), Math.abs(sunNdc.y)), 0.0, 1.0);
    const intensity = clamp(edgeFade * remasterLighting.flareIntensity, 0.0, 2.5);
    setFlareOpacity(intensity);

    flareCore.position.copy(sunWorld);
    flareHalo.position.copy(sunWorld);

    const placeGhost = (sprite: THREE.Sprite, t: number): void => {
      const p = new THREE.Vector3(sunNdc.x * (1 - 2 * t), sunNdc.y * (1 - 2 * t), sunNdc.z);
      p.unproject(camera);
      sprite.position.copy(p);
    };
    placeGhost(flareGhostA, 0.25);
    placeGhost(flareGhostB, 0.55);
    placeGhost(flareGhostC, 0.82);
  }

  function setSceneShadowFlags(enabled: boolean): void {
    scene.traverse((node) => {
      if (!(node instanceof THREE.Mesh)) return;
      node.castShadow = enabled;
      node.receiveShadow = enabled;
    });
  }

  function applyLightingMode(mode: LightingMode): void {
    lightingMode = mode;
    const remaster = mode === "remaster";

    renderer.toneMapping = remaster ? THREE.ACESFilmicToneMapping : THREE.NoToneMapping;
    renderer.toneMappingExposure = remaster ? remasterLighting.exposure : 1.0;
    renderer.shadowMap.enabled = remaster && remasterLighting.shadowEnabled;

    if (remaster) {
      hemi.intensity = remasterLighting.hemiIntensity;
      directional.intensity = remasterLighting.sunIntensity;
      fill.intensity = remasterLighting.fillIntensity;
      ambient.intensity = remasterLighting.ambientIntensity;
      directional.castShadow = remasterLighting.shadowEnabled;
      fill.castShadow = false;
      setSceneShadowFlags(remasterLighting.shadowEnabled);
      sunFlareGroup.visible = remasterLighting.flareEnabled;
      applySunPositionFromConfig();
      applyShadowSettingsFromConfig();
    } else {
      hemi.intensity = 0.2;
      directional.intensity = 0.3;
      fill.intensity = 0.1;
      ambient.intensity = 0.0;
      directional.castShadow = false;
      fill.castShadow = false;
      setSceneShadowFlags(false);
      sunFlareGroup.visible = false;
    }

    applyHelpersVisibility();
  }

  function refreshLightingMode(): void {
    // Remaster lighting is active only when PBR overrides are actually visible.
    const remasterActive = Boolean(hasRemasterLayers() && pbrEnabled && useAtlas && bgVisible);
    applyLightingMode(remasterActive ? "remaster" : "n64");
  }
  refreshLightingMode();

  const stanMesh = buildStanMesh(stage.stanTiles);
  stanMesh.name = "stan";
  stanMesh.visible = false;
  scene.add(stanMesh);

  const padsLayer = buildPadsLayer(stage.pads);
  padsLayer.visible = false;
  scene.add(padsLayer);

  const portalsLayer = buildPortalsLayer(stage.portals);
  portalsLayer.visible = false;
  scene.add(portalsLayer);

  let propsLayer: ReturnType<typeof buildPropsLayer> | null = null;
  const propTypePanel = document.getElementById("prop-type-panel");
  const propTypeList = document.getElementById("prop-type-list");
  const propTypeEnabled = new Map<string, boolean>();
  const DEFAULT_VISIBLE_PROP_TYPES = new Set(["StandardProp", "Door"]);

  function applyPropTypeVisibility(): void {
    if (!propsLayer) return;
    propsLayer.traverse((node) => {
      if (!(node instanceof THREE.Mesh)) return;
      const propType = node.userData?.propType as string | undefined;
      if (!propType) return;
      node.visible = propTypeEnabled.get(propType) ?? true;
    });
  }

  function initPropTypeFilters(): void {
    if (!propTypeList || !stage.propPlacements) return;
    const counts = new Map<string, number>();
    for (const p of stage.propPlacements) {
      counts.set(p.type, (counts.get(p.type) ?? 0) + 1);
      if (!propTypeEnabled.has(p.type)) {
        propTypeEnabled.set(p.type, DEFAULT_VISIBLE_PROP_TYPES.has(p.type));
      }
    }
    const types = [...counts.keys()].sort((a, b) => a.localeCompare(b));
    propTypeList.innerHTML = "";
    for (const type of types) {
      const row = document.createElement("div");
      row.className = "prop-type-row";
      const label = document.createElement("label");
      const cb = document.createElement("input");
      cb.type = "checkbox";
      cb.checked = propTypeEnabled.get(type) ?? false;
      cb.addEventListener("change", () => {
        propTypeEnabled.set(type, cb.checked);
        applyPropTypeVisibility();
      });
      const text = document.createElement("span");
      text.textContent = type;
      label.appendChild(cb);
      label.appendChild(text);
      const count = document.createElement("span");
      count.className = "prop-type-count";
      count.textContent = String(counts.get(type) ?? 0);
      row.appendChild(label);
      row.appendChild(count);
      propTypeList.appendChild(row);
    }
  }

  if (stage.propPlacements && stage.propPlacements.length > 0) {
    propsLayer = buildPropsLayer(
      stage.propPlacements,
      stage.pads,
      stage.propModelNames ?? [],
      {
        showLabels: false,
        stageLevelScale: stage.stageLevelScale ?? 1.0,
        stanTiles: stage.stanTiles ?? [],
        boundPads: stage.boundPads ?? [],
        atlas: stage.atlas,
        atlasTexture: atlasTextureForProps ?? undefined,
        fogUniforms
      },
      stage.propModels ?? {}
    );
    propsLayer.visible = false;
    scene.add(propsLayer);
    initPropTypeFilters();
    applyPropTypeVisibility();
  }

  const roomLabelsLayer = buildRoomLabelsLayer(stage.roomCenters);
  roomLabelsLayer.visible = false;
  scene.add(roomLabelsLayer);

  // Re-apply after all scene meshes are attached so global shadow flags propagate.
  refreshLightingMode();

  let wireframeEnabled = false;
  const movementKeys = {
    forward: false,
    back: false,
    left: false,
    right: false
  };
  const clock = new THREE.Clock();
  const forward = new THREE.Vector3();
  const right    = new THREE.Vector3();
  const move     = new THREE.Vector3();

  function setMovementKey(key: string, down: boolean): boolean {
    const normalized = key.toLowerCase();
    switch (normalized) {
      case "w":
      case "arrowup":
        movementKeys.forward = down;
        return true;
      case "s":
      case "arrowdown":
        movementKeys.back = down;
        return true;
      case "a":
      case "arrowleft":
        movementKeys.left = down;
        return true;
      case "d":
      case "arrowright":
        movementKeys.right = down;
        return true;
      default:
        return false;
    }
  }

  // Atlas viewer overlay
  const atlasOverlay = document.getElementById("atlas-overlay");
  const atlasImg     = document.getElementById("atlas-img") as HTMLImageElement;
  const atlasGrid    = document.getElementById("atlas-grid");
  if (atlasImg && atlasPath) {
    atlasImg.src = atlasPath;
  }
  if (atlasGrid && stage.atlas && atlasPath) {
    buildAtlasGrid(atlasGrid, stage.atlas, atlasPath);
  }

  function toggleAtlasViewer(): void {
    atlasOverlay?.classList.toggle("visible");
  }

  atlasOverlay?.addEventListener("click", () => {
    atlasOverlay.classList.remove("visible");
  });

  // Lighting panel controls
  const lightingPanel = document.getElementById("lighting-panel");
  const lightPreset = document.getElementById("light-preset") as HTMLSelectElement | null;
  const lightApplyPreset = document.getElementById("light-apply-preset") as HTMLButtonElement | null;
  const lightExposure = document.getElementById("light-exposure") as HTMLInputElement | null;
  const lightHemi = document.getElementById("light-hemi") as HTMLInputElement | null;
  const lightSunIntensity = document.getElementById("light-sun-intensity") as HTMLInputElement | null;
  const lightFill = document.getElementById("light-fill") as HTMLInputElement | null;
  const lightAmbient = document.getElementById("light-ambient") as HTMLInputElement | null;
  const lightSunAzimuth = document.getElementById("light-sun-azimuth") as HTMLInputElement | null;
  const lightSunElevation = document.getElementById("light-sun-elevation") as HTMLInputElement | null;
  const lightSunDistance = document.getElementById("light-sun-distance") as HTMLInputElement | null;
  const lightTargetX = document.getElementById("light-target-x") as HTMLInputElement | null;
  const lightTargetY = document.getElementById("light-target-y") as HTMLInputElement | null;
  const lightTargetZ = document.getElementById("light-target-z") as HTMLInputElement | null;
  const lightShadowsEnabled = document.getElementById("light-shadows-enabled") as HTMLInputElement | null;
  const lightShadowSize = document.getElementById("light-shadow-size") as HTMLSelectElement | null;
  const lightShadowRadius = document.getElementById("light-shadow-radius") as HTMLInputElement | null;
  const lightShadowNear = document.getElementById("light-shadow-near") as HTMLInputElement | null;
  const lightShadowFar = document.getElementById("light-shadow-far") as HTMLInputElement | null;
  const lightShadowBias = document.getElementById("light-shadow-bias") as HTMLInputElement | null;
  const lightShadowNormalBias = document.getElementById("light-shadow-normal-bias") as HTMLInputElement | null;
  const lightFlareEnabled = document.getElementById("light-flare-enabled") as HTMLInputElement | null;
  const lightFlareIntensity = document.getElementById("light-flare-intensity") as HTMLInputElement | null;
  const lightShowHelpers = document.getElementById("light-show-helpers") as HTMLInputElement | null;

  function syncLightingUiFromConfig(): void {
    if (!lightingPanel) return;
    if (lightExposure) lightExposure.value = remasterLighting.exposure.toFixed(2);
    if (lightHemi) lightHemi.value = remasterLighting.hemiIntensity.toFixed(2);
    if (lightSunIntensity) lightSunIntensity.value = remasterLighting.sunIntensity.toFixed(2);
    if (lightFill) lightFill.value = remasterLighting.fillIntensity.toFixed(2);
    if (lightAmbient) lightAmbient.value = remasterLighting.ambientIntensity.toFixed(2);
    if (lightSunAzimuth) lightSunAzimuth.value = remasterLighting.sunAzimuthDeg.toFixed(0);
    if (lightSunElevation) lightSunElevation.value = remasterLighting.sunElevationDeg.toFixed(0);
    if (lightSunDistance) lightSunDistance.value = remasterLighting.sunDistance.toFixed(0);
    if (lightTargetX) lightTargetX.value = remasterLighting.targetX.toFixed(0);
    if (lightTargetY) lightTargetY.value = remasterLighting.targetY.toFixed(0);
    if (lightTargetZ) lightTargetZ.value = remasterLighting.targetZ.toFixed(0);
    if (lightShadowsEnabled) lightShadowsEnabled.checked = remasterLighting.shadowEnabled;
    if (lightShadowSize) lightShadowSize.value = String(remasterLighting.shadowMapSize);
    if (lightShadowRadius) lightShadowRadius.value = remasterLighting.shadowRadius.toFixed(0);
    if (lightShadowNear) lightShadowNear.value = remasterLighting.shadowNear.toFixed(0);
    if (lightShadowFar) lightShadowFar.value = remasterLighting.shadowFar.toFixed(0);
    if (lightShadowBias) lightShadowBias.value = remasterLighting.shadowBias.toFixed(5);
    if (lightShadowNormalBias) lightShadowNormalBias.value = remasterLighting.shadowNormalBias.toFixed(2);
    if (lightFlareEnabled) lightFlareEnabled.checked = remasterLighting.flareEnabled;
    if (lightFlareIntensity) lightFlareIntensity.value = remasterLighting.flareIntensity.toFixed(2);
    if (lightShowHelpers) lightShowHelpers.checked = remasterLighting.showHelpers;
  }

  function setupSliderForInput(
    input: HTMLInputElement | null,
    min: number,
    max: number,
    step: number
  ): void {
    if (!input || input.dataset.sliderBound === "1") return;
    input.min = String(min);
    input.max = String(max);
    input.step = String(step);
    const parent = input.parentElement;
    if (!parent) return;

    const wrapper = document.createElement("div");
    wrapper.className = "light-dual";
    const slider = document.createElement("input");
    slider.type = "range";
    slider.min = String(min);
    slider.max = String(max);
    slider.step = String(step);
    slider.value = input.value || String(min);

    input.parentElement?.insertBefore(wrapper, input);
    wrapper.appendChild(slider);
    wrapper.appendChild(input);

    slider.addEventListener("input", () => {
      input.value = slider.value;
      applyLightingUi();
    });
    input.addEventListener("input", () => {
      const num = Number.parseFloat(input.value);
      if (Number.isFinite(num)) {
        slider.value = String(clamp(num, min, max));
      }
    });
    input.addEventListener("change", () => {
      const num = Number.parseFloat(input.value);
      if (Number.isFinite(num)) {
        slider.value = String(clamp(num, min, max));
      }
    });

    input.dataset.sliderBound = "1";
  }

  function readLightingUiToConfig(): void {
    const num = (el: HTMLInputElement | null, fallback: number): number => {
      if (!el) return fallback;
      const parsed = Number.parseFloat(el.value);
      return Number.isFinite(parsed) ? parsed : fallback;
    };

    remasterLighting.exposure = clamp(num(lightExposure, remasterLighting.exposure), 0.25, 3.5);
    remasterLighting.hemiIntensity = clamp(num(lightHemi, remasterLighting.hemiIntensity), 0.0, 4.0);
    remasterLighting.sunIntensity = clamp(num(lightSunIntensity, remasterLighting.sunIntensity), 0.0, 8.0);
    remasterLighting.fillIntensity = clamp(num(lightFill, remasterLighting.fillIntensity), 0.0, 4.0);
    remasterLighting.ambientIntensity = clamp(num(lightAmbient, remasterLighting.ambientIntensity), 0.0, 3.0);
    remasterLighting.sunAzimuthDeg = num(lightSunAzimuth, remasterLighting.sunAzimuthDeg);
    remasterLighting.sunElevationDeg = clamp(num(lightSunElevation, remasterLighting.sunElevationDeg), 1.0, 89.0);
    remasterLighting.sunDistance = clamp(num(lightSunDistance, remasterLighting.sunDistance), 200.0, 10000.0);
    remasterLighting.targetX = num(lightTargetX, remasterLighting.targetX);
    remasterLighting.targetY = num(lightTargetY, remasterLighting.targetY);
    remasterLighting.targetZ = num(lightTargetZ, remasterLighting.targetZ);
    remasterLighting.shadowEnabled = Boolean(lightShadowsEnabled?.checked);
    remasterLighting.shadowMapSize = Number.parseInt(lightShadowSize?.value ?? String(remasterLighting.shadowMapSize), 10) || remasterLighting.shadowMapSize;
    remasterLighting.shadowRadius = clamp(num(lightShadowRadius, remasterLighting.shadowRadius), 100.0, 10000.0);
    remasterLighting.shadowNear = clamp(num(lightShadowNear, remasterLighting.shadowNear), 0.1, 5000.0);
    remasterLighting.shadowFar = clamp(num(lightShadowFar, remasterLighting.shadowFar), remasterLighting.shadowNear + 1.0, 30000.0);
    remasterLighting.shadowBias = clamp(num(lightShadowBias, remasterLighting.shadowBias), -0.01, 0.01);
    remasterLighting.shadowNormalBias = clamp(num(lightShadowNormalBias, remasterLighting.shadowNormalBias), 0.0, 3.0);
    remasterLighting.flareEnabled = Boolean(lightFlareEnabled?.checked);
    remasterLighting.flareIntensity = clamp(num(lightFlareIntensity, remasterLighting.flareIntensity), 0.0, 2.5);
    remasterLighting.showHelpers = Boolean(lightShowHelpers?.checked);
  }

  function applyLightingUi(): void {
    readLightingUiToConfig();
    syncLightingUiFromConfig();
    refreshLightingMode();
  }

  function applyRemasterPreset(presetName: LightingPresetName): void {
    Object.assign(remasterLighting, remasterPresets[presetName]);
    syncLightingUiFromConfig();
    refreshLightingMode();
  }

  setupSliderForInput(lightExposure, 0.25, 3.5, 0.01);
  setupSliderForInput(lightHemi, 0.0, 4.0, 0.01);
  setupSliderForInput(lightSunIntensity, 0.0, 8.0, 0.01);
  setupSliderForInput(lightFill, 0.0, 4.0, 0.01);
  setupSliderForInput(lightAmbient, 0.0, 3.0, 0.01);
  setupSliderForInput(lightSunAzimuth, -180.0, 180.0, 1.0);
  setupSliderForInput(lightSunElevation, 1.0, 89.0, 1.0);
  setupSliderForInput(lightSunDistance, 200.0, 10000.0, 10.0);
  setupSliderForInput(lightTargetX, -10000.0, 10000.0, 10.0);
  setupSliderForInput(lightTargetY, -10000.0, 10000.0, 10.0);
  setupSliderForInput(lightTargetZ, -10000.0, 10000.0, 10.0);
  setupSliderForInput(lightShadowRadius, 100.0, 10000.0, 10.0);
  setupSliderForInput(lightShadowNear, 0.1, 5000.0, 1.0);
  setupSliderForInput(lightShadowFar, 10.0, 30000.0, 10.0);
  setupSliderForInput(lightShadowBias, -0.01, 0.01, 0.00005);
  setupSliderForInput(lightShadowNormalBias, 0.0, 3.0, 0.01);
  setupSliderForInput(lightFlareIntensity, 0.0, 2.5, 0.01);

  syncLightingUiFromConfig();
  const uiInputs: Array<HTMLInputElement | HTMLSelectElement | null> = [
    lightExposure, lightHemi, lightSunIntensity, lightFill, lightAmbient,
    lightSunAzimuth, lightSunElevation, lightSunDistance, lightTargetX, lightTargetY, lightTargetZ,
    lightShadowsEnabled, lightShadowSize, lightShadowRadius, lightShadowNear, lightShadowFar,
    lightShadowBias, lightShadowNormalBias, lightFlareEnabled, lightFlareIntensity, lightShowHelpers
  ];
  uiInputs.forEach((el) => {
    if (!el) return;
    el.addEventListener("input", applyLightingUi);
    el.addEventListener("change", applyLightingUi);
  });
  lightApplyPreset?.addEventListener("click", () => {
    const selected = (lightPreset?.value ?? "midday") as LightingPresetName;
    applyRemasterPreset(selected);
  });

  window.addEventListener("keydown", (event) => {
    if (setMovementKey(event.key, true)) {
      event.preventDefault();
    }
  });
  window.addEventListener("keyup", (event) => {
    if (setMovementKey(event.key, false)) {
      event.preventDefault();
    }
  });

  // Polygon inspector (click any visible BG triangle).
  const polyPopup     = document.getElementById("poly-popup");
  const polyContent   = document.getElementById("poly-content");
  const polyPreview   = document.getElementById("poly-preview") as HTMLCanvasElement;
  const polyIdBadge   = document.getElementById("poly-id-badge");
  const polyTabSum    = document.getElementById("poly-tab-summary");
  const polyTabJson   = document.getElementById("poly-tab-json");
  const polyPanelSum  = document.getElementById("poly-panel-summary");
  const polyPanelJson = document.getElementById("poly-panel-json");
  const polyJsonPre   = document.getElementById("poly-json-pre");
  const raycaster = new THREE.Raycaster();
  const pointerNdc = new THREE.Vector2();

  // Switch between Summary / JSON tabs without losing current data.
  function activatePolyTab(tab: "summary" | "json"): void {
    polyTabSum?.classList.toggle("active", tab === "summary");
    polyTabJson?.classList.toggle("active", tab === "json");
    polyPanelSum?.classList.toggle("active", tab === "summary");
    polyPanelJson?.classList.toggle("active", tab === "json");
  }
  polyTabSum?.addEventListener("click", () => activatePolyTab("summary"));
  polyTabJson?.addEventListener("click", () => activatePolyTab("json"));

  function hidePolygonPopup(): void {
    polyPopup?.classList.remove("visible");
  }

  function renderPolygonPopup(triId: number, tri: RoomTriangle): void {
    if (!polyPopup || !polyContent) return;
    const atlasItem = stage.atlas?.items[String(tri.materialId)];

    // ── Badge ──────────────────────────────────────────────────────────────
    if (polyIdBadge) polyIdBadge.textContent = `#${triId}`;

    // ── Summary tab ────────────────────────────────────────────────────────
    const uvInfo = formatUvInfo(tri, atlasItem);
    polyContent.innerHTML = `
      <div class="poly-row"><span class="poly-key">room:</span> ${tri.roomIndex}</div>
      <div class="poly-row"><span class="poly-key">material:</span> ${tri.materialId}</div>
      <div class="poly-row"><span class="poly-key">secondary DL:</span> ${tri.isSecondary ? "yes" : "no"}</div>
      <div class="poly-row"><span class="poly-key">uvA:</span> ${uvInfo.a}</div>
      <div class="poly-row"><span class="poly-key">uvB:</span> ${uvInfo.b}</div>
      <div class="poly-row"><span class="poly-key">uvC:</span> ${uvInfo.c}</div>
      <div class="poly-row"><span class="poly-key">atlas item:</span> ${
        atlasItem
          ? `${atlasItem.width}×${atlasItem.height} @ (${atlasItem.x}, ${atlasItem.y}) — ${atlasItem.imageName}`
          : "not found"
      }</div>
    `;
    drawMaterialPreview(polyPreview, atlasImg, stage.atlas, tri.materialId);

    // ── JSON tab ───────────────────────────────────────────────────────────
    if (polyJsonPre) {
      const entry = { triId, ...tri };
      polyJsonPre.innerHTML = syntaxHighlightJson(JSON.stringify(entry, null, 2));
    }

    polyPopup.classList.add("visible");
  }

  renderer.domElement.addEventListener("click", (event) => {
    // When not in fly mode, left-click on canvas requests pointer lock (enters fly).
    // The click that triggers pointer lock is consumed here; subsequent clicks
    // while locked are ignored so we don't accidentally fire the inspector.
    if (!flyMode) {
      renderer.domElement.requestPointerLock();
      // Still fall through so clicking a polygon also locks AND inspects.
    } else {
      return; // pointer is locked — ignore clicks inside fly mode
    }
    if (!bgVisible) return;
    const rect = renderer.domElement.getBoundingClientRect();
    pointerNdc.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    pointerNdc.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(pointerNdc, camera);

    // Check both the main bg mesh and any visible PBR override geometry.
    const candidates: THREE.Object3D[] = [bgMesh];
    if (pbrOverrideGroup?.visible) candidates.push(pbrOverrideGroup);
    if (remasterPlaceholderGroup?.visible) candidates.push(remasterPlaceholderGroup);
    const hits = candidates
      .flatMap((obj) => raycaster.intersectObject(obj, true))
      .sort((a, b) => a.distance - b.distance);
    const hit = hits.find((h) => h.object instanceof THREE.Mesh && Array.isArray((h.object as THREE.Mesh).userData.triangleIds));
    if (!hit || hit.faceIndex === undefined) {
      return;
    }

    const mesh = hit.object as THREE.Mesh;
    const triangleIds = mesh.userData.triangleIds as number[] | undefined;
    if (!triangleIds) return;
    const triId = triangleIds[hit.faceIndex];
    if (triId === undefined) return;
    const tri = stage.roomTriangles[triId];
    if (!tri) return;
    renderPolygonPopup(triId, tri);
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "1") {
      bgVisible = !bgVisible;
      syncRemasterLayers();
      refreshLightingMode();
    } else if (event.key === "2") {
      stanMesh.visible = !stanMesh.visible;
    } else if (event.key === "3") {
      padsLayer.visible = !padsLayer.visible;
    } else if (event.key === "4") {
      portalsLayer.visible = !portalsLayer.visible;
    } else if (event.key === "5") {
      wireframeEnabled = !wireframeEnabled;
      const stanMaterial = stanMesh.material as THREE.MeshStandardMaterial;
      stanMaterial.wireframe = wireframeEnabled;
      bgMesh.traverse((node) => {
        if (!(node instanceof THREE.Mesh)) return;
        if (node.material instanceof THREE.MeshStandardMaterial) {
          node.material.wireframe = wireframeEnabled;
        }
        // ShaderMaterial doesn't have a .wireframe flag.
        // Instead we attach a LineSegments overlay as a child.
        if (node.material instanceof THREE.ShaderMaterial) {
          const KEY = "__wfOverlay";
          if (wireframeEnabled) {
            if (!node.userData[KEY]) {
              const wfGeo = new THREE.WireframeGeometry(node.geometry);
              const wfMat = new THREE.LineBasicMaterial({ color: 0x00ff88 });
              const overlay = new THREE.LineSegments(wfGeo, wfMat);
              overlay.name = KEY;
              node.userData[KEY] = overlay;
              node.add(overlay);
            } else {
              (node.userData[KEY] as THREE.LineSegments).visible = true;
            }
          } else if (node.userData[KEY]) {
            (node.userData[KEY] as THREE.LineSegments).visible = false;
          }
        }
      });
    } else if (event.key === "6") {
      grid.visible = !grid.visible;
    } else if (event.key === "0") {
      if (propsLayer) propsLayer.visible = !propsLayer.visible;
    } else if (event.key === "p" || event.key === "P") {
      propTypePanel?.classList.toggle("hidden");
    } else if (event.key === "7") {
      toggleAtlasViewer();
    } else if (event.key === "8") {
      // Toggle between atlas textures and flat per-room colours.
      if (atlasBgMesh) {
        useAtlas = !useAtlas;
        const next = useAtlas ? atlasBgMesh : flatBgMesh;
        const prev = useAtlas ? flatBgMesh : atlasBgMesh;
        prev.visible = false;
        if (!scene.children.includes(next)) {
          scene.add(next);
        }
        bgMesh = next;
        syncRemasterLayers();
        refreshLightingMode();
      }
    } else if (event.key === "9") {
      roomLabelsLayer.visible = !roomLabelsLayer.visible;
    } else if (event.key === "r" || event.key === "R") {
      // Toggle remaster (PBR override) layer on/off.
      if (hasRemasterLayers()) {
        pbrEnabled = !pbrEnabled;
        syncRemasterLayers();
        refreshLightingMode();
      }
    } else if (event.key === "g" || event.key === "G") {
      // Cycle fog modes: hazy → gameplay → off → hazy …
      fogMode = fogMode === "hazy" ? "gameplay" : fogMode === "gameplay" ? "off" : "hazy";
      applyFog();
    } else if (event.key === "l" || event.key === "L") {
      lightingPanel?.classList.toggle("hidden");
    } else if (event.key === "h" || event.key === "H") {
      remasterLighting.showHelpers = !remasterLighting.showHelpers;
      if (lightShowHelpers) lightShowHelpers.checked = remasterLighting.showHelpers;
      applyHelpersVisibility();
    } else if (event.key === "f" || event.key === "F") {
      if (flyMode) document.exitPointerLock();
      else renderer.domElement.requestPointerLock();
    } else if (event.key === "Escape") {
      if (flyMode) {
        document.exitPointerLock();
      } else {
        hidePolygonPopup();
        lightingPanel?.classList.add("hidden");
      }
    }
  });

  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  const animate = (): void => {
    const delta = clock.getDelta();
    const moveSpeed = 520; // world units per second
    const moveX = (movementKeys.right ? 1 : 0) - (movementKeys.left ? 1 : 0);
    const moveZ = (movementKeys.forward ? 1 : 0) - (movementKeys.back ? 1 : 0);
    if (moveX !== 0 || moveZ !== 0) {
      // camera.getWorldDirection gives the exact forward vector regardless of
      // how the camera was rotated — no orbit target needed.
      camera.getWorldDirection(forward);
      right.crossVectors(forward, camera.up).normalize();
      move.set(0, 0, 0);
      if (moveZ !== 0) move.addScaledVector(forward, moveZ);
      if (moveX !== 0) move.addScaledVector(right, moveX);
      if (move.lengthSq() > 0) {
        move.normalize().multiplyScalar(moveSpeed * delta);
        camera.position.add(move);
      }
    }
    updateSunFlare();
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  };
  animate();
}

bootstrap().catch((error) => {
  console.error(error);
});

function buildAtlasGrid(container: HTMLElement, atlas: AtlasManifest, atlasPath: string): void {
  container.innerHTML = "";
  const ids = Object.keys(atlas.items)
    .map((id) => Number.parseInt(id, 10))
    .filter((id) => Number.isFinite(id))
    .sort((a, b) => a - b);

  const frag = document.createDocumentFragment();
  for (const id of ids) {
    const item = atlas.items[String(id)];
    const tile = document.createElement("div");
    tile.className = "atlas-tile";

    const wrap = document.createElement("div");
    wrap.className = "atlas-swatch-wrap";

    const swatch = document.createElement("div");
    swatch.className = "atlas-swatch";
    const scale = Math.min(72 / item.width, 72 / item.height);
    const sw = Math.max(1, Math.round(item.width * scale));
    const sh = Math.max(1, Math.round(item.height * scale));
    swatch.style.width = `${sw}px`;
    swatch.style.height = `${sh}px`;
    swatch.style.backgroundImage = `url(${atlasPath})`;
    swatch.style.backgroundRepeat = "no-repeat";
    swatch.style.backgroundSize = `${Math.round(atlas.width * scale)}px ${Math.round(atlas.height * scale)}px`;
    swatch.style.backgroundPosition = `-${Math.round(item.x * scale)}px -${Math.round(item.y * scale)}px`;
    wrap.appendChild(swatch);

    const label = document.createElement("div");
    label.className = "atlas-label";
    label.innerHTML = `mat ${id}<br>${item.imageName}`;

    tile.appendChild(wrap);
    tile.appendChild(label);
    frag.appendChild(tile);
  }
  container.appendChild(frag);
}

function drawMaterialPreview(
  canvas: HTMLCanvasElement,
  atlasImg: HTMLImageElement | null,
  atlas: AtlasManifest | undefined,
  materialId: number
): void {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const item = atlas?.items[String(materialId)];
  if (!item || !atlasImg || !atlasImg.complete) {
    canvas.width = 0;
    canvas.height = 0;
    return;
  }

  const scale = Math.max(1, Math.floor(160 / Math.max(item.width, item.height)));
  canvas.width = item.width * scale;
  canvas.height = item.height * scale;
  ctx.imageSmoothingEnabled = false;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    atlasImg,
    item.x,
    item.y,
    item.width,
    item.height,
    0,
    0,
    canvas.width,
    canvas.height
  );
}

// Lightweight JSON syntax colourer — no external deps.
function syntaxHighlightJson(json: string): string {
  return json
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(
      /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)/g,
      (match) => {
        if (/^"/.test(match)) {
          if (/:$/.test(match)) return `<span class="jk">${match}</span>`; // key
          return `<span class="js">${match}</span>`; // string value
        }
        if (/true|false/.test(match)) return `<span class="jb">${match}</span>`; // boolean
        if (/null/.test(match)) return `<span class="jb">${match}</span>`; // null
        return `<span class="jn">${match}</span>`; // number
      }
    );
}

function formatUvInfo(
  tri: RoomTriangle,
  item: AtlasManifest["items"][string] | undefined
): { a: string; b: string; c: string } {
  const fmt = (uRaw: number, vRaw: number): string => {
    const uTexel = uRaw / 32.0;
    const vTexel = vRaw / 32.0;
    if (!item) {
      return `${uRaw}, ${vRaw} (texel ${uTexel.toFixed(3)}, ${vTexel.toFixed(3)})`;
    }
    const uWrap = ((uTexel % item.width) + item.width) % item.width;
    const vWrap = ((vTexel % item.height) + item.height) % item.height;
    return `${uRaw}, ${vRaw} (texel ${uTexel.toFixed(3)}, ${vTexel.toFixed(3)} | wrap ${uWrap.toFixed(3)}, ${vWrap.toFixed(3)})`;
  };
  return {
    a: fmt(tri.uvA.u, tri.uvA.v),
    b: fmt(tri.uvB.u, tri.uvB.v),
    c: fmt(tri.uvC.u, tri.uvC.v)
  };
}
