module.exports = {
  proseWrap: 'always',
  singleQuote: true,
  trailingComma: 'all',
  semi: false,
  overrides: [
    {
      files: 'packages/@FirstAttempt/angular/**',
      options: {
        semi: true,
      },
    },
  ],
}
