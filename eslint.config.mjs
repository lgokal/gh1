// @ts-check
import eslint from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['eslint.config.mjs'],
  },
  {
    files: ['apps/**/src/*.ts'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          paths: [
            {
              name: '/mvwrapper.module',
              message: 'mvwrapper module should not be imported.',
            },
            {
              name: './internal',
              message: 'Internal folders should not be accessed from outside.',
            },
          ],
        },
      ],
    },
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  eslintPluginPrettierRecommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      ecmaVersion: 5,
      sourceType: 'module',
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-floating-promises': 'off',
      '@typescript-eslint/no-unsafe-argument': 'warn',
      '@typescript-eslint/indent': 'off',
      'indent': 'off',
      'no-tabs': 'off',
      'no-mixed-spaces-and-tabs': 'off',
      'space-before-function-paren': 'off',
      'space-infix-ops': 'off',
      'space-before-blocks': 'off',
      'space-in-parens': 'off',
      'space-unary-ops': 'off',
      'no-multi-spaces': 'off',
      'padded-blocks': 'off',
      'array-bracket-spacing': 'off',
      'object-curly-spacing': 'off',
      // ... other rules ...
    },
  },
);