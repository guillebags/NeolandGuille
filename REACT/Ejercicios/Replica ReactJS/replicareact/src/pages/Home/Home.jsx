import { Carousel } from "../../components/Carousel/CustomCarousel";
import Gallery from "../../components/Gallery/Gallery";
import "./Home.css";
import Welcome from "./Welcome";

export const Home = () => {
  return (
    <>
      <Welcome />
      <Carousel />
      <Gallery />
    </>
  );
};
