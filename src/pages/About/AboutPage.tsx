import { Box, Container, Grid, Typography } from "@mui/material";
import aboutPic from "@/assets/about-pic.avif";
import "@/pages/About/About.css";
import about from "./AboutText";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
        else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden");

    hiddenElements.forEach((el) => {
      observer.observe(el);
    });
  }, []);

  return (
    <Box
      sx={{
        // backgroundColor: "#F1FAEE  ",
        width: "100%",
        // display: "grid",
        justifyItems: "center",
        padding: "10px",
      }}
    >
      <Grid container spacing={3} padding={2} sx={{ width: "70%" }}>
        <Grid size={{ xs: 12, sm: 12 }} className="hidden">
          <Typography variant="h3" align="center" sx={{ padding: "10px" }}>
            About Us
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }} className="hidden">
          <img
            src={aboutPic}
            alt="about-pic"
            style={{
              maxWidth: "100%",
            }}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }} className="hidden">
          <Typography
            variant="h4"
            component="h2"
            sx={{ margin: "5px", color: "#2F6B3A" }}
            align="center"
          >
            Transporting is caring
          </Typography>
          <br />
          {about.map((text: string, index: number) => (
            <Container key={index} sx={{ padding: "3px" }}>
              <Typography
                variant="body1"
                sx={{
                  color: "#2F6B3A",
                }}
                className="about-text"
              >
                {text}
              </Typography>
              <br />
            </Container>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}
