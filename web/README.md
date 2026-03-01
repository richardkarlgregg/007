# GoldenEye Three.js Viewer (Phase 1)

This viewer renders a first-pass stage representation in three.js from extracted GoldenEye C assets.

## Legal and asset boundary

- You must own a legal copy of GoldenEye 007 and extract assets locally.
- Do not distribute ROM files or extracted copyrighted game assets.
- This repo's extraction flow is documented in the root `readme.md`.

## Data sources

Phase 1 exports the Runway stage from:

- `assets/obseg/bg/bg_run_all_p.c`
- `assets/obseg/stan/Tbg_run_all_p_stanZ.c`
- `assets/obseg/setup/UsetuprunZ.c`

## Workflow

1. Install exporter dependencies:

   ```bash
   cd tools/web-export
   npm install
   ```

2. Generate stage JSON:

   ```bash
   npm run export:runway
   ```

3. Install web dependencies:

   ```bash
   cd ../../web
   npm install
   ```

4. Start viewer:

   ```bash
   npm run dev
   ```

## Controls

- Mouse drag / wheel: orbit and zoom
- `1`: toggle room mesh (decoded `bg`)
- `2`: toggle stan geometry
- `3`: toggle setup pads
- `4`: toggle portal lines

## Current scope

- Rendered: decoded room mesh (`bg`), stan polygons, pad markers + orientation vectors, portal polygons.
- Deferred: full display-list decode, texture/material parity, gameplay/AI behavior parity.
