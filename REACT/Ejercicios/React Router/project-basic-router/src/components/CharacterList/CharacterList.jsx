import React from "react";
import ItemList from "../ItemList/ItemList";

const CharacterList = () => {
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
    <ul>
      {characterList.map((character) => (
        <ItemList key={JSON.stringify(character)} data={character} />
      ))}
    </ul>
  );
};

export default CharacterList;
