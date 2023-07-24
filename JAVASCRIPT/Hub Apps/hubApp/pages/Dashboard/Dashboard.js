import { initControler } from "../../utils";
import "./Dashboard.css";

const template = () => `
<div id= "dashboard">
    <ul>
    <li><figure><img src="https://res.cloudinary.com/dluwybogp/image/upload/v1690233094/fav0_trlvzj.png" alt="go to fav pokemons"><h2>Favorites</h2></figure></li>
    <li><figure id="pokedex"><img src="https://res.cloudinary.com/dluwybogp/image/upload/v1690232500/pokedex3_uvhci9.png" alt="go to pokedex" ><h2>Pokedex</h2></figure></li>
    <li><figure><img src="https://cdn-icons-png.flaticon.com/128/808/808439.png" alt="go to first game"><h2>Game 1</h2></figure></li>
    <li><figure><img src="https://cdn-icons-png.flaticon.com/128/808/808439.png" alt="go to second game"><h2>Game 2</h2></figure></li>
</div>
`;

const addListeners = () => {
  const pokedex = document.getElementById("pokedex");
  pokedex.addEventListener("click", () => {
    initControler("Pokemon");
  });
};

export const printTemplateDashboard = () => {
  document.querySelector("main").innerHTML = template();
  document.querySelector(".navHeader").style.display = "flex";
  addListeners();
};
