import { getByIdPokemon } from "../services/pokemon.service";
import { Paginacion } from "./paginacion";
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

export const filterPokemon = (filter, element) => {
  switch (element) {
    case "type":
      const filterData = dataGlobal.pokemonData.filter((pokemon) =>
        pokemon.type[0].type.name.toLowerCase().includes(filter.toLowerCase())
      );
      if (filterData.length === 0) {
        const filterData = dataGlobal.pokemonData.filter((pokemon) =>
          pokemon.type[1]?.type.name
            .toLowerCase()
            .includes(filter.toLowerCase())
        );
        Paginacion(filterData, 9);
      } else {
        Paginacion(filterData, 9);
      }

      break;

    case "name":
      {
        const filterData = dataGlobal.pokemonData.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(filter.toLowerCase())
        );
        if (filter == "") {
          Paginacion(filterData, 12);
        } else {
          Paginacion(filterData, 12);
        }
      }

      break;
  }
};
