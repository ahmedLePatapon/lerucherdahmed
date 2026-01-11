import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ajoute la source pr les image https://images.unsplash.com
  images: {
    // Allow the images.unsplash.com hostname for next/image
    domains: ["images.unsplash.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/**",
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
