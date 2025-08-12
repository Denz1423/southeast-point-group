import { createTheme } from "@mantine/core";

const theme = createTheme({
  fontFamily: "DM Sans, sans-serif",
  headings: {
    fontFamily: "Cormorant Garamond, serif",
    sizes: {
      h1: { fontSize: "3rem" },
    },
  },
  components: {
    Title: {
      styles: () => ({
        root: {
          color: "#F5F5F5",
        },
      }),
    },
    Typography: {
      styles: () => ({
        root: {
          color: "#D6D6D6",
        },
      }),
    },
    Anchor: {
      styles: () => ({
        root: {
          textDecoration: "none",
          fontFamily: "DM Sans, sans-serif",
          fontWeight: 600,
          color: "#D4AF37",
        },
      }),
    },
    Button: {
      styles: () => ({
        root: {
          color: "#D4AF37",
        },
      }),
    },
  },
});

export default theme;
