const currentUser = {
  name: sessionStorage.getItem("currentUser")
    ? sessionStorage.getItem("currentUser")
    : "",
};
const dataGlobal = {
  pokemon: [],
};
//tenemos que tener en los estados, una función seteadora, que cambie el valor de los elementos

export const setUser = (username) => {
  currentUser.name = username;
};

//luego una función geteadora

export const getUser = () => {
  return currentUser;
};

export const setData = (data, page) => {
  switch (page) {
    case "Pokemon":
      dataGlobal.pokemon = data;

      break;

    default:
      break;
  }
};

export const getData = () => {
  return;
};
