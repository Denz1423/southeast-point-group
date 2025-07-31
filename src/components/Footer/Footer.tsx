import Divider from "@mui/material/Divider";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { Box, Container, Typography } from "@mui/material";

export default function Footer() {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <Container sx={{ backgroundColor: "#F1FAEE", padding: "0" }}>
      <Divider />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1rem 0",
        }}
      >
        <CopyrightIcon sx={{ fontSize: "medium", color: "#2F6B3A" }} />
        <Typography
          sx={{ fontSize: "16px", padding: "0 0.5rem", color: "#2F6B3A" }}
        >
          {currentYear} SouthEast Point Group
        </Typography>
      </Box>
    </Container>
  );
}
