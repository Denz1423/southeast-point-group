import { Box, Card, IconButton, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function GalleryPage() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "80%",
        padding: "2em",
      }}
    >
      <Typography
        variant="h3"
        align="center"
        sx={{ fontFamily: "Quicksand", color: "#1D3557", margin: "10px" }}
      >
        Gallery
      </Typography>
      <Typography
        variant="h6"
        align="center"
        sx={{ fontFamily: "Quicksand", color: "#1D3557" }}
      >
        Peek into our trips!
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          alignContent: "center",
          justifyContent: "center",
          height: "400px",
        }}
      >
        <IconButton>
          <ArrowBackIcon />
        </IconButton>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            alignContent: "center",
            justifyContent: "center",
            height: " 400px",
          }}
        >
          <Card sx={{ width: "100%", height: "100%" }}>Card1</Card>
          <Card sx={{ width: "100%", height: "100%" }}>Card2</Card>
          <Card sx={{ width: "100%", height: "100%" }}>Card3</Card>
          <Card sx={{ width: "100%", height: "100%" }}>Card4</Card>
          <Card sx={{ width: "100%", height: "100%" }}>Card5</Card>
        </Box>
        <IconButton>
          <ArrowForwardIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
