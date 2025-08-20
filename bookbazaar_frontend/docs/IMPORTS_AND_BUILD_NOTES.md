# Imports and Build Notes

- Only import from actual source files within `src/` or published module entry points.
- Do not import from `.next/` or rely on chunk IDs like `./447.js`. Those are generated and can change between builds.
- Avoid `next/dist/...` internal imports; use public Next APIs.
- When adding/removing modules or changing dynamic imports, run a clean build:
  - npm run rebuild
- If you add dynamic imports via `next/dynamic`, ensure the imported path is stable and exists, and avoid conditional path strings that could resolve to non-existent files.

Checklist before committing:
- [ ] All import paths resolve to committed files.
- [ ] No references to build output folders (e.g., `.next`, `out`).
- [ ] App runs with `npm run dev` after `npm run clean`.
