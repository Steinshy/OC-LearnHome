import js from '@eslint/js';
import htmlPlugin from 'eslint-plugin-html';
import jsdoc from 'eslint-plugin-jsdoc';
import security from 'eslint-plugin-security';
import unicorn from 'eslint-plugin-unicorn';
import globals from 'globals';

export default [
  // ── Global ignores ────────────────────────────────────────────────
  {
    ignores: [
      'node_modules/',
      '.github/node_modules/',
      'dist/',
      'coverage/',
      '*.min.js',
      '*.min.css',
      '*.log',
      '.cursor/',
      '.vscode/',
      '.DS_Store',
    ],
  },

  // ── Base: ESLint recommended ──────────────────────────────────────
  js.configs.recommended,

  // ── HTML files (inline <script> tags) ─────────────────────────────
  {
    files: ['**/*.html'],
    plugins: {
      html: htmlPlugin,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'script',
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      // Relaxed for inline scripts in HTML mockups
      'no-unused-vars': ['warn', {
        argsIgnorePattern: '^(_|event$|e$)',
        varsIgnorePattern: '^(handle|toggle|show|hide|close|open|validate|update|create|delete|save|cancel|filter|search|sort|format|render|init|setup)',
        caughtErrorsIgnorePattern: '^_',
      }],
      'no-console': 'off',
      'no-debugger': 'warn',
      'no-alert': 'off',

      // Code quality (not formatting — Prettier handles that)
      'eqeqeq': ['error', 'always'],
      'no-var': 'warn',
      'prefer-const': 'warn',
    },
  },

  // ── Standalone JS files ───────────────────────────────────────────
  {
    files: ['**/*.{js,mjs,cjs}'],
    ignores: ['eslint.config.js'],
    plugins: {
      jsdoc,
      security,
      unicorn,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      // ── Code quality ──────────────────────────────────────────────
      'eqeqeq': ['error', 'always'],
      'curly': ['error', 'all'],
      'no-var': 'error',
      'prefer-const': ['error', { destructuring: 'any' }],
      'prefer-arrow-callback': 'warn',
      'prefer-template': 'warn',
      'object-shorthand': 'warn',
      'no-param-reassign': ['warn', { props: false }],
      'no-console': 'warn',
      'no-debugger': 'error',
      'no-alert': 'warn',
      'no-unused-vars': ['error', {
        argsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      }],

      // ── Complexity guards ─────────────────────────────────────────
      'complexity': ['warn', 20],
      'max-depth': ['warn', 5],
      'max-lines-per-function': ['warn', { max: 200, skipBlankLines: true, skipComments: true }],

      // ── JSDoc ─────────────────────────────────────────────────────
      'jsdoc/check-param-names': 'warn',
      'jsdoc/check-tag-names': 'warn',
      'jsdoc/check-types': 'warn',
      'jsdoc/require-param': 'off',
      'jsdoc/require-returns': 'off',

      // ── Security ──────────────────────────────────────────────────
      'security/detect-eval-with-expression': 'error',
      'security/detect-unsafe-regex': 'warn',
      'security/detect-object-injection': 'off',

      // ── Unicorn (modern JS) ───────────────────────────────────────
      'unicorn/better-regex': 'warn',
      'unicorn/no-array-for-each': 'off',
      'unicorn/prefer-query-selector': 'off',
      'unicorn/no-null': 'off',
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/filename-case': 'off',
      'unicorn/prefer-dom-node-text-content': 'warn',
      'unicorn/prefer-dom-node-append': 'warn',
      'unicorn/prefer-dom-node-remove': 'warn',
      'unicorn/prefer-add-event-listener': 'warn',
    },
  },
];
