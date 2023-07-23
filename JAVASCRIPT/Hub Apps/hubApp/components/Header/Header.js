import { initControler } from "../../utils/route";
import "./Header.css";

//Template

const template = () => `
  <figure>
    <img
      src="https://64.media.tumblr.com/51ff74969ce93337c21709f346cc22bf/tumblr_pqeu4pIPlf1v9h0fdo2_1280.png"
      alt="logo"
      id="logoRotom"
    />
    <h2 id="logoText">Rotom System</h2>
  </figure>
  <nav class="navHeader">
    <img
      src="https://cdn.icon-icons.com/icons2/851/PNG/512/Bag_icon-icons.com_67588.png"
      alt="navigate to dashboard"
      id="buttonDashboard"
    />

    <img
      src="https://cdn-icons-png.flaticon.com/128/10309/10309341.png"
      alt="log out"
      id="buttonLogout"
    />
  </nav>
`;

const addListeners = () => {
  // const changeTeam = document.getElementById("changeTeam");
  // changeTeam.addEventListener("click", (e) => {});

  const buttonDashboard = document.getElementById("buttonDashboard");
  buttonDashboard.addEventListener("click", () => {
    console.log("entro");
    initControler("Dashboard");
  });

  // const buttonLogout = document.getElementById("buttonLogout");
  // buttonLogout.addEventListener("click", (e) => {});
};

export const printTemplate = () => {
  document.querySelector("header").innerHTML = template();
  addListeners();
};
