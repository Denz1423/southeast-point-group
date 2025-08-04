import { useMediaQuery } from "@mantine/hooks";

const useIsMobile = (): boolean => {
  return useMediaQuery("(max-width: 48em)");
};

export default useIsMobile;
