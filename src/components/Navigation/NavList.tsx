import { PageLinks } from "@/components/Navigation/NavData";
import useIsMobile from "@/hooks/useIsMobile";
import { Link, Stack } from "@mui/material";

export default function NavList() {
  const isMobile = useIsMobile();
  const NavLinkDirection = isMobile ? "column" : "row";

  return (
    <Stack direction={NavLinkDirection} spacing={{ xs: 3, sm: 3, md: 5 }}>
      {PageLinks.map((page) => (
        <Link
          key={page.id}
          color={isMobile ? "#D6D6D6" : "#FFFFFF"}
          align="center"
          fontWeight={600}
          sx={{
            cursor: "pointer",
          }}
        >
          {page.name}
        </Link>
      ))}
    </Stack>
  );
}
