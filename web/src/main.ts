import * as THREE from "three";
import { buildBgMesh, buildBgMeshWithAtlas, buildPbrOverrideMeshes, buildPadsLayer, buildPortalsLayer, buildRoomLabelsLayer, buildStanMesh, makeFogUniforms } from "./viewer/DebugLayers";
import type { FogUniforms } from "./viewer/DebugLayers";
import { loadStageData } from "./viewer/StageLoader";
import type { AtlasManifest, RoomTriangle } from "./viewer/StageLoader";
import { loadOverrides } from "./viewer/OverrideLoader";

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

  // The atlas ShaderMaterial uses pre-baked N64 vertex colours and is completely
  // immune to scene lights, so these lights only affect MeshStandardMaterial
  // objects (PBR overrides, stan mesh).  They are intentionally brighter than
  // a typical outdoor rig so the remaster materials match the N64 brightness.
  const hemi = new THREE.HemisphereLight(0xdce8ff, 0x303040, 2.5);
  scene.add(hemi);

  const directional = new THREE.DirectionalLight(0xfff4e0, 2.5);
  directional.position.set(400, 1000, -200);
  scene.add(directional);

  // Fill light from the opposite side to soften deep shadows on PBR surfaces.
  const fill = new THREE.DirectionalLight(0xb0c8ff, 0.8);
  fill.position.set(-400, 400, 200);
  scene.add(fill);

  const grid = new THREE.GridHelper(6000, 120, 0x3f4558, 0x202633);
  scene.add(grid);

  const stageDataPath = `${import.meta.env.BASE_URL}data/stages/runway.json`;
  const stage = await loadStageData(stageDataPath);

  let atlasPath = "";
  // Flat-colour mesh is always built; atlas mesh is built when atlas data exists.
  const flatBgMesh: THREE.Object3D = buildBgMesh(stage.roomTriangles);
  let atlasBgMesh: THREE.Object3D | null = null;

  // ── PBR overrides ──────────────────────────────────────────────────────────
  // Try to load runway_overrides.json; silently no-ops if the file is absent or
  // all entries have empty materialIds arrays (first-time setup).
  const overridesPath = `${import.meta.env.BASE_URL}data/stages/runway_overrides.json`;
  const pbr = await loadOverrides(overridesPath, import.meta.env.BASE_URL);
  let pbrOverrideGroup: THREE.Group | null = null;
  // true = remaster PBR is shown (when available); can be toggled with R key.
  let pbrEnabled = true;

  if (stage.atlas) {
    atlasPath = `${import.meta.env.BASE_URL}data/stages/${stage.atlas.atlasImage}`;
    const atlasTexture = await new THREE.TextureLoader().loadAsync(atlasPath);
    // Atlas mesh always covers all materials.  PBR layer sits on top via
    // polygon offset so toggling it off cleanly reveals the N64 texture below.
    // Pass fogUniforms so the shader can update fog live via the G key.
    atlasBgMesh = buildBgMeshWithAtlas(stage.roomTriangles, stage.atlas, atlasTexture, new Set(), fogUniforms);

    if (pbr.length > 0) {
      pbrOverrideGroup = buildPbrOverrideMeshes(stage.roomTriangles, stage.atlas, pbr);
      scene.add(pbrOverrideGroup);
    }
  }

  // Start in textured mode if atlas is available, otherwise flat colours.
  let useAtlas = atlasBgMesh !== null;
  let bgMesh: THREE.Object3D = useAtlas ? atlasBgMesh! : flatBgMesh;
  scene.add(bgMesh);

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

  const roomLabelsLayer = buildRoomLabelsLayer(stage.roomCenters);
  roomLabelsLayer.visible = false;
  scene.add(roomLabelsLayer);

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
    if (!bgMesh.visible) return;
    const rect = renderer.domElement.getBoundingClientRect();
    pointerNdc.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    pointerNdc.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(pointerNdc, camera);

    // Check both the main bg mesh and any visible PBR override geometry.
    const candidates: THREE.Object3D[] = [bgMesh];
    if (pbrOverrideGroup?.visible) candidates.push(pbrOverrideGroup);
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
      bgMesh.visible = !bgMesh.visible;
      // PBR overrides are only visible in atlas mode when remaster is enabled.
      if (pbrOverrideGroup && useAtlas) pbrOverrideGroup.visible = bgMesh.visible && pbrEnabled;
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
    } else if (event.key === "7") {
      toggleAtlasViewer();
    } else if (event.key === "8") {
      // Toggle between atlas textures and flat per-room colours.
      if (atlasBgMesh) {
        useAtlas = !useAtlas;
        const next = useAtlas ? atlasBgMesh : flatBgMesh;
        const prev = useAtlas ? flatBgMesh : atlasBgMesh;
        const wasVisible = bgMesh.visible;
        prev.visible = false;
        next.visible = wasVisible;
        if (!scene.children.includes(next)) {
          scene.add(next);
        }
        bgMesh = next;
        // PBR overrides are only meaningful in atlas mode and when enabled.
        if (pbrOverrideGroup) pbrOverrideGroup.visible = useAtlas && wasVisible && pbrEnabled;
      }
    } else if (event.key === "9") {
      roomLabelsLayer.visible = !roomLabelsLayer.visible;
    } else if (event.key === "r" || event.key === "R") {
      // Toggle remaster (PBR override) layer on/off.
      if (pbrOverrideGroup) {
        pbrEnabled = !pbrEnabled;
        pbrOverrideGroup.visible = useAtlas && bgMesh.visible && pbrEnabled;
      }
    } else if (event.key === "g" || event.key === "G") {
      // Cycle fog modes: hazy → gameplay → off → hazy …
      fogMode = fogMode === "hazy" ? "gameplay" : fogMode === "gameplay" ? "off" : "hazy";
      applyFog();
    } else if (event.key === "f" || event.key === "F") {
      if (flyMode) document.exitPointerLock();
      else renderer.domElement.requestPointerLock();
    } else if (event.key === "Escape") {
      if (flyMode) {
        document.exitPointerLock();
      } else {
        hidePolygonPopup();
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
