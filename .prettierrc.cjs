module.exports = {
  arrowParens: 'avoid',
  bracketSpacing: false,
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  plugins: [require.resolve('prettier-plugin-astro')],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
}
