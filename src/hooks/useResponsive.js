import { useMediaQuery } from "react-responsive";

export default function useResponsive() {
  const isPC = useMediaQuery({
    query: "(min-width:1200px)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width:745px) and (max-width:1119px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width:744px)",
  });

  return [isPC, isTablet, isMobile];
}
