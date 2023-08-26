import "./Header.css";
import { Button, Stack, Flex } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { LogoResize } from "../../components";

export const Header = () => {
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
          <LogoResize />

          <Stack direction="row" mr="4">
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
