import useIsMobile from "@/hooks/useIsMobile";
import { Button, Card, Image, Title, Typography } from "@mantine/core";

interface ServiceCardProps {
  cardImage: string;
  cardHeading: string;
  cardBody: string;
  cardButtonLabel: string;
}

export default function ServicesCard({
  cardImage,
  cardHeading,
  cardBody,
  cardButtonLabel,
}: ServiceCardProps) {
  const isMobile = useIsMobile();

  return (
    <Card
      style={{
        maxWidth: "100%",
        backgroundColor: "transparent",
        transition: "transform 0.3s ease-in-out",
        ":hover": {
          transform: "scale(1.02)",
          boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
        },
      }}
    >
      <Card.Section>
        <Image
          src={cardImage}
          alt={cardHeading}
          style={{ height: isMobile ? "300px" : "500px" }}
        />
      </Card.Section>
      <Card.Section>
        <Title
          order={2}
          style={{
            padding: "1rem 0",
          }}
        >
          {cardHeading}
        </Title>
        <Typography variant="body1" style={{ color: "#2F6B3A" }}>
          {cardBody}
        </Typography>
      </Card.Section>
      <Card.Section
        style={{
          padding: "0.5rem 0",
        }}
      >
        <Button
          variant="transparent"
          size="sm"
          style={{ color: "#5CA9E9", padding: "0" }}
        >
          {cardButtonLabel}
        </Button>
      </Card.Section>
    </Card>
  );
}
