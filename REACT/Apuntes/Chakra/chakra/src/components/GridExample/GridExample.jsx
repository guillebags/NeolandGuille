import { Center, Grid, GridItem, Heading } from "@chakra-ui/react";

const GridExample = () => {
  return (
    <>
      <Center>
        <Heading size="md" p={3}>
          Esto es un grid!!
        </Heading>
      </Center>
      <Grid
        h="200px"
        templateRows="repeat(3, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={2} colSpan={1} bg="tomato" />
        <GridItem rowSpan={1} colSpan={2} bg="yellowgreen" />
        <GridItem colSpan={4} bg="papayawhip" />
      </Grid>
    </>
  );
};

export default GridExample;
