import * as THREE from "three";

// ---------------------------------------------------------------------------
// PBR texture override system
//
// Drop a runway_overrides.json manifest next to the stage JSON.
// Each entry maps a set of materialIds (find them with the poly inspector)
// to a set of PBR texture files.  Any material listed here is excluded from
// the N64 atlas shader and rendered with MeshStandardMaterial instead.
// ---------------------------------------------------------------------------

export interface MaterialOverrideConfig {
  /** Human-readable name shown in the HUD when active. */
  name: string;
  /** Material IDs that this override replaces.  Use the poly inspector to find
   *  them (click a triangle → Summary tab → "material:" field). */
  materialIds: number[];
  /** Filenames relative to basePath in the manifest. All maps are optional. */
  albedo?: string;
  normal?: string;
  roughness?: string;
  ao?: string;
  metallic?: string;
  alpha?: string;
  /** Height / displacement map.  Requires a subdivided mesh to look good on
   *  low-poly N64 geometry; set heightScale to 0 to disable. */
  height?: string;
  /** World-unit displacement scale.  Default 0 (disabled). */
  heightScale?: number;
}

export interface OverrideManifest {
  /** URL prefix for all texture filenames, relative to the web root.
   *  E.g. "data/stages/" or "data/overrides/". */
  basePath: string;
  overrides: MaterialOverrideConfig[];
}

export interface LoadedPbrMaps {
  albedo?: THREE.Texture;
  normal?: THREE.Texture;
  roughness?: THREE.Texture;
  ao?: THREE.Texture;
  metallic?: THREE.Texture;
  alpha?: THREE.Texture;
  height?: THREE.Texture;
  heightScale: number;
}

export interface LoadedOverride {
  name: string;
  materialIds: ReadonlySet<number>;
  maps: LoadedPbrMaps;
}

// ---------------------------------------------------------------------------

async function tryLoad(
  loader: THREE.TextureLoader,
  url: string
): Promise<THREE.Texture | undefined> {
  try {
    const tex = await loader.loadAsync(url);
    tex.wrapS      = THREE.RepeatWrapping;
    tex.wrapT      = THREE.RepeatWrapping;
    tex.colorSpace = THREE.SRGBColorSpace; // corrected below for non-colour maps
    return tex;
  } catch {
    console.warn(`[overrides] texture not found: ${url}`);
    return undefined;
  }
}

function markLinear(t: THREE.Texture | undefined): THREE.Texture | undefined {
  if (t) t.colorSpace = THREE.LinearSRGBColorSpace;
  return t;
}

export async function loadOverrides(
  manifestPath: string,
  baseUrl: string
): Promise<LoadedOverride[]> {
  let manifest: OverrideManifest;
  try {
    const res = await fetch(manifestPath);
    if (!res.ok) return [];
    manifest = (await res.json()) as OverrideManifest;
  } catch {
    // Manifest is optional — silently skip if absent.
    return [];
  }

  const loader = new THREE.TextureLoader();
  const base   = `${baseUrl}${manifest.basePath}`;
  const result: LoadedOverride[] = [];

  for (const cfg of manifest.overrides) {
    if (!cfg.materialIds || cfg.materialIds.length === 0) {
      console.warn(`[overrides] "${cfg.name}" has no materialIds — skipped`);
      continue;
    }

    const maps: LoadedPbrMaps = { heightScale: cfg.heightScale ?? 0 };

    if (cfg.albedo)    maps.albedo    = await tryLoad(loader, `${base}${cfg.albedo}`);
    // Non-colour maps must stay in linear colour space.
    if (cfg.normal)    maps.normal    = markLinear(await tryLoad(loader, `${base}${cfg.normal}`));
    if (cfg.roughness) maps.roughness = markLinear(await tryLoad(loader, `${base}${cfg.roughness}`));
    if (cfg.ao)        maps.ao        = markLinear(await tryLoad(loader, `${base}${cfg.ao}`));
    if (cfg.metallic)  maps.metallic  = markLinear(await tryLoad(loader, `${base}${cfg.metallic}`));
    if (cfg.alpha)     maps.alpha     = markLinear(await tryLoad(loader, `${base}${cfg.alpha}`));
    if (cfg.height)    maps.height    = markLinear(await tryLoad(loader, `${base}${cfg.height}`));

    console.log(
      `[overrides] loaded "${cfg.name}" for ${cfg.materialIds.length} material(s):`,
      cfg.materialIds
    );

    result.push({
      name:        cfg.name,
      materialIds: new Set(cfg.materialIds),
      maps
    });
  }

  return result;
}

/** Flat set of every material ID that has a PBR override. */
export function collectOverriddenIds(overrides: LoadedOverride[]): Set<number> {
  const ids = new Set<number>();
  for (const o of overrides) o.materialIds.forEach((id) => ids.add(id));
  return ids;
}
