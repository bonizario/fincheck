module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'universe/web'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react'],
  rules: {
    '@typescript-eslint/no-unused-vars': ['error'],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: ['builtin', 'external'],
        pathGroups: [
          {
            pattern: '@app/**',
            group: 'internal',
          },
          {
            pattern: '@assets/**',
            group: 'internal',
          },
          {
            pattern: '@view/**',
            group: 'internal',
          },
        ],
        pathGroupsExcludedImportTypes: ['internal', 'parent', 'sibling', 'index', 'type', 'object'],
      },
    ],
  },
};
