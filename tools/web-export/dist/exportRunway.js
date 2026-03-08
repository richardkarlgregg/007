import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { buildRunwayAtlas } from "./buildRunwayAtlas.js";
import { parseBgFile } from "./parseBg.js";
import { parsePropModel, propBinPath } from "./parsePropBinaryModel.js";
import { parseSetupPadlist, parseSetupPropdefs, parsePropModelEntries } from "./parseSetup.js";
import { parseStanFile } from "./parseStan.js";
function normalizePath(p) {
    return p.split(path.sep).join("/");
}
function requireFile(filePath) {
    if (!existsSync(filePath)) {
        throw new Error(`Missing required source file: ${filePath}`);
    }
}
function parseRunwayLevelScale(bgSourcePath) {
    const src = existsSync(bgSourcePath) ? readFileSync(bgSourcePath, "utf8") : "";
    for (const line of src.split(/\r?\n/)) {
        if (!line.includes("LEVELID_RUNWAY"))
            continue;
        const parts = line.split(",").map((p) => p.trim());
        if (parts.length < 4)
            continue;
        const n = Number.parseFloat(parts[3]);
        if (Number.isFinite(n))
            return n;
    }
    return 1.0;
}
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "../../..");
const relativeSources = {
    bg: "assets/obseg/bg/bg_run_all_p.c",
    setup: "assets/obseg/setup/UsetuprunZ.c",
    stan: "assets/obseg/stan/Tbg_run_all_p_stanZ.c",
    propModelNames: "assets/obseg/prop/propItemModelFileRecord.inc.c",
    gameBg: "src/game/bg.c"
};
const sourceFiles = {
    bg: path.resolve(repoRoot, relativeSources.bg),
    setup: path.resolve(repoRoot, relativeSources.setup),
    stan: path.resolve(repoRoot, relativeSources.stan),
    propModelNames: path.resolve(repoRoot, relativeSources.propModelNames),
    gameBg: path.resolve(repoRoot, relativeSources.gameBg)
};
requireFile(sourceFiles.bg);
requireFile(sourceFiles.setup);
requireFile(sourceFiles.stan);
requireFile(sourceFiles.propModelNames);
requireFile(sourceFiles.gameBg);
const stanTiles = parseStanFile(sourceFiles.stan).sort((a, b) => a.id - b.id);
// Pads are kept in original parse order so that padIndex values from propDefs[]
// can be used as direct array indices (padIndex 0 = first entry in padlist[]).
const pads = parseSetupPadlist(sourceFiles.setup);
const propPlacements = parseSetupPropdefs(sourceFiles.setup);
const propModelEntries = parsePropModelEntries(sourceFiles.propModelNames);
// Flat name array for backward-compatible indexing (propModelNames[primaryIndex]).
const propModelNames = propModelEntries.map((e) => e.name);
// Keyed scale map for viewer use.
const propModelScales = {};
for (const e of propModelEntries)
    propModelScales[e.name] = e.scale;
const bg = parseBgFile(sourceFiles.bg);
const stageLevelScale = parseRunwayLevelScale(sourceFiles.gameBg);
const portals = bg.portals.sort((a, b) => a.name.localeCompare(b.name));
const roomCenters = bg.roomCenters.sort((a, b) => a.roomIndex - b.roomIndex);
const roomTriangles = bg.roomTriangles;
// Collect unique prop model names used on this stage.
// Doors use a BG-matrix-based rendering pipeline in the game (not pad-based), so
// their models are parsed for completeness but excluded from the 3-D viewer layer.
// StandardProp and SingleMonitor store a 0-based PitemZ index in primaryIndex.
const PROP_TYPES_WITH_MODEL = new Set(["StandardProp", "SingleMonitor"]);
const usedModelNames = new Set();
for (const p of propPlacements) {
    if (PROP_TYPES_WITH_MODEL.has(p.type)) {
        const entry = propModelEntries[p.primaryIndex];
        if (entry)
            usedModelNames.add(entry.name);
    }
}
// Try to parse each model binary. Gracefully skips missing / undecompressable files.
const propModels = {};
const propMaterialIds = new Set();
for (const name of usedModelNames) {
    const binPath = propBinPath(repoRoot, name);
    const geo = parsePropModel(binPath);
    if (geo) {
        propModels[name] = geo;
        for (const id of geo.materialIds)
            propMaterialIds.add(id);
        console.log(`  prop model ${name}: ${geo.triangles.length} triangles, ${geo.materialIds.length} textures`);
    }
}
const parsedCount = Object.keys(propModels).length;
if (parsedCount > 0) {
    console.log(`Parsed ${parsedCount}/${usedModelNames.size} prop model binaries`);
}
else {
    console.log(`No prop model binaries found in assets/obseg/prop/ (ROM not extracted yet)`);
}
const materialIds = [
    ...new Set([
        ...roomTriangles.map((tri) => tri.materialId),
        ...propMaterialIds,
    ]),
];
const atlas = buildRunwayAtlas(repoRoot, materialIds);
// Annotate each prop placement with its correct render scale.
// renderScale = PitemZ_entries[primaryIndex].scale × (extraScale / 256)
// This matches the game's own: modelSetScale(model, pitemZ.scale)
//   followed by:              modelSetScale(model, model->scale × extraScale/256)
const annotatedPlacements = propPlacements.map((p) => {
    if (!PROP_TYPES_WITH_MODEL.has(p.type))
        return p;
    const entry = propModelEntries[p.primaryIndex];
    if (!entry)
        return p;
    const renderScale = entry.scale * (p.extraScale / 256);
    return { ...p, renderScale };
});
const outputData = {
    stage: "runway",
    stageLevelScale,
    sourceFiles: {
        bg: normalizePath(relativeSources.bg),
        setup: normalizePath(relativeSources.setup),
        stan: normalizePath(relativeSources.stan)
    },
    stanTiles,
    pads,
    portals,
    roomCenters,
    roomTriangles,
    atlas,
    propPlacements: annotatedPlacements,
    propModelNames,
    propModelScales,
    propModels
};
const outputDir = path.resolve(repoRoot, "web/public/data/stages");
mkdirSync(outputDir, { recursive: true });
const outputPath = path.resolve(outputDir, "runway.json");
writeFileSync(outputPath, `${JSON.stringify(outputData, null, 2)}\n`, "utf8");
console.log(`Export complete: ${normalizePath(path.relative(repoRoot, outputPath))}`);
