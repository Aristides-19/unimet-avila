import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
  // Configuración base: especifica los archivos a analizar
  { files: ['**/*.{js,mjs,cjs,jsx}'] },

  // Configuración del entorno y opciones del analizador
  {
    languageOptions: {
      ecmaVersion: 'latest', // Versión más reciente de ECMAScript
      sourceType: 'module', // Usa módulos ES6
      globals: {
        ...globals.browser, // Variables globales del navegador
      },
    },
  },

  // Reglas recomendadas de ESLint para JavaScript
  pluginJs.configs.recommended,

  // Reglas recomendadas para React
  pluginReact.configs.flat.recommended,

  // Desactiva reglas de ESLint que entren en conflicto con Prettier
  prettierConfig,

  // Integración de Prettier como una regla de ESLint
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          semi: true,
          singleQuote: true,
          trailingComma: 'es5',
          jsxSingleQuote: true,
          tabWidth: 2,
          endOfLine: 'auto',
          overrides: [
            {
              files: '*.js',
              options: {
                printWidth: 120,
              },
            },
          ],
        },
      ], // Marca errores si el código no sigue las reglas de Prettier
    },
  },
];
