import "./Header.css";

//Template

const template = () => `
  <img
    src="https://64.media.tumblr.com/51ff74969ce93337c21709f346cc22bf/tumblr_pqeu4pIPlf1v9h0fdo2_1280.png"
    alt="logo"
    id="logoRotom"
  />
  <img
  src="https://cdn.icon-icons.com/icons2/851/PNG/512/Bag_icon-icons.com_67588.png"
  alt="navigate to folder"
  id="buttonDashboard"
/>
<img
    src="https://icon-library.com/images/logout-icon-png/logout-icon-png-26.jpg"
    alt="log out"
    id="buttonLogout"
  />
  <img
    src="https://poketouch.files.wordpress.com/2018/05/pokemon_go_team_icons_mystic_articuno_valor_moltres_and_instinct_zapdos.png?w=584"
    alt="change team"
    id="changeTeam"
  />

`;

const addListeners = () => {
  const changeTeam = document.getElementById("changeTeam");
  changeTeam.addEventListener("click", (e) => {});

  const buttonDashboard = document.getElementById("buttonDashboard");
  buttonDashboard.addEventListener("click", (e) => {});

  const buttonLogout = document.getElementById("buttonLogout");
  buttonLogout.addEventListener("click", (e) => {});
};

export const printTemplate = () => {
  document.querySelector("header").innerHTML = template();
};
