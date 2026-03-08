import { readFileSync } from "node:fs";
/** Prop types that carry a valid pad reference in their second word. */
const SPATIAL_PROP_TYPES = new Set([
    "Guard",
    "StandardProp",
    "Door",
    "Aircraft",
    "Vehichle",
    "Autogun",
    "AmmoBox",
    "Collectable",
    "Tank",
    "SingleMonitor",
    "Key",
    "Drone",
    "Glass",
    "GlassWindow",
]);
/**
 * Parse propItemModelFileRecord.inc.c to produce a 0-indexed array of
 * { name, scale } entries matching PitemZ_entries[].
 *
 * Entries appear as:
 *   #include <assets/obseg/prop/NAME/propFileRecord.inc.c>   (scale defaults to 0.1)
 *   PROPFILERECORD(NAME, SCALE)
 */
export function parsePropModelEntries(path) {
    const source = readFileSync(path, "utf8");
    const entries = [];
    for (const line of source.split("\n")) {
        const inc = line.match(/#include\s+<assets\/obseg\/prop\/(\w+)\/propFileRecord\.inc\.c>/);
        if (inc) {
            // The included file uses PROPFILERECORD with scale=0.1 (macro default).
            entries.push({ name: inc[1], scale: 0.1 });
            continue;
        }
        // PROPFILERECORD(NAME, SCALE) — explicit scale (may differ from 0.1 for doors etc.)
        const rec = line.match(/PROPFILERECORD\((\w+),\s*([\d.]+)\s*\)/);
        if (rec) {
            entries.push({ name: rec[1], scale: Number.parseFloat(rec[2]) });
        }
    }
    return entries;
}
/**
 * Parse propDefs[] from a setup C source file.
 * Returns only entries whose type has a meaningful 3-D position (pad reference).
 *
 * Each propDef line has the format:
 *   _mkword(extraScale, _mkshort(0, typeId)), _mkword(primaryIndex, padIndex), ...
 * The extraScale is the PropDefHeaderRecord.extrascale field (u8.8 fixed-point).
 */
export function parseSetupPropdefs(path) {
    const source = readFileSync(path, "utf8");
    const propDefsBlock = source.match(/s32\s+propDefs\[\]\s*=\s*\{([\s\S]*?)\n\};/);
    if (!propDefsBlock) {
        throw new Error(`Could not find propDefs[] in ${path}`);
    }
    const block = propDefsBlock[1];
    const results = [];
    // Each data line begins with _mkword(EXTRASCALE, _mkshort(0, TYPEID)) followed
    // by _mkword(PRIMARYINDEX, PADINDEX).  Capture all three integer arguments.
    const entryRegex = /\/\* Type = (\w+); index = (\d+) \*\/[^\r\n]*[\r\n]+\s*_mkword\((\d+),\s*_mkshort\(0,\s*\d+\)\)\s*,\s*_mkword\((\d+),\s*(\d+)\)\s*,\s*([^\s,]+)/g;
    let match = null;
    while ((match = entryRegex.exec(block)) !== null) {
        const type = match[1];
        if (!SPATIAL_PROP_TYPES.has(type))
            continue;
        const index = Number.parseInt(match[2], 10);
        const extraScale = Number.parseInt(match[3], 10);
        const primaryIndex = Number.parseInt(match[4], 10);
        const rawPadIndex = Number.parseInt(match[5], 10);
        const objectFlags = Number.parseInt(match[6], 0);
        // Runtime pad addressing:
        //   0..9999   => g_CurrentSetup.pads[pad]
        //   >=10000   => g_CurrentSetup.boundpads[getBoundPadNum(pad)] (pad3dlist)
        const padSource = rawPadIndex >= 10000 ? "boundPad" : "pad";
        const padIndex = rawPadIndex >= 10000 ? rawPadIndex - 10000 : rawPadIndex;
        if (padIndex < 0)
            continue;
        results.push({ index, type, padIndex, padSource, primaryIndex, extraScale, objectFlags });
    }
    return results;
}
const NUMBER = "[-+]?(?:\\d*\\.\\d+|\\d+)(?:e[-+]?\\d+)?";
function parseFloatNumber(input) {
    return Number.parseFloat(input);
}
export function parseSetupPadlist(path) {
    const source = readFileSync(path, "utf8");
    const padlistBlock = source.match(/PadRecord\s+padlist\[\]\s*=\s*\{([\s\S]*?)\n\};/);
    if (!padlistBlock) {
        throw new Error(`Could not find PadRecord padlist in ${path}`);
    }
    const entryRegex = new RegExp(`\\{\\s*\\{\\s*(${NUMBER})f?\\s*,\\s*(${NUMBER})f?\\s*,\\s*(${NUMBER})f?\\s*\\},\\s*` +
        `\\{\\s*(${NUMBER})f?\\s*,\\s*(${NUMBER})f?\\s*,\\s*(${NUMBER})f?\\s*\\},\\s*` +
        `\\{\\s*(${NUMBER})f?\\s*,\\s*(${NUMBER})f?\\s*,\\s*(${NUMBER})f?\\s*\\},\\s*` +
        `"([^"]+)"\\s*,\\s*(-?\\d+)\\s*\\}`, "gi");
    const pads = [];
    let match = null;
    while ((match = entryRegex.exec(padlistBlock[1])) !== null) {
        pads.push({
            name: match[10],
            position: {
                x: parseFloatNumber(match[1]),
                y: parseFloatNumber(match[2]),
                z: parseFloatNumber(match[3])
            },
            up: {
                x: parseFloatNumber(match[4]),
                y: parseFloatNumber(match[5]),
                z: parseFloatNumber(match[6])
            },
            orientation: {
                x: parseFloatNumber(match[7]),
                y: parseFloatNumber(match[8]),
                z: parseFloatNumber(match[9])
            },
            flags: Number.parseInt(match[11], 10)
        });
    }
    return pads;
}
export function parseSetupPad3dlist(path) {
    const source = readFileSync(path, "utf8");
    const blockMatch = source.match(/BoundPadRecord\s+pad3dlist\[\]\s*=\s*\{([\s\S]*?)\n\};/);
    if (!blockMatch) {
        throw new Error(`Could not find BoundPadRecord pad3dlist[] in ${path}`);
    }
    const entryRegex = new RegExp(`\\{\\s*\\{\\s*(${NUMBER})f?\\s*,\\s*(${NUMBER})f?\\s*,\\s*(${NUMBER})f?\\s*\\},\\s*` +
        `\\{\\s*(${NUMBER})f?\\s*,\\s*(${NUMBER})f?\\s*,\\s*(${NUMBER})f?\\s*\\},\\s*` +
        `\\{\\s*(${NUMBER})f?\\s*,\\s*(${NUMBER})f?\\s*,\\s*(${NUMBER})f?\\s*\\},\\s*` +
        `("([^"]*)"|NULL)\\s*,\\s*(-?\\d+)\\s*,\\s*\\{\\s*` +
        `(${NUMBER})f?\\s*,\\s*(${NUMBER})f?\\s*,\\s*(${NUMBER})f?\\s*,\\s*` +
        `(${NUMBER})f?\\s*,\\s*(${NUMBER})f?\\s*,\\s*(${NUMBER})f?\\s*\\}\\s*\\}`, "gi");
    const results = [];
    let match = null;
    while ((match = entryRegex.exec(blockMatch[1])) !== null) {
        const nameLiteral = match[11];
        // Terminator entry is NULL + all zero vectors/bbox.
        if (!nameLiteral)
            continue;
        results.push({
            name: nameLiteral,
            position: {
                x: parseFloatNumber(match[1]),
                y: parseFloatNumber(match[2]),
                z: parseFloatNumber(match[3]),
            },
            up: {
                x: parseFloatNumber(match[4]),
                y: parseFloatNumber(match[5]),
                z: parseFloatNumber(match[6]),
            },
            orientation: {
                x: parseFloatNumber(match[7]),
                y: parseFloatNumber(match[8]),
                z: parseFloatNumber(match[9]),
            },
            flags: Number.parseInt(match[12], 10),
            bbox: {
                xmin: parseFloatNumber(match[13]),
                xmax: parseFloatNumber(match[14]),
                ymin: parseFloatNumber(match[15]),
                ymax: parseFloatNumber(match[16]),
                zmin: parseFloatNumber(match[17]),
                zmax: parseFloatNumber(match[18]),
            },
        });
    }
    return results;
}
