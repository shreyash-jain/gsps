import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gyansagarplayschool.co.in",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
