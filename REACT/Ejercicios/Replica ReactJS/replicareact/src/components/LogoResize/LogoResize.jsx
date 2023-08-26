import { Image } from "@chakra-ui/react";
import useLogo from "../../hooks/useLogo";

export const LogoResize = () => {
  const logoSrc = useLogo();
  return <Image src={logoSrc} />;
};
