import "@/pages/About/About.css";
import aboutPic from "@/assets/about-pic.avif";
import about from "@/pages/About/AboutData";
import useRevealOnScroll from "@/hooks/useRevealOnScroll";
import useIsMobile from "@/hooks/useIsMobile";
import { useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";

export default function AboutSection() {
  useRevealOnScroll([".firsthidden", ".secondhidden"]);
  const isMobile = useIsMobile();
  const [readMore, setReadMore] = useState(false);

  const toggleReadMore = () => {
    setReadMore((prevState) => !prevState);
  };

  return (
    <Box p="3rem" mb={10} sx={{ minHeight: "100vh" }}>
      <Typography variant="h3" padding="1rem" textAlign="center">
        About Us
      </Typography>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box className="firsthidden" display="flex" justifyContent="center">
            <img
              src={aboutPic}
              alt="about-pic"
              style={{
                maxWidth: "100%",
                height: isMobile ? "400px" : "auto",
              }}
            />
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Box className="secondhidden">
            <Typography variant="h4" margin="8px" textAlign="center">
              Transporting is caring
            </Typography>
            {isMobile ? (
              <>
                <Box p="3px">
                  <Typography variant="body1">{about[0]}</Typography>
                  <br />
                </Box>

                {readMore &&
                  about.slice(1).map((text, index) => (
                    <Box key={index} p="3px">
                      <Typography variant="body1">{text}</Typography>
                      <br />
                    </Box>
                  ))}

                <Button fullWidth onClick={toggleReadMore}>
                  {readMore ? "Read Less" : "Read More"}
                </Button>
              </>
            ) : (
              about.map((text, index) => (
                <Box key={index} p="3px">
                  <Typography variant="body1">{text}</Typography>
                  <br />
                </Box>
              ))
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
