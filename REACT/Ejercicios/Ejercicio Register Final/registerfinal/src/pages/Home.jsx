import { useAuth } from "../context/authContext";
import "./Home.css";
import { Heading } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

export const Home = () => {
  const { user } = useAuth();
  return (
    <>
      <Center>
        <Heading>Welcome to my page!! 🪄🪄</Heading>
      </Center>
      <Center>
        <Text fontSize="6xl">
          Let's go to
          <Link color="pink.500" href="/register">
            REGISTER
          </Link>
        </Text>
      </Center>
    </>
  );
};
