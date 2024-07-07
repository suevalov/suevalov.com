const { fontFamily } = require('tailwindcss/defaultTheme');
const config = require('./tailwind.theme.config.cjs');
/**
 * Find the applicable theme color palette, or use the default one
 */
const themeConfig = config.default;
const { colors } = themeConfig;

module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: ['./public/**/*.html', './src/**/*.{astro,js,ts,tsx,svelte}'],
  theme: {
    fontFamily: {
      sans: ['"Open Sans"', ...fontFamily.sans],
      montserrat: ['Montserrat', ...fontFamily.sans],
    },
    extend: {
      colors: {
        theme: {
          ...colors,
        },
      },
      typography: (theme) => {
        return {
          dark: {
            css: {},
          },
          DEFAULT: {
            css: {
              a: {
                textDecoration: 'none',
                color: theme('colors.theme.link'),
                fontWeight: 400,
              },
              h1: {
                fontFamily: theme('fontFamily.montserrat').join(', '),
                fontWeight: 400,
                fontSize: '2.5rem',
                lineHeight: '1.1',
              },
              h2: {
                fontFamily: theme('fontFamily.montserrat').join(', '),
                fontWeight: 400,
                fontSize: '1.73286rem',
                lineHeight: '1.1',
              },
              h3: {
                fontFamily: theme('fontFamily.montserrat').join(', '),
                fontWeight: 400,
                fontSize: '1.4427rem',
                lineHeight: '1.1',
              },
              h4: {
                fontFamily: theme('fontFamily.montserrat').join(', '),
              },
              h5: {
                fontFamily: theme('fontFamily.montserrat').join(', '),
              },
              h6: {
                fontFamily: theme('fontFamily.montserrat').join(', '),
              },
            },
          },
        };
      },
    },
  },
  variants: {
    extend: { typography: ['dark'] },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
