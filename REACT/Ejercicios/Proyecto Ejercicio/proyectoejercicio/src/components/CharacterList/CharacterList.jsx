import axios, { Axios } from "axios";
import { useEffect, useState } from "react";
import "./CharacterList.css";
import FilterDiv from "../FilterDiv/FilterDiv";
import { Link, NavLink } from "react-router-dom";
import Detail from "../Detail/Detail";

const CharacterList = () => {
  const [characterCollection, setCharacterCollection] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios
      .get(`https://hp-api.onrender.com/api/characters${filter}`)
      .then(({ data }) => setCharacterCollection(data))
      .catch((err) => console.log(err));
  }, [filter]);

  const handleFilter = (e) => {
    setFilter(`/house/${e.target.value}`);
  };

  return (
    <>
      <FilterDiv onClick={handleFilter} />
      <ul className="characterList">
        {characterCollection.map((character) => (
          <li key={character.id} className={character.house}>
            <img
              src={
                character.image
                  ? character.image
                  : "https://i.pinimg.com/736x/0d/05/ec/0d05ecd57fb6909002a47dcc8ef32fe8.jpg"
              }
              alt={character.name}
            />
            <p>
              <Link to={`/characters/detail/${character.id}`}>
                {character.name}
              </Link>
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CharacterList;
