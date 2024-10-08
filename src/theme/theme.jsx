import { createTheme } from "@mui/material/styles";
import { amber } from "@mui/material/colors";

const getDesignTokens = (mode) => ({
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 768,
      lg: 1200,
      xl: 1800,
      xxl: 2200,
      xxxl:2400,
    },
  },
  palette: {
    mode,
    primary: amber,
    ...(mode === "light"
      ? {
          contrastThreshold: 2.5,
          background: {
            paper: "#fff",
            default: "#fff",
            lightBg: "rgba(104, 60, 140, 0.06)",
          },
          text: {
            primary: "#000",
            secondary: "#673C8E",
            mutedText: "#A3A3A3",
          },
        }
      : {
          contrastThreshold: 2.5,
          background: {
            paper: "#fff",
            default: "#fff",
            lightBg: "rgba(104, 60, 140, 0.06)",
          },
          text: {
            primary: "#000",
            secondary: "#000",
          },
        }),
  },
});

export const createAppTheme = (mode) => createTheme(getDesignTokens(mode));

export { getDesignTokens }; // Export the getDesignTokens function
