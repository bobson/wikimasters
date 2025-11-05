import { dirname } from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: dirname(__dirname),
  },
};

export default nextConfig;
