import { setUser } from "../../Global/state/globalState";
import { initControler } from "../../utils/route";

const template = () => `
  <div>
    <h1>Login</h1>
    <input type="text" name="username" id="username" />
    <button id="buttonLogin">enviar</button>
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
