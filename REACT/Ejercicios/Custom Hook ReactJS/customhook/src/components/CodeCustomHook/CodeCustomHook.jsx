import { usePokemonCollection } from "../../hooks/UsePokemonCollection";
import React from "react";
import { useDebounce } from "use-debounce";

export const CodeCustomHook = () => {
  const { filter, setFilter, pokemonCollection, loadPokemon } =
    usePokemonCollection();
  const [debounceFilter] = useDebounce(filter, 500);

  React.useEffect(() => {
    loadPokemon();
  }, [debounceFilter]);

  return (
    <div>
      <input value={filter} onChange={(e) => setFilter(e.target.value)} />
      <ul>
        {pokemonCollection.map((pokemon, index) => (
          <li key={index}>
            <h1>{pokemon.name}</h1>
          </li>
        ))}
      </ul>
    </div>
  );
};
