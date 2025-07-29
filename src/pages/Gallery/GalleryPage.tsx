import { Box, Typography } from "@mui/material";
import useIsMobile from "@/hooks/useIsMobile";
import Carousel from "@/components/Carousel/Carousel";
import { galleryImages } from "@/pages/Gallery/GalleryImages";

export default function GalleryPage() {
  const isMobile = useIsMobile();

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
      <Carousel images={galleryImages} />
    </Box>
  );
}
