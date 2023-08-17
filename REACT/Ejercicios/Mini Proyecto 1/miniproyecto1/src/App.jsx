import React from "react";
import "./App.css";

const App = () => {
  const [characterList, setCharacterList] = React.useState([]);
  React.useEffect(() => {
    (async () => {
      let data = await fetch("https://rickandmortyapi.com/api/character/").then(
        (res) => res.json()
      );

      setCharacterList(data.results);
    })();
  }, []);

  return (
    <>
      {characterList.map(
        (character) =>
          character.status == "Alive" && (
            <div key={character.id}>
              <h2>name: {character.name}</h2>
              <img src={character.image} alt={character.name} />
              <p>
                {character.name} is {character.status} || Origin:{" "}
                {character.origin.name}
              </p>
            </div>
          )
      )}
    </>
  );
};

export default App;
