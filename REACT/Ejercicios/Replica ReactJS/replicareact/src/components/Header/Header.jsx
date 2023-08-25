import { useEffect } from "react";
import "./Header.css";
import { Image, Button, Stack, Flex } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import useWidth from "../../hooks/useWidth";

export const Header = () => {
  const { width } = useWidth();

  useEffect(() => {
    console.log(width);
  }, [width]);

  return (
    <>
      <header>
        <Flex
          direction="row"
          spacing={10}
          align="space-between"
          justify="space-between"
          gap={10}
        >
          <Image
            src={
              width < 800
                ? "https://es.wallapop.com/next-assets/images/mobile-logo-wallapop-home-v2.svg"
                : "https://es.wallapop.com/next-assets/images/logo-wallapop-home-v2.svg"
            }
          />

          <Stack direction="row">
            <Button
              className="register"
              borderRadius="3xl"
              colorScheme="teal"
              color="#13c1ac"
              variant="outline"
              fontWeight={400}
              _hover={{ bg: "#13c1ac", color: "white" }}
            >
              Regístrate o inicia sesión
            </Button>
            <Button
              leftIcon={
                <AddIcon boxSize={6} rounded={50} border="solid 1px" p="1" />
              }
              backgroundColor="#13c1ac"
              borderRadius="3xl"
              variant="solid"
              color="white"
              _hover={{ bg: "#0f9989ff" }}
            >
              Subir producto
            </Button>
          </Stack>
        </Flex>
      </header>
    </>
  );
};
