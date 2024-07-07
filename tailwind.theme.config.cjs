const colors = require('tailwindcss/colors');

module.exports = {
  default: {
    colors: {
      primary: '#89bcfe',
      link: '#007acc',
      text: colors.black,
      background: '#fff',
      dark: {
        primary: '#60a5fa',
        link: '#4da6ff',
        text: colors.gray[200],
        background: colors.slate[950],
      },
    },
  },
};
