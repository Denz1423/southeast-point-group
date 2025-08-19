import useIsMobile from "@/hooks/useIsMobile";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

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
      sx={{
        transition: "transform 0.3s ease-in-out",
        border: "2px solid",
        borderColor: "#D4AF37",
        backgroundColor: "#1A1A1A",
        "&:hover": {
          transform: "scale(1.02)",
        },
      }}
    >
      <CardMedia
        image={cardImage}
        title={cardHeading}
        sx={{
          height: isMobile ? "400px" : "500px",
        }}
      />

      <CardContent>
        <Typography order={3} padding="1rem 0">
          {cardHeading}
        </Typography>
        <Typography variant="body1">{cardBody}</Typography>
      </CardContent>
      <CardContent>
        <Button sx={{ color: "#D4AF37" }}>{cardButtonLabel}</Button>
      </CardContent>
    </Card>
  );
}
