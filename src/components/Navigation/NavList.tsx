import { Link, Stack } from "@mui/material";

const pages = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Gallery", id: "gallery" },
  { name: "Contact", id: "contact" },
];

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
      {pages.map((page) => (
        <Link
          key={page.id}
          sx={{
            color: { xs: "#1D3557", sm: "#1D3557" },
            textDecoration: "none",
          }}
        >
          {page.name}
        </Link>
      ))}
    </Stack>
  );
}
