import {
  Text,
  Container,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
const Welcome = () => {
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
      </InputGroup>
    </Container>
  );
};

export default Welcome;
