import { Box, Button, Container, Grid, Typography } from "@mui/material";
import aboutPic from "@/assets/about-pic.avif";
import "@/pages/About/About.css";
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
    <Box
      sx={{
        width: "100%",
        justifyItems: "center",
        padding: "10px",
      }}
    >
      <Grid container spacing={3} padding={2} sx={{ width: "70%" }}>
        <Grid size={{ xs: 12, sm: 12 }}>
          <Typography variant="h3" align="center" sx={{ padding: "10px" }}>
            About Us
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }} className="firsthidden">
          <img
            src={aboutPic}
            alt="about-pic"
            style={{
              maxWidth: "100%",
              height: isMobile ? "350px" : "auto",
            }}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }} className="secondhidden">
          <Typography
            variant="h4"
            sx={{ margin: "5px", color: "#2F6B3A" }}
            align="center"
          >
            Transporting is caring
          </Typography>
          <br />

          {isMobile ? (
            <>
              <Container sx={{ padding: "3px" }}>
                <Typography
                  variant="body1"
                  sx={{ color: "#2F6B3A" }}
                  className="about-text"
                >
                  {about[0]}
                </Typography>
                <br />
              </Container>

              {readMore &&
                about.slice(1).map((text, index) => (
                  <Container key={index} sx={{ padding: "3px" }}>
                    <Typography
                      variant="body1"
                      sx={{ color: "#2F6B3A" }}
                      className="about-text"
                    >
                      {text}
                    </Typography>
                    <br />
                  </Container>
                ))}

              <Box textAlign="center">
                <Button
                  variant="outlined"
                  onClick={toggleReadMore}
                  sx={{ color: "#5CA9E9", border: "none" }}
                >
                  {readMore ? "Read Less" : "Read More"}
                </Button>
              </Box>
            </>
          ) : (
            about.map((text, index) => (
              <Container key={index} sx={{ padding: "3px" }}>
                <Typography
                  variant="body1"
                  sx={{ color: "#2F6B3A" }}
                  className="about-text"
                >
                  {text}
                </Typography>
                <br />
              </Container>
            ))
          )}
        </Grid>
      </Grid>
    </Box>
  );
}
