module.exports = {
    env: {
      node: true,
      jest: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier',
      'plugin:prettier/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
      project: './tsconfig.json',
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.json', '.ts'],
        },
      },
      'import/extensions': [
        'error',
        'ignorePackages',
        { js: 'never', ts: 'never', json: 'never' },
      ],
    },
    plugins: ['@typescript-eslint'],
    rules: {
      // these 2 rules are needed to avoid false possitives in TS declarations
      'no-useless-constructor': 'off',
      '@typescript-eslint/ban-ts-comment': [
        'error',
        {
          'ts-ignore': 'allow-with-description',
        },
      ],
      '@typescript-eslint/no-useless-constructor': 'error',
      '@typescript-eslint/no-explicit-any': 'off',
      'no-console': 'error',
      'import/prefer-default-export': 'off',
      '@typescript-eslint/no-empty-interface': 'off',
      // we should test this rule temporary
      'no-debugger': 1,
      'no-var': 1,
      complexity: ['error', { max: 9 }],
      'max-depth': ['error', { max: 4 }],
      'prefer-const': [
        'error',
        {
          destructuring: 'all',
          ignoreReadBeforeAssign: true,
        },
      ],
      camelcase: [0, { properties: 'never' }],
      'prettier/prettier': 'warn',
    },
  };
  