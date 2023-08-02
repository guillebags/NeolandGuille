import { dataPokemon } from "../../utils";

const currentUser = {
  name: sessionStorage.getItem("currentUser")
    ? sessionStorage.getItem("currentUser")
    : "",
};

const dataGlobal = { pokemon: dataPokemon().then((res) => res) };

export const setData = (data, page) => {
  switch (page) {
    case "Pokemon":
      dataGlobal.pokemon = data;

      break;

    default:
      break;
  }
  dataGlobal.pokemon = data;
};

export const getData = () => {};

//!Arriba tengo la mejora de performance

export const setUserData = (userData) => {
  localStorage.setItem(`${userData.name}`, JSON.stringify(userData));
};

export const getUserData = () => {
  const userData = localStorage.getItem(currentUser.name);

  return JSON.parse(userData);
};

//tenemos que tener en los estados, una función seteadora, que cambie el valor de los elementos

export const setUser = (username) => {
  currentUser.name = username;
};

//luego una función geteadora

export const getCurrentUser = () => {
  return currentUser;
};

export const createUserData = (username) => {
  if (localStorage.getItem(username)) {
    return;
  } else {
    const userToLocalStorage = {
      token: true,
      name: username,
      fav: [],
    };
    setUserData(userToLocalStorage);
  }
};
