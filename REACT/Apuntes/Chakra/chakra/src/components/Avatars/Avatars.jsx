import { Avatar, Center, Heading } from "@chakra-ui/react";
const Avatars = () => {
  return (
    <Center mt={10}>
      <Heading size="md" mb={4} pt={3}>
        Esto es un avatar
        <Avatar
          name="Pink Panther"
          src="https://res.cloudinary.com/dluwybogp/image/upload/v1691998612/proyectoNodeNeoland/userStorage/roudy9pm2qfr2dmarjzy.jpg"
        />
      </Heading>
    </Center>
  );
};

export default Avatars;
