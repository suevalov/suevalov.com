import Typography from "typography";
import gray from "gray-percentage";
import { MOBILE_MEDIA_QUERY } from "typography-breakpoint-constants";

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.75,
  scaleRatio: 5 / 2,
  googleFonts: [
    {
      name: "Montserrat",
      styles: ["400"]
    },
    {
      name: "Source Sans Pro",
      styles: ["400", "400i", "700", "700i", "900", "900i"]
    }
  ],
  headerFontFamily: ["Montserrat", "Helvetica Neue", "serif"],
  bodyFontFamily: ["Source Sans Pro", "Helvetica Neue", "serif"],
  bodyColor: "hsla(0,0%,0%,0.9)",
  headerWeight: 400,
  bodyWeight: 400,
  boldWeight: 700,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    blockquote: {
      ...scale(1 / 5),
      color: gray(41),
      fontStyle: "italic",
      paddingLeft: rhythm(13 / 16),
      marginLeft: rhythm(-1),
      borderLeft: `${rhythm(3 / 16)} solid ${gray(10)}`
    },
    "blockquote > :last-child": {
      marginBottom: 0
    },
    "blockquote cite": {
      ...adjustFontSizeTo(options.baseFontSize),
      color: options.bodyColor,
      fontWeight: options.bodyWeight
    },
    "blockquote cite:before": {
      content: '"— "'
    },
    ul: {
      listStyle: "disc"
    },
    "ul,ol": {
      marginLeft: 0
    },
    [MOBILE_MEDIA_QUERY]: {
      "ul,ol": {
        marginLeft: rhythm(1)
      },
      blockquote: {
        marginLeft: rhythm(-3 / 4),
        marginRight: 0,
        paddingLeft: rhythm(9 / 16)
      }
    },
    "h1,h2,h3,h4,h5,h6": {
      marginTop: rhythm(2)
    },
    h4: {
      letterSpacing: "0.140625em",
      textTransform: "uppercase"
    },
    h6: {
      fontStyle: "italic"
    },
    a: {
      boxShadow: "0 1px 0 0 currentColor",
      color: "#007acc",
      textDecoration: "none",
      position: "relative",
      transition: "color 0.2s ease-out"
    },
    "a:hover, a:active": {
      boxShadow: "none"
    },
    "a:hover, a:focus": {
      color: "#fff",
      transitionDelay: "0.5s",
      outline: "none"
    },
    "a:hover:before, a:focus:before": {
      transition: "transform 0.2s ease-in",
      transitionDelay: "0.5s",
      transform: "scaleX(1)"
    },
    "a:before": {
      transitionDelay: "0.5s",
      content: "''",
      position: "absolute",
      left: "-2%",
      top: "0",
      width: "104%",
      background: "#89bcfe",
      transform: "scaleX(0)",
      transition: "transform 0.1s ease-out",
      height: "100%",
      transformOrigin: "left top",
      zIndex: "-1"
    },
    "a.clear": {
      boxShadow: "none"
    },
    "a.clear:hover:before, a.clear:focus:before": {
      transform: "scaleX(0)"
    },
    "a.clear:hover": {
      color: "#007acc"
    },
    "mark,ins": {
      background: "#007acc",
      color: "white",
      padding: `${rhythm(1 / 16)} ${rhythm(1 / 8)}`,
      textDecoration: "none"
    }
  })
});

export default typography;
