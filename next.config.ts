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
};

export default nextConfig;
