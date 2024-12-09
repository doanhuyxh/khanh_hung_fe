import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  experimental: {

  },
  compiler: {
    styledComponents: true,
    removeConsole: true
  },
  sassOptions: {
    includePaths: ["./app/styles", "./app/components"],
    quietDeps: true,
  },
  reactStrictMode: false,
  images: {
    domains: ['localhost', "res.cloudinary.com", "api.yody.lokid.xyz"],
  },
};

export default nextConfig;
