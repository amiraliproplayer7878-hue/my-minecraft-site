import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  basePath: "/my-minecraft-site",
  assetPrefix: "/my-minecraft-site/",

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pixelrealm.ir",
      },
      {
        protocol: "https",
        hostname: "www.pixelrealm.ir",
      },
      {
        protocol: "https",
        hostname: "sv3.tgmc.ir",
      },
    ],
  },

  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
