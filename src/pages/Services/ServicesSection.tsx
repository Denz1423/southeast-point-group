import { servicesData } from "@/pages/Services/ServicesData";
import ServicesCard from "@/pages/Services/ServicesCard";
import { Box, Grid, Typography } from "@mui/material";

export default function ServicesSection() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      margin="1rem 0"
      sx={{ minHeight: "100vh" }}
    >
      <Typography variant="h3" p="1rem" textAlign="center">
        What We Offer
      </Typography>
      <Grid container spacing={4} size={{ xs: 12, sm: 4 }} p="1rem" m="1rem">
        {servicesData.map((service) => {
          return (
            <ServicesCard
              key={service.heading}
              cardImage={service.image}
              cardHeading={service.heading}
              cardBody={service.body}
              cardButtonLabel={service.buttonText}
            />
          );
        })}
      </Grid>
    </Box>
  );
}
