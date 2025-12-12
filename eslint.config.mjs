// @ts-check
import { configs, gitignore } from "@mlaursen/eslint-config";
import { defineConfig } from "eslint/config";
import nextPlugin from "@next/eslint-plugin-next";

export default defineConfig([
  nextPlugin.configs["core-web-vitals"],
  gitignore(import.meta.url),
  ...configs.recommendedFrontend({
    reactRefresh: "next",
    reactCompiler: true,
    testFramework: "jest",
    tsconfigRootDir:
      process.env.STRICT_TYPING === "true" ? import.meta.dirname : undefined,
  }),
  {
    files: ["next-env.d.ts"],
    rules: {
      "@typescript-eslint/triple-slash-reference": "off",
    },
  },
  {
    files: ["tests/**/*.spec.ts"],
    rules: {
      "testing-library/prefer-screen-queries": "off",
    },
  },
]);
