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
      "@media (max-width:600px)": {
        fontSize: "2rem",
      },
    },
    h4: {
      fontFamily: "Quicksand, sans-serif",
      "@media (max-width:600px)": {
        fontSize: "1.5rem",
      },
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
    MuiContainer: {
      defaultProps: {
        maxWidth: false,
      },
      styleOverrides: {
        root: {
          width: "100%",
          padding: "2rem",
        },
      },
    },
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
