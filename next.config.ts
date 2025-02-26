import { type NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  eslint: {
    // I have already run lint before this step...
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  sassOptions: {
    implementation: "sass-embedded",
  },
};

export default nextConfig;
