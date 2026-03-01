import { readFileSync } from "node:fs";
function parseHexInt(input) {
    return Number.parseInt(input.trim().replace(/^0x/i, ""), 16);
}
export function parseStanFile(path) {
    const source = readFileSync(path, "utf8");
    const tileRegex = /StandTile\s+\w+\s*=\s*\{([\s\S]*?)\n\};/g;
    const tiles = [];
    let tileMatch = null;
    while ((tileMatch = tileRegex.exec(source)) !== null) {
        const block = tileMatch[1];
        const header = block.match(/0x([0-9a-fA-F]+)\s*,\s*0x([0-9a-fA-F]+)\s*,[\s\S]*?0x([0-9a-fA-F]+)\s*,\s*0x([0-9a-fA-F]+)\s*,\s*0x([0-9a-fA-F]+)\s*,\s*0x([0-9a-fA-F]+)\s*,/);
        if (!header) {
            continue;
        }
        const pointsSectionMatch = block.match(/\{\s*((?:\{[^{}]+\}\s*,?\s*)+)\s*\}\s*$/m);
        if (!pointsSectionMatch) {
            continue;
        }
        const points = [];
        const pointRegex = /\{\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*0x([0-9a-fA-F]+)\s*\}/g;
        let pointMatch = null;
        while ((pointMatch = pointRegex.exec(pointsSectionMatch[1])) !== null) {
            points.push({
                x: Number.parseInt(pointMatch[1], 10),
                y: Number.parseInt(pointMatch[2], 10),
                z: Number.parseInt(pointMatch[3], 10),
                link: parseHexInt(pointMatch[4])
            });
        }
        tiles.push({
            id: parseHexInt(header[1]),
            room: parseHexInt(header[2]),
            flags: parseHexInt(header[3]),
            color: {
                r: parseHexInt(header[4]),
                g: parseHexInt(header[5]),
                b: parseHexInt(header[6])
            },
            points
        });
    }
    return tiles;
}
