import { Box, Container, Divider, Typography } from "@mantine/core";

export default function Footer() {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <Container fluid style={{ backgroundColor: "#F1FAEE", padding: "0" }}>
      <Divider />
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1rem 0",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-copyright"
          style={{ color: "#2F6B3A" }}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
          <path d="M14 9.75a3.016 3.016 0 0 0 -4.163 .173a2.993 2.993 0 0 0 0 4.154a3.016 3.016 0 0 0 4.163 .173" />
        </svg>
        <Typography
          style={{ fontSize: "16px", padding: "0 0.5rem", color: "#2F6B3A" }}
        >
          {currentYear} SouthEast Point Group
        </Typography>
      </Box>
    </Container>
  );
}
