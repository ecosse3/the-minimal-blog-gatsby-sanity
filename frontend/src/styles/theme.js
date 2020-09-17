export const theme = {
  colors: {
    black: "#000000",
    darkBlack: "#0c0c0c",
    white: "#FFFFFF",
  },

  flexboxgrid: {
    // Defaults
    gridSize: 12, // columns
    gutterWidth: 1, // rem
    outerMargin: 2, // rem
    mediaQuery: "only screen",
    container: {
      sm: 46, // rem
      md: 61, // rem
      lg: 76, // rem
    },
    breakpoints: {
      xs: 0, // em
      sm: 48, // em
      md: 64, // em
      lg: 75, // em
    },
  },

  textStyles: {
    heading: {
      fontSize: [24, 32, 48, 76],
      fontWeight: [600, 700, 700, 800],
      lineHeight: [1.17, 1.13, 1.08, 1.05],
      fontFamily: "Poppins, sans-serif",
    },
  },
};
