import { getUser } from "../../Global/state/globalState";
import { initControler } from "../../utils/route";
import "./Header.css";

//Template

const template = () => `
<div id="header" class="header">
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
      src="https://res.cloudinary.com/dluwybogp/image/upload/v1690216555/3990-19536-pokemon-go-agrandir-le-sac-objet-orig-1-article_image_d-1_qtbee6.webp"
      alt="navigate to dashboard"
      id="buttonDashboard"
    />

    <img
      src="https://cdn-icons-png.flaticon.com/128/10309/10309341.png"
      alt="log out"
      id="buttonLogout"
    />
  </nav>
  </div>
`;

const addListeners = () => {
  const buttonDashboard = document.getElementById("buttonDashboard");
  buttonDashboard.addEventListener("click", () => {
    initControler("Dashboard");
  });

  const buttonLogout = document.getElementById("buttonLogout");
  buttonLogout.addEventListener("click", () => {
    const userState = getUser().name;
    const currentUser = localStorage.getItem(userState);
    const parsedCurrentUser = JSON.parse(currentUser);
    const updateUser = { ...parsedCurrentUser, token: false };
    const stringUpdateUser = JSON.stringify(updateUser);
    localStorage.removeItem(userState);
    sessionStorage.removeItem("currentUser");
    localStorage.setItem(userState, stringUpdateUser);
    initControler("Login");
  });
};

export const printTemplate = () => {
  document.querySelector("header").innerHTML = template();
  addListeners();
};
