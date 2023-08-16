import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Title from "./components/Title/Title";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Paragraph from "./components/Paragraph/Paragraph";
import Subtitle from "./components/Subtitle/Subtitle";
import Image from "./components/Image/Image";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header>
        <Title text="This is the header title" />
      </Header>
      <Main>
        <Subtitle text="This is the main title" />
        <Image
          src="https://res.cloudinary.com/dluwybogp/image/upload/v1690375980/240px-Deoxys_ataque_HOME_wkgrwz.png"
          alt="deoxys"
          width="400"
          height="400"
        />
      </Main>
      <Footer>
        <Paragraph text="This is the text for the footer" />
      </Footer>
    </>
  );
}

export default App;
