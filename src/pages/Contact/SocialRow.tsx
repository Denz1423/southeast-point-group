import type { JSX } from "react";
import { Anchor, Typography } from "@mantine/core";
import useIsMobile from "@/hooks/useIsMobile";
import EmailIcon from "@/icons/EmailIcon";
import FacebookIcon from "@/icons/FacebookIcon";
import InstagramIcon from "@/icons/InstagramIcon";

interface SocialRowProps {
  iconName: string;
  label: string;
  link: string;
}

const iconMap: Record<string, JSX.Element> = {
  email: <EmailIcon fontSize="large" sx={{ color: "#5CA9E9" }} />,
  facebook: <FacebookIcon fontSize="large" sx={{ color: "#5CA9E9" }} />,
  instagram: <InstagramIcon fontSize="large" sx={{ color: "#5CA9E9" }} />,
};

export default function SocialRow({ iconName, label, link }: SocialRowProps) {
  const isMobile = useIsMobile();
  const IconComponent = iconMap[iconName];

  return (
    <Anchor
      href={link}
      target="_blank"
      rel="noopener"
      underline="hover"
      style={{
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
        style={{
          fontSize: isMobile ? "1rem" : "20px",
          padding: isMobile ? "0.5rem" : "0 1rem",
          color: "#5CA9E9",
        }}
      >
        {label}
      </Typography>
    </Anchor>
  );
}
