import { cardsPokemons, PrintButton } from "../../components";
import { PrintSpinner } from "../../components/Spinner/Spinner";
import { dataPokemon } from "../../utils";
import "./Pokemon.css";

const template = () => `
  <div id="pokemon">
    <div id="containerFilter">
      <div id="filterButton"></div>

      <input type="text" id="inputPokemon" placeholder="Search..." />
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
  PrintButton(type);
};

const addListeners = () => {};

export const PrintPokemonPage = () => {
  document.querySelector("main").innerHTML = template();
  PrintSpinner();
  dataService();
};
