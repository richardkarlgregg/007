import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { buildRunwayAtlas } from "./buildRunwayAtlas.js";
import { parseModelGraph, parseModelJoints, parseModelSwitchAnchors, parsePropModel, propBinPath, } from "./parsePropBinaryModel.js";
import { decodeAnimationFrames, loadAnimation, loadSkeleton, STAGE_INTRO_ANIM_TABLE, } from "./parseAnimation.js";
import { parsePropModelEntries, parseSetupIntro } from "./parseSetup.js";
function normalizePath(p) {
    return p.split(path.sep).join("/");
}
function buildGunNodeManifest(graph) {
    const triCountByNode = new Map();
    for (const chunk of graph.chunks) {
        triCountByNode.set(chunk.nodeId, (triCountByNode.get(chunk.nodeId) ?? 0) + chunk.triangles.length);
    }
    return graph.nodes.map((n) => ({
        id: n.id,
        opcode: n.opcode,
        parentId: n.parentId,
        nextId: n.nextId,
        childId: n.childId,
        controlsNodeId: n.controlsNodeId ?? null,
        affectsNodeId: n.affectsNodeId ?? null,
        leftNodeId: n.leftNodeId ?? null,
        rightNodeId: n.rightNodeId ?? null,
        graphTriangleCount: triCountByNode.get(n.id) ?? 0,
        dlDebug: n.dlDebug ?? [],
    }));
}
function selectStartingWeaponId(intro) {
    return intro.startWeapons.find((w) => w.isDemoPlayback === 0)?.itemRight ?? 5;
}
function selectWeaponModels(itemRight) {
    // Source mapping for runway start weapon path:
    // ITEM_PP7 => GwppkZ (first-person gun model), chrwppk (world/character prop model).
    // Keep PP7 as default fallback for unknown item IDs.
    if (itemRight === 5)
        return { fpBinName: "GwppkZ.bin", introPropName: "chrwppk" };
    return { fpBinName: "GwppkZ.bin", introPropName: "chrwppk" };
}
function extractWeaponPoseFromStats(weaponStatsPath, statsName) {
    const src = readFileSync(weaponStatsPath, "utf8");
    const blockRx = new RegExp(`${statsName}_stats\\s*=\\s*\\{([\\s\\S]*?)\\};`, "i");
    const block = src.match(blockRx)?.[1];
    if (!block)
        return { posX: 11.0, posY: -20.8, posZ: -33.5, sway: 8.5 };
    // Parse numeric initializer entries in order, segment-by-segment, so later
    // bitfield hex values cannot shift PosX/PosY/PosZ indices.
    const tokens = [];
    for (const seg of block.split(",")) {
        const m = seg.trim().match(/^(-?(?:0x[0-9a-fA-F]+|\d+(?:\.\d+)?(?:f)?))$/i);
        if (m)
            tokens.push(m[1]);
    }
    const parseToken = (s) => {
        if (!s)
            return 0;
        if (/^-/i.test(s) && /^-0x/i.test(s))
            return -Number.parseInt(s.slice(3), 16);
        if (/^0x/i.test(s))
            return Number.parseInt(s, 16);
        return Number.parseFloat(s.replace(/f$/i, ""));
    };
    const posX = parseToken(tokens[1]);
    const posY = parseToken(tokens[2]);
    const posZ = parseToken(tokens[3]);
    const sway = parseToken(tokens[6]);
    if (!Number.isFinite(posX) || !Number.isFinite(posY) || !Number.isFinite(posZ)) {
        return { posX: 11.0, posY: -20.8, posZ: -33.5, sway: 8.5 };
    }
    return {
        posX,
        posY,
        posZ,
        sway: Number.isFinite(sway) && sway > 0 ? sway : 8.5,
    };
}
function computeBoundsFromTriangles(triangles) {
    let minX = Number.POSITIVE_INFINITY;
    let minY = Number.POSITIVE_INFINITY;
    let minZ = Number.POSITIVE_INFINITY;
    let maxX = Number.NEGATIVE_INFINITY;
    let maxY = Number.NEGATIVE_INFINITY;
    let maxZ = Number.NEGATIVE_INFINITY;
    for (const tri of triangles) {
        for (const v of [tri.a, tri.b, tri.c]) {
            if (v.x < minX)
                minX = v.x;
            if (v.y < minY)
                minY = v.y;
            if (v.z < minZ)
                minZ = v.z;
            if (v.x > maxX)
                maxX = v.x;
            if (v.y > maxY)
                maxY = v.y;
            if (v.z > maxZ)
                maxZ = v.z;
        }
    }
    return {
        min: { x: minX, y: minY, z: minZ },
        max: { x: maxX, y: maxY, z: maxZ },
    };
}
function filterGunOutlierTriangles(geo) {
    const mags = [];
    for (const tri of geo.triangles) {
        for (const v of [tri.a, tri.b, tri.c]) {
            mags.push(Math.max(Math.abs(v.x), Math.abs(v.y), Math.abs(v.z)));
        }
    }
    if (mags.length === 0)
        return geo;
    mags.sort((a, b) => a - b);
    const median = mags[Math.floor(mags.length / 2)];
    if (!(median > 0))
        return geo;
    const threshold = median * 4.0;
    const triangles = geo.triangles.filter((tri) => {
        for (const v of [tri.a, tri.b, tri.c]) {
            if (Math.max(Math.abs(v.x), Math.abs(v.y), Math.abs(v.z)) > threshold)
                return false;
        }
        return true;
    });
    if (triangles.length === 0 || triangles.length < Math.floor(geo.triangles.length * 0.25)) {
        return geo;
    }
    const edgeLength = (a, b) => Math.hypot(a.x - b.x, a.y - b.y, a.z - b.z);
    const triArea = (a, b, c) => {
        const abx = b.x - a.x, aby = b.y - a.y, abz = b.z - a.z;
        const acx = c.x - a.x, acy = c.y - a.y, acz = c.z - a.z;
        const cx = aby * acz - abz * acy;
        const cy = abz * acx - abx * acz;
        const cz = abx * acy - aby * acx;
        return 0.5 * Math.hypot(cx, cy, cz);
    };
    const maxEdges = triangles.map((t) => Math.max(edgeLength(t.a, t.b), edgeLength(t.b, t.c), edgeLength(t.c, t.a))).sort((a, b) => a - b);
    const medianEdge = maxEdges[Math.floor(maxEdges.length / 2)] ?? 0;
    const maxEdgeThreshold = Math.max(220, medianEdge * 8.0);
    const trianglesGeom = triangles.filter((t) => {
        const e1 = edgeLength(t.a, t.b);
        const e2 = edgeLength(t.b, t.c);
        const e3 = edgeLength(t.c, t.a);
        const maxE = Math.max(e1, e2, e3);
        const minE = Math.max(1e-6, Math.min(e1, e2, e3));
        if (maxE > maxEdgeThreshold)
            return false;
        if (maxE / minE > 40.0)
            return false;
        if (triArea(t.a, t.b, t.c) <= 1e-4)
            return false;
        return true;
    });
    const finalTriangles = trianglesGeom.length >= Math.floor(triangles.length * 0.6) ? trianglesGeom : triangles;
    const materialSet = new Set();
    for (const tri of finalTriangles)
        if (tri.materialId > 0)
            materialSet.add(tri.materialId);
    return {
        triangles: finalTriangles,
        materialIds: [...materialSet].sort((a, b) => a - b),
        bounds: computeBoundsFromTriangles(finalTriangles),
        sourceBounds: geo.sourceBounds,
    };
}
function filterGunByHeaderRadius(geo, headerRadius, radiusMultiple) {
    if (!(headerRadius > 0) || !(radiusMultiple > 0))
        return geo;
    const limit = headerRadius * radiusMultiple;
    const edgeLength = (a, b) => Math.hypot(a.x - b.x, a.y - b.y, a.z - b.z);
    // Source-anchored sliver cap: reject triangles whose single edge is longer
    // than a plausible fraction of the model's own bounding radius.
    const maxEdge = headerRadius * 0.6;
    const triangles = geo.triangles.filter((tri) => {
        const within = (v) => Math.hypot(v.x, v.y, v.z) <= limit;
        if (!(within(tri.a) && within(tri.b) && within(tri.c)))
            return false;
        const e1 = edgeLength(tri.a, tri.b);
        const e2 = edgeLength(tri.b, tri.c);
        const e3 = edgeLength(tri.c, tri.a);
        return Math.max(e1, e2, e3) <= maxEdge;
    });
    if (triangles.length === 0 || triangles.length < Math.floor(geo.triangles.length * 0.5)) {
        return geo;
    }
    const materialSet = new Set();
    for (const tri of triangles)
        if (tri.materialId > 0)
            materialSet.add(tri.materialId);
    return {
        triangles,
        materialIds: [...materialSet].sort((a, b) => a - b),
        bounds: computeBoundsFromTriangles(triangles),
        sourceBounds: geo.sourceBounds,
    };
}
function filterGunGraphOutlierChunks(graph, maxAbsRadius, headerRadius = 0) {
    const edgeLength = (a, b) => Math.hypot(a.x - b.x, a.y - b.y, a.z - b.z);
    const triArea = (a, b, c) => {
        const abx = b.x - a.x, aby = b.y - a.y, abz = b.z - a.z;
        const acx = c.x - a.x, acy = c.y - a.y, acz = c.z - a.z;
        const cx = aby * acz - abz * acy;
        const cy = abz * acx - abx * acz;
        const cz = abx * acy - aby * acx;
        return 0.5 * Math.hypot(cx, cy, cz);
    };
    const withinHeader = (v, limit) => Math.hypot(v.x, v.y, v.z) <= limit;
    const headerLimit = headerRadius > 0 ? headerRadius * 2.0 : 0;
    const headerMaxEdge = headerRadius > 0 ? headerRadius * 0.6 : 0;
    const chunks = graph.chunks
        .map((chunk) => {
        let triangles = chunk.triangles;
        if (headerLimit > 0) {
            triangles = triangles.filter((t) => {
                if (!(withinHeader(t.a, headerLimit) && withinHeader(t.b, headerLimit) && withinHeader(t.c, headerLimit))) {
                    return false;
                }
                const e1 = edgeLength(t.a, t.b);
                const e2 = edgeLength(t.b, t.c);
                const e3 = edgeLength(t.c, t.a);
                const maxE = Math.max(e1, e2, e3);
                const minE = Math.max(1e-6, Math.min(e1, e2, e3));
                if (maxE > headerMaxEdge)
                    return false;
                if (maxE / minE > 40.0)
                    return false;
                if (triArea(t.a, t.b, t.c) <= 1e-4)
                    return false;
                return true;
            });
        }
        if (triangles.length === 0)
            return null;
        const bounds = computeBoundsFromTriangles(triangles);
        const r = Math.max(Math.abs(bounds.min.x), Math.abs(bounds.min.y), Math.abs(bounds.min.z), Math.abs(bounds.max.x), Math.abs(bounds.max.y), Math.abs(bounds.max.z));
        if (r > maxAbsRadius)
            return null;
        return { ...chunk, triangles, bounds };
    })
        .filter((c) => c !== null);
    return { ...graph, chunks };
}
function extractChrVisualScale(chrRecordsPath, modelName) {
    const src = readFileSync(chrRecordsPath, "utf8");
    const rx = new RegExp(`"C${modelName}Z"\\s*,\\s*([\\d.]+)\\s*,\\s*([\\d.]+)`, "i");
    const match = src.match(rx);
    if (!match)
        return 1.0;
    const scale = Number.parseFloat(match[2]);
    return Number.isFinite(scale) ? scale : 1.0;
}
function extractChrHeaderRadius(headersPath, modelName) {
    const src = readFileSync(headersPath, "utf8");
    const rx = new RegExp(`MODELFILEHEADER\\(${modelName}\\s*,\\s*0\\s*,\\s*[^,]+,\\s*0\\s*,\\s*[^,]+,\\s*[^,]+,\\s*([\\d.]+)\\s*,`, "i");
    const m = src.match(rx);
    if (!m)
        return 0;
    const n = Number.parseFloat(m[1]);
    return Number.isFinite(n) ? n : 0;
}
function extractGunHeaderRadius(headersPath, modelName) {
    const src = readFileSync(headersPath, "utf8");
    const rx = new RegExp(`MODELFILEHEADER\\(${modelName}\\s*,\\s*0\\s*,\\s*[^,]+,\\s*0\\s*,\\s*[^,]+,\\s*[^,]+,\\s*([\\d.]+)\\s*,`, "i");
    const m = src.match(rx);
    if (!m)
        return 0;
    const n = Number.parseFloat(m[1]);
    return Number.isFinite(n) ? n : 0;
}
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "../../..");
const chrRecordsRel = "assets/obseg/chr/chrModelFileRecords.inc.c";
const chrRecordsPath = path.resolve(repoRoot, chrRecordsRel);
const chrHeadersPath = path.resolve(repoRoot, "assets/obseg/chr/chrModelFileHeaders.inc.c");
const gunHeadersPath = path.resolve(repoRoot, "assets/obseg/gun/gunModelFileHeaders.inc.c");
const gunStatsPath = path.resolve(repoRoot, "assets/obseg/gun/gunWeaponStats.inc.c");
const setupRel = "assets/obseg/setup/UsetuprunZ.c";
const setupPath = path.resolve(repoRoot, setupRel);
const intro = parseSetupIntro(setupPath);
const cuff = intro.cuffFlags ?? 3; // 3 = CUFF_BOILER (bondconstants.h)
const startWeaponId = selectStartingWeaponId(intro);
const weaponModels = selectWeaponModels(startWeaponId);
const fpModelBaseName = weaponModels.fpBinName.replace(/^G/i, "").replace(/Z\.bin$/i, "");
const fpWeaponPose = extractWeaponPoseFromStats(gunStatsPath, fpModelBaseName);
function bondModelForCuff(cuffId) {
    // bondconstants.h CUFF_TYPES enum → bondview.c solo_char_load() mapping:
    //   CUFF_BLUE=0, CUFF_BROSNAN=1, CUFF_JUNGLE=2, CUFF_BOILER=3, CUFF_SNOW=4
    if (cuffId === 1)
        return { body: "suitbond", head: "headbrosnansuit" }; // CUFF_BROSNAN
    if (cuffId === 2)
        return { body: "timberbond", head: "headbrosnantimber" }; // CUFF_JUNGLE
    if (cuffId === 3)
        return { body: "boilerbond", head: "headbrosnanboiler" }; // CUFF_BOILER
    if (cuffId === 4)
        return { body: "snowbond", head: "headbrosnansnow" }; // CUFF_SNOW
    return { body: "suitbond", head: "headbrosnansuit" }; // CUFF_BLUE / default
}
const selected = bondModelForCuff(cuff);
const hints = {
    modelHint: `C${selected.body}Z`,
    headHint: `C${selected.head}Z`,
};
const bodyModelName = selected.body;
const headModelName = selected.head;
const bodyScale = extractChrVisualScale(chrRecordsPath, bodyModelName);
const bodyBoundingRadius = extractChrHeaderRadius(chrHeadersPath, bodyModelName);
const headBoundingRadius = extractChrHeaderRadius(chrHeadersPath, headModelName);
const bodyGeo = parsePropModel(path.resolve(repoRoot, `assets/obseg/chr/C${bodyModelName}Z.bin`));
const headGeo = parsePropModel(path.resolve(repoRoot, `assets/obseg/chr/C${headModelName}Z.bin`));
const gunIntroGeoRaw = parsePropModel(propBinPath(repoRoot, weaponModels.introPropName));
const gunFpGeoRaw = parsePropModel(path.resolve(repoRoot, `assets/obseg/gun/${weaponModels.fpBinName}`));
const bodyJoints = parseModelJoints(path.resolve(repoRoot, `assets/obseg/chr/C${bodyModelName}Z.bin`));
const headJoints = parseModelJoints(path.resolve(repoRoot, `assets/obseg/chr/C${headModelName}Z.bin`));
const bodySwitches = parseModelSwitchAnchors(path.resolve(repoRoot, `assets/obseg/chr/C${bodyModelName}Z.bin`));
const bodyGraph = parseModelGraph(path.resolve(repoRoot, `assets/obseg/chr/C${bodyModelName}Z.bin`));
const headGraph = parseModelGraph(path.resolve(repoRoot, `assets/obseg/chr/C${headModelName}Z.bin`));
const gunFpGraphRaw = parseModelGraph(path.resolve(repoRoot, `assets/obseg/gun/${weaponModels.fpBinName}`));
if (!bodyGeo)
    throw new Error(`Failed to decode body model C${bodyModelName}Z.bin`);
if (!headGeo)
    throw new Error(`Failed to decode head model C${headModelName}Z.bin`);
if (!gunIntroGeoRaw)
    throw new Error(`Failed to decode intro gun model P${weaponModels.introPropName}Z.bin`);
if (!gunFpGeoRaw)
    throw new Error(`Failed to decode first-person gun model ${weaponModels.fpBinName}`);
const gunIntroGeo = gunIntroGeoRaw;
const gunFpGeo = gunFpGeoRaw;
if (!bodyGraph)
    throw new Error(`Failed to decode body graph C${bodyModelName}Z.bin`);
if (!headGraph)
    throw new Error(`Failed to decode head graph C${headModelName}Z.bin`);
if (!gunFpGraphRaw)
    throw new Error(`Failed to decode first-person gun graph ${weaponModels.fpBinName}`);
const propEntries = parsePropModelEntries(path.resolve(repoRoot, "assets/obseg/prop/propItemModelFileRecord.inc.c"));
const gunIntroEntry = propEntries.find((e) => e.name === weaponModels.introPropName);
if (!gunIntroEntry)
    throw new Error(`Missing ${weaponModels.introPropName} scale entry in propItemModelFileRecord.inc.c`);
const gunFpBoundingRadius = extractGunHeaderRadius(gunHeadersPath, fpModelBaseName);
const gunFpGraph = gunFpGraphRaw;
// ── Animation export ──────────────────────────────────────────────────────
const animIndex = intro.animIndex ?? 0;
let animationData;
try {
    const animEntry = STAGE_INTRO_ANIM_TABLE[animIndex];
    if (animEntry) {
        const skelJoints = loadSkeleton(repoRoot, bodyModelName);
        if (skelJoints && skelJoints.length > 0) {
            const { header, entryBuf } = loadAnimation(repoRoot, animEntry.animName);
            const frames = decodeAnimationFrames(header, entryBuf, skelJoints);
            animationData = {
                name: animEntry.animName,
                startFrame: animEntry.startFrame,
                endFrame: animEntry.endFrame,
                speed: animEntry.speed,
                bitsPerComponent: header.bitsPerComponent,
                frameCount: header.frameCount,
                bytesPerFrame: header.bytesPerFrame,
                jointCount: skelJoints.length,
                frames,
            };
            console.log(`Animation: ${animEntry.animName} — ${header.frameCount} frames, ` +
                `${skelJoints.length} joints, ${header.bitsPerComponent} bits/comp, ` +
                `start=${animEntry.startFrame} end=${animEntry.endFrame} speed=${animEntry.speed}`);
        }
        else {
            console.warn("Skeleton not found for " + bodyModelName + " — skipping animation export");
        }
    }
}
catch (err) {
    console.warn("Animation export failed:", err);
}
const data = {
    intro,
    actor: {
        name: "BondIntroActor",
        modelHint: hints.modelHint,
        headHint: hints.headHint,
        source: normalizePath(chrRecordsRel),
        // Native scale path: c_item_entries[body].scale * 0.10000001 * 0.97 (non-DK mode)
        scale: bodyScale * 0.10000001 * 0.97,
        bodyBoundingRadius,
        headBoundingRadius,
    },
    rig: {
        eyeHeight: 61.0,
        shoulderWidth: 10.5,
        handForward: 12.0,
    },
    fpWeapon: {
        statsName: fpModelBaseName,
        posX: fpWeaponPose.posX,
        posY: fpWeaponPose.posY,
        posZ: fpWeaponPose.posZ,
        sway: fpWeaponPose.sway,
    },
    models: {
        body: bodyGeo,
        head: headGeo,
        gunIntro: gunIntroGeo,
        gunIntroSourceScale: gunIntroEntry.scale,
        gunFp: gunFpGeo,
        gunFpSourceScale: 1.0,
        gunFpBoundingRadius,
    },
    joints: {
        body: bodyJoints,
        head: headJoints,
    },
    switches: {
        body: bodySwitches,
    },
    graph: {
        body: bodyGraph,
        head: headGraph,
        gunFp: gunFpGraph,
    },
    clips: [
        {
            name: "runway_intro_orbit_to_fp",
            durationSec: 3.6,
            keyframes: [
                { t: 0.0, yawDeg: -40, weaponRaise: 0.1, lean: 0.05 },
                { t: 0.9, yawDeg: -12, weaponRaise: 0.2, lean: 0.03 },
                { t: 1.8, yawDeg: 8, weaponRaise: 0.45, lean: 0.0 },
                { t: 2.6, yawDeg: 2, weaponRaise: 0.78, lean: -0.02 },
                { t: 3.6, yawDeg: 0, weaponRaise: 1.0, lean: 0.0 },
            ],
        },
    ],
    animation: animationData,
};
// Collect all materialIds used across body/head graph chunks and legacy models
const allMaterialIds = new Set();
const addFromGraph = (graph) => {
    for (const chunk of graph.chunks) {
        for (const id of chunk.materialIds)
            if (id > 0)
                allMaterialIds.add(id);
    }
};
const addFromGeo = (geo) => {
    if (!geo)
        return;
    for (const id of geo.materialIds)
        if (id > 0)
            allMaterialIds.add(id);
};
addFromGraph(bodyGraph);
addFromGraph(headGraph);
addFromGraph(gunFpGraph);
addFromGeo(bodyGeo);
addFromGeo(headGeo);
addFromGeo(gunIntroGeo);
addFromGeo(gunFpGeo);
const outputDir = path.resolve(repoRoot, "web/public/data/actors");
mkdirSync(outputDir, { recursive: true });
const atlas = buildRunwayAtlas(repoRoot, [...allMaterialIds], {
    dir: outputDir,
    prefix: "bond_intro",
});
data.atlas = atlas;
console.log(`Atlas: ${atlas.width}×${atlas.height}px, ${Object.keys(atlas.items).length} textures`);
const outputPath = path.resolve(outputDir, "bond_intro.json");
writeFileSync(outputPath, `${JSON.stringify(data, null, 2)}\n`, "utf8");
console.log(`Export complete: ${normalizePath(path.relative(repoRoot, outputPath))}`);
const manifestPath = path.resolve(outputDir, "bond_intro_gun_manifest.json");
const gunManifest = {
    weapon: fpModelBaseName,
    fpBinName: weaponModels.fpBinName,
    rootNodeId: gunFpGraph.rootNodeId,
    nodeCount: gunFpGraph.nodes.length,
    chunkCount: gunFpGraph.chunks.length,
    totalTriangles: gunFpGraph.chunks.reduce((sum, c) => sum + c.triangles.length, 0),
    nodes: buildGunNodeManifest(gunFpGraph),
};
writeFileSync(manifestPath, `${JSON.stringify(gunManifest, null, 2)}\n`, "utf8");
console.log(`Manifest: ${normalizePath(path.relative(repoRoot, manifestPath))}`);
