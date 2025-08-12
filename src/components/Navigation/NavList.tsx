import { PageLinks } from "@/components/Navigation/NavData";
import useIsMobile from "@/hooks/useIsMobile";
import { Anchor, Group, Stack } from "@mantine/core";

export default function NavList() {
  const isMobile = useIsMobile();
  const NavLinkContainer = isMobile ? Stack : Group;

  return (
    <NavLinkContainer
      justify="center"
      align="center"
      gap={isMobile ? "lg" : "xl"}
    >
      {PageLinks.map((page) => (
        <Anchor key={page.id} c={isMobile ? "#D6D6D6" : "inherit"}>
          {page.name}
        </Anchor>
      ))}
    </NavLinkContainer>
  );
}
