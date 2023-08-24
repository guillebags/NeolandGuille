import { Highlight } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Heading align="center" mt="10" px="10">
      <Highlight
        query={["highlighted", "highlight"]}
        styles={{ px: "2", py: "0.3", rounded: "full", bg: "pink.200" }}
      >
        Render the main string as children of the Highlight component, then pass
        the word(s) you want to highlight to the query prop. Use the style prop
        to define the styles for the highlighted parts.
      </Highlight>
    </Heading>
  );
};

export default Hero;
