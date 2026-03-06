// Quick script to inspect room 17 data
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataPath = path.join(__dirname, 'public', 'data', 'stages', 'runway.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

console.log('=== Room 17 Analysis ===\n');

// Find room 17 triangles
const room17Triangles = data.roomTriangles.filter(tri => tri.roomIndex === 17);
console.log(`Total triangles in room 17: ${room17Triangles.length}`);

// Count materials used
const materials = new Set();
room17Triangles.forEach(tri => materials.add(tri.materialId));
console.log(`Unique materials: ${materials.size}`);
console.log(`Material IDs: ${Array.from(materials).sort((a,b) => a-b).join(', ')}`);

// Check if materials are in atlas
if (data.atlas && data.atlas.items) {
  console.log('\n=== Atlas Coverage ===');
  materials.forEach(matId => {
    if (data.atlas.items[matId]) {
      const item = data.atlas.items[matId];
      console.log(`Material ${matId}: ${item.width}x${item.height} at (${item.x}, ${item.y})`);
    } else {
      console.log(`Material ${matId}: NOT IN ATLAS (will show magenta checkerboard)`);
    }
  });
}

// Find room center
const roomCenter = data.roomCenters.find(rc => rc.roomIndex === 17);
if (roomCenter) {
  console.log(`\n=== Room 17 Center ===`);
  console.log(`Position: (${roomCenter.center.x}, ${roomCenter.center.y}, ${roomCenter.center.z})`);
}

// Sample some triangles
console.log(`\n=== Sample Triangles (first 3) ===`);
room17Triangles.slice(0, 3).forEach((tri, idx) => {
  console.log(`Triangle ${idx}: Material ${tri.materialId}, Secondary: ${tri.isSecondary}`);
  console.log(`  Position: (${tri.a.x.toFixed(1)}, ${tri.a.y.toFixed(1)}, ${tri.a.z.toFixed(1)})`);
});

// Check z positions
const zPositions = room17Triangles.map(tri => tri.a.z);
const minZ = Math.min(...zPositions);
const maxZ = Math.max(...zPositions);
console.log(`\n=== Z Range ===`);
console.log(`Min Z: ${minZ.toFixed(1)}, Max Z: ${maxZ.toFixed(1)}`);
console.log(`Looking for z=-2542: ${minZ <= -2542 && maxZ >= -2542 ? 'YES' : 'NO'}`);
