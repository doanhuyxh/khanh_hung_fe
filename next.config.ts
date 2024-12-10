import type { NextConfig } from "next";
import { tree } from "next/dist/build/templates/app-page";
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
  logging: {
    fetches: {
      fullUrl: true
    }
  }
};

export default nextConfig;
