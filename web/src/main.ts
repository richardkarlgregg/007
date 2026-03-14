import * as THREE from "three";
import { buildBgMesh, buildBgMeshWithAtlas, buildPbrOverrideMeshes, buildRemasterPlaceholderMeshes, buildPadsLayer, buildPortalsLayer, buildPropsLayer, buildRoomLabelsLayer, buildStanMesh, makeFogUniforms } from "./viewer/DebugLayers";
import type { FogUniforms } from "./viewer/DebugLayers";
import { loadStageData } from "./viewer/StageLoader";
import type { AtlasManifest, PadRecord, RoomTriangle, StageData } from "./viewer/StageLoader";
import { collectOverriddenIds, loadOverrides } from "./viewer/OverrideLoader";
import { loadBondIntroAsset } from "./viewer/BondIntroActor";

interface Bounds3 {
  minX: number;
  maxX: number;
  minY: number;
  maxY: number;
  minZ: number;
  maxZ: number;
}

function computeStageBounds(triangles: RoomTriangle[]): Bounds3 {
  let minX = Number.POSITIVE_INFINITY;
  let minY = Number.POSITIVE_INFINITY;
  let minZ = Number.POSITIVE_INFINITY;
  let maxX = Number.NEGATIVE_INFINITY;
  let maxY = Number.NEGATIVE_INFINITY;
  let maxZ = Number.NEGATIVE_INFINITY;

  for (const tri of triangles) {
    for (const p of [tri.a, tri.b, tri.c]) {
      if (p.x < minX) minX = p.x;
      if (p.y < minY) minY = p.y;
      if (p.z < minZ) minZ = p.z;
      if (p.x > maxX) maxX = p.x;
      if (p.y > maxY) maxY = p.y;
      if (p.z > maxZ) maxZ = p.z;
    }
  }

  return { minX, maxX, minY, maxY, minZ, maxZ };
}

function catmullRom(p0: number, p1: number, p2: number, p3: number, t: number): number {
  const t2 = t * t;
  const t3 = t2 * t;
  return 0.5 * ((2 * p1) +
    (-p0 + p2) * t +
    (2 * p0 - 5 * p1 + 4 * p2 - p3) * t2 +
    (-p0 + 3 * p1 - 3 * p2 + p3) * t3);
}

function selectSpawnPad(stage: StageData): PadRecord | null {
  const spawnPadIndex = stage.intro?.spawns.find((s) => s.isDemoPlayback === 0)?.pad;
  if (spawnPadIndex !== undefined) {
    return stage.pads[spawnPadIndex] ?? null;
  }
  return stage.pads[0] ?? null;
}

function selectStartingWeaponId(stage: StageData): number {
  return stage.intro?.startWeapons.find((w) => w.isDemoPlayback === 0)?.itemRight ?? 5;
}

function itemLabel(id: number): string {
  const names: Record<number, string> = {
    5: "PP7",
    8: "KF7 Soviet",
    26: "D5K Deutsche",
  };
  return names[id] ?? `ITEM_${id}`;
}

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
  const SNOW_HAZE_COLOR = new THREE.Color(0xd8e2ee);                // cold whiteout tint
  let snowHazeFactor = 0.0;
  let snowHazeCloseness = 1.0;

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
    const haze = clamp(snowHazeFactor, 0.0, 2.0);
    const hazeNorm = Math.min(1.0, haze);
    const close = clamp(snowHazeCloseness, 0.0, 2.0);
    const closeNorm = Math.min(1.0, close);
    const fogColor = FOG_COLOR.clone().lerp(SNOW_HAZE_COLOR, 0.82 * hazeNorm);
    scene.background = fogColor.clone();
    fogUniforms.uFogEnabled.value = 1.0;
    fogUniforms.uFogColor.value.copy(fogColor);

    let fogNear = 200;
    let fogFar = 1200;
    if (fogMode === "gameplay") {
      // Scaled to map bounds (X:257-1592, Z:-2806 to -99 ≈ 2700u deep).
      // Clear nearby, heavy at the far edge of the runway.
      fogNear = 500;
      fogFar = 2500;
    } else {
      // Hazy: ~50% fog at ~600u so distant rooms/mountains fade visibly.
      fogNear = 200;
      fogFar = 1200;
    }
    // Snow whiteout: pull fog start/end closer with higher intensity.
    const nearTarget = THREE.MathUtils.lerp(120, 40, closeNorm);
    const farTarget = THREE.MathUtils.lerp(850, 360, closeNorm);
    fogNear = THREE.MathUtils.lerp(fogNear, nearTarget, hazeNorm);
    fogFar = THREE.MathUtils.lerp(fogFar, farTarget, hazeNorm);
    if (haze > 1.0) {
      const extra = haze - 1.0;
      fogNear = THREE.MathUtils.lerp(fogNear, 24, extra * 0.8);
      fogFar = THREE.MathUtils.lerp(fogFar, 240, extra * 0.8);
    }
    scene.fog = new THREE.Fog(fogColor.clone(), fogNear, fogFar);
    fogUniforms.uFogNear.value = fogNear;
    fogUniforms.uFogFar.value  = fogFar;
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
  let devFlyEnabled = false;
  let flyMoveSpeed = 280;
  let flyLookSensitivity = 0.0012;

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
    if (flyHint) {
      if (active) {
        flyHint.textContent = "Esc — exit fly mode";
      } else if (devFlyEnabled) {
        flyHint.textContent = "Click canvas to lock pointer";
      } else {
        flyHint.textContent = "";
      }
    }
  }
  setFlyMode(false);

  document.addEventListener("pointerlockchange", () => {
    const locked = document.pointerLockElement === renderer.domElement;
    if (devFlyEnabled && !locked) {
      // Esc unlock should also leave detached fly mode and restore Bond view.
      exitDevFlyMode(true);
    }
    setFlyMode(locked && devFlyEnabled);
  });

  document.addEventListener("mousemove", (e: MouseEvent) => {
    if (document.pointerLockElement !== renderer.domElement) return;
    yaw   -= e.movementX * flyLookSensitivity;
    pitch -= e.movementY * flyLookSensitivity;
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
  const stageScale = stage.stageLevelScale ?? 1.0;
  const spawnPad = selectSpawnPad(stage);
  const startingWeaponId = selectStartingWeaponId(stage);
  const startingWeaponName = itemLabel(startingWeaponId);

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
  const stageBounds = computeStageBounds(stage.roomTriangles);

  const playerStartPosition = spawnPad
    ? new THREE.Vector3(spawnPad.position.x, spawnPad.position.y, spawnPad.position.z)
    : new THREE.Vector3(
        (stageBounds.minX + stageBounds.maxX) * 0.5,
        stageBounds.minY + 8,
        (stageBounds.minZ + stageBounds.maxZ) * 0.5
      );
  const playerFacing = spawnPad
    ? new THREE.Vector3(spawnPad.orientation.x, spawnPad.orientation.y, spawnPad.orientation.z)
    : new THREE.Vector3(0, 0, 1);

  const bondGraphDisabled = new URLSearchParams(window.location.search).get("bondGraph") === "0";

  // Try to load the character atlas (generated by exportBondIntro).
  let bondAtlasTexture: THREE.Texture | undefined;
  try {
    const atlasManifestUrl = `${import.meta.env.BASE_URL}data/actors/bond_intro_atlas.json`;
    const atlasManifestResp = await fetch(atlasManifestUrl);
    if (atlasManifestResp.ok) {
      const atlasManifest = await atlasManifestResp.json();
      const atlasImgUrl = `${import.meta.env.BASE_URL}data/actors/${atlasManifest.atlasImage}`;
      bondAtlasTexture = await new THREE.TextureLoader().loadAsync(atlasImgUrl);
    }
  } catch {
    // Atlas unavailable — character will render with debug checker pattern.
  }

  const bondActor = await loadBondIntroAsset(
    `${import.meta.env.BASE_URL}data/actors/bond_intro.json`,
    stageScale,
    { forceLegacy: bondGraphDisabled, atlasTexture: bondAtlasTexture, fogUniforms }
  );
  bondActor.setWorldPosition(playerStartPosition);
  bondActor.setFacingFromOrientation(playerFacing);
  // Bond is hidden until SwirlOrbit (CAMERAMODE_SWIRL).
  bondActor.group.visible = false;
  scene.add(bondActor.group);

  const introGun = bondActor.createIntroGunMesh();
  introGun.position.set(0, 0, 0.5);
  introGun.rotation.set(-0.08, -Math.PI * 0.5, 0.02);
  introGun.visible = false; // hidden until SwirlOrbit
  bondActor.weaponAnchor.add(introGun);

  const fpGun = bondActor.createFpGunMesh();
  fpGun.visible = false;
  camera.add(fpGun);

  // GoldenEye clears the Z-buffer inline just before drawing the hand weapon,
  // so level geometry never occludes the gun but lighting/fog still apply.
  // Replicate this with a sentinel mesh at renderOrder 9999 whose
  // onBeforeRender callback calls renderer.clearDepth(). Gun meshes render
  // at renderOrder 10000 and are part of the same scene/lights.
  // GoldenEye draws: opaque geo → secondary-DL decals (ZMODE_DEC, XLU) →
  // clears Z-buffer → hand weapon.  We replicate this by marking the sentinel
  // and gun as transparent so Three.js sorts them into the transparent pass
  // AFTER the decals (which are also transparent at renderOrder 0).
  // Sentinel (renderOrder 9999) fires clearDepth, then gun (10000) draws.
  const sentinelGeo = new THREE.BufferGeometry();
  sentinelGeo.setAttribute("position", new THREE.BufferAttribute(new Float32Array([0, 0, 0]), 3));
  const sentinelMat = new THREE.PointsMaterial({
    size: 0,
    colorWrite: false,
    depthWrite: false,
    depthTest: false,
    transparent: true,
  });
  const depthClearSentinel = new THREE.Points(sentinelGeo, sentinelMat);
  depthClearSentinel.frustumCulled = false;
  depthClearSentinel.renderOrder = 9999;
  depthClearSentinel.onBeforeRender = (renderer: THREE.WebGLRenderer) => { renderer.clearDepth(); };
  camera.add(depthClearSentinel);

  scene.add(camera);
  let fpGunDetached = false;

  function setFpGunDetached(detached: boolean): void {
    if (fpGunDetached === detached) return;
    fpGunDetached = detached;
    if (detached) {
      // Keep world transform then drop it in front of the camera for inspection.
      scene.attach(fpGun);
      const forward = new THREE.Vector3(0, 0, -1).applyQuaternion(camera.quaternion).normalize();
      fpGun.position.copy(camera.position).addScaledVector(forward, 5.0);
      fpGun.quaternion.copy(camera.quaternion);
      fpGun.visible = true;
    } else {
      // Reattach to source-driven viewmodel transform path.
      camera.attach(fpGun);
      fpGun.visible = playerCameraMode === "EnterFirstPerson" || playerCameraMode === "FirstPerson";
      updateFpWeaponMatrix(1 / 60);
    }
  }

  // Source-accurate hand weapon placement (gun.c copy_item_in_hand):
  // Position is purely WeaponStats PosX/PosY/PosZ — the D_80053E00 (+27.8)
  // offset is only applied in a special-case branch (weapon state 1, item 17),
  // NOT for normal FP gun rendering.
  // matrix_scalar_multiply(D_80053E04=0.1) scales the 3×3 rotation submatrix
  // (entries 0-11) but leaves the translation row untouched, so position is
  // NOT divided by the scale factor.
  // gun.c's matrix_4x4_align orients the gun to face the look direction (-Z
  // in camera space). The model is authored facing +Z, so we apply a π rotation
  // around Y to flip it forward.
  const fpWeapon = bondActor.fpWeaponConfig;
  const fpWeaponBase = new THREE.Vector3(
    fpWeapon.posX,
    fpWeapon.posY,
    fpWeapon.posZ
  );
  fpGun.rotation.set(0, Math.PI, 0);
  let fpWeaponRaise = 0; // 0 = hidden (-1 hand_invisible), 1 = fully raised
  let fpThetaDisp = 0;
  let fpVertaDisp = 0;
  let lastAimYaw = yaw;
  let lastAimPitch = pitch;
  let fpGunLogTimer = 0;

  // ── Source-accurate intro state machine ───────────────────────────────────
  // CAMERAMODE_INTRO     → static cinematic camera (FixedCam)
  // CAMERAMODE_FADESWIRL → fade to black over ~1 s
  // CAMERAMODE_SWIRL     → Bond visible, orbital camera clip
  // CAMERAMODE_FP        → first-person player control, gun rises into view
  type PlayerCameraMode =
    | "StaticIntro"       // CAMERAMODE_INTRO
    | "FadeToSwirl"       // CAMERAMODE_FADESWIRL
    | "SwirlOrbit"        // CAMERAMODE_SWIRL
    | "EnterFirstPerson"  // transition from swirl to FP (0.85 s lerp)
    | "FirstPerson";      // CAMERAMODE_FP — full player control

  let playerCameraMode: PlayerCameraMode = "StaticIntro";
  let modeBeforeDevFly: PlayerCameraMode | null = null;
  let modeElapsed = 0;

  // StaticIntro — chosen FixedCam camera
  const staticIntroPos = new THREE.Vector3();
  const staticIntroLookAt = new THREE.Vector3();
  const staticIntroDuration = 5.0; // seconds before auto-advance

  // ── Initialise StaticIntro camera position from FixedCam data ────────────
  // Native: CAMERAMODE_INTRO — camera at SetupIntroCamera.pos, looking along
  // spherical angles (horzRad, vertRad) decoded in parseSetup.ts.
  const introCams = bondActor.introData?.fixedCams ?? [];
  if (introCams.length > 0) {
    const cam = introCams[Math.floor(Math.random() * introCams.length)];
    staticIntroPos.set(
      cam.x * stageScale,
      cam.y * stageScale,
      cam.z * stageScale
    );
    // Native bondview.c look-direction formula:
    //   lookX = cos(vertRad) * sin(horzRad)
    //   lookY = sin(vertRad)
    //   lookZ = -cos(vertRad) * cos(horzRad)
    const lx = Math.cos(cam.vertRad) * Math.sin(cam.horzRad);
    const ly = Math.sin(cam.vertRad);
    const lz = -Math.cos(cam.vertRad) * Math.cos(cam.horzRad);
    staticIntroLookAt.copy(staticIntroPos).addScaledVector(
      new THREE.Vector3(lx, ly, lz).normalize(), 100
    );
  } else {
    // Fallback: look at Bond from a position overhead
    staticIntroPos.set(
      playerStartPosition.x + 80 * stageScale,
      playerStartPosition.y + 60 * stageScale,
      playerStartPosition.z + 120 * stageScale
    );
    staticIntroLookAt.copy(playerStartPosition);
  }
  camera.position.copy(staticIntroPos);
  camera.lookAt(staticIntroLookAt);
  yaw   = camera.rotation.y;
  pitch = camera.rotation.x;

  // FadeToSwirl — 1 second fade to black
  const fadeToSwirlDuration = 1.0;

  // EnterFirstPerson — lerp from swirl cam to FPS eye position
  const enterFpDuration = 0.85;
  const enterStartPos = new THREE.Vector3();
  const enterTargetPos = new THREE.Vector3();
  const enterStartQuat = new THREE.Quaternion();
  const enterTargetQuat = new THREE.Quaternion();

  // Shared fade-overlay state: 0 = transparent, 1 = opaque black
  let fadeAlpha = 1.0; // starts opaque (fades in at StaticIntro entry)
  const fadeOverlayEl = (() => {
    const el = document.createElement("div");
    el.style.cssText = [
      "position:fixed", "inset:0", "background:#000",
      "pointer-events:none", "z-index:50", "opacity:1"
    ].join(";");
    document.body.appendChild(el);
    return el;
  })();
  function setFadeAlpha(a: number): void {
    fadeAlpha = Math.max(0, Math.min(1, a));
    fadeOverlayEl.style.opacity = String(fadeAlpha);
  }

  function updateFpWeaponMatrix(delta: number): void {
    if (fpGunDetached) return;
    const dt = Math.max(0.0001, delta);
    const yawRate = (yaw - lastAimYaw) / dt;
    const pitchRate = (pitch - lastAimPitch) / dt;
    lastAimYaw = yaw;
    lastAimPitch = pitch;

    // Source: hands[].weapon_theta_displacement / weapon_verta_displacement.
    fpThetaDisp = THREE.MathUtils.damp(fpThetaDisp, -1.75 * yawRate * 0.01, 12.0, dt);
    fpVertaDisp = THREE.MathUtils.damp(fpVertaDisp, -2.0 * pitchRate * 0.01, 12.0, dt);
    if (!Number.isFinite(fpThetaDisp)) fpThetaDisp = 0;
    if (!Number.isFinite(fpVertaDisp)) fpVertaDisp = 0;

    // Sway offsets in native coordinate space (not scaled by 0.1).
    const swayX = fpThetaDisp * 1.2;
    const swayY = fpVertaDisp * 1.2;
    const hiddenYOffset = (1.0 - fpWeaponRaise) * -8.0;

    fpGun.position.set(
      fpWeaponBase.x + swayX,
      fpWeaponBase.y + hiddenYOffset + swayY,
      fpWeaponBase.z
    );
    // Base Y=π (model faces +Z, camera faces -Z) + sway offsets.
    fpGun.rotation.set(
      fpVertaDisp * 0.25,
      Math.PI + (-fpThetaDisp * 0.2),
      0
    );
  }

  const preFlyPos = new THREE.Vector3();
  const preFlyQuat = new THREE.Quaternion();
  let preFlyYaw = yaw;
  let preFlyPitch = pitch;

  // Approximate Bond standing eye level in GE world units.
  const playerEyeHeight = 52.0 * stageScale;
  const playerVelocity = new THREE.Vector3();
  const playerGroundPos = playerStartPosition.clone();
  playerGroundPos.y = playerStartPosition.y;
  const introEyeWorld = new THREE.Vector3(playerStartPosition.x, playerStartPosition.y + playerEyeHeight, playerStartPosition.z);
  const uiStatus = document.createElement("div");
  uiStatus.style.position = "fixed";
  uiStatus.style.left = "14px";
  uiStatus.style.bottom = "10px";
  uiStatus.style.padding = "6px 10px";
  uiStatus.style.background = "rgba(4,7,12,0.62)";
  uiStatus.style.color = "#c6d8ea";
  uiStatus.style.fontFamily = "monospace";
  uiStatus.style.fontSize = "12px";
  uiStatus.style.border = "1px solid rgba(141,178,214,0.32)";
  uiStatus.style.borderRadius = "4px";
  uiStatus.style.zIndex = "20";
  uiStatus.textContent = `start weapon: ${startingWeaponName} | levelscale: ${stageScale.toFixed(6)}`;
  root.appendChild(uiStatus);

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
  const decalMeshes: THREE.Mesh[] = [];
  const collectDecalMeshes = (node: THREE.Object3D | null): void => {
    if (!node) return;
    node.traverse((obj) => {
      if (!(obj instanceof THREE.Mesh)) return;
      if (!obj.name.toLowerCase().includes("secondary")) return;
      decalMeshes.push(obj);
    });
  };
  collectDecalMeshes(atlasBgMesh);
  collectDecalMeshes(pbrOverrideGroup);
  collectDecalMeshes(remasterPlaceholderGroup);

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

  function isRemasterActive(): boolean {
    return Boolean(hasRemasterLayers() && pbrEnabled && useAtlas && bgVisible);
  }

  function syncRemasterLayers(): void {
    const showRemaster = isRemasterActive();

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
  const decalDebug = {
    enabled: true,
    opacity: 1.0,
    forceOpaque: false,
  };

  function applyDecalDebugSettings(): void {
    const alpha = THREE.MathUtils.clamp(decalDebug.opacity, 0.0, 1.0);
    for (const mesh of decalMeshes) {
      mesh.visible = decalDebug.enabled;
      const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
      for (const mat of mats) {
        if (mat instanceof THREE.ShaderMaterial) {
          if (mat.uniforms.uDecalOpacityScale) mat.uniforms.uDecalOpacityScale.value = alpha;
          if (mat.uniforms.uDecalForceOpaque) mat.uniforms.uDecalForceOpaque.value = decalDebug.forceOpaque ? 1.0 : 0.0;
          continue;
        }
        if (mat instanceof THREE.MeshStandardMaterial || mat instanceof THREE.MeshBasicMaterial) {
          mat.transparent = true;
          mat.opacity = decalDebug.forceOpaque ? 1.0 : alpha;
          mat.needsUpdate = true;
        }
      }
    }
  }
  applyDecalDebugSettings();

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
    const remasterActive = isRemasterActive();
    applyLightingMode(remasterActive ? "remaster" : "n64");
    applySnowVisibility();
  }

  // ── Snow FX (remaster-only, GPU points) ───────────────────────────────────
  // Performance: fixed particle budget + drawRange for intensity scaling.
  const SNOW_PARTICLE_BASE = 8000;
  const SNOW_PARTICLE_CAP = 8000000;
  const SNOW_PARTICLE_INITIAL = 120000;
  const snowCfg = {
    enabled: true,
    intensity: 12.0,
    speed: 44,
    gravity: 10.0,
    size: 3.0,
    wind: 9.0,
    windDirectionDeg: 30,
    driftRandomness: 1.15,
    sizeVariation: 0.45,
    hazeIntensity: 1.0,
    hazeCloseness: 1.0,
  };
  const snowXMin = stageBounds.minX - 180;
  const snowXMax = stageBounds.maxX + 180;
  const snowZMin = stageBounds.minZ - 180;
  const snowZMax = stageBounds.maxZ + 180;
  const snowRangeX = Math.max(1, snowXMax - snowXMin);
  const snowRangeZ = Math.max(1, snowZMax - snowZMin);
  const snowYMin = stageBounds.minY - 50;
  const snowYMax = stageBounds.maxY + 600;
  const snowRangeY = Math.max(1, snowYMax - snowYMin);
  let snowCapacity = Math.min(SNOW_PARTICLE_INITIAL, SNOW_PARTICLE_CAP);
  let snowPositions = new Float32Array(snowCapacity * 3);
  let snowSeeds = new Float32Array(snowCapacity);
  function seedSnowParticle(i: number, pos: Float32Array, seeds: Float32Array): void {
    const i3 = i * 3;
    pos[i3 + 0] = THREE.MathUtils.lerp(snowXMin, snowXMax, Math.random());
    pos[i3 + 1] = snowYMin + Math.random() * snowRangeY;
    pos[i3 + 2] = THREE.MathUtils.lerp(snowZMin, snowZMax, Math.random());
    seeds[i] = Math.random();
  }
  for (let i = 0; i < snowCapacity; i += 1) {
    seedSnowParticle(i, snowPositions, snowSeeds);
  }
  const snowGeo = new THREE.BufferGeometry();
  snowGeo.setAttribute("position", new THREE.BufferAttribute(snowPositions, 3));
  snowGeo.setAttribute("aSeed", new THREE.BufferAttribute(snowSeeds, 1));
  snowGeo.setDrawRange(0, Math.floor(SNOW_PARTICLE_BASE * snowCfg.intensity));

  const snowMat = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    depthTest: true,
    blending: THREE.NormalBlending,
    uniforms: {
      uTime: { value: 0.0 },
      uMinX: { value: snowXMin },
      uRangeX: { value: snowRangeX },
      uMinY: { value: snowYMin },
      uRangeY: { value: snowRangeY },
      uMinZ: { value: snowZMin },
      uRangeZ: { value: snowRangeZ },
      uFallSpeed: { value: snowCfg.speed },
      uGravity: { value: snowCfg.gravity },
      uWindX: { value: 0.0 },
      uWindZ: { value: 0.0 },
      uDriftRandomness: { value: snowCfg.driftRandomness },
      uSize: { value: snowCfg.size },
      uOpacity: { value: 0.85 },
      uSizeVariation: { value: snowCfg.sizeVariation },
    },
    vertexShader: /* glsl */ `
      attribute float aSeed;
      uniform float uTime;
      uniform float uMinX;
      uniform float uRangeX;
      uniform float uMinY;
      uniform float uRangeY;
      uniform float uMinZ;
      uniform float uRangeZ;
      uniform float uFallSpeed;
      uniform float uGravity;
      uniform float uWindX;
      uniform float uWindZ;
      uniform float uDriftRandomness;
      uniform float uSize;
      uniform float uSizeVariation;
      varying float vAlpha;
      void main() {
        vec3 p = position;
        // Pseudo-physics: per-particle initial velocity + gravity acceleration.
        float speedScale = clamp(uFallSpeed / 40.0, 0.0, 4.0);
        float v0 = uFallSpeed * (0.18 + aSeed * 0.72);
        float g = uGravity * speedScale * (0.35 + aSeed * 0.65);
        float distY = (v0 * uTime) + (0.5 * g * uTime * uTime);
        p.y = uMinY + mod((p.y - uMinY) - distY, uRangeY);
        float drift = (0.25 + aSeed * 1.05) * uDriftRandomness;
        float wobbleX = sin((uTime * (0.35 + aSeed * 1.1)) + (aSeed * 51.3) + (position.z * 0.01));
        float wobbleZ = cos((uTime * (0.30 + aSeed * 0.9)) + (aSeed * 39.7) + (position.x * 0.01));
        p.x = uMinX + mod((p.x - uMinX) + (uTime * uWindX * drift) + wobbleX * (1.6 * uDriftRandomness), uRangeX);
        p.z = uMinZ + mod((p.z - uMinZ) + (uTime * uWindZ * drift) + wobbleZ * (1.3 * uDriftRandomness), uRangeZ);
        vec4 mvPos = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mvPos;
        float sizeVar = mix(1.0 - uSizeVariation, 1.0 + uSizeVariation, aSeed);
        gl_PointSize = (uSize * sizeVar) * (260.0 / max(1.0, -mvPos.z));
        vAlpha = 0.45 + aSeed * 0.55;
      }
    `,
    fragmentShader: /* glsl */ `
      uniform float uOpacity;
      varying float vAlpha;
      void main() {
        vec2 c = gl_PointCoord - vec2(0.5);
        float d = length(c);
        if (d > 0.5) discard;
        float a = smoothstep(0.5, 0.0, d) * vAlpha * uOpacity;
        gl_FragColor = vec4(0.95, 0.97, 1.0, a);
      }
    `,
  });
  const snowPoints = new THREE.Points(snowGeo, snowMat);
  snowPoints.name = "remaster-snow";
  snowPoints.frustumCulled = false;
  snowPoints.renderOrder = 950;
  scene.add(snowPoints);
  const snowViewBox = new THREE.Box3(
    new THREE.Vector3(snowXMin - 260, snowYMin - 120, snowZMin - 260),
    new THREE.Vector3(snowXMax + 260, snowYMax + 120, snowZMax + 260)
  );
  const snowFrustum = new THREE.Frustum();
  const snowFrustumMatrix = new THREE.Matrix4();
  let snowBaseActive = false;

  function updateSnowFrustumVisibility(): void {
    if (!snowBaseActive) {
      snowPoints.visible = false;
      return;
    }
    camera.updateMatrixWorld();
    snowFrustumMatrix.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);
    snowFrustum.setFromProjectionMatrix(snowFrustumMatrix);
    // Only render snow when the camera is looking at (or very near to) the stage volume.
    snowPoints.visible = snowFrustum.intersectsBox(snowViewBox);
  }

  function applySnowVisibility(): void {
    snowBaseActive = isRemasterActive() && snowCfg.enabled && snowGeo.drawRange.count > 0;
    updateSnowFrustumVisibility();
    snowHazeFactor = snowBaseActive ? clamp(snowCfg.hazeIntensity, 0.0, 2.0) : 0.0;
    snowHazeCloseness = snowBaseActive ? clamp(snowCfg.hazeCloseness, 0.0, 2.0) : 1.0;
    applyFog();
  }

  function applySnowConfig(): void {
    const intensity = clamp(snowCfg.intensity, 0, 1000);
    const desiredCount = Math.min(SNOW_PARTICLE_CAP, Math.floor(SNOW_PARTICLE_BASE * intensity));
    if (desiredCount > snowCapacity) {
      const nextCapacity = Math.min(
        SNOW_PARTICLE_CAP,
        Math.max(desiredCount, Math.floor(snowCapacity * 2))
      );
      const nextPositions = new Float32Array(nextCapacity * 3);
      const nextSeeds = new Float32Array(nextCapacity);
      nextPositions.set(snowPositions);
      nextSeeds.set(snowSeeds);
      for (let i = snowCapacity; i < nextCapacity; i += 1) {
        seedSnowParticle(i, nextPositions, nextSeeds);
      }
      snowPositions = nextPositions;
      snowSeeds = nextSeeds;
      snowCapacity = nextCapacity;
      snowGeo.setAttribute("position", new THREE.BufferAttribute(snowPositions, 3));
      snowGeo.setAttribute("aSeed", new THREE.BufferAttribute(snowSeeds, 1));
    }
    snowGeo.setDrawRange(0, desiredCount);
    snowMat.uniforms.uFallSpeed.value = clamp(snowCfg.speed, 0.05, 220);
    snowMat.uniforms.uGravity.value = clamp(snowCfg.gravity, 0.0, 80.0);
    snowMat.uniforms.uSize.value = clamp(snowCfg.size, 0.5, 12);
    const wind = clamp(snowCfg.wind, 0, 60);
    const dir = THREE.MathUtils.degToRad(snowCfg.windDirectionDeg);
    snowMat.uniforms.uWindX.value = Math.cos(dir) * wind * 0.14;
    snowMat.uniforms.uWindZ.value = Math.sin(dir) * wind * 0.14;
    snowMat.uniforms.uDriftRandomness.value = clamp(snowCfg.driftRandomness, 0.0, 4.0);
    snowMat.uniforms.uSizeVariation.value = clamp(snowCfg.sizeVariation, 0.0, 0.95);
    snowMat.uniforms.uOpacity.value = 0.85;
    applySnowVisibility();
  }
  applySnowConfig();
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
  const DEFAULT_HIDDEN_PROP_TYPES = new Set(["AmmoBox", "Collectable", "Guard", "Hat"]);

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
        propTypeEnabled.set(p.type, !DEFAULT_HIDDEN_PROP_TYPES.has(p.type));
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
  const tmpEye = new THREE.Vector3();
  const tmpLookAt = new THREE.Vector3();
  const tmpCameraQuat = new THREE.Quaternion();
  const swirlCams = stage.intro?.swirlCams ?? [];
  let swirlCameraIndex = 1;
  let swirlTimer = 0;
  let swirlDone = false;
  const swirlPlayerSinH = (() => {
    const lxz = Math.sqrt(playerFacing.x ** 2 + playerFacing.z ** 2) || 1;
    return playerFacing.x / lxz;
  })();
  const swirlPlayerCosH = (() => {
    const lxz = Math.sqrt(playerFacing.x ** 2 + playerFacing.z ** 2) || 1;
    return playerFacing.z / lxz;
  })();

  // ── CAMERAMODE_INTRO ─────────────────────────────────────────────────────
  // Static cinematic camera from FixedCam data.  Fades in from black, then
  // auto-advances (or skips on button press) after staticIntroDuration.
  function enterStaticIntro(): void {
    playerCameraMode = "StaticIntro";
    modeElapsed = 0;
    bondActor.group.visible = false;
    introGun.visible = false;
    fpGun.visible = false;
    camera.position.copy(staticIntroPos);
    camera.lookAt(staticIntroLookAt);
    yaw   = camera.rotation.y;
    pitch = camera.rotation.x;
    setFadeAlpha(1.0); // fade in from black
  }

  function updateStaticIntro(delta: number): void {
    modeElapsed += delta;
    // Fade in from black over 60 frames (~1 s).
    const fadeInSec = 1.0;
    setFadeAlpha(Math.max(0, 1.0 - modeElapsed / fadeInSec));
    // Hold camera on FixedCam position.
    camera.position.copy(staticIntroPos);
    camera.lookAt(staticIntroLookAt);
    yaw   = camera.rotation.y;
    pitch = camera.rotation.x;
    if (modeElapsed >= staticIntroDuration) {
      enterFadeToSwirl();
    }
  }

  // ── CAMERAMODE_FADESWIRL ─────────────────────────────────────────────────
  // 1 second fade to black, then transition to SwirlOrbit.
  function enterFadeToSwirl(): void {
    playerCameraMode = "FadeToSwirl";
    modeElapsed = 0;
    setFadeAlpha(0.0);
  }

  function updateFadeToSwirl(delta: number): void {
    modeElapsed += delta;
    const t = Math.min(1.0, modeElapsed / fadeToSwirlDuration);
    setFadeAlpha(t); // 0 → 1 (fade to black)
    if (modeElapsed >= fadeToSwirlDuration) {
      enterSwirlOrbit();
    }
  }

  // ── CAMERAMODE_SWIRL ─────────────────────────────────────────────────────
  // Source-accurate keyframe-driven swirl camera (bondview.c CAMERAMODE_SWIRL).
  // Steps through swirlCams[] by duration, Catmull-Rom interpolates between 4
  // control points, and optionally rotates offsets by player heading (flags & 2).
  function enterSwirlOrbit(): void {
    playerCameraMode = "SwirlOrbit";
    modeElapsed = 0;
    swirlCameraIndex = 1;
    swirlTimer = 0;
    swirlDone = false;
    bondActor.resetClip();
    bondActor.group.visible = true;
    introGun.visible = true;
    fpGun.visible = false;
    setFadeAlpha(0.0);
    bondActor.eyeAnchor.getWorldPosition(swirlBasePos);
    bondActor.playIntroAnimation();
  }

  function swirlGetControlPoint(offset: number): { x: number; y: number; z: number } {
    let idx = swirlCameraIndex + offset;
    if (idx < 0) idx = 0;
    if (idx >= swirlCams.length) idx = swirlCams.length - 1;
    if (offset > 0) {
      for (let j = swirlCameraIndex; j < idx; j++) {
        if (j + 1 < swirlCams.length && (swirlCams[j + 1].flags & 1)) {
          idx = j;
          break;
        }
      }
    }
    const kf = swirlCams[idx];
    if (kf.flags & 2) {
      return {
        x: swirlPlayerCosH * kf.x + kf.z * swirlPlayerSinH,
        y: kf.y,
        z: kf.z * swirlPlayerCosH - swirlPlayerSinH * kf.x,
      };
    }
    return { x: kf.x, y: kf.y, z: kf.z };
  }

  // The swirl camera orbits relative to Bond's eye position.  In the native
  // game, sub_GAME_7F07B2A0 adds offsets to player->field_3c8 (player center
  // at DEFAULT_C_HALFHEIGHT above ground).  In the web viewer, the Bond model
  // is scaled by stageScale, so we use the actual eye anchor world position
  // to keep the orbit centred on Bond regardless of model scale.
  const swirlBasePos = new THREE.Vector3();

  function updateSwirlOrbit(delta: number): void {
    modeElapsed += delta;
    const fadeInSec = 1.0;
    setFadeAlpha(Math.max(0, 1.0 - modeElapsed / fadeInSec));

    const pose = bondActor.tick(delta);

    if (swirlCams.length < 4) {
      bondActor.eyeAnchor.getWorldPosition(introEyeWorld);
      if (bondActor.normalizedTime >= 0.999) {
        enterEnterFirstPerson(introEyeWorld);
      }
      return;
    }

    const deltaTicks = delta * 60.0;
    swirlTimer += deltaTicks;

    while (swirlCameraIndex < swirlCams.length &&
           swirlCams[swirlCameraIndex].duration > 0 &&
           swirlCams[swirlCameraIndex].duration <= swirlTimer) {
      if (swirlCameraIndex + 3 < swirlCams.length &&
          !(swirlCams[swirlCameraIndex + 3].flags & 1)) {
        swirlTimer -= swirlCams[swirlCameraIndex].duration;
        swirlCameraIndex++;
      } else {
        swirlTimer = swirlCams[swirlCameraIndex].duration;
        swirlDone = true;
        break;
      }
    }

    const dur = swirlCams[swirlCameraIndex]?.duration ?? 1;
    const t = dur > 0 ? Math.min(1.0, swirlTimer / dur) : 0;

    const p0 = swirlGetControlPoint(-1);
    const p1 = swirlGetControlPoint(0);
    const p2 = swirlGetControlPoint(1);
    const p3 = swirlGetControlPoint(2);

    const camOffX = catmullRom(p0.x, p1.x, p2.x, p3.x, t);
    const camOffY = catmullRom(p0.y, p1.y, p2.y, p3.y, t);
    const camOffZ = catmullRom(p0.z, p1.z, p2.z, p3.z, t);

    camera.position.set(
      swirlBasePos.x + camOffX,
      swirlBasePos.y + camOffY,
      swirlBasePos.z + camOffZ
    );

    tmpLookAt.copy(swirlBasePos);
    camera.lookAt(tmpLookAt);
    yaw   = camera.rotation.y;
    pitch = camera.rotation.x;
    fpWeaponRaise = pose.weaponRaise;

    if (swirlDone) {
      bondActor.eyeAnchor.getWorldPosition(introEyeWorld);
      enterEnterFirstPerson(introEyeWorld);
    }
  }

  // ── Transition → CAMERAMODE_FP ───────────────────────────────────────────
  function enterEnterFirstPerson(eyeWorld: THREE.Vector3): void {
    playerCameraMode = "EnterFirstPerson";
    modeElapsed = 0;
    setFadeAlpha(0.0);
    enterStartPos.copy(camera.position);
    enterStartQuat.copy(camera.quaternion);
    enterTargetPos.copy(eyeWorld);
    tmpLookAt.copy(eyeWorld).addScaledVector(playerFacing, 32);
    const look = new THREE.Matrix4().lookAt(eyeWorld, tmpLookAt, new THREE.Vector3(0, 1, 0));
    enterTargetQuat.setFromRotationMatrix(look).invert();
    introGun.visible = false;
    // Gun starts below viewport (hand_invisible = -1) and will rise as we enter FP.
    fpGun.visible = !fpGunDetached;
    fpWeaponRaise = 0;
    fpThetaDisp = 0;
    fpVertaDisp = 0;
    updateFpWeaponMatrix(1 / 60);
    renderer.domElement.requestPointerLock();
  }

  function updateEnterFirstPerson(delta: number): void {
    modeElapsed = Math.min(enterFpDuration, modeElapsed + delta);
    const t = THREE.MathUtils.smoothstep(modeElapsed / enterFpDuration, 0, 1);
    camera.position.lerpVectors(enterStartPos, enterTargetPos, t);
    tmpCameraQuat.slerpQuaternions(enterStartQuat, enterTargetQuat, t);
    camera.quaternion.copy(tmpCameraQuat);
    yaw   = camera.rotation.y;
    pitch = camera.rotation.x;
    // hand_invisible transition: hidden (-1) -> visible (1)
    fpWeaponRaise = t;
    updateFpWeaponMatrix(delta);
    if (modeElapsed >= enterFpDuration) {
      playerCameraMode = "FirstPerson";
      bondActor.group.visible = false;
      fpWeaponRaise = 1;
      fpGun.visible = !fpGunDetached;
      playerGroundPos.copy(enterTargetPos);
      playerGroundPos.y = playerStartPosition.y;
      yaw   = camera.rotation.y;
      pitch = camera.rotation.x;
      lastAimYaw = yaw;
      lastAimPitch = pitch;
    }
  }

  // ── CAMERAMODE_FP ─────────────────────────────────────────────────────────
  function updateFirstPersonMovement(delta: number): void {
    const moveSpeed = 182;
    const accel = 820;
    const damping = 10;
    const moveX = (movementKeys.right ? 1 : 0) - (movementKeys.left ? 1 : 0);
    const moveZ = (movementKeys.forward ? 1 : 0) - (movementKeys.back ? 1 : 0);
    const wish = new THREE.Vector3();
    if (moveX !== 0 || moveZ !== 0) {
      // Three.js camera forward is -Z at yaw=0.
      forward.set(-Math.sin(yaw), 0, -Math.cos(yaw));
      right.set(-forward.z, 0, forward.x);
      wish.addScaledVector(forward, moveZ);
      wish.addScaledVector(right, moveX);
      if (wish.lengthSq() > 0) {
        wish.normalize().multiplyScalar(moveSpeed);
      }
    }
    playerVelocity.x = THREE.MathUtils.damp(playerVelocity.x, wish.x, damping, delta);
    playerVelocity.z = THREE.MathUtils.damp(playerVelocity.z, wish.z, damping, delta);
    playerVelocity.x += (wish.x - playerVelocity.x) * Math.min(1.0, accel * delta / moveSpeed);
    playerVelocity.z += (wish.z - playerVelocity.z) * Math.min(1.0, accel * delta / moveSpeed);
    playerGroundPos.addScaledVector(playerVelocity, delta);
    camera.position.set(playerGroundPos.x, playerGroundPos.y + playerEyeHeight, playerGroundPos.z);
    camera.rotation.order = "YXZ";
    camera.rotation.y = yaw;
    camera.rotation.x = pitch;
    fpWeaponRaise = 1;
    updateFpWeaponMatrix(delta);
  }

  function enterDevFlyMode(): void {
    if (devFlyEnabled) return;
    devFlyEnabled = true;
    modeBeforeDevFly = playerCameraMode;
    preFlyPos.copy(camera.position);
    preFlyQuat.copy(camera.quaternion);
    preFlyYaw = yaw;
    preFlyPitch = pitch;
    // Reveal Bond + intro weapon while inspecting from detached fly camera.
    bondActor.group.visible = true;
    introGun.visible = true;
    fpGun.visible = fpGunDetached;
    setFadeAlpha(0);
    renderer.domElement.requestPointerLock();
  }

  function exitDevFlyMode(skipPointerUnlock = false): void {
    if (!devFlyEnabled) return;
    devFlyEnabled = false;
    if (!skipPointerUnlock) {
      document.exitPointerLock();
    }
    camera.position.copy(preFlyPos);
    camera.quaternion.copy(preFlyQuat);
    yaw = preFlyYaw;
    pitch = preFlyPitch;
    if (modeBeforeDevFly) {
      playerCameraMode = modeBeforeDevFly;
    }
    // Restore gameplay visibility based on resumed mode.
    const inFP = playerCameraMode === "FirstPerson" || playerCameraMode === "EnterFirstPerson";
    bondActor.group.visible = !inFP;
    introGun.visible = playerCameraMode === "SwirlOrbit";
    fpGun.visible = fpGunDetached ? true : inFP;
    fpThetaDisp = 0;
    fpVertaDisp = 0;
    lastAimYaw = yaw;
    lastAimPitch = pitch;
    modeBeforeDevFly = null;
  }

  // Skip static intro or swirl on any key/click (after 0.5 s guard).
  function trySkipIntro(): void {
    if (playerCameraMode === "StaticIntro" && modeElapsed > 0.5) {
      enterFadeToSwirl();
    } else if (playerCameraMode === "SwirlOrbit" && modeElapsed > 1.0) {
      bondActor.eyeAnchor.getWorldPosition(introEyeWorld);
      enterEnterFirstPerson(introEyeWorld);
    }
  }

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
  const lightSnowEnabled = document.getElementById("light-snow-enabled") as HTMLInputElement | null;
  const lightSnowIntensity = document.getElementById("light-snow-intensity") as HTMLInputElement | null;
  const lightSnowSpeed = document.getElementById("light-snow-speed") as HTMLInputElement | null;
  const lightSnowGravity = document.getElementById("light-snow-gravity") as HTMLInputElement | null;
  const lightSnowSize = document.getElementById("light-snow-size") as HTMLInputElement | null;
  const lightSnowWind = document.getElementById("light-snow-wind") as HTMLInputElement | null;
  const lightSnowWindDir = document.getElementById("light-snow-wind-dir") as HTMLInputElement | null;
  const lightSnowDriftRand = document.getElementById("light-snow-drift-rand") as HTMLInputElement | null;
  const lightSnowSizeVar = document.getElementById("light-snow-size-var") as HTMLInputElement | null;
  const lightSnowHazeIntensity = document.getElementById("light-snow-haze-intensity") as HTMLInputElement | null;
  const lightSnowHazeClose = document.getElementById("light-snow-haze-close") as HTMLInputElement | null;
  const lightFlySpeed = document.getElementById("light-fly-speed") as HTMLInputElement | null;
  const lightFlySensitivity = document.getElementById("light-fly-sensitivity") as HTMLInputElement | null;
  const lightDecalsEnabled = document.getElementById("light-decals-enabled") as HTMLInputElement | null;
  const lightDecalsOpacity = document.getElementById("light-decals-opacity") as HTMLInputElement | null;
  const lightDecalsForceOpaque = document.getElementById("light-decals-force-opaque") as HTMLInputElement | null;

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
    if (lightSnowEnabled) lightSnowEnabled.checked = snowCfg.enabled;
    if (lightSnowIntensity) lightSnowIntensity.value = snowCfg.intensity.toFixed(1);
    if (lightSnowSpeed) lightSnowSpeed.value = snowCfg.speed.toFixed(1);
    if (lightSnowGravity) lightSnowGravity.value = snowCfg.gravity.toFixed(1);
    if (lightSnowSize) lightSnowSize.value = snowCfg.size.toFixed(1);
    if (lightSnowWind) lightSnowWind.value = snowCfg.wind.toFixed(1);
    if (lightSnowWindDir) lightSnowWindDir.value = snowCfg.windDirectionDeg.toFixed(0);
    if (lightSnowDriftRand) lightSnowDriftRand.value = snowCfg.driftRandomness.toFixed(2);
    if (lightSnowSizeVar) lightSnowSizeVar.value = snowCfg.sizeVariation.toFixed(2);
    if (lightSnowHazeIntensity) lightSnowHazeIntensity.value = snowCfg.hazeIntensity.toFixed(2);
    if (lightSnowHazeClose) lightSnowHazeClose.value = snowCfg.hazeCloseness.toFixed(2);
    if (lightFlySpeed) lightFlySpeed.value = flyMoveSpeed.toFixed(0);
    if (lightFlySensitivity) lightFlySensitivity.value = flyLookSensitivity.toFixed(4);
    if (lightDecalsEnabled) lightDecalsEnabled.checked = decalDebug.enabled;
    if (lightDecalsOpacity) lightDecalsOpacity.value = decalDebug.opacity.toFixed(2);
    if (lightDecalsForceOpaque) lightDecalsForceOpaque.checked = decalDebug.forceOpaque;
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
    snowCfg.enabled = Boolean(lightSnowEnabled?.checked ?? snowCfg.enabled);
    snowCfg.intensity = clamp(num(lightSnowIntensity, snowCfg.intensity), 0.0, 1000.0);
    snowCfg.speed = clamp(num(lightSnowSpeed, snowCfg.speed), 0.05, 220);
    snowCfg.gravity = clamp(num(lightSnowGravity, snowCfg.gravity), 0.0, 80.0);
    snowCfg.size = clamp(num(lightSnowSize, snowCfg.size), 0.5, 12);
    snowCfg.wind = clamp(num(lightSnowWind, snowCfg.wind), 0, 60);
    snowCfg.windDirectionDeg = num(lightSnowWindDir, snowCfg.windDirectionDeg);
    snowCfg.driftRandomness = clamp(num(lightSnowDriftRand, snowCfg.driftRandomness), 0.0, 4.0);
    snowCfg.sizeVariation = clamp(num(lightSnowSizeVar, snowCfg.sizeVariation), 0.0, 0.95);
    snowCfg.hazeIntensity = clamp(num(lightSnowHazeIntensity, snowCfg.hazeIntensity), 0.0, 2.0);
    snowCfg.hazeCloseness = clamp(num(lightSnowHazeClose, snowCfg.hazeCloseness), 0.0, 2.0);
    flyMoveSpeed = clamp(num(lightFlySpeed, flyMoveSpeed), 40.0, 1400.0);
    flyLookSensitivity = clamp(num(lightFlySensitivity, flyLookSensitivity), 0.0001, 0.01);
    decalDebug.enabled = Boolean(lightDecalsEnabled?.checked ?? decalDebug.enabled);
    decalDebug.opacity = clamp(num(lightDecalsOpacity, decalDebug.opacity), 0.0, 1.0);
    decalDebug.forceOpaque = Boolean(lightDecalsForceOpaque?.checked ?? decalDebug.forceOpaque);
  }

  function applyLightingUi(): void {
    readLightingUiToConfig();
    syncLightingUiFromConfig();
    refreshLightingMode();
    applySnowConfig();
    applyDecalDebugSettings();
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
  setupSliderForInput(lightSnowIntensity, 0.0, 1000.0, 1.0);
  setupSliderForInput(lightSnowSpeed, 0.1, 220.0, 0.1);
  setupSliderForInput(lightSnowGravity, 0.0, 80.0, 0.1);
  setupSliderForInput(lightSnowSize, 0.5, 12.0, 0.1);
  setupSliderForInput(lightSnowWind, 0.0, 60.0, 0.1);
  setupSliderForInput(lightSnowWindDir, -180.0, 180.0, 1.0);
  setupSliderForInput(lightSnowDriftRand, 0.0, 4.0, 0.01);
  setupSliderForInput(lightSnowSizeVar, 0.0, 0.95, 0.01);
  setupSliderForInput(lightSnowHazeIntensity, 0.0, 2.0, 0.01);
  setupSliderForInput(lightSnowHazeClose, 0.0, 2.0, 0.01);
  setupSliderForInput(lightFlySpeed, 40.0, 1400.0, 5.0);
  setupSliderForInput(lightFlySensitivity, 0.0001, 0.01, 0.0001);
  setupSliderForInput(lightDecalsOpacity, 0.0, 1.0, 0.01);

  // Character LOD selector
  const chrLodSelect = document.getElementById("chr-lod-level") as HTMLSelectElement | null;
  chrLodSelect?.addEventListener("change", () => {
    const level = parseInt(chrLodSelect.value, 10);
    bondActor.setLodLevel(Number.isFinite(level) ? level : 0);
  });

  syncLightingUiFromConfig();
  const uiInputs: Array<HTMLInputElement | HTMLSelectElement | null> = [
    lightExposure, lightHemi, lightSunIntensity, lightFill, lightAmbient,
    lightSunAzimuth, lightSunElevation, lightSunDistance, lightTargetX, lightTargetY, lightTargetZ,
    lightShadowsEnabled, lightShadowSize, lightShadowRadius, lightShadowNear, lightShadowFar,
    lightShadowBias, lightShadowNormalBias, lightFlareEnabled, lightFlareIntensity, lightShowHelpers,
    lightSnowEnabled, lightSnowIntensity, lightSnowSpeed, lightSnowSize, lightSnowWind,
    lightSnowGravity, lightSnowWindDir, lightSnowDriftRand, lightSnowSizeVar, lightSnowHazeIntensity, lightSnowHazeClose,
    lightFlySpeed, lightFlySensitivity, lightDecalsEnabled, lightDecalsOpacity, lightDecalsForceOpaque
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
    // Skip intro on click.
    trySkipIntro();
    // When not in fly mode, left-click on canvas requests pointer lock (enters fly).
    // The click that triggers pointer lock is consumed here; subsequent clicks
    // while locked are ignored so we don't accidentally fire the inspector.
    if (document.pointerLockElement !== renderer.domElement) {
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
    // Space or Enter can skip the static intro / swirl phases.
    if (event.key === " " || event.key === "Enter") {
      trySkipIntro();
    }
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
    } else if (event.key === "n" || event.key === "N") {
      snowCfg.enabled = !snowCfg.enabled;
      if (lightSnowEnabled) lightSnowEnabled.checked = snowCfg.enabled;
      applySnowConfig();
    } else if (event.key === "f" || event.key === "F") {
      if (devFlyEnabled) {
        exitDevFlyMode();
      } else {
        enterDevFlyMode();
      }
      setFlyMode(devFlyEnabled && document.pointerLockElement === renderer.domElement);
    } else if (event.key === "k" || event.key === "K") {
      setFpGunDetached(!fpGunDetached);
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

  // Kick off the intro sequence proper (fades in from opaque black).
  enterStaticIntro();

  const animate = (): void => {
    const delta = clock.getDelta();
    const moveX = (movementKeys.right ? 1 : 0) - (movementKeys.left ? 1 : 0);
    const moveZ = (movementKeys.forward ? 1 : 0) - (movementKeys.back ? 1 : 0);

    if (devFlyEnabled && flyMode) {
      const moveSpeed = flyMoveSpeed;
      if (moveX !== 0 || moveZ !== 0) {
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
    } else if (playerCameraMode === "StaticIntro") {
      updateStaticIntro(delta);
    } else if (playerCameraMode === "FadeToSwirl") {
      updateFadeToSwirl(delta);
    } else if (playerCameraMode === "SwirlOrbit") {
      updateSwirlOrbit(delta);
    } else if (playerCameraMode === "EnterFirstPerson") {
      updateEnterFirstPerson(delta);
    } else {
      updateFirstPersonMovement(delta);
    }
    if (playerCameraMode === "EnterFirstPerson" || playerCameraMode === "FirstPerson") {
      fpGunLogTimer += delta;
      if (fpGunLogTimer >= 0.5) {
        fpGunLogTimer = 0;
        let meshCount = 0;
        let vertexCount = 0;
        fpGun.traverse((node) => {
          if (!(node instanceof THREE.Mesh)) return;
          meshCount += 1;
          const pos = node.geometry.getAttribute("position");
          if (pos) vertexCount += pos.count;
        });
        const box = new THREE.Box3().setFromObject(fpGun);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        const localCenter = camera.worldToLocal(center.clone());
        const ndcCenter = center.clone().project(camera);
        const payload = {
          mode: playerCameraMode,
          visible: fpGun.visible,
          pos: fpGun.position.toArray(),
          rot: [fpGun.rotation.x, fpGun.rotation.y, fpGun.rotation.z],
          meshCount,
          vertexCount,
          boxCenter: center.toArray(),
          boxSize: size.toArray(),
          cameraLocalCenter: localCenter.toArray(),
          ndcCenter: [ndcCenter.x, ndcCenter.y, ndcCenter.z],
          centerInFront: localCenter.z < 0,
          raise: fpWeaponRaise,
          thetaDisp: fpThetaDisp,
          vertaDisp: fpVertaDisp,
        };
        console.log("[fpGun:frame]", payload);
        console.log("[fpGun:frame:json]", JSON.stringify(payload));
      }
    } else {
      fpGunLogTimer = 0;
    }
    uiStatus.textContent = `mode: ${playerCameraMode} | weapon: ${startingWeaponName}${devFlyEnabled ? " | dev-fly" : ""}${fpGunDetached ? " | fp-gun detached (K)" : ""}`;

    updateSnowFrustumVisibility();
    if (snowPoints.visible) {
      snowMat.uniforms.uTime.value += delta;
    }
    updateSunFlare();

    depthClearSentinel.visible = fpGun.visible;
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
