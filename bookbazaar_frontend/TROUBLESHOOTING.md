# Build/Runtime Troubleshooting

This project is a Next.js App Router app. If you encounter runtime errors like:
- Cannot find module "./447.js"
- Chunk not found / Dynamic import failed
- Hydration mismatch after upgrading dependencies

These typically indicate a stale or corrupted `.next` output directory or a browser cache holding old chunks.

Recommended steps:
1) Clean build artifacts
   - npm run clean
   - npm run build
   Note: The build process will automatically clear the `.next` directory before building (see the `prebuild` script), further reducing the chance of stale chunk references. This uses a portable shell command (`rm -rf .next`) so it works even when devDependencies are not installed.

2) If running dev:
   - Stop the dev server
   - Run npm run clean
   - Restart with npm run dev

3) Clear browser cache or use a hard refresh to ensure new chunks are loaded.

4) Avoid referencing anything in `.next/` directly in source code. Only import real source files within `src/`, not generated chunk IDs.

5) Ensure all imports are stable:
   - Use relative or alias imports like "@/components/BookCard"
   - Do not import from "next/dist/..." internal paths
   - Do not import generated files or chunk IDs

Notes for CI:
- Always run a clean build if the dependency graph changed:
  npm run rebuild

If issues persist after a clean rebuild:
- Remove `.next/` and restart the process
- Verify there are no typos in import paths and that every imported file exists and is committed.
