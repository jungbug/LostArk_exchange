module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ['plugin:vue/essential', 'standard'],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'no-extra-parens': 'off',
    'no-extra-boolean-cast': 'off',
    'comma-dangle': [2, 'always-multiline'],
    camelcase: 'off',
    'vue/multi-word-component-names': 'off',
    'no-new-func': 'off',
    'no-redeclare': 'off',
    'no-use-before-define': 'off',
    'arrow-parens': [2, 'as-needed', { requireForBlockBody: true }],
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
  },
  globals: { dsm: true, FirebaseFirestore: true },
  ignorePatterns: ['node_modules/**/*'],
}