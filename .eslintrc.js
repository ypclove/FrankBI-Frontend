module.exports = {
  extends: [require.resolve('@umijs/lint/dist/config/eslint')],
  globals: {
    page: true,
    REACT_APP_ENV: true,
  },
  rules: {
    'no-unused-vars': [0, 'always'],
    '@typescript-eslint/no-unused-vars': ['error'],
  },
};
