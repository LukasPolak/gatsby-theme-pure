/**
 * This theme uses `theme-ui` under the hood.
 * @see https://theme-ui.com/
 * @see https://theme-ui.com/gatsby-plugin/
 */

import "typeface-montserrat"

export default {
  colors: {
    text: "#232129",
    background: "#fff",
    primary: "#639",
  },
  fonts: {
    default:
      'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },
  fontSizes: [16, 18, 20, 22, 27, 36],
  lineHeights: {
    text: "1.45",
    heading: "1.1",
  },
  sizes: {
    container: 650,
  },
  styles: {
    Layout: {
      backgroundColor: "background",
      color: "text",
      fontFamily: "default",
      fontSize: 1,
      lineHeight: "text",
    },
    Header: {
      margin: 0,
      span: {
        display: "block",
        fontSize: 3,
        margin: "0 auto",
        textAlign: "center",
        maxWidth: "container",
        padding: 3,
        width: "90vw",
        borderBottom: "1px solid black",
        textTransform: "uppercase",
      },
    },
    Main: {
      margin: "0 auto",
      maxWidth: "container",
      width: "90vw",
      ul: {
        textAlign: "center",
      },
      li: {
        display: "inline-block",
        padding: 3,
      },
      a: {
        color: "black",
      },
      "a:hover": {
        textDecoration: "none",
      },
      hr: {
        borderColor: "rgba(0, 0, 0, 0.50)",
        borderWidth: "0.5px",
        margin: "32px 0",
      },
    },
    Container: {
      padding: 0,
      paddingBottom: 3,
      paddingTop: 3,
    },
    h1: {
      color: "text",
      fontSize: 5,
      lineHeight: "heading",
    },
    h2: {
      color: "text",
      fontSize: 3,
      lineHeight: "heading",
    },
  },
}
