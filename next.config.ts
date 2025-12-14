import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable source maps in development to avoid warnings
  productionBrowserSourceMaps: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname:"/**"
      },
    ],
  },
};

export default nextConfig;