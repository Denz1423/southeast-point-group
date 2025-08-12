import useIsMobile from "@/hooks/useIsMobile";
import { Anchor, Card, Grid, Image, Title } from "@mantine/core";
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
    <Card p={0} shadow="xl" bg="#1A1A1A">
      <Grid>
        <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
          <Image
            src={cardImage}
            alt={cardImage}
            style={{
              objectPosition: isMobile ? "center 10%" : "",
              height: isMobile ? "auto" : "100%",
            }}
          />
        </Grid.Col>

        <Grid.Col
          span={{ base: 12, md: 6, lg: 6 }}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: isMobile ? "center" : "auto",
          }}
          p="2rem"
        >
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
            <WhatsappIcon color="#D4AF37" />
          </Anchor>
        </Grid.Col>
      </Grid>
    </Card>
  );
}
