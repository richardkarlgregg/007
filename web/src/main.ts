import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { buildBgMesh, buildBgMeshWithAtlas, buildPadsLayer, buildPortalsLayer, buildRoomLabelsLayer, buildStanMesh } from "./viewer/DebugLayers";
import { loadStageData } from "./viewer/StageLoader";
import type { AtlasManifest, RoomTriangle } from "./viewer/StageLoader";

async function bootstrap(): Promise<void> {
  const root = document.getElementById("app");
  if (!root) {
    throw new Error("Missing #app element");
  }

  // GoldenEye runway atmosphere: dark pre-dawn sky with heavy distance fog.
  const fogColor = new THREE.Color(0x151a28);
  const scene = new THREE.Scene();
  scene.background = fogColor;
  scene.fog = new THREE.Fog(fogColor, 800, 4000);

  const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 20000);
  camera.position.set(850, 420, -1250);

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  root.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(850, 0, -900);
  controls.enableDamping = true;
  controls.enableKeys = false;
  controls.update();

  const hemi = new THREE.HemisphereLight(0xb6d1ff, 0x202020, 0.8);
  scene.add(hemi);

  const directional = new THREE.DirectionalLight(0xffffff, 1.0);
  directional.position.set(400, 1000, -200);
  scene.add(directional);

  const grid = new THREE.GridHelper(6000, 120, 0x3f4558, 0x202633);
  scene.add(grid);

  const stageDataPath = `${import.meta.env.BASE_URL}data/stages/runway.json`;
  const stage = await loadStageData(stageDataPath);

  let atlasPath = "";
  // Flat-colour mesh is always built; atlas mesh is built when atlas data exists.
  const flatBgMesh: THREE.Object3D = buildBgMesh(stage.roomTriangles);
  let atlasBgMesh: THREE.Object3D | null = null;

  if (stage.atlas) {
    atlasPath = `${import.meta.env.BASE_URL}data/stages/${stage.atlas.atlasImage}`;
    const atlasTexture = await new THREE.TextureLoader().loadAsync(atlasPath);
    atlasBgMesh = buildBgMeshWithAtlas(stage.roomTriangles, stage.atlas, atlasTexture);
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
  const lookDir = new THREE.Vector3();
  const forward = new THREE.Vector3();
  const right = new THREE.Vector3();
  const move = new THREE.Vector3();

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
  const polyPopup = document.getElementById("poly-popup");
  const polyContent = document.getElementById("poly-content");
  const polyPreview = document.getElementById("poly-preview") as HTMLCanvasElement;
  const raycaster = new THREE.Raycaster();
  const pointerNdc = new THREE.Vector2();

  function hidePolygonPopup(): void {
    polyPopup?.classList.remove("visible");
  }

  function renderPolygonPopup(triId: number, tri: RoomTriangle): void {
    if (!polyPopup || !polyContent) return;
    const atlasItem = stage.atlas?.items[String(tri.materialId)];
    const uvInfo = formatUvInfo(tri, atlasItem);
    polyContent.innerHTML = `
      <div class="poly-row"><span class="poly-key">polyId:</span> ${triId}</div>
      <div class="poly-row"><span class="poly-key">room:</span> ${tri.roomIndex}</div>
      <div class="poly-row"><span class="poly-key">material:</span> ${tri.materialId}</div>
      <div class="poly-row"><span class="poly-key">secondary DL:</span> ${tri.isSecondary ? "yes" : "no"}</div>
      <div class="poly-row"><span class="poly-key">uvA:</span> ${uvInfo.a}</div>
      <div class="poly-row"><span class="poly-key">uvB:</span> ${uvInfo.b}</div>
      <div class="poly-row"><span class="poly-key">uvC:</span> ${uvInfo.c}</div>
      <div class="poly-row"><span class="poly-key">atlas item:</span> ${
        atlasItem ? `${atlasItem.width}x${atlasItem.height} @ (${atlasItem.x}, ${atlasItem.y})` : "not found"
      }</div>
    `;

    drawMaterialPreview(polyPreview, atlasImg, stage.atlas, tri.materialId);
    polyPopup.classList.add("visible");
  }

  renderer.domElement.addEventListener("click", (event) => {
    if (!bgMesh.visible) return;
    const rect = renderer.domElement.getBoundingClientRect();
    pointerNdc.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    pointerNdc.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(pointerNdc, camera);

    const hits = raycaster.intersectObject(bgMesh, true);
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
      }
    } else if (event.key === "9") {
      roomLabelsLayer.visible = !roomLabelsLayer.visible;
    } else if (event.key === "Escape") {
      hidePolygonPopup();
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
      lookDir.subVectors(controls.target, camera.position);
      lookDir.y = 0;
      if (lookDir.lengthSq() > 1e-6) {
        forward.copy(lookDir).normalize();
        right.crossVectors(forward, camera.up).normalize();
        move.set(0, 0, 0);
        if (moveZ !== 0) move.addScaledVector(forward, moveZ);
        if (moveX !== 0) move.addScaledVector(right, moveX);
        move.normalize().multiplyScalar(moveSpeed * delta);
        camera.position.add(move);
        controls.target.add(move);
      }
    }
    controls.update();
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
