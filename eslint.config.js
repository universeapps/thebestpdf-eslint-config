import globals from 'globals';
import eslintJS from '@eslint/js';
import eslintTS from 'typescript-eslint';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import jsxA11y from 'eslint-plugin-jsx-a11y';

const rules = {
  'react-hooks/rules-of-hooks': 'warn',
  'react-hooks/exhaustive-deps': 'warn',
  'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
  'jsx-a11y/no-autofocus': 'warn',
  '@typescript-eslint/no-useless-constructor': 'warn',
  '@typescript-eslint/no-empty-function': 'warn',
  'no-nested-ternary': 'error',
  'max-depth': ['warn', { max: 4 }],
  'max-nested-callbacks': ['warn', { max: 4 }],
  'no-unneeded-ternary': 'warn',
  'prefer-const': 'warn'
};

export default eslintTS
  .config(
    { ignores: ['dist'] },
    {
      extends: [eslintJS.configs.recommended, ...eslintTS.configs.recommended],
      files: ['src/**/*.{ts,tsx}'],
      languageOptions: {
        ecmaVersion: 2020,
        globals: globals.browser,
        parserOptions: {
          project: ['./tsconfig.json'],
          ecmaFeatures: {
            jsx: true
          }
        }
      },
      plugins: {
        'react-hooks': reactHooks,
        'react-refresh': reactRefresh,
        'jsx-a11y': jsxA11y
      },
      rules: {
        ...reactHooks.configs.recommended.rules,
        ...jsxA11y.flatConfigs.recommended.rules,
        ...rules
      }
    }
  )
  .concat(eslintPluginPrettier);
