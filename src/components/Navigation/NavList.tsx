import { Link, Stack } from "@mui/material";
import { PageLinks } from "@/components/Navigation/NavData";

export default function NavList({ ...props }) {
  return (
    <Stack
      overflow="auto"
      direction={{ xs: "column", sm: "row" }}
      gap={3}
      width={{ xs: "100%", sm: "initial" }}
      textAlign={{ xs: "center", sm: "initial" }}
      fontSize={{ xs: "22px", sm: "initial" }}
      {...props}
    >
      {PageLinks.map((page) => (
        <Link key={page.id}>{page.name}</Link>
      ))}
    </Stack>
  );
}
