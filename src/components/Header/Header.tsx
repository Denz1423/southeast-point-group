import SEPG from "/SEPG.svg";
import Nav from "@/components/Navigation/Nav";
import { AppShell, Box, Group } from "@mantine/core";

export default function Header() {
  return (
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
  );
}
