// @ts-check

/** @type {import("eslint").ESLint.ConfigData} */

module.exports = {
  env: {
    browser: true,
    es2017: true,
    node: true,
  },
  extends: [
    'standard-with-typescript',
    'plugin:jsx-a11y/strict',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    project: ['./tsconfig.json', './tsconfig.eslint.json'],
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint'],
  root: true,
  rules: {
    '@typescript-eslint/no-misused-promises': [
      'error',
      { checksVoidReturn: false },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
