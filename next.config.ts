import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
// Custom domain stratomexa.in is connected, so site lives at root "/"
const isCustomDomain = true;

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isCustomDomain ? "" : (isProd ? "/stratomexa" : ""),
  env: {
    NEXT_PUBLIC_BASE_PATH: isCustomDomain ? "" : (isProd ? "/stratomexa" : ""),
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
