import { cardsPokemons, PrintButton } from "../../components";
import { PrintSpinner } from "../../components/Spinner/Spinner";
import { dataPokemon, filterPokemon, Paginacion } from "../../utils";
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
  addListeners();
  Paginacion(pokemonData, 9);
};

const addListeners = () => {
  const inputPokemon = document.getElementById("inputPokemon");
  inputPokemon.addEventListener("input", (e) => {
    filterPokemon(e.target.value, "name");
  });
};

export const PrintPokemonPage = () => {
  document.querySelector("main").innerHTML = template();
  PrintSpinner();
  dataService();
};
