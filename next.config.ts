import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isProd ? "/stratomexa" : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? "/stratomexa" : "",
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
