/* export const getAll = () => {
  const characterList = Axios.get("https://hp-api.onrender.com/api/characters");

  const characterListJson = characterList.json();

  return characterListJson;
};

export const getByHouse = (filter) => {
  const characterList = Axios.get(
    `https://hp-api.onrender.com/api/characters/house/${filter}`
  );
  return characterList;
}; */

import axios from "axios";

/* export const characterService = {
  getAll: getAll(),
  getByHouse: getByHouse(),
};
 */

export const getById = (id) => {
  const characterById = axios.get(
    `https://hp-api.onrender.com/api/character/${id}`
  );
  return characterById;
};
