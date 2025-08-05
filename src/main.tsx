import { createRoot } from "react-dom/client";
import "@/index.css";
import "@mantine/core/styles.css";
import App from "@/App.tsx";
import { MantineProvider } from "@mantine/core";
import theme from "@/theme/theme";

createRoot(document.getElementById("root")!).render(
  <MantineProvider theme={theme}>
    <App />
  </MantineProvider>
);
