# ESLINT base template

### Development Server

Start the development server with Vite:

```bash
npm run dev
```

### Linting

To analyze the src folder for code style issues without making any changes, use:

```bash
npm run lint:check
```

To automatically fix lint issues in the src folder, use:

```bash
npm run lint:fix
```

To format all js, jsx, ts, tsx files with prettier, use:

```bash
npm run format
```

To add your own eslint rules:

```js
// eslint.config.js
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
  //...
  // Set your own rules 
};
```
# thebestpdf-eslint-config
