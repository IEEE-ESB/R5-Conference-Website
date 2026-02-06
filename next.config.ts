import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "db.ieee-esb.org",
        pathname: "/api/files/**",
      },
    ],
  },
};

export default nextConfig;
