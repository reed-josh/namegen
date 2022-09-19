module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'standard',
    'plugin:jsdoc/recommended'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'vue',
    'jsdoc'
  ],
  rules: { 'jsdoc/require-param-description': 0, 'jsdoc/require-returns-description': 0 }
}
