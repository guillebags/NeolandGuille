import { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";
import { getPokemonFiltered } from "../../services/getPokemon.service";
import "./CodeFetchingInput.css";

export const CodeFetchingInput = () => {
  const [filter, setFilter] = useState("");
  const [debounceFilter] = useDebounce(filter, 500);
  const [pokemonCollection, setPokemonCollection] = useState([]);

  useEffect(() => {
    getPokemonFiltered(filter).then((pokemon) =>
      setPokemonCollection([pokemon])
    );
  }, [debounceFilter]);

  return (
    <>
      <h1>Write the name of your fav pokemon!</h1>
      <input value={filter} onChange={(e) => setFilter(e.target.value)} />

      <ul>
        {pokemonCollection.map((pokemon) => (
          <li key={pokemon.name}>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.image} alt={pokemon.name} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default CodeFetchingInput;
