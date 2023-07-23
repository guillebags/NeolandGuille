import { getByIdPokemon } from "../services/pokemon.service";
import { typePokemon } from "./typePokemon";
let dataGlobal;
export const dataPokemon = async () => {
  const data = [];

  for (let i = 1; i < 151; i++) {
    data.push(await getByIdPokemon(i));
  }

  return dataMap(data);
};

const dataMap = (data) => {
  const filterData = data.map((pokemon) => ({
    name: pokemon.name,
    image: pokemon.sprites.other.dream_world.front_default,
    type: pokemon.types,
  }));
  const types = typePokemon(filterData);
  dataGlobal = {
    pokemonData: filterData,
    type: types,
  };
  return filterData;
};
