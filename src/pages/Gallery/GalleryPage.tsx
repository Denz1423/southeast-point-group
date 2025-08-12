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
        height: isMobile ? "inherit" : "100%",
        padding: isMobile ? "0" : "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Title order={1} style={{ margin: "1rem", textAlign: "center" }}>
        Gallery
      </Title>
      <Title order={4} style={{ padding: "1rem", textAlign: "center" }}>
        Peek into our trips!
      </Title>

      <Box display="flex" style={{ justifyContent: "center" }}>
        <Carousel
          withControls
          withIndicators
          slideSize={{ base: '100%', sm: "50%"}}
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
                  height: isMobile ? "350px" : "500px",
                }}
              />
            </CarouselSlide>
          ))}
        </Carousel>
      </Box>

      <Box
        style={{ display: "flex", justifyContent: "flex-end", padding: "1rem" }}
      >
        <Button variant="transparent" size="sm" style={{ padding: "0" }}>
          See More
        </Button>
      </Box>
    </Container>
  );
}
