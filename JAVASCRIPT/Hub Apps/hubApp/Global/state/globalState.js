const currentUser = {
  name: sessionStorage.getItem("currentUser")
    ? sessionStorage.getItem("currentUser")
    : "",
};

// export let userData = {
//   fav: [],
//   name: "",
//   token: false,
// };

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
