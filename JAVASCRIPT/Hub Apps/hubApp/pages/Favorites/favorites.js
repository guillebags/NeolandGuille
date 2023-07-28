import { dataPokemon, filterPokemon } from "../../utils";
import { cardsPokemons, PrintButton } from "../../components";
import { PrintSpinner } from "../../components";
import { arrayFavIds } from "../Pokemon/Pokemon";
import "./favorites.css";
//! template
const template = () => `
  <div id="favoritesPage">
    <div id="spinner"></div>
    <div id="galleryPokemon"></div>
  </div>
`;

//?Hacer una función similar a dataService pero haciendo un .filter de pokemonData para que coja SOLO los pokemon cuyos ID se INCLUYAN en el array guardado en el localStorage
//?En el evento click de la estrella de favoritos pintada en las cartas, parsearlo, hacer push, y meterlo en el localStorage haciendo stringify

const dataFavorite = async () => {
  const getDataForFav = await dataPokemon();

  const { pokemonData, type } = getDataForFav;

  let pokemonFavorites = pokemonData.filter((pokemon) => {
    if (arrayFavIds.includes(pokemon.id)) {
      arrayFavIds.push(pokemon);
    }
  });

  cardsPokemons(pokemonFavorites);
  //     document.getElementById("spinner").innerHTML = "";
  PrintButton(type);
};

//? le añado el evento click y lo meto al local storage

export const PrintFavoritesPage = () => {
  document.querySelector("main").innerHTML = template();
  PrintSpinner();
  dataFavorite();
};
