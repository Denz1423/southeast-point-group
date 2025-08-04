import NavList from "@/components/Navigation/NavList";
import useIsMobile from "@/hooks/useIsMobile";
import { Box, Button, CloseIcon, Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export default function Nav() {
  const [opened, { open, close }] = useDisclosure(false);
  const isMobile = useIsMobile();

  return (
    <>
      <Button
        variant="transparent"
        onClick={open}
        display={{ xs: "flex", sm: "none" }}
        color="#1D3557"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 6l16 0" />
          <path d="M4 12l16 0" />
          <path d="M4 18l16 0" />
        </svg>
      </Button>
      <Drawer
        opened={opened}
        onClose={close}
        withCloseButton={false}
        position="right"
        display={{ xs: "inherit", sm: "none" }}
        styles={{
          content: {
            backgroundColor: "#F1FAEE",
            padding: "1rem",
          },
        }}
      >
        <Box
          display="flex"
          p={2}
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button variant="transparent" onClick={close} size="md">
            <CloseIcon style={{ color: "#1D3557" }} />
          </Button>
        </Box>
        <NavList />
      </Drawer>
      {!isMobile && <NavList />}
    </>
  );
}
