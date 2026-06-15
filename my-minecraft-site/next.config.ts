    import type { NextConfig } from "next";

    const nextConfig: NextConfig = {
      images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'pixelrealm.ir',
          },
          {
            protocol: 'https',
            hostname: 'www.pixelrealm.ir',
          },
          {
            protocol: 'https',
            hostname: 'sv3.tgmc.ir', // دامنه هاستینگ برای تصاویر احتمالی
          },
        ],
      },
      // این خط رو برای رفع هشدار workspace root اضافه کن:
      turbopack: {
        root: __dirname,
      },
    };

    export default nextConfig;
