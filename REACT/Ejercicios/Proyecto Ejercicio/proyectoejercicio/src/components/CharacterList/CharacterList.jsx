import { useEffect, useState } from "react";
import { getByHouse } from "../../services/characters.service";

const CharacterList = async () => {
  const [filter, setFilter] = useState("");
  const [characterCollection, setCharacterCollection] = useState([]);

  useEffect(() => {
    getByHouse(filter).then((character) => setCharacterCollection([character]));
  }, [filter]);

  return (
    <>
      <button value="gryffindor">Gryffindor</button>
      <button value="ravenclaw">Ravenclaw</button>
      <button value="slytherin">Slytherin</button>
      <button value="hufflepuff">Hufflepuff</button>
      <ul>
        {characterCollection.map((character) => (
          <li key={character.id}>uu</li>
        ))}
      </ul>
    </>
  );
};

export default CharacterList;
