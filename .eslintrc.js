module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'plugin:vue/recommended',
    'plugin:vue-scoped-css/recommended',
    'plugin:radar/recommended',
    'plugin:unicorn/recommended',
    'airbnb-base',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:vuejs-accessibility/recommended',
  ],
  plugins: ['prettier', 'radar', 'unicorn', 'vuejs-accessibility'],
  // add your custom rules here
  rules: {
    'vue/no-v-html': 'off',
    'vue-scoped-css/no-unused-selector': 'off',
    'vue-scoped-css/require-scoped': 'error',
    'import/prefer-default-export': 'off',
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          kebabCase: true,
          pascalCase: true,
        },
      },
    ],
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/no-array-reduce': 'off',
    'unicorn/no-array-for-each': 'off',
    'no-underscore-dangle': 'off',
    'vuejs-accessibility/click-events-have-key-events': 'off',
    'no-shadow': [
      'error',
      {
        allow: ['state', 'getters'],
      },
    ],
    'no-param-reassign': 'off',
    'func-names': 'off',
    'import/no-extraneous-dependencies': 'off',
    'consistent-return': 'off',
    'nuxt/no-cjs-in-config': 'off',
    'radar/no-duplicate-string': ['error', 5],
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            alias: {
              '~': __dirname,
            },
          },
        },
      },
    },
  },
}
