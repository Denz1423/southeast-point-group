import useIsMobile from "@/hooks/useIsMobile";
import { Button, Card, Image, Title, Typography } from "@mantine/core";
import { useHover } from "@mantine/hooks";

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
  const { hovered, ref } = useHover();

  return (
    <Card
      ref={ref}
      style={{
        maxWidth: "100%",
        // backgroundColor: "transparent",
        transition: "transform 0.3s ease-in-out",
        transform: hovered ? "scale(1.02)" : "",
        // boxShadow: hovered ? "0 8px 16px rgba(0,0,0,0.2)" : "",
        border: "2px solid",
        borderColor: hovered ? "#CBA135" : "#D4AF37",
        backgroundColor: "#1A1A1A",
      }}
    >
      <Card.Section>
        <Image
          src={cardImage}
          alt={cardHeading}
          style={{
            height: isMobile ? "400px" : "600px",
          }}
        />
      </Card.Section>
      <Card.Section p={16}>
        <Title
          order={3}
          style={{
            padding: "1rem 0",
          }}
        >
          {cardHeading}
        </Title>
        <Typography variant="body1">
          {cardBody}
        </Typography>
      </Card.Section>
      <Card.Section p={16}>
        <Button
          variant="transparent"
          size="sm"
          style={{ color: "#D4AF37", padding: "0" }}
        >
          {cardButtonLabel}
        </Button>
      </Card.Section>
    </Card>
  );
}
