import { getByIdPokemon } from "../services/pokemon.service";
import { typePokemon } from "./typePokemon";
let dataGlobal;
export const dataPokemon = async () => {
  const data = [];

  for (let i = 252; i < 387; i++) {
    data.push(await getByIdPokemon(i));
  }
  console.log(data);
  return dataMap(data);
};

const dataMap = (data) => {
  const filterData = data.map((pokemon) => ({
    name: pokemon.name,
    image: pokemon.sprites.other.dream_world.front_default,
    type: pokemon.types,
    id: pokemon.id,
    height: pokemon.height,
    weight: pokemon.weight,
  }));
  const types = typePokemon(filterData);
  dataGlobal = {
    pokemonData: filterData,
    type: types,
  };
  return dataGlobal;
};
