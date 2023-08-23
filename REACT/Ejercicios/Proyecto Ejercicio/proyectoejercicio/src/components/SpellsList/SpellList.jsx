import axios, { Axios } from "axios";
import { useEffect, useState } from "react";
import "./SpellList.css";

const SpellList = () => {
  const [spellCollection, setSpellCollection] = useState([]);

  useEffect(() => {
    axios
      .get(`https://hp-api.onrender.com/api/spells`)
      .then(({ data }) => setSpellCollection(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <ul className="spellList">
        {spellCollection.map((spell) => (
          <li key={spell.id} className={spell.house}>
            <h2>Name: {spell.name}</h2>
            <p>{spell.description}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SpellList;
