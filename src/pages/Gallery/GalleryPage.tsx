import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import useIsMobile from "@/hooks/useIsMobile";
import { galleryImages } from "@/pages/Gallery/GalleryImages";
import { Box, Button, Container, Image, Title } from "@mantine/core";
import { Carousel, CarouselSlide } from "@mantine/carousel";

export default function GalleryPage() {
  const isMobile = useIsMobile();

  return (
    <Container
      fluid
      style={{
        height: isMobile ? "auto" : "80%",
        padding: isMobile ? "0" : "auto",
        paddingBottom: isMobile ? "2rem" : "auto",
      }}
    >
      <Title
        order={1}
        style={{ color: "#1D3557", margin: "1rem", textAlign: "center" }}
      >
        Gallery
      </Title>
      <Title
        order={5}
        style={{ color: "#1D3557", padding: "1rem", textAlign: "center" }}
      >
        Peek into our trips!
      </Title>

      <Box display="flex" style={{ justifyContent: "center" }}>
        <Carousel
          withControls
          withIndicators
          slideSize="50%"
          slideGap={{ base: "lg", sm: "xl" }}
          height="100%"
          flex={1}
          emblaOptions={{
            loop: true,
            dragFree: false,
            align: "center",
          }}
        >
          {galleryImages.map((image, i) => (
            <CarouselSlide key={i}>
              <Image
                src={image}
                alt={image}
                style={{
                  objectFit: "cover",
                  maxWidth: "100%",
                  height: isMobile ? "300px" : "500px",
                }}
              />
            </CarouselSlide>
          ))}
        </Carousel>
      </Box>

      <Box
        style={{ display: "flex", justifyContent: "flex-end", padding: "1rem" }}
      >
        <Button
          variant="transparent"
          size="sm"
          style={{ color: "#5CA9E9", padding: "0" }}
        >
          See More
        </Button>
      </Box>
    </Container>
  );
}
