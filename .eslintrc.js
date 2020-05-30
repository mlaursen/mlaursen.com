module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  plugins: ['react-hooks'],
  env: {
    node: true,
    browser: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // This is a "better" version of the noUnusedLocals and noUnusedParameters from
    // the tsconfig.json since it can catch unused vars in rest parameters that weren't
    // meant to be omitted. I must manually rename to be _name so I know it was intentionally
    // omitted
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    // Allow expressions to work with react hooks. Annoying to have to typedef each arrow
    // function in a useEffect or useCallback when it can be derived.
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
        // allow FC definitions for React
        allowTypedFunctionExpressions: true,
      },
    ],

    // don't really care about these
    'react/display-name': 0,
    'react/no-unescaped-entities': 0,
  },
};
