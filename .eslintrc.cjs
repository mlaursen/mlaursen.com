module.exports = {
  root: true,
  extends: ["@mlaursen/eslint-config", "plugin:@next/next/recommended"],
  rules: {
    "@typescript-eslint/consistent-type-imports": ["error"],

    "no-use-before-define": 0,
    "@typescript-eslint/no-use-before-define": [
      "warn",
      { ignoreTypeReferences: true },
    ],

    "object-shorthand": ["error", "always"],
  },
};
