import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/pages/Gallery/Gallery.css";
import useIsMobile from "@/hooks/useIsMobile";
import { galleryImages } from "@/pages/Gallery/GalleryImages";
import { Box, Button, Typography } from "@mui/material";
import Slider from "react-slick";

export default function GalleryPage() {
  const isMobile = useIsMobile();

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: 1,
  };

  return (
    <Box
      sx={{
        height: isMobile ? "inherit" : "100%",
        padding: isMobile ? "0" : "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Typography variant="h3" sx={{ margin: "1rem", textAlign: "center" }}>
        Gallery
      </Typography>
      <Typography variant="h5" sx={{ padding: "1rem", textAlign: "center" }}>
        Peek into our trips!
      </Typography>

      <Box display={"flex"} justifyContent="center">
        <Box sx={{ width: "90%", padding: "0 1rem" }}>
          <Slider {...carouselSettings}>
            {galleryImages.map((image, i) => (
              <Box key={`g${i}`}>
                <img
                  src={image}
                  alt={image}
                  style={{
                    objectFit: "cover",
                    height: isMobile ? "350px" : "500px",
                    width: "100%",
                  }}
                />
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>

      <Box
        sx={{ display: "flex", justifyContent: "flex-end", padding: "1rem" }}
      >
        <Button sx={{ padding: "0" }}>See More</Button>
      </Box>
    </Box>
  );
}
