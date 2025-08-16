import operaHouse from "@/assets/opera-house.avif";
import Header from "@/components/Header/Header";
import useIsMobile from "@/hooks/useIsMobile";
import { Box, Fade, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [fadeIn, setFadeIn] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <Fade in={fadeIn} timeout={1000} unmountOnExit>
      <Box display="flex" flexDirection="column" height="100vh">
        <Box position="relative" width="100%">
          <Header />
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            position: "relative",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              width: "100%",
              height: "100%",
              backgroundImage: `url(${operaHouse})`,
              objectFit: "cover",
              backgroundPosition: "center",
              filter: "brightness(75%)",
            }}
          />

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              position: "absolute",
              bottom: "50%",
              alignItems: isMobile ? "" : "center",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: isMobile ? "2.5rem" : "auto",
                fontWeight: "bold",
              }}
            >
              SouthEast Point Group
            </Typography>
            <Typography
              variant="h2"
              sx={{ fontSize: isMobile ? "2rem" : "auto" }}
            >
              Private Tours, Unforgettable Experiences
            </Typography>
          </Box>
        </Box>
      </Box>
    </Fade>
  );
}
