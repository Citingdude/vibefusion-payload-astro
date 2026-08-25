import js from '@eslint/js'
import astro from 'eslint-plugin-astro'
import format from 'eslint-plugin-format'
import tseslint from 'typescript-eslint'

export default [
  {
    ignores: ['.astro/**', 'dist/**'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...astro.configs['flat/recommended'],
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: format.parserPlain,
    },
    plugins: {
      format,
    },
    rules: {
      'format/prettier': ['error', {
        endOfLine: 'auto',
        parser: 'astro',
        plugins: ['prettier-plugin-astro'],
        printWidth: 120,
        semi: false,
        singleAttributePerLine: true,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'all',
        useTabs: false,
      }],
    },
  },
]
