import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    h1: {
      fontFamily: "Quicksand, sans-serif",
    },
    h2: {
      fontFamily: "Quicksand, sans-serif",
    },
    h3: {
      fontFamily: "Quicksand, sans-serif",
    },
    h6: {
      fontFamily: "Quicksand, sans-serif",
    },
    allVariants: {
      fontFamily: "Open Sans, sans-serif",
      color: "#1D3557",
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          fontFamily: "Open Sans, sans-serif",
          textDecoration: "none",
          color: "#1D3557",
        },
      },
    },
  },
});

export default theme;
