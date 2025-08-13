import SEPG from "/SEPG.svg";
import operaHouse from "@/assets/opera-house.avif";
import Nav from "@/components/Navigation/Nav";
import { AppBar, Box, Stack } from "@mui/material";
import Fade from "@mui/material/Fade";
import { useEffect, useState } from "react";

export default function Header() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <Fade in={fadeIn} timeout={1000} unmountOnExit>
      <Box
        sx={{
          backgroundImage: `url(${operaHouse})`,
          height: "100%",
          objectFit: "cover",
          backgroundPosition: "center",
        }}
      >
        <AppBar
          position="static"
          color="transparent"
          elevation={0}
          sx={{ margin: "0 1rem" }}
        >
          <Stack
            direction="row"
            spacing={2}
            sx={{
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Box sx={{ height: "120px", width: "120px" }}>
              <img src={SEPG} alt="SEPG" />
            </Box>
            <Nav />
          </Stack>
        </AppBar>
      </Box>
    </Fade>
  );
}
