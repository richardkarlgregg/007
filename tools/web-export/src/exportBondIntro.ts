import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  parseModelGraph,
  parseModelJoints,
  parseModelSwitchAnchors,
  parsePropModel,
  propBinPath,
  type ModelGraphData,
  type ModelJoint,
  type ModelSwitchAnchor,
  type PropModelGeometry,
} from "./parsePropBinaryModel.js";
import { parsePropModelEntries, parseSetupIntro } from "./parseSetup.js";

interface BondIntroAsset {
  actor: {
    name: string;
    modelHint: string;
    headHint: string;
    source: string;
    scale: number;
    bodyBoundingRadius: number;
    headBoundingRadius: number;
  };
  rig: {
    eyeHeight: number;
    shoulderWidth: number;
    handForward: number;
  };
  models: {
    body: PropModelGeometry;
    head: PropModelGeometry;
    gun: PropModelGeometry;
    gunSourceScale: number;
  };
  joints: {
    body: ModelJoint[];
    head: ModelJoint[];
  };
  switches: {
    body: ModelSwitchAnchor[];
  };
  graph: {
    body: ModelGraphData;
    head: ModelGraphData;
  };
  clips: Array<{
    name: string;
    durationSec: number;
    keyframes: Array<{
      t: number;
      yawDeg: number;
      weaponRaise: number;
      lean: number;
    }>;
  }>;
}

function normalizePath(p: string): string {
  return p.split(path.sep).join("/");
}

function extractChrVisualScale(chrRecordsPath: string, modelName: string): number {
  const src = readFileSync(chrRecordsPath, "utf8");
  const rx = new RegExp(`"C${modelName}Z"\\s*,\\s*([\\d.]+)\\s*,\\s*([\\d.]+)`, "i");
  const match = src.match(rx);
  if (!match) return 1.0;
  const scale = Number.parseFloat(match[2]);
  return Number.isFinite(scale) ? scale : 1.0;
}

function extractChrHeaderRadius(headersPath: string, modelName: string): number {
  const src = readFileSync(headersPath, "utf8");
  const rx = new RegExp(
    `MODELFILEHEADER\\(${modelName}\\s*,\\s*0\\s*,\\s*[^,]+,\\s*0\\s*,\\s*[^,]+,\\s*[^,]+,\\s*([\\d.]+)\\s*,`,
    "i"
  );
  const m = src.match(rx);
  if (!m) return 0;
  const n = Number.parseFloat(m[1]);
  return Number.isFinite(n) ? n : 0;
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "../../..");

const chrRecordsRel = "assets/obseg/chr/chrModelFileRecords.inc.c";
const chrRecordsPath = path.resolve(repoRoot, chrRecordsRel);
const chrHeadersPath = path.resolve(repoRoot, "assets/obseg/chr/chrModelFileHeaders.inc.c");
const setupRel = "assets/obseg/setup/UsetuprunZ.c";
const setupPath = path.resolve(repoRoot, setupRel);
const intro = parseSetupIntro(setupPath);
const cuff = intro.cuffFlags ?? 3; // 3 = CUFF_SNOW

function bondModelForCuff(cuffId: number): { body: string; head: string } {
  // solo_char_load() mapping for Brosnan folder bond.
  if (cuffId === 2) return { body: "boilerbond", head: "headbrosnanboiler" }; // CUFF_BOILER
  if (cuffId === 1) return { body: "timberbond", head: "headbrosnantimber" }; // CUFF_JUNGLE
  if (cuffId === 3) return { body: "snowbond", head: "headbrosnansnow" }; // CUFF_SNOW
  return { body: "suitbond", head: "headbrosnansuit" }; // CUFF_BROSNAN / default
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
const gunGeo = parsePropModel(propBinPath(repoRoot, "gun_runway1"));
const bodyJoints = parseModelJoints(path.resolve(repoRoot, `assets/obseg/chr/C${bodyModelName}Z.bin`));
const headJoints = parseModelJoints(path.resolve(repoRoot, `assets/obseg/chr/C${headModelName}Z.bin`));
const bodySwitches = parseModelSwitchAnchors(path.resolve(repoRoot, `assets/obseg/chr/C${bodyModelName}Z.bin`));
const bodyGraph = parseModelGraph(path.resolve(repoRoot, `assets/obseg/chr/C${bodyModelName}Z.bin`));
const headGraph = parseModelGraph(path.resolve(repoRoot, `assets/obseg/chr/C${headModelName}Z.bin`));
if (!bodyGeo) throw new Error(`Failed to decode body model C${bodyModelName}Z.bin`);
if (!headGeo) throw new Error(`Failed to decode head model C${headModelName}Z.bin`);
if (!gunGeo) throw new Error("Failed to decode world gun model Pgun_runway1Z.bin");
if (!bodyGraph) throw new Error(`Failed to decode body graph C${bodyModelName}Z.bin`);
if (!headGraph) throw new Error(`Failed to decode head graph C${headModelName}Z.bin`);

const propEntries = parsePropModelEntries(path.resolve(repoRoot, "assets/obseg/prop/propItemModelFileRecord.inc.c"));
const gunEntry = propEntries.find((e) => e.name === "gun_runway1");
if (!gunEntry) throw new Error("Missing gun_runway1 scale entry in propItemModelFileRecord.inc.c");

const data: BondIntroAsset = {
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
  models: {
    body: bodyGeo,
    head: headGeo,
    gun: gunGeo,
    gunSourceScale: gunEntry.scale,
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
};

const outputDir = path.resolve(repoRoot, "web/public/data/actors");
mkdirSync(outputDir, { recursive: true });
const outputPath = path.resolve(outputDir, "bond_intro.json");
writeFileSync(outputPath, `${JSON.stringify(data, null, 2)}\n`, "utf8");
console.log(`Export complete: ${normalizePath(path.relative(repoRoot, outputPath))}`);
