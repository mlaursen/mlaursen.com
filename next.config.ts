import { type NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  sassOptions: {
    implementation: "sass-embedded",
  },
  turbopack: {
    resolveAlias: {
      everything: "./_everything.scss",
    },
  },
  allowedDevOrigins: ["127.0.0.1"],
};

export default nextConfig;
