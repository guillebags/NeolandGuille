import {
  Text,
  Container,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import useWidth from "../../hooks/useWidth";
const Welcome = () => {
  const { width } = useWidth();
  return (
    <Container
      centerContent
      maxW="38rem"
      fontFamily="Crimson Pro, serif"
      textAlign="center"
    >
      <Text as="h1" mb={4} fontSize="4xl" fontWeight="600">
        Compra y vende cosas de segunda mano
      </Text>
      <Text fontSize="4xl">casi, casi, sin moverte del sofá</Text>
      <InputGroup mt="10">
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input
          h="10"
          type="text"
          placeholder="Buscar en Todas las categorías"
          pl="10"
          rounded="40"
          borderColor={"#90a4ae"}
          fontSize="15"
          fontFamily="sans-serif"
          letterSpacing="2px"
          fontWeight={"100"}
          _hover={{ border: "solid 1px black", color: "white" }}
        />

        {width > 1000 ? (
          <Button
            fontWeight="800"
            h="10"
            ml="5"
            pl="7"
            pr="7"
            backgroundColor="#13c1ac"
            borderRadius="3xl"
            variant="solid"
            color="white"
            _hover={{ bg: "#0f9989ff" }}
          >
            Buscar
          </Button>
        ) : null}
      </InputGroup>
    </Container>
  );
};

export default Welcome;
