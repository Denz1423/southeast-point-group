import { Link, Typography } from "@mui/material";
import type { JSX } from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import useIsMobile from "@/hooks/useIsMobile";

interface SocialRowProps {
  iconName: string;
  label: string;
  link: string;
}

const iconMap: Record<string, JSX.Element> = {
  email: <EmailOutlinedIcon fontSize="large" sx={{ color: "#5CA9E9" }} />,
  facebook: <FacebookOutlinedIcon fontSize="large" sx={{ color: "#5CA9E9" }} />,
  instagram: <InstagramIcon fontSize="large" sx={{ color: "#5CA9E9" }} />,
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
      sx={{
        display: "flex",
        alignItems: "center",
        padding: isMobile ? "0.5rem" : "0.5rem 1rem",
        "&:hover": {
          textDecorationColor: "#5CA9E9",
        },
      }}
    >
      {IconComponent ?? null}
      <Typography
        variant="body1"
        sx={{
          fontSize: isMobile ? "1rem" : "20px",
          padding: isMobile ? "0.5rem" : "0 1rem",
          color: "#5CA9E9",
        }}
      >
        {label}
      </Typography>
    </Link>
  );
}
