import { createTheme, type ThemeOptions } from "@mui/material/styles";

export const theme: ThemeOptions = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#D4AF37",
    },
    secondary: {
      main: "#CBA135",
    },
    background: {
      default: "#0d0d0d",
      paper: "#1a1a1a",
    },
    text: {
      primary: "#F8F4E3",
    },
    divider: "#8B7E74",
  },
  typography: {
    fontFamily: `"DM Sans", sans-serif`,
    body1: {
      color: "#FFFFFF",
    },
    h1: { fontFamily: `"Cormorant Garamond", serif` },
    h2: { fontFamily: `"Cormorant Garamond", serif` },
    h3: { fontFamily: `"Cormorant Garamond", serif` },
    h4: { fontFamily: `"Cormorant Garamond", serif` },
    h5: { fontFamily: `"Cormorant Garamond", serif` },
    h6: { fontFamily: `"Cormorant Garamond", serif` },
  },
});

export default theme;
