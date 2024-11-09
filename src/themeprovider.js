import { createTheme } from "@mui/material";

const fontFamily = ["Arial", "Meiryo"].join(",");

export const theme = createTheme({
  palette: {
    black: "#000000",
    white: "#ffffff",
    type: "light",
    primary: {
      light: "#CCEDF9",
      main: "#00587C",
    },
    success: {
      light: "#D2F5F3",
      main: "#C3E8E0",
      dark: "#60827B",
    },
    error: {
      light: "#FFE5E5",
      main: "#FF0000",
    },
    text: {
      primary: "#333333",
      secondary: "#000000",
    },

  },
  typography: {
    fontFamily: fontFamily,
    h1: {
      fontSize: 32,
      fontWeight: "bold",
    },
    h2: {
      fontSize: 20,
      fontWeight: "bold",
    },
    h3: {
      fontSize: 16,
    },
    body1: {
      fontSize: 14,
    },
    body2: {
      fontSize: 12,
    },
  },
});
