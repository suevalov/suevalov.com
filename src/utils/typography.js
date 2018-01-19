import Typography from "typography";
import TypographyTheme from "typography-theme-wordpress-2016";

const typography = new Typography({
  ...TypographyTheme,
  googleFonts: [
    {
      name: "Montserrat",
      styles: ["700"]
    },
    {
      name: "Merriweather",
      styles: ["400", "400i", "700", "700i", "900", "900i"]
    }
  ],
  headerFontFamily: ["Montserrat", "Georgia", "serif"],
  bodyFontFamily: ["Merriweather", "Georgia", "serif"]
});

export default typography;
