import { Box, Typography } from "@mui/material";
import type { JSX } from "react";
import EmailIcon from "@mui/icons-material/Email";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import useIsMobile from "@/hooks/useIsMobile";

interface SocialRowProps {
  iconName: string;
  label: string;
}

const iconMap: Record<string, JSX.Element> = {
  email: (
    <>
      <EmailIcon fontSize="large" sx={{ color: "#5CA9E9" }} />
      <EmailOutlinedIcon fontSize="large" sx={{ color: "#5CA9E9" }} />
    </>
  ),
  facebook: (
    <>
      <FacebookIcon fontSize="large" sx={{ color: "#5CA9E9" }} />
      <FacebookOutlinedIcon fontSize="large" sx={{ color: "#5CA9E9" }} />
    </>
  ),
  instagram: <InstagramIcon fontSize="large" sx={{ color: "#5CA9E9" }} />,
};

export default function SocialRow({ iconName, label }: SocialRowProps) {
  const isMobile = useIsMobile();
  const IconComponent = iconMap[iconName];

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      {IconComponent ?? null}
      <Typography
        variant="body1"
        sx={{ fontSize: isMobile ? "1rem" : "20px", padding: "0 1rem" }}
      >
        {label}
      </Typography>
    </Box>
  );
}
