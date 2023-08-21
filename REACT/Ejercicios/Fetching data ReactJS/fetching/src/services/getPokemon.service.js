export const getPokemonFiltered = async (filter) => {
  const pokemonList = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${filter}`
  );

  const pokemonListToJson = await pokemonList.json();

  return {
    ...pokemonListToJson,
    name: pokemonListToJson.name,
    image: pokemonListToJson.sprites.front_shiny,
  };
};
