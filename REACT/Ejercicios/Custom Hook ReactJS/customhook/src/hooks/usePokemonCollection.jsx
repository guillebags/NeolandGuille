import { useState } from "react";

export const usePokemonCollection = () => {
  const [filter, setFilter] = useState("ditto");

  const [pokemonCollection, setPokemonCollection] = useState([]);

  const loadPokemon = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${filter}`)
      .then((response) => response.json())
      .then((json) => setPokemonCollection([json]));
  };

  return { filter, setFilter, pokemonCollection, loadPokemon };
};
