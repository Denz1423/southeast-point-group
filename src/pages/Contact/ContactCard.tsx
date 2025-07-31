import useIsMobile from "@/hooks/useIsMobile";
import {
  Card,
  CardContent,
  CardMedia,
  Link,
  Typography,
  type CardProps,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

interface ContactCardProps extends CardProps {
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
    <Card
      elevation={3}
      sx={{
        height: isMobile ? "400px" : "200px",
        display: "flex",
        flexDirection: isMobile ? "column" : "",
      }}
    >
      <CardMedia
        component="img"
        src={cardImage}
        alt={cardImage}
        sx={{
          objectFit: "cover",
          width: isMobile ? "100%" : "200px",
          objectPosition: isMobile ? "center 10%" : "",
          height: isMobile ? "256px" : "235px",
        }}
      />

      <CardContent>
        <Typography
          variant="h4"
          sx={{
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
          sx={{
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
          sx={{
            paddingLeft: "1em",
          }}
        >
          <WhatsAppIcon />
        </Link>
      </CardContent>
    </Card>
  );
}
