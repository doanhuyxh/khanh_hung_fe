import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental:{
    
  },
  compiler:{
    styledComponents:true,
    removeConsole:true
  },
  sassOptions:{
    includePaths: ["./styles", "./components"]
  },
  reactStrictMode: true,

};

export default nextConfig;
