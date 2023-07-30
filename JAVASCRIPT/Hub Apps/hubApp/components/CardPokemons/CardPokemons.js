import { favoriteService } from "../../services/favorite.service";

import "./CardPokemons.css";

export const cardsPokemons = (data) => {
  document.getElementById("galleryPokemon").innerHTML = "";
  const createCardPokemon = (pokemon) => {
    const isFavorite = favoriteService.isFavorite(pokemon.id);
    const classCustomType = `"figurePokemon ${pokemon.type[0].type.name}"`;
    const templateFigure = `<figure
      class=${classCustomType}
      id="figurePokemon"
    >
      <div class="card-front">
        <button class="addFavIcon ${
          isFavorite ? "isFavorite" : ""
        }" pokemon-id=${pokemon.id}></button>
        <img src=${pokemon.image} alt=${pokemon.name} class="pokemonImage" />
        <section>
          <h2>${pokemon.name}</h2>
          <span>#${pokemon.id}</span>
        </section>
      </div>
      <div class="card-back">
        <div class="pokemonDescription">
          <p class="height"><span>Height</span> ${pokemon.height / 10}m</p>
          <span>|</span>
          <p class="weight"><span> Weight</span> ${pokemon.weight / 10}kg</p>
        </div>
      </div>
    </figure>`;

    document.getElementById("galleryPokemon").innerHTML += templateFigure;
    addListeners();
  };
  data.map(createCardPokemon);
};

const addListeners = () => {
  const favIcons = document.getElementsByClassName("addFavIcon");

  for (const element of favIcons) {
    element.addEventListener("click", (e) => {
      favoriteService.toggleFavorite(e.target.attributes["pokemon-id"].value);
      e.target.classList.toggle("isFavorite");
    });
  }
};
