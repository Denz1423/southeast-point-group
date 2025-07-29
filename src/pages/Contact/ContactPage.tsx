import { Box, Container, Grid, Typography } from "@mui/material";
import { contactData, socialData } from "@/pages/Contact/ContactData";
import ContactCard from "@/pages/Contact/ContactCard";
import SocialRow from "@/pages/Contact/SocialRow";
import useIsMobile from "@/hooks/useIsMobile";

export default function ContactPage() {
  const isMobile = useIsMobile();

  return (
    <Container
      maxWidth={false}
      sx={{
        width: "100%",
        padding: "2rem",
        backgroundColor: "#F1FAEE",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontSize: isMobile ? "1.5rem" : "auto",
          textAlign: isMobile ? "center" : "auto",
        }}
      >
        Plan an Unforgettable Experience With Us Today!
      </Typography>
      <Typography variant="body1" sx={{ padding: "1em 0" }}>
        We can help you fit your trip and experience within your allotted
        budget.
      </Typography>
      <Grid container padding={2} spacing={10}>
        {contactData.map((contact, index) => {
          return (
            <Grid
              key={index}
              size={{ xs: 12, sm: 4 }}
              sx={{ width: isMobile ? "250px" : "100%" }}
            >
              <ContactCard
                cardImage={contact.image}
                cardHeading={contact.name}
                cardSubHeading={contact.title}
                cardPhoneNum={contact.phoneNum}
              />
            </Grid>
          );
        })}
      </Grid>
      <Box sx={{ width: "100%" }}>
        {socialData.map((item, index) => (
          <SocialRow key={index} iconName={item.iconName} label={item.label} />
        ))}
      </Box>
    </Container>
  );
}
