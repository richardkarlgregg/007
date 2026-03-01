import * as THREE from "three";
import type { PadRecord, Portal, RoomTriangle, StanTile } from "./StageLoader";

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

export function buildBgMesh(triangles: RoomTriangle[]): THREE.Mesh {
  const positions: number[] = [];
  const colors: number[] = [];

  for (const tri of triangles) {
    positions.push(
      tri.a.x,
      tri.a.y,
      tri.a.z,
      tri.b.x,
      tri.b.y,
      tri.b.z,
      tri.c.x,
      tri.c.y,
      tri.c.z
    );

    // Stable per-room color to visually separate room chunks.
    const hue = ((tri.roomIndex * 47) % 360) / 360;
    const color = new THREE.Color().setHSL(hue, 0.25, 0.45);
    for (let i = 0; i < 3; i += 1) {
      colors.push(color.r, color.g, color.b);
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
    roughness: 1.0
  });

  return new THREE.Mesh(geometry, material);
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
