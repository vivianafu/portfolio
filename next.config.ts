import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/portfolio",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],
  skipTrailingSlashRedirect: true,
  devIndicators: false,
};

export default nextConfig;
