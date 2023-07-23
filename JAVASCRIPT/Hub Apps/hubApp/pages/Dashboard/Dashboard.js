import "./Dashboard.css";

const template = () => `
<div id= "dashboard">
    <ul>
    <li><figure><img src="https://cdn-icons-png.flaticon.com/128/3334/3334338.png" alt="go to fav pokemons"><h2>Favorites</h2></figure></li>
    <li><figure><img src="https://cdn-icons-png.flaticon.com/128/188/188940.png" alt="go to pokedex"><h2>Pokedex</h2></figure></li>
    <li><figure><img src="https://cdn-icons-png.flaticon.com/128/808/808439.png" alt="go to first game"><h2>Game 1</h2></figure></li>
    <li><figure><img src="https://cdn-icons-png.flaticon.com/128/808/808439.png" alt="go to second game"><h2>Game 2</h2></figure></li>
</div>
`;

export const printTemplateDashboard = () => {
  document.querySelector("main").innerHTML = template();
  document.querySelector(".navHeader").style.display = "flex";
};
