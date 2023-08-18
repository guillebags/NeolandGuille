import React from "react";
import "./Main.css";
import Subtitle from "../Subtitle/Subtitle";
import CharacterList from "../CharacterList/CharacterList";

const Main = () => {
  return (
    <main>
      <Subtitle text="Lista de personajes" />
      <CharacterList />
    </main>
  );
};

export default Main;
