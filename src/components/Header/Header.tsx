import SEPG from "/SEPG.svg";
import { Box, Container, Stack, Toolbar } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Nav from "../Navigation/Nav";
import HideOnScroll from "./HideOnScroll";

export default function Header() {
  return (
    <HideOnScroll>
      <AppBar
        sx={{
          bgcolor: "transparent",
          boxShadow: "none",
        }}
        className="appbar"
        position="sticky"
      >
        <Container>
          <Toolbar>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              width="100%"
              height="100%"
            >
              <Box
                sx={{
                  backgroundImage: `url(${SEPG})`,
                  width: 200,
                  height: 120,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                }}
              ></Box>

              <Nav />
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
}
