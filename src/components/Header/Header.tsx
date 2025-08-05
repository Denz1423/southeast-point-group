import SEPG from "/SEPG.svg";
import operaHouse from "@/assets/opera-house.avif";
import "@/components/Header/Header.css";
import Nav from "@/components/Navigation/Nav";
import {
  AppShell,
  BackgroundImage,
  Box,
  Container,
  Group,
} from "@mantine/core";

export default function Header() {
  return (
    <Container fluid p={0} h="100%" className="headerContainer">
      <BackgroundImage src={operaHouse} h="inherit">
        <AppShell>
          <Group justify="space-around" w="100%">
            <Box
              w={200}
              h={120}
              style={{
                backgroundImage: `url(${SEPG})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            ></Box>

            <Nav />
          </Group>
        </AppShell>
      </BackgroundImage>
    </Container>
  );
}
