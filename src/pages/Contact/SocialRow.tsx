import type { JSX } from "react";
import useIsMobile from "@/hooks/useIsMobile";
import EmailIcon from "@/icons/EmailIcon";
import FacebookIcon from "@/icons/FacebookIcon";
import InstagramIcon from "@/icons/InstagramIcon";
import { Link, Typography } from "@mui/material";

interface SocialRowProps {
  iconName: string;
  label: string;
  link: string;
}

const iconMap: Record<string, JSX.Element> = {
  email: <EmailIcon fontSize="large" color="#D4AF37" />,
  facebook: <FacebookIcon fontSize="large" color="#D4AF37" />,
  instagram: <InstagramIcon fontSize="large" color="#D4AF37" />,
};

export default function SocialRow({ iconName, label, link }: SocialRowProps) {
  const isMobile = useIsMobile();
  const IconComponent = iconMap[iconName];

  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener"
      underline="hover"
      display="flex"
      alignItems="center"
      padding={isMobile ? "0.5rem" : "0.5rem 1rem"}
    >
      {IconComponent ?? null}
      <Typography
        variant="body1"
        fontSize={isMobile ? "1rem" : "20px"}
        padding={isMobile ? "0.5rem" : "0 1rem"}
        color="#D4AF37"
      >
        {label}
      </Typography>
    </Link>
  );
}
