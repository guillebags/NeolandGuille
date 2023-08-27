/* import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CarouselItem } from "./CarouselItem";
import CustomRightArrow from "./CustomRightArrow";

const CustomCarousel = () => {
  const items = [
    {
      description: "Todas las categorías",
      icon: "https://res.cloudinary.com/dluwybogp/image/upload/v1693163247/all_gwzfbt.svg",
    },
    {
      description: "Coches",
      icon: "https://res.cloudinary.com/dluwybogp/image/upload/v1693163247/category_Cars_kj1pwq.svg",
    },
    {
      description: "Motos",
      icon: "https://res.cloudinary.com/dluwybogp/image/upload/v1693163247/category_Motorbike_dagykq.svg",
    },
    {
      description: "Motor y Accesorios",
      icon: "https://res.cloudinary.com/dluwybogp/image/upload/v1693163247/category_Motorbike_dagykq.svg",
    },
    {
      description: "Moda y Accesorios",
      icon: "https://res.cloudinary.com/dluwybogp/image/upload/v1693163247/category_FashionAccessories_swvmm7.svg",
    },
    {
      description: "Inmobiliaria",
      icon: "https://res.cloudinary.com/dluwybogp/image/upload/v1693163248/category_RealEstate_j1hy8m.svg",
    },
    {
      description: "TV, Audio y Foto",
      icon: "https://res.cloudinary.com/dluwybogp/image/upload/v1693163248/category_TVAudioCameras_ljtjvg.svg",
    },
    {
      description: "Móviles y Telefonía",
      icon: "https://res.cloudinary.com/dluwybogp/image/upload/v1693163247/category_CellPhonesAccessories_kjfcc4.svg",
    },
  ];
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel responsive={responsive} customRightArrow={<CustomRightArrow />}>
      {items.map((item) => {
        return <CarouselItem item={item} key={JSON.stringify(item)} />;
      })}
    </Carousel>
  );
};

export default CustomCarousel;
 */
import { useState } from "react";
import { CarouselItem } from "./CarouselItem";
import "./Carousel.css";
import { Button } from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

export const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      description: "Todas las categorías",
      icon: "https://res.cloudinary.com/dluwybogp/image/upload/v1693163247/all_gwzfbt.svg",
    },
    {
      description: "Coches",
      icon: "https://res.cloudinary.com/dluwybogp/image/upload/v1693163247/category_Cars_kj1pwq.svg",
    },
    {
      description: "Motos",
      icon: "https://res.cloudinary.com/dluwybogp/image/upload/v1693163247/category_Motorbike_dagykq.svg",
    },
    {
      description: "Motor y Accesorios",
      icon: "https://res.cloudinary.com/dluwybogp/image/upload/v1693163247/category_Motorbike_dagykq.svg",
    },
    {
      description: "Moda y Accesorios",
      icon: "https://res.cloudinary.com/dluwybogp/image/upload/v1693163247/category_FashionAccessories_swvmm7.svg",
    },
    {
      description: "Inmobiliaria",
      icon: "https://res.cloudinary.com/dluwybogp/image/upload/v1693163248/category_RealEstate_j1hy8m.svg",
    },
    {
      description: "TV, Audio y Foto",
      icon: "https://res.cloudinary.com/dluwybogp/image/upload/v1693163248/category_TVAudioCameras_ljtjvg.svg",
    },
    {
      description: "Móviles y Telefonía",
      icon: "https://res.cloudinary.com/dluwybogp/image/upload/v1693163247/category_CellPhonesAccessories_kjfcc4.svg",
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
          return <CarouselItem item={item} key={JSON.stringify(item)} />;
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
