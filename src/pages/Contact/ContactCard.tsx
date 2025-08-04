import useIsMobile from "@/hooks/useIsMobile";
import { Anchor, Card, Image, SimpleGrid, Title } from "@mantine/core";
import WhatsappIcon from "@/icons/WhatsappIcon";

interface ContactCardProps {
  cardImage: string;
  cardHeading: string;
  cardSubHeading: string;
  cardPhoneNum: string;
}

export default function ContactCard({
  cardImage,
  cardHeading,
  cardSubHeading,
  cardPhoneNum,
}: ContactCardProps) {
  const isMobile = useIsMobile();

  return (
    <Card>
      <SimpleGrid cols={{ base: 1, sm: 2 }}>
        <Card.Section withBorder inheritPadding>
          <Image
            src={cardImage}
            alt={cardImage}
            style={{
              objectFit: "cover",
              objectPosition: isMobile ? "center 10%" : "",
              width: isMobile ? "100%" : "auto",
              height: isMobile ? "256px" : "100%",
            }}
          />
        </Card.Section>

        <Card.Section withBorder inheritPadding>
          <Title
            order={4}
            style={{
              fontSize: isMobile ? "1.5rem" : "auto",
              paddingBottom: "0.5em",
            }}
          >
            {cardHeading}
          </Title>
          <Title order={6}>{cardSubHeading}</Title>
          <Anchor
            variant="body1"
            href={`tel:${cardPhoneNum}`}
            target="_blank"
            rel="noopener"
            style={{
              paddingBottom: "0.5em",
            }}
          >
            {cardPhoneNum}
          </Anchor>
          <Anchor
            variant="body1"
            // href={`https://wa.me/${cardPhoneNum}`}
            target="_blank"
            rel="noopener"
            style={{
              paddingLeft: "1em",
            }}
          >
            <WhatsappIcon />
          </Anchor>
        </Card.Section>
      </SimpleGrid>
    </Card>
  );
}
