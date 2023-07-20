import { setUser } from "../../global/state/globalState";
import { initControler } from "../../utils/route";
import "./Login.css";
const template = () => `
  <div id="containerLogin">
    <h1 id="titleLogin">LOGIN</h1>
    <input type="text" name="username" id="username" />
    <button id="buttonLogin">enviar</button>
  </div>
`;

const addListeners = () => {
  const buttonLogin = document.getElementById("buttonLogin");
  const username = document.getElementById("username");
  buttonLogin.addEventListener("click", (e) => {
    const valueInput = username.value;
    const userToLocalStorage = {
      token: true,
      name: valueInput,
      fav: [],
    };
    // como trabajo con el local lo convierto a string
    const stringUser = JSON.stringify(userToLocalStorage);
    localStorage.setItem(`${valueInput}USER`, stringUser);
    sessionStorage.setItem("currentUser", `${valueInput}USER`);
    setUser(`${valueInput}USER`);
    initControler();
  });
};

export const Login = () => {
  document.querySelector("nav").style.display = "none";
  document.querySelector("main").innerHTML = template();
  addListeners();
};
