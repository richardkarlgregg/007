import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { inflateRawSync, inflateSync } from "node:zlib";
import { PNG } from "pngjs";

interface DecodedImage {
  width: number;
  height: number;
  rgba: Uint8Array;
  decoded: boolean;
}

interface AtlasItem {
  x: number;
  y: number;
  width: number;
  height: number;
  decoded: boolean;
  imageName: string;
}

export interface AtlasManifest {
  atlasImage: string;
  width: number;
  height: number;
  items: Record<string, AtlasItem>;
}

// ---------------------------------------------------------------------------
// Format tables from src/game/image.c
// ---------------------------------------------------------------------------
// g_TexFormatNumChannels: number of colour channels (excluding 1-bit alpha)
const TEX_NUM_CHANNELS = [4, 3, 3, 3, 2, 2, 1, 1, 1, 1, 1, 1, 1];
// g_TexFormatHas1BitAlpha: format has a per-pixel 1-bit alpha plane read
// separately after the main channel data (RGBA16 and IA4)
const TEX_HAS_1BIT_ALPHA = [0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0];
// g_TexFormatChannelSizes: alphabet size per channel (max value + 1)
const TEX_CHAN_SIZES = [0x100, 0x20, 0x100, 0x20, 0x100, 0x10, 8, 0x100, 0x10, 0x100, 0x10, 0x100, 0x10];
// g_TexFormatBitsPerPixel: raw bits per pixel (used by lookup codecs)
const TEX_BITS_PER_PIXEL = [0x20, 0x10, 0x18, 0x0f, 0x10, 8, 4, 8, 4, 0x10, 0x10, 0x10, 0x10];

// ---------------------------------------------------------------------------
// Bit reader — exact port of texReadBits / texSetBitstring from image_bank.c
// MSB-first: new bytes are shifted into the cache from the right.
// ---------------------------------------------------------------------------
class BitReader {
  private readonly bytes: Uint8Array;
  private byteIndex = 0;
  private cache = 0;
  private bitCount = 0;

  constructor(bytes: Uint8Array) {
    this.bytes = bytes;
  }

  readBits(count: number): number {
    while (this.bitCount < count) {
      this.cache = ((this.cache << 8) | (this.bytes[this.byteIndex] ?? 0)) >>> 0;
      this.byteIndex += 1;
      this.bitCount += 8;
    }

    this.bitCount -= count;
    const mask = count >= 32 ? 0xffffffff : (1 << count) - 1;
    return (this.cache >>> this.bitCount) & mask;
  }

  getConsumedBytes(): number {
    return this.byteIndex;
  }
}

// ---------------------------------------------------------------------------
// Pixel helpers
// ---------------------------------------------------------------------------
function expand3to8(v: number): number {
  return ((v << 5) | (v << 2) | (v >> 1)) & 0xff;
}
function expand4to8(v: number): number {
  return ((v << 4) | v) & 0xff;
}
function expand5to8(v: number): number {
  return ((v << 3) | (v >> 2)) & 0xff;
}

function decodeRgba5551ToRgba8888(value: number): [number, number, number, number] {
  return [
    expand5to8((value >>> 11) & 0x1f),
    expand5to8((value >>> 6) & 0x1f),
    expand5to8((value >>> 1) & 0x1f),
    (value & 0x1) === 1 ? 255 : 0
  ];
}

function decodeIa88ToRgba8888(value: number): [number, number, number, number] {
  const intensity = (value >>> 8) & 0xff;
  const alpha = value & 0xff;
  return [intensity, intensity, intensity, alpha];
}

/**
 * Convert a raw bpp-wide pixel value (as read from the bit-stream) in the
 * given texture format to RGBA8888 [r, g, b, a].
 */
function rawPixelToRgba(raw: number, format: number): [number, number, number, number] {
  switch (format) {
    case 0x00: // RGBA32
      return [(raw >>> 24) & 0xff, (raw >>> 16) & 0xff, (raw >>> 8) & 0xff, raw & 0xff];
    case 0x01: // RGBA16 (5551)
      return decodeRgba5551ToRgba8888(raw);
    case 0x02: // RGB24
      return [(raw >>> 16) & 0xff, (raw >>> 8) & 0xff, raw & 0xff, 255];
    case 0x03: { // RGB15 (555, bpp=15): shift left to create 16-bit word with alpha=1
      const v = (raw << 1) | 1;
      return decodeRgba5551ToRgba8888(v);
    }
    case 0x04: { // IA16 (8/8)
      const i = (raw >>> 8) & 0xff;
      return [i, i, i, raw & 0xff];
    }
    case 0x05: { // IA8 (4/4, bpp=8): high nibble=I, low nibble=A
      const i = expand4to8((raw >>> 4) & 0xf);
      const a = expand4to8(raw & 0xf);
      return [i, i, i, a];
    }
    case 0x06: { // IA4 (3/1, bpp=4): bits 3-1=I, bit 0=A
      const iv = (raw >>> 1) & 0x7;
      const av = raw & 0x1;
      const i8 = expand3to8(iv);
      return [i8, i8, i8, av ? 255 : 0];
    }
    case 0x07: // I8
      return [raw & 0xff, raw & 0xff, raw & 0xff, 255];
    case 0x08: { // I4 (bpp=4)
      const i = expand4to8(raw & 0xf);
      return [i, i, i, 255];
    }
    default:
      return [0, 0, 0, 255];
  }
}

// ---------------------------------------------------------------------------
// channelScratchToRgba8888
// Scratch layout: [ch0_plane][ch1_plane][ch2_plane][alpha_plane]
// Each plane has n=width*height samples. Channel values are in [0, chanSize-1].
// ---------------------------------------------------------------------------
function channelScratchToRgba8888(scratch: Uint8Array, n: number, format: number): Uint8Array {
  const rgba = new Uint8Array(n * 4);

  for (let i = 0; i < n; i++) {
    const out = i * 4;
    const c0 = scratch[i];
    const c1 = scratch[i + n];
    const c2 = scratch[i + n * 2];
    const c3 = scratch[i + n * 3]; // 1-bit alpha plane for has1BitAlpha formats

    switch (format) {
      case 0x00: // RGBA32: channels = R8,G8,B8,A8
        rgba[out] = c0;
        rgba[out + 1] = c1;
        rgba[out + 2] = c2;
        rgba[out + 3] = c3;
        break;
      case 0x01: // RGBA16: channels = R5,G5,B5 + 1-bit alpha at plane 3
        rgba[out] = expand5to8(c0 & 0x1f);
        rgba[out + 1] = expand5to8(c1 & 0x1f);
        rgba[out + 2] = expand5to8(c2 & 0x1f);
        rgba[out + 3] = c3 ? 255 : 0;
        break;
      case 0x02: // RGB24: channels = R8,G8,B8
        rgba[out] = c0;
        rgba[out + 1] = c1;
        rgba[out + 2] = c2;
        rgba[out + 3] = 255;
        break;
      case 0x03: // RGB15: channels = R5,G5,B5 (alpha always 1)
        rgba[out] = expand5to8(c0 & 0x1f);
        rgba[out + 1] = expand5to8(c1 & 0x1f);
        rgba[out + 2] = expand5to8(c2 & 0x1f);
        rgba[out + 3] = 255;
        break;
      case 0x04: // IA16: channels = I8,A8
        rgba[out] = c0;
        rgba[out + 1] = c0;
        rgba[out + 2] = c0;
        rgba[out + 3] = c1;
        break;
      case 0x05: { // IA8: channels = I4,A4 (chanSize=16)
        const i8 = expand4to8(c0 & 0xf);
        const a8 = expand4to8(c1 & 0xf);
        rgba[out] = i8;
        rgba[out + 1] = i8;
        rgba[out + 2] = i8;
        rgba[out + 3] = a8;
        break;
      }
      case 0x06: { // IA4: channel = I3 (chanSize=8) + 1-bit alpha at plane 3
        const i8 = expand3to8(c0 & 0x7);
        rgba[out] = i8;
        rgba[out + 1] = i8;
        rgba[out + 2] = i8;
        rgba[out + 3] = c3 ? 255 : 0;
        break;
      }
      case 0x07: // I8: channel = I8
        rgba[out] = c0;
        rgba[out + 1] = c0;
        rgba[out + 2] = c0;
        rgba[out + 3] = 255;
        break;
      case 0x08: { // I4: channel = I4 (chanSize=16)
        const i8 = expand4to8(c0 & 0xf);
        rgba[out] = i8;
        rgba[out + 1] = i8;
        rgba[out + 2] = i8;
        rgba[out + 3] = 255;
        break;
      }
      default:
        rgba[out + 3] = 255;
    }
  }

  return rgba;
}

// ---------------------------------------------------------------------------
// texInflateHuffman — exact port of image.c texInflateHuffman
// Decodes numiterations channel samples into dst[dstOffset..].
// chansize = alphabet size (e.g. 256 for 8-bit, 32 for 5-bit).
// ---------------------------------------------------------------------------
function texInflateHuffman(
  dst: Uint8Array,
  dstOffset: number,
  numiterations: number,
  chansize: number,
  br: BitReader
): void {
  if (chansize <= 0 || numiterations <= 0) return;

  // Single-symbol alphabet: all outputs are the same value (value 0).
  if (chansize === 1) {
    dst.fill(0, dstOffset, dstOffset + numiterations);
    // Read the frequency byte but discard it.
    br.readBits(8);
    return;
  }

  const frequencies = new Uint16Array(2048);
  const nodes = new Int16Array(2048 * 2).fill(-1);

  for (let i = 0; i < chansize; i++) {
    frequencies[i] = br.readBits(8);
  }

  // Find initial two smallest frequencies (exact C port, including quirks).
  let minfreq1 = 9999;
  let minfreq2 = 9999;
  let minindex1 = 0;
  let minindex2 = 0;

  for (let i = 0; i < chansize; i++) {
    if (frequencies[i] < minfreq1) {
      if (minfreq2 < minfreq1) {
        minfreq1 = frequencies[i];
        minindex1 = i;
      } else {
        minfreq2 = frequencies[i];
        minindex2 = i;
      }
    } else if (frequencies[i] < minfreq2) {
      minfreq2 = frequencies[i];
      minindex2 = i;
    }
  }

  // If only one valid symbol was found, fill output and return.
  if (minfreq1 === 9999 || minfreq2 === 9999) {
    const sym = minfreq2 < 9999 ? minindex2 : minindex1;
    dst.fill(sym & 0xff, dstOffset, dstOffset + numiterations);
    return;
  }

  let rootindex = 0;
  let done = false;

  while (!done) {
    let sum = frequencies[minindex1] + frequencies[minindex2];
    if (sum === 0) sum = 1;

    frequencies[minindex1] = 9999;
    frequencies[minindex2] = 9999;

    if (nodes[minindex1 * 2] < 0 && nodes[minindex1 * 2 + 1] < 0) {
      nodes[minindex1 * 2] = minindex1 + 10000;
      rootindex = minindex1;
      frequencies[minindex1] = sum;
      nodes[minindex1 * 2 + 1] =
        nodes[minindex2 * 2] < 0 && nodes[minindex2 * 2 + 1] < 0
          ? minindex2 + 10000
          : minindex2;
    } else if (nodes[minindex2 * 2] < 0 && nodes[minindex2 * 2 + 1] < 0) {
      nodes[minindex2 * 2] = minindex2 + 10000;
      rootindex = minindex2;
      frequencies[minindex2] = sum;
      nodes[minindex2 * 2 + 1] =
        nodes[minindex1 * 2] < 0 && nodes[minindex1 * 2 + 1] < 0
          ? minindex1 + 10000
          : minindex1;
    } else {
      rootindex = 0;
      while (
        nodes[rootindex * 2] >= 0 ||
        nodes[rootindex * 2 + 1] >= 0 ||
        frequencies[rootindex] < 9999
      ) {
        rootindex++;
      }
      frequencies[rootindex] = sum;
      nodes[rootindex * 2] = minindex1;
      nodes[rootindex * 2 + 1] = minindex2;
    }

    // Find next two smallest.
    minfreq1 = 9999;
    minfreq2 = 9999;
    for (let i = 0; i < chansize; i++) {
      if (frequencies[i] < minfreq1) {
        if (minfreq1 > minfreq2) {
          minfreq1 = frequencies[i];
          minindex1 = i;
        } else {
          minfreq2 = frequencies[i];
          minindex2 = i;
        }
      } else if (frequencies[i] < minfreq2) {
        minfreq2 = frequencies[i];
        minindex2 = i;
      }
    }

    if (minfreq1 === 9999 || minfreq2 === 9999) done = true;
  }

  for (let i = 0; i < numiterations; i++) {
    let iv = rootindex;
    while (iv < 10000) {
      const bit = br.readBits(1);
      iv = nodes[iv * 2 + bit];
    }
    dst[dstOffset + i] = (iv - 10000) & 0xff;
  }
}

// ---------------------------------------------------------------------------
// texInflateRle — exact port of image.c texInflateRle
// ---------------------------------------------------------------------------
function texInflateRle(
  dst: Uint8Array,
  dstOffset: number,
  blockstotal: number,
  br: BitReader
): void {
  const btfieldsize = br.readBits(3);
  const rlfieldsize = br.readBits(3);
  const blocksize = br.readBits(4);

  let cost = btfieldsize + rlfieldsize + blocksize + 1;
  let fudge = 0;
  while (cost > 0) {
    cost -= blocksize + 1;
    fudge++;
  }

  let blocksdone = 0;

  while (blocksdone < blockstotal) {
    if (br.readBits(1) === 0) {
      dst[dstOffset + blocksdone] = br.readBits(blocksize) & 0xff;
      blocksdone++;
    } else {
      const startblockindex = blocksdone - br.readBits(btfieldsize) - 1;
      const runnumblocks = br.readBits(rlfieldsize) + fudge;

      for (let i = startblockindex; i < startblockindex + runnumblocks; i++) {
        dst[dstOffset + blocksdone] = dst[dstOffset + i];
        blocksdone++;
      }

      dst[dstOffset + blocksdone] = br.readBits(blocksize) & 0xff;
      blocksdone++;
    }
  }
}

// ---------------------------------------------------------------------------
// texReadAlphaBits — port of image.c texReadAlphaBits
// Reads count 1-bit alpha values into dst[dstOffset..].
// ---------------------------------------------------------------------------
function texReadAlphaBits(dst: Uint8Array, dstOffset: number, count: number, br: BitReader): void {
  for (let i = 0; i < count; i++) {
    dst[dstOffset + i] = br.readBits(1);
  }
}

// ---------------------------------------------------------------------------
// texBlur — exact port of image.c texBlur
// pixels: flat buffer of chanSize-range values, width*height per channel plane.
// height here = numChannels * actual_height (as the C code passes it).
// ---------------------------------------------------------------------------
function texBlur(
  pixels: Uint8Array,
  width: number,
  height: number,
  method: number,
  chansize: number
): void {
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const cur = pixels[y * width + x] + chansize * 2;
      const left = x > 0 ? pixels[y * width + x - 1] : 0;
      const above = y > 0 ? pixels[(y - 1) * width + x] : 0;
      const aboveleft = x > 0 && y > 0 ? pixels[(y - 1) * width + x - 1] : 0;

      let result: number;
      switch (method) {
        case 0:
          result = (cur + left) % chansize;
          break;
        case 1:
          result = (cur + above) % chansize;
          break;
        case 2:
          result = (cur + aboveleft) % chansize;
          break;
        case 3:
          result = (cur + (left + above - aboveleft)) % chansize;
          break;
        case 4:
          result = (cur + (Math.trunc((above - aboveleft) / 2) + left)) % chansize;
          break;
        case 5:
          result = (cur + (Math.trunc((left - aboveleft) / 2) + above)) % chansize;
          break;
        case 6:
          result = (cur + Math.trunc((left + above) / 2)) % chansize;
          break;
        default:
          result = cur % chansize;
      }

      pixels[y * width + x] = ((result % chansize) + chansize) % chansize;
    }
  }
}

// ---------------------------------------------------------------------------
// texGetBitSize — port of image.c texGetBitSize
// Returns minimum number of bits needed to represent indices into a table
// of `decimal` entries (i.e. ceil(log2(decimal))).
// ---------------------------------------------------------------------------
function texGetBitSize(decimal: number): number {
  let count = 0;
  decimal--;
  while (decimal > 0) {
    decimal >>>= 1;
    count++;
  }
  return count;
}

// ---------------------------------------------------------------------------
// texBuildLookupPalette — port of image.c texBuildLookup
// Reads numcolors raw pixel entries from the bitstream and converts them to
// RGBA8888 for direct indexing. Returns the palette and numcolors.
// ---------------------------------------------------------------------------
function texBuildLookupPalette(
  format: number,
  bpp: number,
  br: BitReader
): { palette: Array<[number, number, number, number]>; numcolors: number } {
  const numcolors = br.readBits(11);
  const palette: Array<[number, number, number, number]> = [];

  for (let i = 0; i < numcolors; i++) {
    let raw: number;
    if (bpp > 24) {
      raw = (br.readBits(24) << 8) | br.readBits(bpp - 24);
    } else {
      raw = br.readBits(bpp);
    }
    palette.push(rawPixelToRgba(raw, format));
  }

  return { palette, numcolors };
}

// ---------------------------------------------------------------------------
// texLookupToRgba8888 — reads palette indices from the bitstream (LOOKUP)
// ---------------------------------------------------------------------------
function texLookupToRgba8888(
  br: BitReader,
  width: number,
  height: number,
  palette: Array<[number, number, number, number]>,
  numcolors: number
): Uint8Array {
  const rgba = new Uint8Array(width * height * 4);
  const bitspercolour = texGetBitSize(numcolors);

  for (let i = 0; i < width * height; i++) {
    const idx = Math.min(br.readBits(bitspercolour), palette.length - 1);
    const [r, g, b, a] = palette[idx] ?? [0, 0, 0, 255];
    const out = i * 4;
    rgba[out] = r;
    rgba[out + 1] = g;
    rgba[out + 2] = b;
    rgba[out + 3] = a;
  }

  return rgba;
}

// ---------------------------------------------------------------------------
// texLookupFromBufToRgba8888 — palette-expands a buffer of indices
// (HUFFMANLOOKUP / RLELOOKUP after Huffman/RLE decode step)
// ---------------------------------------------------------------------------
function texLookupFromBufToRgba8888(
  indices: Uint8Array,
  width: number,
  height: number,
  palette: Array<[number, number, number, number]>,
  numcolors: number
): Uint8Array {
  const rgba = new Uint8Array(width * height * 4);

  for (let i = 0; i < width * height; i++) {
    const idx = numcolors > 256 ? (indices[i * 2] << 8) | indices[i * 2 + 1] : indices[i];
    const [r, g, b, a] = palette[Math.min(idx, palette.length - 1)] ?? [0, 0, 0, 255];
    const out = i * 4;
    rgba[out] = r;
    rgba[out + 1] = g;
    rgba[out + 2] = b;
    rgba[out + 3] = a;
  }

  return rgba;
}

// ---------------------------------------------------------------------------
// texDecodeUncompressed — port of image.c texReadUncompressed, direct RGBA out
// Handles the row-alignment present in the C code but outputs a compact
// width×height RGBA8888 buffer for atlas use.
// ---------------------------------------------------------------------------
function texDecodeUncompressed(
  br: BitReader,
  width: number,
  height: number,
  format: number
): Uint8Array {
  const rgba = new Uint8Array(width * height * 4);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x += format >= 0x06 ? 2 : 1) {
      const out1 = (y * width + x) * 4;

      switch (format) {
        case 0x00: { // RGBA32: read as two 16-bit halves
          const hi = br.readBits(16);
          const lo = br.readBits(16);
          rgba[out1] = (hi >>> 8) & 0xff;
          rgba[out1 + 1] = hi & 0xff;
          rgba[out1 + 2] = (lo >>> 8) & 0xff;
          rgba[out1 + 3] = lo & 0xff;
          break;
        }
        case 0x01: { // RGBA16 (5551)
          const v = br.readBits(16);
          const [r, g, b, a] = decodeRgba5551ToRgba8888(v);
          rgba[out1] = r;
          rgba[out1 + 1] = g;
          rgba[out1 + 2] = b;
          rgba[out1 + 3] = a;
          break;
        }
        case 0x02: { // RGB24
          const v = br.readBits(24);
          rgba[out1] = (v >>> 16) & 0xff;
          rgba[out1 + 1] = (v >>> 8) & 0xff;
          rgba[out1 + 2] = v & 0xff;
          rgba[out1 + 3] = 255;
          break;
        }
        case 0x03: { // RGB15 (15-bit, alpha=1)
          const v = br.readBits(15);
          rgba[out1] = expand5to8((v >>> 10) & 0x1f);
          rgba[out1 + 1] = expand5to8((v >>> 5) & 0x1f);
          rgba[out1 + 2] = expand5to8(v & 0x1f);
          rgba[out1 + 3] = 255;
          break;
        }
        case 0x04: { // IA16
          const v = br.readBits(16);
          const i = (v >>> 8) & 0xff;
          rgba[out1] = i;
          rgba[out1 + 1] = i;
          rgba[out1 + 2] = i;
          rgba[out1 + 3] = v & 0xff;
          break;
        }
        case 0x05: { // IA8 (I4A4)
          const v = br.readBits(8);
          const i = expand4to8((v >>> 4) & 0xf);
          const a = expand4to8(v & 0xf);
          rgba[out1] = i;
          rgba[out1 + 1] = i;
          rgba[out1 + 2] = i;
          rgba[out1 + 3] = a;
          break;
        }
        case 0x06: { // IA4: 8 bits = two IA4 pixels (I3A1 each)
          const byte = br.readBits(8);
          const n1 = (byte >>> 4) & 0xf;
          const n2 = byte & 0xf;
          const i1 = expand3to8((n1 >>> 1) & 0x7);
          rgba[out1] = i1;
          rgba[out1 + 1] = i1;
          rgba[out1 + 2] = i1;
          rgba[out1 + 3] = (n1 & 0x1) ? 255 : 0;
          if (x + 1 < width) {
            const out2 = out1 + 4;
            const i2 = expand3to8((n2 >>> 1) & 0x7);
            rgba[out2] = i2;
            rgba[out2 + 1] = i2;
            rgba[out2 + 2] = i2;
            rgba[out2 + 3] = (n2 & 0x1) ? 255 : 0;
          }
          break;
        }
        case 0x07: { // I8
          const v = br.readBits(8);
          rgba[out1] = v;
          rgba[out1 + 1] = v;
          rgba[out1 + 2] = v;
          rgba[out1 + 3] = 255;
          break;
        }
        case 0x08: { // I4: 8 bits = two I4 pixels
          const byte = br.readBits(8);
          const i1 = expand4to8((byte >>> 4) & 0xf);
          rgba[out1] = i1;
          rgba[out1 + 1] = i1;
          rgba[out1 + 2] = i1;
          rgba[out1 + 3] = 255;
          if (x + 1 < width) {
            const out2 = out1 + 4;
            const i2 = expand4to8(byte & 0xf);
            rgba[out2] = i2;
            rgba[out2 + 1] = i2;
            rgba[out2 + 2] = i2;
            rgba[out2 + 3] = 255;
          }
          break;
        }
        default:
          rgba[out1 + 3] = 255;
      }
    }
  }

  return rgba;
}

// ---------------------------------------------------------------------------
// Fallback checkerboard for textures that fail to decode
// ---------------------------------------------------------------------------
function fallbackTexture(id: number): DecodedImage {
  const width = 64;
  const height = 64;
  const rgba = new Uint8Array(width * height * 4);
  const hueBase = (id * 47) % 255;

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const i = (y * width + x) * 4;
      const checker = ((x >> 3) + (y >> 3)) & 1;
      const tone = checker === 0 ? 190 : 110;
      rgba[i] = (hueBase + tone) & 0xff;
      rgba[i + 1] = (hueBase * 3 + tone) & 0xff;
      rgba[i + 2] = (hueBase * 7 + tone) & 0xff;
      rgba[i + 3] = 255;
    }
  }

  return { width, height, rgba, decoded: false };
}

// ---------------------------------------------------------------------------
// tryInflateRzipChunk — attempt multiple zlib wrappers
// ---------------------------------------------------------------------------
function tryInflateRzipChunk(chunk: Uint8Array): Uint8Array | null {
  const attempts: Array<() => Uint8Array> = [
    () => inflateRawSync(chunk.slice(2)),
    () => inflateSync(chunk.slice(2)),
    () => inflateRawSync(chunk),
    () => inflateSync(chunk)
  ];

  for (const attempt of attempts) {
    try {
      return attempt();
    } catch {
      // Try alternate wrappers.
    }
  }

  return null;
}

// ---------------------------------------------------------------------------
// decodeZlibTexture — zlib (rzip) path for CI8 / CI4 / IA16_CI8 formats.
// Follows texInflateZlib logic from src/game/image.c.
// ---------------------------------------------------------------------------
function decodeZlibTexture(bytes: Uint8Array): DecodedImage | null {
  if (bytes.length < 4) return null;

  const reader = new BitReader(bytes.slice(1));
  const format = reader.readBits(8);
  const numColours = reader.readBits(8) + 1;
  const palette: number[] = [];

  for (let i = 0; i < numColours; i += 1) {
    palette.push(reader.readBits(16));
  }

  const width = reader.readBits(8);
  const height = reader.readBits(8);
  if (width <= 0 || height <= 0) return null;

  const dataOffset = 1 + reader.getConsumedBytes();
  const decompressed = tryInflateRzipChunk(bytes.slice(dataOffset));
  if (!decompressed) return null;

  const rgba = new Uint8Array(width * height * 4);

  if (format === 0x09 || format === 0x0b) {
    if (decompressed.length < width * height) return null;
    for (let i = 0; i < width * height; i += 1) {
      const palIndex = decompressed[i];
      const pal = palette[palIndex] ?? 0;
      const pixel = format === 0x0b ? decodeIa88ToRgba8888(pal) : decodeRgba5551ToRgba8888(pal);
      const out = i * 4;
      rgba[out] = pixel[0];
      rgba[out + 1] = pixel[1];
      rgba[out + 2] = pixel[2];
      rgba[out + 3] = pixel[3];
    }
    return { width, height, rgba, decoded: true };
  }

  if (format === 0x0a) {
    const needed = Math.ceil((width * height) / 2);
    if (decompressed.length < needed) return null;
    for (let i = 0; i < width * height; i += 1) {
      const byte = decompressed[i >> 1];
      const palIndex = (i & 1) === 0 ? (byte >>> 4) & 0x0f : byte & 0x0f;
      const pal = palette[palIndex] ?? 0;
      const [r, g, b, a] = decodeRgba5551ToRgba8888(pal);
      const out = i * 4;
      rgba[out] = r;
      rgba[out + 1] = g;
      rgba[out + 2] = b;
      rgba[out + 3] = a;
    }
    return { width, height, rgba, decoded: true };
  }

  return null;
}

// ---------------------------------------------------------------------------
// decodeNonZlibTexture — full port of texInflateNonZlib from src/game/image.c
// Supports all 10 compression methods (UNCOMPRESSED0/1, HUFFMAN,
// HUFFMANPERHCHANNEL, RLE, LOOKUP, HUFFMANLOOKUP, RLELOOKUP,
// HUFFMANBLUR, RLEBLUR).
// ---------------------------------------------------------------------------
function decodeNonZlibTexture(bytes: Uint8Array): DecodedImage | null {
  // byte[0] format: u z llllll (bit 7=unknown, bit 6=iszlib, bits 5-0=lod count)
  // Data starts at byte[1]; we consume it via the BitReader.
  const br = new BitReader(bytes.slice(1));

  // Three-byte packed image header (24 bits total):
  // 4 bits format | 8 bits width | 8 bits height | 4 bits compmethod
  const format = br.readBits(4);
  const width = br.readBits(8);
  const height = br.readBits(8);
  const compmethod = br.readBits(4);

  if (width <= 0 || height <= 0 || width * height > 0x8000) return null;
  if (format > 12) return null;

  const numChannels = TEX_NUM_CHANNELS[format] ?? 1;
  const has1BitAlpha = (TEX_HAS_1BIT_ALPHA[format] ?? 0) !== 0;
  const chanSize = TEX_CHAN_SIZES[format] ?? 256;
  const bpp = TEX_BITS_PER_PIXEL[format] ?? 16;
  const n = width * height;

  try {
    let rgba: Uint8Array;

    switch (compmethod) {
      case 0: // UNCOMPRESSED0
      case 1: // UNCOMPRESSED1
        rgba = texDecodeUncompressed(br, width, height, format);
        break;

      case 2: { // HUFFMAN — single Huffman tree for all channel planes
        const scratch = new Uint8Array(n * 4 + 4);
        texInflateHuffman(scratch, 0, numChannels * n, chanSize, br);
        if (has1BitAlpha) texReadAlphaBits(scratch, n * 3, n, br);
        rgba = channelScratchToRgba8888(scratch, n, format);
        break;
      }

      case 3: { // HUFFMANPERHCHANNEL — one tree per channel
        const scratch = new Uint8Array(n * 4 + 4);
        for (let j = 0; j < numChannels; j++) {
          texInflateHuffman(scratch, n * j, n, chanSize, br);
        }
        if (has1BitAlpha) texReadAlphaBits(scratch, n * 3, n, br);
        rgba = channelScratchToRgba8888(scratch, n, format);
        break;
      }

      case 4: { // RLE
        const scratch = new Uint8Array(n * 4 + 4);
        texInflateRle(scratch, 0, numChannels * n, br);
        if (has1BitAlpha) texReadAlphaBits(scratch, n * 3, n, br);
        rgba = channelScratchToRgba8888(scratch, n, format);
        break;
      }

      case 5: { // LOOKUP — palette in bitstream, indices in bitstream
        const { palette, numcolors } = texBuildLookupPalette(format, bpp, br);
        rgba = texLookupToRgba8888(br, width, height, palette, numcolors);
        break;
      }

      case 6: { // HUFFMANLOOKUP — palette then Huffman-coded indices
        const { palette, numcolors } = texBuildLookupPalette(format, bpp, br);
        const indexBuf = new Uint8Array(numcolors > 256 ? n * 2 : n);
        texInflateHuffman(indexBuf, 0, n, numcolors, br);
        rgba = texLookupFromBufToRgba8888(indexBuf, width, height, palette, numcolors);
        break;
      }

      case 7: { // RLELOOKUP — palette then RLE-coded indices
        const { palette, numcolors } = texBuildLookupPalette(format, bpp, br);
        const indexBuf = new Uint8Array(n);
        texInflateRle(indexBuf, 0, n, br);
        rgba = texLookupFromBufToRgba8888(indexBuf, width, height, palette, numcolors);
        break;
      }

      case 8: { // HUFFMANBLUR — Huffman then blur filter
        const blurMethod = br.readBits(3);
        const scratch = new Uint8Array(n * 4 + 4);
        texInflateHuffman(scratch, 0, numChannels * n, chanSize, br);
        texBlur(scratch, width, numChannels * height, blurMethod, chanSize);
        if (has1BitAlpha) texReadAlphaBits(scratch, n * 3, n, br);
        rgba = channelScratchToRgba8888(scratch, n, format);
        break;
      }

      case 9: { // RLEBLUR — RLE then blur filter
        const blurMethod = br.readBits(3);
        const scratch = new Uint8Array(n * 4 + 4);
        texInflateRle(scratch, 0, numChannels * n, br);
        texBlur(scratch, width, numChannels * height, blurMethod, chanSize);
        if (has1BitAlpha) texReadAlphaBits(scratch, n * 3, n, br);
        rgba = channelScratchToRgba8888(scratch, n, format);
        break;
      }

      default:
        return null;
    }

    return { width, height, rgba, decoded: true };
  } catch {
    return null;
  }
}

// ---------------------------------------------------------------------------
// parseImageNames
// ---------------------------------------------------------------------------
function parseImageNames(imagesDefPath: string): Map<number, string> {
  const source = readFileSync(imagesDefPath, "utf8");
  const names = new Map<number, string>();
  const regex = /IMAGE\(([^,]+),\s*[^,]+,\s*[^,]+,\s*[^,]+,\s*[^,]+,\s*[^,]+,\s*[^,]+,\s*[^)]+\)/g;
  let match: RegExpExecArray | null = null;
  let index = 0;

  while ((match = regex.exec(source)) !== null) {
    names.set(index, match[1].trim());
    index += 1;
  }

  return names;
}

// ---------------------------------------------------------------------------
// blitRgba
// ---------------------------------------------------------------------------
function blitRgba(
  dst: Uint8Array,
  dstWidth: number,
  src: Uint8Array,
  srcWidth: number,
  srcHeight: number,
  dx: number,
  dy: number
): void {
  for (let y = 0; y < srcHeight; y += 1) {
    const srcRow = y * srcWidth * 4;
    const dstRow = ((dy + y) * dstWidth + dx) * 4;
    dst.set(src.subarray(srcRow, srcRow + srcWidth * 4), dstRow);
  }
}

// ---------------------------------------------------------------------------
// buildRunwayAtlas
// ---------------------------------------------------------------------------
export function buildRunwayAtlas(
  repoRoot: string,
  materialIds: number[],
  outputOptions?: { dir: string; prefix: string }
): AtlasManifest {
  const imageNames = parseImageNames(path.resolve(repoRoot, "assets/images.def"));
  const inputIds = [...new Set(materialIds)].sort((a, b) => a - b);

  const decodedById = new Map<number, DecodedImage>();
  let zlibCount = 0;
  let nonZlibCount = 0;
  let fallbackCount = 0;

  for (const id of inputIds) {
    const binPath = path.resolve(repoRoot, `assets/images/split/image${id}.bin`);
    if (!existsSync(binPath)) {
      decodedById.set(id, fallbackTexture(id));
      fallbackCount++;
      continue;
    }

    const bytes = new Uint8Array(readFileSync(binPath));
    const isZlib = ((bytes[0] >>> 6) & 0x1) === 1;

    if (isZlib) {
      const decoded = decodeZlibTexture(bytes);
      if (decoded) {
        zlibCount++;
        decodedById.set(id, decoded);
      } else {
        fallbackCount++;
        decodedById.set(id, fallbackTexture(id));
      }
    } else {
      const decoded = decodeNonZlibTexture(bytes);
      if (decoded) {
        nonZlibCount++;
        decodedById.set(id, decoded);
      } else {
        fallbackCount++;
        decodedById.set(id, fallbackTexture(id));
      }
    }
  }

  console.log(
    `Atlas decode: ${zlibCount} zlib, ${nonZlibCount} non-zlib, ${fallbackCount} fallback` +
      ` (${zlibCount + nonZlibCount}/${inputIds.length} real textures)`
  );

  const atlasWidth = 2048;
  const padding = 2;
  let x = padding;
  let y = padding;
  let rowHeight = 0;
  let maxY = padding;
  const placements = new Map<number, AtlasItem>();

  for (const id of inputIds) {
    const image = decodedById.get(id) ?? fallbackTexture(id);
    const w = image.width;
    const h = image.height;

    if (x + w + padding > atlasWidth) {
      x = padding;
      y += rowHeight + padding;
      rowHeight = 0;
    }

    placements.set(id, {
      x,
      y,
      width: w,
      height: h,
      decoded: image.decoded,
      // materialId is now 1-based (file number), so look up name at index id-1.
      imageName: imageNames.get(id - 1) ?? `image${id}`
    });

    x += w + padding;
    rowHeight = Math.max(rowHeight, h);
    maxY = Math.max(maxY, y + h + padding);
  }

  const atlasHeight = Math.max(64, maxY);
  const atlasPixels = new Uint8Array(atlasWidth * atlasHeight * 4);

  for (const id of inputIds) {
    const image = decodedById.get(id) ?? fallbackTexture(id);
    const spot = placements.get(id);
    if (!spot) continue;
    blitRgba(atlasPixels, atlasWidth, image.rgba, image.width, image.height, spot.x, spot.y);
  }

  const outputDir = outputOptions
    ? path.resolve(outputOptions.dir)
    : path.resolve(repoRoot, "web/public/data/stages");
  const prefix = outputOptions?.prefix ?? "runway";
  mkdirSync(outputDir, { recursive: true });

  const png = new PNG({ width: atlasWidth, height: atlasHeight });
  png.data = Buffer.from(atlasPixels);
  const atlasPngPath = path.resolve(outputDir, `${prefix}_atlas.png`);
  writeFileSync(atlasPngPath, PNG.sync.write(png));

  const items: Record<string, AtlasItem> = {};
  for (const [id, item] of placements) {
    items[String(id)] = item;
  }

  const manifest: AtlasManifest = {
    atlasImage: `${prefix}_atlas.png`,
    width: atlasWidth,
    height: atlasHeight,
    items
  };

  const manifestPath = path.resolve(outputDir, `${prefix}_atlas.json`);
  writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");

  return manifest;
}
