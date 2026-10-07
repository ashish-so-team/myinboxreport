import type { NextConfig } from "next"

// A static export: no server, no API routes (AGENTS.md rule 1).
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
}

export default nextConfig
