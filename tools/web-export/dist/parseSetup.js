import { readFileSync } from "node:fs";
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
