import { servicesData } from "@/pages/Services/ServicesData";
import ServicesCard from "@/pages/Services/ServicesCard";
import { Container, SimpleGrid, Title } from "@mantine/core";

export default function ServicesPage() {
  return (
    <Container
      fluid
      style={{
        backgroundColor: "#F1FAEE",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Title
        order={1}
        p="1rem"
        style={{
          textAlign: "center",
        }}
      >
        What We Offer
      </Title>
      <SimpleGrid
        cols={{ base: 1, sm: 3 }}
        spacing={{ base: "md", sm: "xl" }}
        verticalSpacing={{ base: "md", sm: "xl" }}
        p="1rem"
        m="1rem"
      >
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
      </SimpleGrid>
    </Container>
  );
}
