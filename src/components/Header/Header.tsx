import SEPG from "/SEPG.svg";
import Nav from "@/components/Navigation/Nav";
import { AppBar, Box, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
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
        justifyContent="space-around"
        alignItems="center"
      >
        <Box
          height="100px"
          width="120px"
          sx={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          <img src={SEPG} alt="SEPG" height="100%" width="100%" />
        </Box>
        <Nav />
      </Stack>
    </AppBar>
  );
}
