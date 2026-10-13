import type { NextConfig } from "next"

/**
 * A static export and nothing else (architecture D1, D10). `out/` is the
 * whole site: Cloudflare serves it as static assets, with no worker script,
 * so no route here can ever run on a server. Security headers live in
 * `public/_headers`, because `headers()` does not apply to an export.
 */
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: false,
  images: { unoptimized: true },
  poweredByHeader: false,
  // `next dev` would otherwise write AGENTS.md and CLAUDE.md into apps/web;
  // this repository keeps one AGENTS.md, at the root.
  agentRules: false,
}

export default nextConfig
