const eslintPluginAstro = require('eslint-plugin-astro');

module.exports = [
  ...eslintPluginAstro.configs['flat/recommended'],
  {
    rules: {},
  },
];
