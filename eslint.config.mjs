// @ts-check
import { config, configs, gitignore } from "@mlaursen/eslint-config";

export default config(
  gitignore(import.meta.url),
  ...configs.frontendTypeChecking(import.meta.dirname),
  ...configs.next,
  {
    files: ["tests/**/*.spec.ts"],
    rules: {
      "testing-library/prefer-screen-queries": "off",
    },
  }
);
