import { Box, Button, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import NavList from "./NavList";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const toggleDrawer =
    (newOpen: boolean | ((prevState: boolean) => boolean)) => () => {
      setOpen(newOpen);
    };
  return (
    <>
      <Button
        variant="text"
        onClick={toggleDrawer(true)}
        sx={{
          color: "black",
          display: { xs: "flex", sm: "none" },
        }}
      >
        <MenuIcon />
      </Button>
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        anchor="right"
        sx={{
          display: { xs: "inherit", sm: "none" },
          "& .MuiDrawer-paper": {
            height: "100%",
            width: "100%",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            p: 2,
          }}
        >
          <Button onClick={toggleDrawer(false)}>
            <CloseIcon />
          </Button>
        </Box>
        <NavList />
      </Drawer>
      <NavList
        sx={{
          display: { xs: "none", sm: "inherit" },
        }}
      />
    </>
  );
}
