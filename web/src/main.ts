import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { buildBgMesh, buildPadsLayer, buildPortalsLayer, buildStanMesh } from "./viewer/DebugLayers";
import { loadStageData } from "./viewer/StageLoader";

async function bootstrap(): Promise<void> {
  const root = document.getElementById("app");
  if (!root) {
    throw new Error("Missing #app element");
  }

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x101218);

  const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 20000);
  camera.position.set(850, 420, -1250);

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  root.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(850, 0, -900);
  controls.enableDamping = true;
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

  const bgMesh = buildBgMesh(stage.roomTriangles);
  bgMesh.name = "bg-mesh";
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

  let wireframeEnabled = false;

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
      const bgMaterial = bgMesh.material as THREE.MeshStandardMaterial;
      const stanMaterial = stanMesh.material as THREE.MeshStandardMaterial;
      bgMaterial.wireframe = wireframeEnabled;
      stanMaterial.wireframe = wireframeEnabled;
    } else if (event.key === "6") {
      grid.visible = !grid.visible;
    }
  });

  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  const animate = (): void => {
    controls.update();
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  };
  animate();
}

bootstrap().catch((error) => {
  console.error(error);
});
