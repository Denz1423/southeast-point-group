import "@/pages/About/About.css";
import {
  Button,
  Box,
  Title,
  Typography,
  Container,
  SimpleGrid,
  Image,
} from "@mantine/core";
import aboutPic from "@/assets/about-pic.avif";
import about from "@/pages/About/AboutData";
import useRevealOnScroll from "@/hooks/useRevealOnScroll";
import useIsMobile from "@/hooks/useIsMobile";
import { useState } from "react";

export default function About() {
  useRevealOnScroll([".firsthidden", ".secondhidden"]);
  const isMobile = useIsMobile();
  const [readMore, setReadMore] = useState(false);

  const toggleReadMore = () => {
    setReadMore((prevState) => !prevState);
  };

  return (
    <Container
      style={{
        justifyItems: "center",
      }}
    >
      <Title
        order={1}
        p="1rem"
        style={{
          textAlign: "center",
        }}
      >
        About Us
      </Title>
      <SimpleGrid
        cols={{ base: 1, sm: 2 }}
        spacing={{ base: "sm", sm: 100 }}
        verticalSpacing={{ base: 20 }}
        style={{ justifyItems: "center" }}
      >
        <Box className="firsthidden">
          <Image
            src={aboutPic}
            alt="about-pic"
            style={{
              maxWidth: "100%",
              height: isMobile ? "350px" : "auto",
            }}
          />
        </Box>

        <Box className="secondhidden">
          <Title
            order={2}
            style={{ margin: "5px", color: "#2F6B3A", textAlign: "center" }}
          >
            Transporting is caring
          </Title>
          {isMobile ? (
            <>
              <Box p="3px">
                <Typography>{about[0]}</Typography>
                <br />
              </Box>

              {readMore &&
                about.slice(1).map((text, index) => (
                  <Box key={index} p="3px">
                    <Typography>{text}</Typography>
                    <br />
                  </Box>
                ))}

              <Button
                variant="outline"
                justify="center"
                fullWidth
                onClick={toggleReadMore}
                style={{ color: "#5CA9E9", border: "none" }}
              >
                {readMore ? "Read Less" : "Read More"}
              </Button>
            </>
          ) : (
            about.map((text, index) => (
              <Box key={index} p="3px">
                <Typography>{text}</Typography>
                <br />
              </Box>
            ))
          )}
        </Box>
      </SimpleGrid>
    </Container>
  );
}
