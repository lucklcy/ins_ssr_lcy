module.exports = {
  root: true,
  extends: ['standard-vue-ts'],
  globals: {
    __isBrowser__: 'readonly',
    defineProps: 'readonly'
  },
  rules: {
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': ['off'],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['off'],
    indent: 'off',
    '@typescript-eslint/indent': ['off']
  }
}
