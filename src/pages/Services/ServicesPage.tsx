import aboutPage from "@/assets/aboutPage.avif";
import { Box, Stack } from "@mui/material";

export default function ServicesPage() {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Stack direction="column">
        <Box
          width="100%"
          height={{ xs: 300, sm: 400, md: 700 }}
          sx={{
            backgroundImage: `url(${aboutPage})`,
            objectFit: "cover",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(75%)",
          }}
        />
      </Stack>
    </Box>
  );
}
