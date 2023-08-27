import { Heading } from "@chakra-ui/react";
import { ProductCarousel } from "../ProductCarousel/ProductCarousel";

const Gallery = () => {
  return (
    <section>
      <Heading as="h2" fontSize="2xl" fontWeight="500">
        Lo mejor, al mejor precio
      </Heading>
      <ProductCarousel />
    </section>
  );
};

export default Gallery;
