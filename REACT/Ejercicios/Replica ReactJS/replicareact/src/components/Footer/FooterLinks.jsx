import { Image, Stack, Text } from "@chakra-ui/react";

import FooterSection from "./FooterSection";

const FooterLinks = () => {
  return (
    <Stack direction={["column", "column", "row"]} p="3" gap="10">
      <section id="logoFooter">
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

      <FooterSection
        title="Soporte"
        links={[
          "Centro de ayuda",
          "Reglas de publicación",
          "Consejos de seguridad",
        ]}
      />
      <FooterSection
        title="Legal"
        links={[
          "Aviso legal",
          "Condiciones de uso",
          "Política de privacidad",
          "Cookies",
        ]}
      />
      <FooterSection title="Motor" links={["Particular", "Profesional"]} />
      <FooterSection title="Wallapop PRO" links={["Impulsa tu negocio"]} />
    </Stack>
  );
};

export default FooterLinks;
