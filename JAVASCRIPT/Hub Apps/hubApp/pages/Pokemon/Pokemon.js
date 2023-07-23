import { cardsPokemons } from "../../components";
import { dataPokemon } from "../../utils";

const template = () => `
  <div id="pokemon">
    <div id="containerFilter">
      <div id="spinnerButtonFilter"></div>
      <div id="filterButton"></div>
      <input
        type="text"
        id="inputPokemon"
        placeholder="Busca tu pokemon favorito"
      />
    </div>
    <div id="paginacion"></div>
    <div id="spinner"></div>
    <div id="galleryPokemon"></div>
  </div>
`;

const dataService = async () => {
  const getData = await dataPokemon();
  const { pokemonData, type } = getData;
  cardsPokemons(pokemonData);
};

const addListeners = () => {};

export const PrintPokemonPage = () => {
  document.querySelector("main").innerHTML = template();
  dataService();
};
