import { Box, IconButton, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useState } from "react";
import G1 from "@/assets/G1.avif";
import G2 from "@/assets/G2.avif";
import G3 from "@/assets/G3.avif";
import G4 from "@/assets/G4.avif";
import G5 from "@/assets/G5.avif";
import G6 from "@/assets/G6.avif";

const images = [G1, G2, G3, G4, G5, G6];

export default function GalleryPage() {
  const [index, setIndex] = useState(0);
  const cardsToDisplay = 3;

  const goBack = () => {
    setIndex(index === 0 ? images.length - cardsToDisplay : index - 1);
  };

  const goNext = () => {
    setIndex(index === images.length - cardsToDisplay ? 0 : index + 1);
  };

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
        sx={{ color: "#1D3557", margin: "10px" }}
      >
        Gallery
      </Typography>
      <Typography variant="h6" align="center" sx={{ color: "#1D3557" }}>
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
        {index >= 0 && (
          <IconButton style={{ fontSize: "30px" }} onClick={goBack}>
            <ArrowBackIcon />
          </IconButton>
        )}
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
          {images.slice(index, index + cardsToDisplay).map((image) => (
            <img
              src={image}
              alt={image}
              height={450}
              width={450}
              style={{ objectFit: "cover" }}
            />
          ))}
        </Box>
        {index <= images.length - cardsToDisplay && (
          <IconButton style={{ fontSize: "30px" }} onClick={goNext}>
            <ArrowForwardIcon />
          </IconButton>
        )}
      </Box>
    </Box>
  );
}
