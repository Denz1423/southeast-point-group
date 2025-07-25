import { Box, Grid, Typography } from "@mui/material";
import aboutPic from "@/assets/about-pic.avif";

export default function About() {
  return (
    <Box
      sx={{
        width: "90%",
        height: "70%",
        backgroundColor: "#F1FAEE",
        margin: "2rem",
      }}
    >
      <Grid container spacing={3} padding={2}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <img
            src={aboutPic}
            alt="about-pic"
            style={{
              width: "100%",
              objectFit: "cover",
            }}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Typography
            variant="h3"
            component="h2"
            sx={{ fontFamily: "Quicksand", margin: "5px" }}
            align="center"
          >
            Transporting is caring
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontFamily: "Open Sans", padding: "10px" }}
          >
            SouthEast Point Group was founded by Taufik Tenggara - a down to
            earth guy known for his unique talent and expertise for tour and
            transport. He and his key partner, Andrew Kusnadi, have learnt to
            translate this expertise into impressive service, transporting
            guests with such finesse it's almost second nature.
          </Typography>
          <br />
          <Typography
            variant="body1"
            sx={{ fontFamily: "Open Sans", padding: "10px" }}
          >
            Since its inception in 2014, SouthEast Point has continuously
            evolved to meet the needs of their clients What started as asimple
            'point-to-point transport' service has blossomed into a full-fleged
            operation offering 'private tours and group transport' across
            various cities in Australia. Their ability to cater to groups of all
            sizes, from intimate gatherings to larger parties, showcases their
            versatility and dedication to customer satisfaction.
          </Typography>
          <br />
          <Typography
            variant="body1"
            sx={{ fontFamily: "Open Sans", padding: "10px" }}
          >
            The diverse fleet of vehicles at SouthEast Point ensures that every
            customer's transportation needs are met with precision. From
            luxurious cars for a touch of elegance to spacious SUVs and
            minibusses for group excursions, they have thoughtfully curated
            their options to cater to a wide range of preferences.
          </Typography>
          <br />
          <Typography
            variant="body1"
            sx={{ fontFamily: "Open Sans", padding: "10px" }}
          >
            SouthEast Point Group's journey is a testament to hard work,
            innovation, and above all, a genuine desire to create memorable
            experiences for every traveler they serve. With their unwavering
            commitment to excellence, there's no doubt that SouthEast Point will
            continue to be a leader in the industry for years to come.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
