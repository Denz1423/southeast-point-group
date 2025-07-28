import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import taufik from "@/assets/taufik.jpg";
import andrew from "@/assets/andrew.jpg";

export default function ContactPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        width: "100%",
        padding: "2rem",
        backgroundColor: "#F1FAEE",
      }}
    >
      <Typography variant="h4">
        Plan an Unforgettable Experience With Us Today!
      </Typography>
      <Typography variant="body1" sx={{ padding: "1em 0" }}>
        We can help you fit your trip and experience within your allotted
        budget.
      </Typography>
      <Grid container padding={2} spacing={10}>
        <Grid
          size={{ xs: 12, sm: 4 }}
          sx={{ width: isMobile ? "200px" : "100%" }}
        >
          <Card
            sx={{
              height: isMobile ? "400px" : "200px",
              display: "flex",
              flexDirection: isMobile ? "column" : "",
            }}
          >
            <CardMedia
              component="img"
              src={taufik}
              alt="taufik"
              sx={{ objectFit: "cover", width: "200px", height: "235px" }}
            />

            <CardContent>
              <Typography
                variant="h4"
                sx={{
                  paddingBottom: "0.5em",
                }}
              >
                Taufik Tenggara
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  paddingBottom: "0.5em",
                }}
              >
                Founder and Owner
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          size={{ xs: 12, sm: 4 }}
          sx={{ width: isMobile ? "200px" : "100%" }}
        >
          <Card
            sx={{
              height: isMobile ? "400px" : "200px",
              width: "100%",
              display: "flex",
              flexDirection: isMobile ? "column" : "",
            }}
          >
            <CardMedia
              component="img"
              src={andrew}
              alt="andrew"
              sx={{ objectFit: "cover", width: "200px", height: "235px" }}
            />
            <CardContent>
              <Typography
                variant="h4"
                sx={{
                  paddingBottom: "0.5em",
                }}
              >
                Andrew Kusnadi
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  paddingBottom: "0.5em",
                }}
              >
                Key Partner
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Typography variant="body1" sx={{ fontSize: "20px" }}>
        southeastpointgroup@gmail.com
      </Typography>
    </Box>
  );
}
