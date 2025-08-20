# CI Build Notes

To ensure stable builds and avoid stale artifacts:

- Always use a clean rebuild when modules or dependencies change:
  npm run clean && npm run build

- If your CI environment has strict time or memory limits, you can disable source maps to reduce build work:
  export NEXT_DISABLE_SOURCEMAPS=1

- You can opt out of Next.js anonymous telemetry in CI if desired (optional):
  npx next telemetry disable || true

- Clear any CDN/browser cache between deployments to avoid clients requesting old chunks.

- Do not rely on `.next/` outputs between runs; this project already cleans `.next` before build via the prebuild script.
