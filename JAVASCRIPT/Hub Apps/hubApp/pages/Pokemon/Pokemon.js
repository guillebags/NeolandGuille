import { cardsPokemons, PrintButton } from "../../components";
import { PrintSpinner } from "../../components/Spinner/Spinner";
import { favoriteService } from "../../services/favorite.service";
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
  //to do favorite(crear un array de IDs), pokemondata lo filtro por esos ID
  document.getElementById("spinner").innerHTML = "";
  PrintButton(type);

  Paginacion(pokemonData, 9);
  addListeners(type);
};

const addListeners = (type) => {
  const inputPokemon = document.getElementById("inputPokemon");
  inputPokemon.addEventListener("input", (e) => {
    filterPokemon(e.target.value, "name");
  });
  window.addEventListener("resize", () => {
    PrintButton(type);
  });
  const favIcons = document.getElementsByClassName("addFavIcon");
  debugger;
  for (const element of favIcons) {
    element.addEventListener("click", (e) => {
      favoriteService.addFavorite(e.target.attributes["pokemon-id"].value);
    });
  }
};

export const PrintPokemonPage = () => {
  document.querySelector("main").innerHTML = template();
  PrintSpinner();
  dataService();
};
