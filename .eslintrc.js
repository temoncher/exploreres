/* eslint no-dupe-keys: "warn" */
/**
 * @typedef {import('eslint').Linter.Config} LinterConfig
 */

/** @type {LinterConfig} */
module.exports = {
  overrides: [
    {
      files: ['*.ts', '*.js'],
      env: {
        es6: true,
      },
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        project: './tsconfig.eslint.json',
      },
      plugins: [
        'import', // [Plugin:Import](https://github.com/benmosher/eslint-plugin-import)
        '@typescript-eslint', // [Plugin:Typescript-ESLint](https://github.com/typescript-eslint/typescript-eslint)
        '@angular-eslint', // [Plugin:Angular-ESLint](https://github.com/angular-eslint/angular-eslint)
      ],
      extends: [
        'airbnb-typescript/base',
        'plugin:@typescript-eslint/recommended',
        'plugin:@angular-eslint/recommended',
        'plugin:@angular-eslint/template/process-inline-templates',
      ],
      globals: {
        console: 'readonly',
        process: 'readonly',
        require: 'readonly',
        d3: 'readonly',
      },
      rules: {
        // [Plugin:Angular-ESLint](https://github.com/angular-eslint/angular-eslint)
        '@angular-eslint/directive-selector': [
          2, { type: 'attribute', prefix: 'exp', style: 'camelCase' },
        ],
        '@angular-eslint/component-selector': [
          2, { type: 'element', prefix: 'exp', style: 'kebab-case' },
        ],
        '@angular-eslint/no-output-on-prefix': 2,
        '@angular-eslint/no-input-rename': 2,
        '@angular-eslint/no-output-rename': 2,

        // [Possible errors](https://eslint.org/docs/rules/#possible-errors)
        'no-console': 2,

        // [Best practices](https://eslint.org/docs/rules/#best-practices)
        complexity: [2, 6],
        'no-param-reassign': [
          2,
          {
            props: true,
            ignorePropertyModificationsFor: [
              'acc', // for `Array.prototype.reduce` accumulators
            ],
          },
        ],

        // [Stylistic Issues](https://eslint.org/docs/rules/#stylistic-issues)
        'array-bracket-newline': [1, 'consistent'],
        'array-element-newline': [
          1,
          {
            multiline: true,
            minItems: 3,
          },
        ],
        'arrow-body-style': [2, 'as-needed'],
        'arrow-parens': [2, 'always'],
        'comma-dangle': [2, 'always-multiline'],
        'function-call-argument-newline': [1, 'consistent'],
        'func-style': [1, 'expression'],
        'function-paren-newline': [1, 'multiline-arguments'],
        'prefer-exponentiation-operator': 2,
        'padding-line-between-statements': [
          1,
          {
            blankLine: 'always',
            prev: ['const',
              'let',
              'var'],
            next: '*',
          },
          {
            blankLine: 'always',
            prev: '*',
            next: ['if',
              'try',
              'class',
              'export'],
          },
          {
            blankLine: 'always',
            prev: ['if',
              'try',
              'class',
              'export'],
            next: '*',
          },
          {
            blankLine: 'any',
            prev: ['const',
              'let',
              'var',
              'export'],
            next: ['const',
              'let',
              'var',
              'export'],
          },
          {
            blankLine: 'always',
            prev: ['expression'],
            next: ['const',
              'let',
              'var'],
          },
          {
            blankLine: 'always',
            prev: '*',
            next: ['return'],
          },
        ],

        // [ES6](https://eslint.org/docs/rules/#ecmascript-6)
        'arrow-spacing': 1,

        // [Plugin:Import](https://github.com/benmosher/eslint-plugin-import)
        'import/order': [
          1,
          {
            groups: ['builtin',
              'external',
              'parent',
              'sibling',
              'index'],
            pathGroups: [
              {
                pattern: '@/**',
                group: 'parent',
                position: 'before',
              },
            ],
            'newlines-between': 'always',
            alphabetize: {
              order: 'asc',
              caseInsensitive: false,
            },
            pathGroupsExcludedImportTypes: ['builtin'],
          },
        ],

        // [Plugin:Typescript-ESLint](https://github.com/typescript-eslint/typescript-eslint)
        '@typescript-eslint/array-type': 1,
        '@typescript-eslint/consistent-indexed-object-style': [1, 'record'],
        '@typescript-eslint/consistent-type-assertions': [
          2,
          {
            assertionStyle: 'as',
            objectLiteralTypeAssertions: 'never',
          },
        ],
        '@typescript-eslint/member-delimiter-style': [
          1,
          {
            multiline: {
              delimiter: 'semi',
              requireLast: true,
            },
          },
        ],
        '@typescript-eslint/method-signature-style': [2, 'property'],
        '@typescript-eslint/no-base-to-string': 1,
        '@typescript-eslint/no-confusing-non-null-assertion': 1,
        '@typescript-eslint/no-confusing-void-expression': 1,
        '@typescript-eslint/no-dynamic-delete': 1,
        '@typescript-eslint/no-implicit-any-catch': 2,
        '@typescript-eslint/no-invalid-void-type': 2,
        '@typescript-eslint/no-unnecessary-condition': 1,
        '@typescript-eslint/no-unnecessary-qualifier': 1,
        '@typescript-eslint/no-unnecessary-type-constraint': 1,
        '@typescript-eslint/prefer-for-of': 1,
        '@typescript-eslint/prefer-reduce-type-parameter': 1,
        '@typescript-eslint/prefer-string-starts-ends-with': 1,
        '@typescript-eslint/promise-function-async': 1,
        '@typescript-eslint/switch-exhaustiveness-check': 2,
        '@typescript-eslint/type-annotation-spacing': 1,
        '@typescript-eslint/default-param-last': 2,

        'no-duplicate-imports': 0,
        '@typescript-eslint/no-duplicate-imports': 2,

        'no-invalid-this': 0,
        '@typescript-eslint/no-invalid-this': 2,

        'no-loss-of-precision': 0,
        '@typescript-eslint/no-loss-of-precision': 2,

        '@typescript-eslint/member-ordering': [
          2,
          {
            default: [
              // Index signature
              'signature',

              // Fields
              'public-static-field',
              'protected-static-field',
              'private-static-field',

              'public-decorated-field',
              'protected-decorated-field',
              'private-decorated-field',

              'public-instance-field',
              'protected-instance-field',
              'private-instance-field',

              'public-abstract-field',
              'protected-abstract-field',
              'private-abstract-field',

              'public-field',
              'protected-field',
              'private-field',

              'static-field',
              'decorated-field',
              'instance-field',
              'abstract-field',

              'field',

              // Constructors
              'public-constructor',
              'protected-constructor',
              'private-constructor',

              'constructor',

              // Methods
              'public-static-method',
              'protected-static-method',
              'private-static-method',

              'public-instance-method',
              'protected-instance-method',
              'private-instance-method',

              'public-decorated-method',
              'protected-decorated-method',
              'private-decorated-method',

              'public-abstract-method',
              'protected-abstract-method',
              'private-abstract-method',

              'public-method',
              'protected-method',
              'private-method',

              'static-method',
              'instance-method',
              'abstract-method',

              'decorated-method',

              'method',
            ],
          },
        ],
        '@typescript-eslint/naming-convention': [
          2,
          {
            selector: 'default',
            format: ['camelCase',
              'PascalCase',
              'UPPER_CASE'],
            leadingUnderscore: 'forbid',
            trailingUnderscore: 'forbid',
          },
          {
            selector: 'variable',
            format: ['camelCase',
              'PascalCase',
              'UPPER_CASE'],
          },
          {
            selector: 'function',
            format: ['camelCase'],
          },
          {
            selector: 'typeLike',
            format: ['PascalCase'],
          },
          {
            selector: 'enumMember',
            format: ['UPPER_CASE'],
          },
        ],
        'prefer-const': 2,
        'no-underscore-dangle': 2,

        // Others disabled
        '@typescript-eslint/lines-between-class-members': 0, // classes become too bloated
        '@typescript-eslint/no-parameter-properties': 0, // contradicts angular DI system
        'import/prefer-default-export': 0, // comes from airbnb/base, doesn't suite angular well
        'no-redeclare': 0, // covered by @typescript-eslint/no-redeclare
      },
    },

    /**
     * -----------------------------------------------------
     * JavaScript files
     * -----------------------------------------------------
     */
    {
      files: ['*.js'],
      rules: {
        'global-require': 0,
        'no-console': 0,
      },
    },

    /**
     * -----------------------------------------------------
     * UNIT TESTS
     * -----------------------------------------------------
     */
    {
      files: ['src/**/*.spec.ts', 'src/**/*.d.ts'],
      parserOptions: {
        project: './tsconfig.spec.json',
      },
      globals: {
        jasmine: 'readonly',
      },
      extends: ['plugin:jasmine/recommended'],
      plugins: ['jasmine'],
      env: { jasmine: true },
      rules: {},
    },

    /**
     * -----------------------------------------------------
     * COMPONENT TEMPLATES
     * -----------------------------------------------------
     */
    {
      files: ['*.html'],
      extends: ['plugin:@angular-eslint/template/recommended'],
      rules: {},
    },
  ],
};
