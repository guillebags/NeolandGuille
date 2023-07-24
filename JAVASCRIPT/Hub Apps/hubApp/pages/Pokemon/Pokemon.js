import { cardsPokemons } from "../../components";
import { PrintSpinner } from "../../components/Spinner/Spinner";
import { dataPokemon } from "../../utils";
import "./Pokemon.css";

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

  document.getElementById("spinner").innerHTML = "";
};

const addListeners = () => {};

export const PrintPokemonPage = () => {
  document.querySelector("main").innerHTML = template();
  PrintSpinner();
  dataService();
};
