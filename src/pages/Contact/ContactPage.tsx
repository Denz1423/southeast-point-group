import { contactData, socialData } from "@/pages/Contact/ContactData";
import ContactCard from "@/pages/Contact/ContactCard";
import SocialRow from "@/pages/Contact/SocialRow";
import useIsMobile from "@/hooks/useIsMobile";
import useRevealOnScroll from "@/hooks/useRevealOnScroll";
import "@/pages/Contact/Contact.css";
import { Box, Container, SimpleGrid, Title } from "@mantine/core";

export default function ContactPage() {
  const isMobile = useIsMobile();
  useRevealOnScroll([".slide-in-left", ".slide-in-right"]);

  return (
    <Container
      fluid
      style={{
        backgroundColor: "#F1FAEE",
      }}
    >
      <Title
        order={1}
        p="1rem 0"
        style={{
          color: "#1D3557",
          margin: "1rem 0",
          textAlign: "left",
          fontSize: isMobile ? "2rem" : "auto",
        }}
      >
        Plan an Unforgettable Experience With Us Today!
      </Title>
      <Title order={5} style={{ padding: "1rem 0" }}>
        We can help you fit your trip and experience within your allotted
        budget.
      </Title>
      <SimpleGrid
        cols={{ base: 1, sm: 2 }}
        spacing={{ base: 10, sm: "xl" }}
        verticalSpacing={{ base: "xl" }}
        style={{ justifyItems: "center" }}
      >
        {contactData.map((contact, index) => {
          const slideClass =
            index % 2 === 0 ? "slide-in-left" : "slide-in-right";
          return (
            <Box key={index} className={slideClass} p="1rem">
              <ContactCard
                cardImage={contact.image}
                cardHeading={contact.name}
                cardSubHeading={contact.title}
                cardPhoneNum={contact.phoneNum}
              />
            </Box>
          );
        })}
      </SimpleGrid>
      <Box style={{ width: "fit-content", padding: "1rem 0" }}>
        {socialData.map((social, index) => (
          <SocialRow
            key={index}
            iconName={social.iconName}
            label={social.label}
            link={social.link}
          />
        ))}
      </Box>
    </Container>
  );
}
