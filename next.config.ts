import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // required for static export; next/image needs a server otherwise
  },
};

module.exports = nextConfig;

export default nextConfig;
