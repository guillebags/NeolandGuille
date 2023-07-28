import { getUserData, setUserData } from "../Global/state/globalState";

export const favoriteService = {
  addFavorite: (id) => {
    const userData = getUserData();
    if (!userData.fav.includes(id)) {
      userData.fav.push(id);
    }
    setUserData(userData);
    console.log("userData", userData);
  },
  getFavorites: () => console.log("soy getFavorites"),
};
