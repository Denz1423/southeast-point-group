import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import airportTransfer from "@/assets/airport-transfer.avif";
import group from "@/assets/group.avif";
import privateTour from "@/assets/private-tour.avif";

export default function ServicesPage() {
  return (
    <Box
      sx={{
        width: "100%",
        padding: "2rem",
        backgroundColor: "#F1FAEE",
      }}
      justifyContent="center"
      display="flex"
    >
      <Grid container padding={2} gap={5} sx={{ width: "80%" }}>
        <Grid size={{ xs: 12, sm: 12 }} sx={{ height: "60px", margin: "10px" }}>
          <Typography variant="h3" align="left">
            What We Offer
          </Typography>
        </Grid>
        <Grid container spacing={2} sx={{ width: "100%" }}>
          <Grid size={{ xs: 12, sm: 4 }}>
            <Card
              elevation={0}
              sx={{
                maxWidth: "100%",
                backgroundColor: "transparent",
                transition: "transform 0.3s ease-in-out",
                ":hover": {
                  transform: "scale(1.02)",
                  boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
                },
              }}
            >
              <CardMedia
                component="img"
                height="500"
                image={airportTransfer}
                alt="airport-transfer"
              />
              <CardContent>
                <Typography
                  variant="h4"
                  sx={{
                    paddingBottom: "0.5em",
                  }}
                >
                  Airport Transfer
                </Typography>
                <Typography variant="body1" sx={{ color: "#2F6B3A" }}>
                  Reliable and comfortable rides to and from the airport, on
                  time, every time.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" sx={{ color: "#5CA9E9" }}>
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <Card
              elevation={0}
              sx={{
                maxWidth: "100%",
                backgroundColor: "transparent",
                transition: "transform 0.3s ease-in-out",
                ":hover": {
                  transform: "scale(1.02)",
                  boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
                },
              }}
            >
              <CardMedia
                component="img"
                height="500"
                image={privateTour}
                alt="privateTour"
              />
              <CardContent>
                <Typography variant="h4" sx={{ paddingBottom: "0.5em" }}>
                  Private Tour
                </Typography>
                <Typography variant="body1" sx={{ color: "black" }}>
                  Explore at your own pace with personalised routes and a
                  dedicated driver.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" sx={{ color: "#5CA9E9" }}>
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <Card
              sx={{
                maxWidth: "100%",
                transition: "transform 0.3s ease-in-out",
                ":hover": {
                  transform: "scale(1.02)",
                  boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
                },
              }}
            >
              <CardMedia
                component="img"
                height="500"
                image={group}
                alt="group"
              />
              <CardContent>
                <Typography variant="h4" sx={{ paddingBottom: "0.5em" }}>
                  Group Transport
                </Typography>
                <Typography variant="body1">
                  Travel together in comfort, perfect for events, outings, and
                  group adventures.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" sx={{ color: "#5CA9E9" }}>
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
