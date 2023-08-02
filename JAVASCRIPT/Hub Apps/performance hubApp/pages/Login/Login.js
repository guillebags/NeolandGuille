import {
  createUserData,
  setUser,
  setUserData,
} from "../../Global/state/globalState";
import { initControler } from "../../utils/route";
import "./Login.css/";

const template = () => `

<div class="container bg" id="containerLogin">
<div class="screen">
  <div class="screen__content">
    <form class="login">
      <div class="login__field">
        <i class="login__icon fas fa-user"></i>
        <input type="text" name="username" required id="username" placeholder="User Name" />

      </div>
      <button class="button login__submit" id = "buttonLogin" >
        <span class="button__text">Log In Now</span>
        <i class="button__icon fas fa-chevron-right"></i>
      </button>				
    </form>
  </div>
  <div class="screen__background">
    <img src="https://images.wikidexcdn.net/mwuploads/wikidex/thumb/a/a5/latest/20160604220739/Rotom.png/300px-Rotom.png" alt="rotom login"  id="rotomLogin">
    <span class="screen__background__shape screen__background__shape1"></span>
  </div>		
</div>
</div>
`;

const addListeners = () => {
  const buttonLogin = document.getElementById("buttonLogin");
  const username = document.getElementById("username");
  buttonLogin.addEventListener("click", () => {
    const valueInput = username.value;
    createUserData(valueInput);
    sessionStorage.setItem("currentUser", `${valueInput}`);
    initControler();
  });
};
//to do, revisar cómo subo el user, para subir el array de Ids de pokemon favoritos al localstorage

export const Login = () => {
  document.querySelector(".navHeader").style.display = "none";
  document.querySelector("main").innerHTML = template();
  addListeners();
};
