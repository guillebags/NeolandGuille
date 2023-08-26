import useWidth from "../../hooks/useWidth";
import "./Footer.css";
import FooterIcons from "./FooterIcons";
import FooterLinks from "./FooterLinks";
import FooterNavMobile from "./FooterNavMobile";

export const Footer = () => {
  const { width } = useWidth();
  return (
    <footer>
      <FooterLinks />
      <FooterIcons />
      {width < 1000 ? <FooterNavMobile /> : null}
    </footer>
  );
};
