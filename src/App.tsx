import "@/App.css";
import Header from "./components/Header/Header";
import About from "./pages/About";
import { Box } from "@mui/material";

function App() {
  return (
    <>
      <div className="container">
        <Header />
      </div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <About />
      </Box>
    </>
  );
}

export default App;
