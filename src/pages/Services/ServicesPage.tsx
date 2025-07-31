import { Container, Grid, Typography } from "@mui/material";
import useIsMobile from "@/hooks/useIsMobile";
import { servicesData } from "./ServicesData";
import ServicesCard from "./ServicesCard";

export default function ServicesPage() {
  const isMobile = useIsMobile();

  return (
    <Container
      sx={{
        backgroundColor: "#F1FAEE",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid container padding={2} gap={5} sx={{ width: "80%" }}>
        <Grid size={{ xs: 12, sm: 12 }} sx={{ height: "60px" }}>
          <Typography
            variant="h3"
            sx={{
              textAlign: isMobile ? "center" : "auto",
            }}
          >
            What We Offer
          </Typography>
        </Grid>
        <Grid container spacing={2} sx={{ width: "100%" }}>
          {servicesData.map((service, index) => {
            return (
              <Grid size={{ xs: 12, sm: 4 }} key={index}>
                <ServicesCard
                  cardImage={service.image}
                  cardHeading={service.heading}
                  cardBody={service.body}
                  cardButtonLabel={service.buttonText}
                />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Container>
  );
}
