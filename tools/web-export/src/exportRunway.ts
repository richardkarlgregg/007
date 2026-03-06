import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { buildRunwayAtlas, type AtlasManifest } from "./buildRunwayAtlas.js";
import { parseBgFile } from "./parseBg.js";
import { parseSetupPadlist } from "./parseSetup.js";
import { parseStanFile } from "./parseStan.js";

interface StageOutput {
  stage: string;
  sourceFiles: {
    bg: string;
    setup: string;
    stan: string;
  };
  stanTiles: ReturnType<typeof parseStanFile>;
  pads: ReturnType<typeof parseSetupPadlist>;
  portals: ReturnType<typeof parseBgFile>["portals"];
  roomCenters: ReturnType<typeof parseBgFile>["roomCenters"];
  roomTriangles: ReturnType<typeof parseBgFile>["roomTriangles"];
  atlas: AtlasManifest;
}

function normalizePath(p: string): string {
  return p.split(path.sep).join("/");
}

function requireFile(filePath: string): void {
  if (!existsSync(filePath)) {
    throw new Error(`Missing required source file: ${filePath}`);
  }
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "../../..");

const relativeSources = {
  bg: "assets/obseg/bg/bg_run_all_p.c",
  setup: "assets/obseg/setup/UsetuprunZ.c",
  stan: "assets/obseg/stan/Tbg_run_all_p_stanZ.c"
};

const sourceFiles = {
  bg: path.resolve(repoRoot, relativeSources.bg),
  setup: path.resolve(repoRoot, relativeSources.setup),
  stan: path.resolve(repoRoot, relativeSources.stan)
};

requireFile(sourceFiles.bg);
requireFile(sourceFiles.setup);
requireFile(sourceFiles.stan);

const stanTiles = parseStanFile(sourceFiles.stan).sort((a, b) => a.id - b.id);
const pads = parseSetupPadlist(sourceFiles.setup).sort((a, b) => a.name.localeCompare(b.name));
const bg = parseBgFile(sourceFiles.bg);
const portals = bg.portals.sort((a, b) => a.name.localeCompare(b.name));
const roomCenters = bg.roomCenters.sort((a, b) => a.roomIndex - b.roomIndex);
const roomTriangles = bg.roomTriangles;
const materialIds = [...new Set(roomTriangles.map((tri) => tri.materialId))];
const atlas = buildRunwayAtlas(repoRoot, materialIds);

const outputData: StageOutput = {
  stage: "runway",
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
  atlas
};

const outputDir = path.resolve(repoRoot, "web/public/data/stages");
mkdirSync(outputDir, { recursive: true });
const outputPath = path.resolve(outputDir, "runway.json");
writeFileSync(outputPath, `${JSON.stringify(outputData, null, 2)}\n`, "utf8");

console.log(`Export complete: ${normalizePath(path.relative(repoRoot, outputPath))}`);
