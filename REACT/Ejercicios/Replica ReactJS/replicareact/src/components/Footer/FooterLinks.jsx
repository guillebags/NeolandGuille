import { Image, Stack, Text } from "@chakra-ui/react";

import FooterSection from "./FooterSection";

const FooterLinks = () => {
  return (
    <Stack direction={["column", "column", "row"]}>
      <section>
        <Image src="https://res.cloudinary.com/dluwybogp/image/upload/v1693052609/Wallapop/wallapop-logo.2ce360c9_qspiut.svg" />
        <Text fontSize="sm" fontWeight={300}>
          Copyright © 2023 Wallapop © de sus respectivos propietarios
        </Text>
      </section>
      <FooterSection
        title="Wallapop"
        links={[
          "Quiénes somos",
          "Cómo funciona",
          "Brand Book",
          "Prensa",
          "Empleo",
          "10º aniversario de Wallapop",
        ]}
      />
      {/* TO DO: meter links */}
      <FooterSection title="Soporte" />
      <FooterSection title="Legal" />
      <FooterSection title="Motor" />
      <FooterSection title="Wallapop PRO" />
    </Stack>
  );
};

export default FooterLinks;
