import useIsMobile from "@/hooks/useIsMobile";
import { Box, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useState } from "react";

export default function Carousel({ images }: { images: string[] }) {
  const isMobile = useIsMobile();
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
  );
}
