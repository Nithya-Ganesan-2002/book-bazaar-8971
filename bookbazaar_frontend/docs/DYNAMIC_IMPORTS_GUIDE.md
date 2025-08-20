# Dynamic Imports Guide

To keep builds stable and avoid missing-chunk errors:

- Use next/dynamic with static, literal import paths that point to real, committed files.
  Example:
  ```ts
  import dynamic from "next/dynamic";
  const HeavyComponent = dynamic(() => import("@/components/HeavyComponent"), { ssr: false });
  ```
- Do not construct import paths dynamically (e.g., string concatenation) that could resolve to non-existent files.
- Do not import from `.next/` output or rely on chunk file names — those are generated during build and may change.
- After adding or removing dynamic imports, run a clean build:
  - npm run rebuild
- Avoid importing Next.js internals under `next/dist/...`; prefer public APIs.

Checklist:
- [ ] All dynamic import paths are static literals.
- [ ] Files exist and are tracked in the repository.
- [ ] No `.next/` or chunk filename references in source.
