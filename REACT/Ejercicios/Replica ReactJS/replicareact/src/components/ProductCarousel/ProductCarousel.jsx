import { useState } from "react";
import { Button } from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import ProductItem from "./ProductItem";

export const ProductCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      name: "Product",
      price: 220,
      icon: "https://res.cloudinary.com/dluwybogp/image/upload/v1693173785/descarga_qbd7ky.jpg",
    },
    {
      name: "Product",
      price: 133,
      icon: "https://res.cloudinary.com/dluwybogp/image/upload/v1693173785/descarga_qbd7ky.jpg",
    },
    {
      name: "Product",
      price: 13,
      icon: "https://res.cloudinary.com/dluwybogp/image/upload/v1693173785/descarga_qbd7ky.jpg",
    },
    {
      name: "Product",
      price: 44,
      icon: "https://res.cloudinary.com/dluwybogp/image/upload/v1693173785/descarga_qbd7ky.jpg",
    },
    {
      name: "Product",
      price: 25,
      icon: "https://res.cloudinary.com/dluwybogp/image/upload/v1693173785/descarga_qbd7ky.jpg",
    },
    {
      name: "Product",
      price: 633,
      icon: "https://res.cloudinary.com/dluwybogp/image/upload/v1693173785/descarga_qbd7ky.jpg",
    },
    {
      name: "Product",
      price: 78,
      icon: "https://res.cloudinary.com/dluwybogp/image/upload/v1693173785/descarga_qbd7ky.jpg",
    },
    {
      name: "Product",
      price: 24,
      icon: "https://res.cloudinary.com/dluwybogp/image/upload/v1693173785/descarga_qbd7ky.jpg",
    },
  ];

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= 5) {
      newIndex = 5 - 1;
    }

    setActiveIndex(newIndex);
  };

  return (
    <div className="carousel">
      <Button
        zIndex="1"
        bg="white"
        m="1"
        onClick={() => {
          updateIndex(activeIndex - 1);
        }}
      >
        <ArrowBackIcon />
      </Button>
      <div
        className="inner"
        style={{ transform: `translate(-${activeIndex * 30}%)` }}
      >
        {items.map((item) => {
          return <ProductItem item={item} key={JSON.stringify(item)} />;
        })}
      </div>

      <Button
        zIndex="1"
        bg="white"
        m="1"
        onClick={() => {
          updateIndex(activeIndex + 1);
        }}
      >
        <ArrowForwardIcon />
      </Button>
    </div>
  );
};
