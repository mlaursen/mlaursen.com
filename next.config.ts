import { type NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  sassOptions: {
    implementation: "sass-embedded",
    silenceDeprecations: ["if-function"],
  },
};

export default nextConfig;
