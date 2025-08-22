import { contactData, socialData } from "@/pages/Contact/ContactData";
import ContactCard from "@/pages/Contact/ContactCard";
import SocialRow from "@/pages/Contact/SocialRow";
import useIsMobile from "@/hooks/useIsMobile";
import useRevealOnScroll from "@/hooks/useRevealOnScroll";
import "@/pages/Contact/Contact.css";
import { Box, Stack, Typography } from "@mui/material";

export default function ContactPage() {
  const isMobile = useIsMobile();
  const contactStackDirection = isMobile ? "column" : "row";
  useRevealOnScroll([".slide-in-left", ".slide-in-right"]);

  return (
    <Box
      sx={{ minHeight: "100vh" }}
      display="flex"
      flexDirection="column"
      justifyContent="space-evenly"
      alignItems="center"
    >
      <Typography
        variant="h3"
        p="1rem"
        margin="1rem 0"
        textAlign="left"
        fontSize={isMobile ? "2rem" : "auto"}
      >
        Plan an Unforgettable Experience With Us Today!
      </Typography>
      <Typography variant="h5" padding="1rem">
        We can help you fit your trip and experience within your allotted
        budget.
      </Typography>
      <Stack
        direction={contactStackDirection}
        justifyContent="space-around"
        alignItems="center"
      >
        {contactData.map((contact, index) => {
          const slideClass =
            index % 2 === 0 ? "slide-in-left" : "slide-in-right";
          return (
            <Box key={index} className={slideClass} padding="1rem">
              <ContactCard
                cardImage={contact.image}
                cardHeading={contact.name}
                cardSubHeading={contact.title}
                cardPhoneNum={contact.phoneNum}
              />
            </Box>
          );
        })}
      </Stack>
      <Box width="fit-content" padding="1rem 0">
        {socialData.map((social, index) => (
          <SocialRow
            key={index}
            iconName={social.iconName}
            label={social.label}
            link={social.link}
          />
        ))}
      </Box>
    </Box>
  );
}
