import type { NextConfig } from "next";

/**
 * GitHub Pages project site defaults to /ai-lead-portfolio.
 * Override with BASE_PATH="" for Vercel root or local preview.
 */
const basePath = process.env.BASE_PATH ?? "/ai-lead-portfolio";

const nextConfig: NextConfig = {
  output: "export",
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  trailingSlash: true,
  images: { unoptimized: true },
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
};

export default nextConfig;
