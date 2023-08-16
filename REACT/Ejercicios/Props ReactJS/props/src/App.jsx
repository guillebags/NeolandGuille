import { useState } from "react";
import "./App.css";
import Title from "./components/Title/Title";
import Subtitle from "./components/Subtitle/Subtitle";
import Image from "./components/Image/Image";
import Paragraph from "./components/Paragraph/Paragraph";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Title text="This is my blog" />
        <Subtitle text="Here is the first entry" />
        <Image
          src="https://res.cloudinary.com/dluwybogp/image/upload/v1692169484/proyectoNodeNeoland/userStorage/hzgybca12jblc5tso6sn.png"
          alt="videogame png"
          width="400"
          height="400"
        />
        <Paragraph text="I am a paragraph of a blog" />
        <Subtitle text="Here is the second entry" />
        <Image
          src="https://res.cloudinary.com/dluwybogp/image/upload/v1692169484/proyectoNodeNeoland/userStorage/hzgybca12jblc5tso6sn.png"
          alt="videogame png"
          width="200"
          height="200"
        />
        <Paragraph text="I am another paragraph of a blog" />
      </div>
    </>
  );
}

export default App;
