/** @type {import("prettier").Config} */
export default {
  trailingComma: 'es5',
  singleQuote: true,
  plugins: ['prettier-plugin-astro', 'prettier-plugin-svelte'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
    { files: '*.svelte', options: { parser: 'svelte' } },
  ],
};
