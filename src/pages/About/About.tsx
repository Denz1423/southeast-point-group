import { Box, Grid, Typography } from "@mui/material";
import aboutPic from "@/assets/about-pic.avif";
import "@/pages/About/About.css";
import about from "./AboutText";

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");

hiddenElements.forEach((el) => {
  observer.observe(el);
});

export default function About() {
  return (
    <Box
      sx={{
        margin: "2em",
        width: "70%",
      }}
    >
      <Grid container spacing={3} padding={2}>
        <Grid size={{ xs: 12, sm: 6 }} className="hidden">
          <img
            src={aboutPic}
            alt="about-pic"
            className="about-img"
            style={{
              width: "100%",
            }}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }} className="hidden">
          <Typography
            variant="h3"
            component="h2"
            sx={{ fontFamily: "Quicksand", margin: "5px" }}
            align="center"
          >
            Transporting is caring
          </Typography>
          <br />
          {about.map((text: string, index: number) => (
            <>
              <Typography
                key={index}
                variant="body1"
                sx={{ fontFamily: "Open Sans", padding: "10px" }}
                className="about-text"
              >
                {text}
              </Typography>
              <br />
            </>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}
