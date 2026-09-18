import type { NextConfig } from "next";

/**
 * Two build modes.
 *
 * Default — server build, next/image optimisation on. This is what production
 * on Vercel or Cloudflare should use.
 *
 * `STATIC_EXPORT=1 npm run build` — emits a fully static site to `out/` for
 * hosts that only serve files, such as GitHub Pages. Image optimisation is off,
 * so compress photography before committing it (`npm run photos` does).
 *
 * `BASE_PATH` — set when the site is served from a subdirectory, as it is on a
 * GitHub Pages project site (`/flipwiredesign`). Leave unset for a root domain.
 */
const isStaticExport = process.env.STATIC_EXPORT === "1";

// GitHub Pages reports "/" (not "") once a custom domain serves the site from
// the root. Next rejects a basePath of "/", so normalise it away.
const rawBasePath = process.env.BASE_PATH ?? "";
const basePath = rawBasePath === "/" ? "" : rawBasePath.replace(/\/$/, "");

const nextConfig: NextConfig = {
  reactStrictMode: true,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
  ...(isStaticExport ? { output: "export" as const, trailingSlash: true } : {}),
  images: {
    // Project photography will mostly be served from a CDN / DAM.
    // Add the hostnames here as they come online.
    remotePatterns: [],
    formats: ["image/avif", "image/webp"],
    unoptimized: isStaticExport,
  },
};

export default nextConfig;
