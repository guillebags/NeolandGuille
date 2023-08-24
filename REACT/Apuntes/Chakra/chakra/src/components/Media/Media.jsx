import { Image } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";

const Media = () => {
  return (
    <>
      <Center>
        <Heading as="h1" size="4xl" mt={10}>
          Soy un Heading, insertamos elementos multimedia
        </Heading>
      </Center>
      <Center p={5} mx={"30%"}>
        <Image
          src="https://res.cloudinary.com/dluwybogp/image/upload/v1691998612/proyectoNodeNeoland/userStorage/roudy9pm2qfr2dmarjzy.jpg"
          alt="me in pink"
          objectFit="cover"
        />
      </Center>
    </>
  );
};

export default Media;
