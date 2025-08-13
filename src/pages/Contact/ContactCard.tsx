import useIsMobile from "@/hooks/useIsMobile";
import WhatsappIcon from "@/icons/WhatsappIcon";
import { Card, Link, Stack, Typography } from "@mui/material";

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
  const contactCardDirection = isMobile ? "column" : "row";

  return (
    <Card
      sx={{ backgroundColor: "#1A1A1A", width: isMobile ? "300px" : "400px" }}
    >
      <Stack direction={contactCardDirection}>
        <img
          src={cardImage}
          alt={cardImage}
          style={{
            objectPosition: isMobile ? "center 10%" : "",
          }}
        />
        <Stack
          flex={1}
          justifyContent="center"
          alignItems="center"
          padding="0.5em"
        >
          <Typography
            variant="h4"
            style={{
              fontSize: isMobile ? "1.5rem" : "auto",
              paddingBottom: "0.5em",
            }}
          >
            {cardHeading}
          </Typography>
          <Typography variant="h6">{cardSubHeading}</Typography>
          <Link
            variant="body1"
            href={`tel:${cardPhoneNum}`}
            target="_blank"
            rel="noopener"
            style={{
              paddingBottom: "0.5em",
            }}
          >
            {cardPhoneNum}
          </Link>
          <Link
            variant="body1"
            // href={`https://wa.me/${cardPhoneNum}`}
            target="_blank"
            rel="noopener"
            style={{
              paddingLeft: "1em",
            }}
          >
            <WhatsappIcon color="#D4AF37" />
          </Link>
        </Stack>
      </Stack>
    </Card>
  );
}
