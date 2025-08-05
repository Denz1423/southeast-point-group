import { createTheme } from "@mantine/core";

const theme = createTheme({
  fontFamily: "Open Sans, sans-serif",
  headings: {
    fontFamily: "Quicksand, sans-serif",
    sizes: {
      h1: { fontSize: "3rem" },
    },
  },
  components: {
    Title: {
      styles: () => ({
        root: {
          color: "#1D3557",
        },
      }),
    },
    Typography: {
      styles: () => ({
        root: {
          color: "#2F6B3A",
        },
      }),
    },
  },
});

export default theme;
