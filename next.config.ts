import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ajoute la source pr les image https://images.unsplash.com
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
