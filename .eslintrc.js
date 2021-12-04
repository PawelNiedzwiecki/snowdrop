module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
    requireConfigFile: false,
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  plugins: ['@babel', 'jsx-a11y', 'react', 'react-hooks', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/no-find-dom-node': 'off',
  },
};
