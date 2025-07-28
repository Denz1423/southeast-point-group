import {
  Box,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useState } from "react";
import G1 from "@/assets/G1.avif";
import G2 from "@/assets/G2.avif";
import G3 from "@/assets/G3.avif";
import G4 from "@/assets/G4.avif";
import G5 from "@/assets/G5.avif";
import G6 from "@/assets/G6.avif";

export default function GalleryPage() {
  const images = [G1, G2, G3, G4, G5, G6];
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [index, setIndex] = useState(0);

  const goBack = () => {
    setIndex((prevIndex) => {
      const newIndex = (prevIndex - 1 + images.length) % images.length;
      return newIndex;
    });
  };

  const goNext = () => {
    setIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % images.length;
      return newIndex;
    });
  };

  const displayedImages = isMobile
    ? [images[index]]
    : [
        images[index],
        images[(index + 1) % images.length],
        images[(index + 2) % images.length],
      ];

  return (
    <Box
      sx={{
        width: "100%",
        height: isMobile ? "auto" : "80%",
        padding: isMobile ? "0" : "2em",
        paddingBottom: isMobile ? "40px" : "auto",
      }}
    >
      <Typography
        variant="h3"
        align="center"
        sx={{ color: "#1D3557", margin: "10px" }}
      >
        Gallery
      </Typography>
      <Typography
        variant="h6"
        align="center"
        sx={{ color: "#1D3557", padding: "1rem" }}
      >
        Peek into our trips!
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <IconButton style={{ fontSize: "30px" }} onClick={goBack}>
          <ArrowBackIcon />
        </IconButton>

        {displayedImages.map((image, i) => (
          <img
            key={i}
            src={image}
            alt={image}
            style={{
              objectFit: "cover",
              maxWidth: "100%",
              height: isMobile ? "250px" : "450px",
              width: isMobile ? "300px" : "400px",
            }}
          />
        ))}

        <IconButton style={{ fontSize: "30px" }} onClick={goNext}>
          <ArrowForwardIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
