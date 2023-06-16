module.exports = {
  root: true,
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
    ecmaVersion: 2018,
    sourceType: "module",
  },
  extends: ["@mlaursen/eslint-config", "plugin:@next/next/recommended"],
  rules: {
    "@typescript-eslint/consistent-type-imports": ["error"],
  },
};
