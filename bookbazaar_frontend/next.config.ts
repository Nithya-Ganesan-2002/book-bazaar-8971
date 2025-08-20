import type { NextConfig } from "next";

/**
 * Next.js configuration
 *
 * Notes:
 * - Avoid referencing any files from `.next/` in source code. Those are build outputs and may change per build.
 * - Use `npm run clean` before building if you changed dependencies or module structure to prevent stale chunk issues.
 */
const nextConfig: NextConfig = {
  // Using default server build (SSR/ISR supported). Removing `output: "export"` prevents confusion
  // with generated static chunks that can change between builds.
};

export default nextConfig;
