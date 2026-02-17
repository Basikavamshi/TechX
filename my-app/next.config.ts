import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    domains: ["images.indianexpress.com","www.technewsworld.com"],
  },
};

export default nextConfig;
