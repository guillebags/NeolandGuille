import React from "react";
import Paragraph from "../Paragraph/Paragraph";
import Picture from "../Picture/Picture";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#ffba01" }}>
      <Paragraph text="Created by guillebags" />
      <Picture
        src="https://res.cloudinary.com/dluwybogp/image/upload/v1691588455/proyectoNodeNeoland/userStorage/vit9fopnrpgild9khc4d.png"
        alt="LOGO"
        width="100"
        height="100"
      />
      <Paragraph text="Copyright" />
    </footer>
  );
};

export default Footer;
