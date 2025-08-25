import NavList from "@/components/Navigation/NavList";
import useIsMobile from "@/hooks/useIsMobile";
import { Box, Drawer, IconButton } from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleDrawer = (state: boolean) => () => {
    setOpen(state);
  };

  return (
    <>
      <IconButton
        onClick={toggleDrawer(true)}
        sx={{
          display: { xs: "flex", sm: "none" },
          color: "#FFFFFF",
        }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            backgroundColor: "#0d0d0d",
            width: "50%",
          },
        }}
      >
        <Box display="flex" p={2} justifyContent="flex-end">
          <IconButton onClick={toggleDrawer(false)}>
            <CloseIcon style={{ color: "#F5F5F5" }} />
          </IconButton>
        </Box>
        <NavList />
      </Drawer>
      {!isMobile && <NavList />}
    </>
  );
}
