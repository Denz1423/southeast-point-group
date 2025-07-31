import { Container, Typography } from "@mui/material";
import useIsMobile from "@/hooks/useIsMobile";
import Carousel from "@/components/Carousel/Carousel";
import { galleryImages } from "@/pages/Gallery/GalleryImages";

export default function GalleryPage() {
  const isMobile = useIsMobile();

  return (
    <Container
      sx={{
        height: isMobile ? "60vh" : "85%",
        padding: isMobile ? "0" : "auto",
        paddingBottom: isMobile ? "2rem" : "auto",
      }}
    >
      <Typography
        variant="h3"
        align="center"
        sx={{ color: "#1D3557", margin: "1rem" }}
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
    </Container>
  );
}
