import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
import pluginPrettier from 'eslint-plugin-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
  // Ignore specific file patterns
  {
    ignores: [
      // Ignore JavaScript files
      '**/*.js',
      // Ignore test files
      '**/*.test.ts',
      '**/*.spec.ts',
      // Additional patterns you might want to ignore
      'dist/',
      'node_modules/',
      'build/',
    ],
  },

  // Global settings
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
  },

  // Prettier integration
  {
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      // TypeScript and JavaScript rules
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],

      // Additional recommended rules
      'no-console': 'warn',
      'no-debugger': 'warn',
      'prefer-const': 'error',
    },
  },

  // File-specific configurations
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    rules: {
      // Additional rules for TypeScript and JavaScript files
    },
  },

  // Extend recommended configs
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,

  // Disable formatting rules that might conflict with Prettier
  eslintConfigPrettier,
];
