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
  });
};

export const Login = () => {
  document.querySelector("main").innerHTML = template();
};
