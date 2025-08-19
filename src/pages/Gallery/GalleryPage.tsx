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
    dots: isMobile ? true : false,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: 1,
  };

  return (
    <Box
      height={isMobile ? "inherit" : "100%"}
      padding={isMobile ? "0" : "auto"}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      width="100%"
    >
      <Typography variant="h3" margin="1rem" textAlign="center">
        Gallery
      </Typography>
      <Typography variant="h5" padding="1rem" textAlign="center">
        Peek into our trips!
      </Typography>

      <Box display="flex" justifyContent="center">
        <Box width="90%" padding="0 1rem">
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

      <Box display="flex" justifyContent="flex-end" padding="1rem">
        <Button>See More</Button>
      </Box>
    </Box>
  );
}
