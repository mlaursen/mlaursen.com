import { type JestConfigWithTsJest } from "ts-jest";

const config: JestConfigWithTsJest = {
  preset: "ts-jest/presets/default-esm",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  extensionsToTreatAsEsm: [".ts", ".tsx"],
  moduleNameMapper: {
    "\\.scss$": "identity-obj-proxy",
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
  transform: {
    // '^.+\\.[tj]sx?$' to process js/ts with `ts-jest`
    // '^.+\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        useESM: true,
        tsconfig: "./tsconfig.test.json",
      },
    ],
  },

  coverageProvider: "v8",

  coverageThreshold: {
    global: {
      branches: 98,
      functions: 98,
      lines: 98,
      statements: -10,
    },
  },

  // ensure that all files are picked up correctly and included in the results.
  collectCoverageFrom: [
    "<rootDir>/app/**/*.{ts,tsx}",

    "!<rootDir>/app/robots.ts",
    "!<rootDir>/app/sitemap.ts",
    "!<rootDir>/app/layout.tsx",
  ],
};

export default config;
