import { getUserData, setUserData } from "../Global/state/globalState";

const addFavorite = (id) => {
  const userData = getUserData();

  userData.fav.push(id);

  setUserData(userData);
};

const getFavorites = () => {
  const userData = getUserData();
  return userData.fav;
};

const removeFavorite = (idToRemove) => {
  const userData = getUserData();

  userData.fav = userData.fav.filter((id) => id !== idToRemove);

  setUserData(userData);
};

const toggleFavorite = (id) => {
  if (isFavorite(id)) {
    removeFavorite(id);
  } else {
    addFavorite(id);
  }
};

const isFavorite = (id) => getFavorites().includes(String(id));

export const favoriteService = {
  getFavorites,
  isFavorite,
  toggleFavorite,
};
