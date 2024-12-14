import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  experimental: {
    
  },
  compiler: {
    styledComponents: true,
    removeConsole: false
  },
  sassOptions: {
    includePaths: ["./app/styles", "./app/components"],
    quietDeps: true,
  },
  reactStrictMode: false,
  images: {
    domains: ['localhost', "res.cloudinary.com", "api.yody.lokid.xyz", "your-image-domain.com"],
    unoptimized: true,
  },
  logging: {
    fetches: {
      fullUrl: true
    }
  },
  webpack: (config) => {
    config.optimization.minimize = false; // Tắt tối ưu hóa
    return config;
  },
};

export default nextConfig;
