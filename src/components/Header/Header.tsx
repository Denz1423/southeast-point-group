import SEPG from "/SEPG.svg";
import Nav from "@/components/Navigation/Nav";
import { AppBar, Box, Stack } from "@mui/material";

export default function Header() {
  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{ backgroundColor: "#0d0d0d" }}
    >
      <Stack
        direction="row"
        spacing={2}
        sx={{
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Box sx={{ height: "100px", width: "120px" }}>
          <img src={SEPG} alt="SEPG" height="100%" />
        </Box>
        <Nav />
      </Stack>
    </AppBar>
  );
}
