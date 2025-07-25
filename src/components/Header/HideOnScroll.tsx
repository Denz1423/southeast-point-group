import { useScrollTrigger, Slide } from "@mui/material";
import type { ReactElement } from "react";

interface HideOnScrollProps {
  children: ReactElement;
}

export default function HideOnScroll({ children }: HideOnScrollProps) {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}
