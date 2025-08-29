import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import prettier from 'eslint-config-prettier'
import react from 'eslint-plugin-react'
import astro from 'eslint-plugin-astro'
import reactHooks from 'eslint-plugin-react-hooks'

export default tseslint.config(
    {
        ignores: ['**/node_modules/**', '**/dist/**', '**/build/**', 'eslint.config.js'],
    },
    js.configs.recommended,
    tseslint.configs.recommendedTypeChecked, // ensures TS type-aware rules
    prettier,
    ...astro.configs.recommended,
    // React setup
    {
        files: ['**/*.{jsx,tsx}'],
        plugins: { react, 'react-hooks': reactHooks },
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            parserOptions: {
                project: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
        rules: {
            ...react.configs.recommended.rules,
            ...reactHooks.configs.recommended.rules,
            'react/react-in-jsx-scope': 'off', // not needed in Astro/Next/Vite
        },
    },
    // Astro setup
    {
        // ...
        overrides: [
            {
                files: ['*.astro'],
                parser: 'astro-eslint-parser',
                parserOptions: {
                    parser: '@typescript-eslint/parser',
                    extraFileExtensions: ['.astro'],
                    // add this line
                    project: './tsconfig.eslint.json',
                },
                // ...
            },
            // ...
        ],
    },
    // General + TS rules
    {
        languageOptions: {
            parserOptions: {
                project: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
        rules: {
            '@typescript-eslint/no-unused-vars': [
                'error',
                { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
            ],
            '@typescript-eslint/consistent-type-imports': [
                'error',
                { prefer: 'type-imports', fixStyle: 'separate-type-imports' },
            ],
            '@typescript-eslint/no-import-type-side-effects': 'error',
            '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
            '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
            '@typescript-eslint/no-floating-promises': 'error',
            '@typescript-eslint/await-thenable': 'error',

            // General JS
            'no-console': ['warn', { allow: ['warn', 'error'] }],
            'prefer-const': 'error',
            'object-shorthand': 'error',
            'prefer-template': 'error',
        },
    },
    // JS-only files (disable type checks for plain JS)
    {
        files: ['**/*.js', '**/*.mjs'],
        ...tseslint.configs.disableTypeChecked,
    },
)
