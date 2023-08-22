export const getAll = async () => {
  const characterList = await fetch(
    "https://hp-api.onrender.com/api/characters"
  );

  const characterListJson = await characterList.json();

  return characterListJson;
};

export const getByHouse = async (filter) => {
  const characterList = await fetch(
    `https://hp-api.onrender.com/api/characters/house/${filter}`
  );
  return characterList;
};

/* export const characterService = {
  getAll: getAll(),
  getByHouse: getByHouse(),
};
 */
