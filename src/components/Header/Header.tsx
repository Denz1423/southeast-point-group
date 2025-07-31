import SEPG from "/SEPG.svg";
import { Box, Stack, Toolbar } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Nav from "@/components/Navigation/Nav";
import HideOnScroll from "@/components/Header/HideOnScroll";

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
        <Box>
          <Toolbar>
            <Stack
              direction="row"
              justifyContent="space-around"
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
        </Box>
      </AppBar>
    </HideOnScroll>
  );
}
