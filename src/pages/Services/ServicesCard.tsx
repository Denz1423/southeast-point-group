import useIsMobile from "@/hooks/useIsMobile";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  type CardProps,
} from "@mui/material";

interface ServiceCardProps extends CardProps {
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
      elevation={0}
      sx={{
        maxWidth: "100%",
        backgroundColor: "transparent",
        transition: "transform 0.3s ease-in-out",
        ":hover": {
          transform: "scale(1.02)",
          boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
        },
      }}
    >
      <CardMedia
        component="img"
        image={cardImage}
        alt={cardHeading}
        sx={{ height: isMobile ? "300px" : "500px" }}
      />
      <CardContent>
        <Typography
          variant="h4"
          sx={{
            paddingBottom: "0.5em",
          }}
        >
          {cardHeading}
        </Typography>
        <Typography variant="body1" sx={{ color: "#2F6B3A" }}>
          {cardBody}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{ color: "#5CA9E9" }}>
          {cardButtonLabel}
        </Button>
      </CardActions>
    </Card>
  );
}
