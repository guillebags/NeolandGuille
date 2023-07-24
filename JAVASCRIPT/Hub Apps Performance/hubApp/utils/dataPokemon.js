import { getByIdPokemon } from "../services/pokemon.service";
import { typePokemon } from "./typePokemon";
let dataGlobal;
export const dataPokemon = async () => {
  const data = [];

  for (let i = 1; i < 151; i++) {
    data.push(await getByIdPokemon(i));
  }
  console.log(data);
  return dataMap(data);
};

const dataMap = (data) => {
  const filterData = data.map((pokemon) => ({
    name: pokemon.name,
    image: pokemon.sprites.other.home.front_default,
    type: pokemon.types,
  }));
  const types = typePokemon(filterData);
  dataGlobal = {
    pokemonData: filterData,
    type: types,
  };
  return dataGlobal;
};
