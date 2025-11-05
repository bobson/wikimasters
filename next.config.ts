import type { NextConfig } from "next";
import {dirname} from "node:path";

const nextConfig: NextConfig = {
  turbopack: {
    root: dirname(__dirname),
  },
};

export default nextConfig;
