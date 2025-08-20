# Project Repository

This is the initial README file for the project.

## Build notes

If you encounter frontend runtime errors like "Cannot find module ./447.js", it usually indicates stale `.next` build artifacts:
- See bookbazaar_frontend/TROUBLESHOOTING.md
- In the frontend directory, run:
  - npm run clean
  - npm run build
- Restart the dev server after cleaning if you were running `npm run dev`.