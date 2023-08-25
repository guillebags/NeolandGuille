import "./Header.css";
import { Image, Divider } from "@chakra-ui/react";

export const Header = () => {
  return (
    <>
      <header>
        <Image src="https://es.wallapop.com/next-assets/images/mobile-logo-wallapop-home-v2.svg" />
        <Divider />
      </header>
    </>
  );
};
