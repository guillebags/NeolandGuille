import { setUser } from "../../Global/state/globalState";
import { initControler } from "../../utils/route";
import "./Login.css/";

const template = () => `
<div class="container" id="containerLogin">
<div class="screen">
  <div class="screen__content">
    <form class="login">
      <div class="login__field">
        <i class="login__icon fas fa-user"></i>
        <input type="text" name="username" id="username" placeholder="User Name"/>

      </div>
      <button class="button login__submit" id = "buttonLogin" >
        <span class="button__text">Log In Now</span>
        <i class="button__icon fas fa-chevron-right"></i>
      </button>				
    </form>
  </div>
  <div class="screen__background">
    <img src="https://images.wikidexcdn.net/mwuploads/wikidex/thumb/a/a5/latest/20160604220739/Rotom.png/200px-Rotom.png" alt="rotom login" class="screen__background__shape" id="rotomLogin">
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
    const userToLocalStorage = {
      token: true,
      name: valueInput,
      fav: [""],
    };
    //al trabajar con el local lo tengo que convertir a str
    const stringUser = JSON.stringify(userToLocalStorage);
    localStorage.setItem(`${valueInput}USER`, stringUser);
    sessionStorage.setItem("currentUser", `${valueInput}USER`);
    setUser(`${valueInput}USER`);
    initControler();
  });
};

export const Login = () => {
  document.querySelector(".navHeader").style.display = "none";
  document.querySelector("main").innerHTML = template();
  addListeners();
};
