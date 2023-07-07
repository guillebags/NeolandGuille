//! Iteración #2: Mix Fors
// Dado el siguiente javascript usa forof y forin para hacer la media del volumen de todos los sonidos favoritos que tienen los usuarios.

const users = [
  {
    name: "Manolo el del bombo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Mortadelo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Super Lopez",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "El culebra",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

const getAverage = (arrObj) => {
  let average = 0;
  let totalVolume = 0;
  let cc = 0;
  for (const user of arrObj) {
    //recorro users
    for (const key in user.favoritesSounds) {
      //recorro cada clave de favoriteSounds de cada user
      totalVolume += user.favoritesSounds[key].volume; // voy sumando el volumen a totalVolume
      cc++; // hago un contador para luego utilizar como divisor
    }
  }
  average = totalVolume / cc;
  return average;
};

console.log(getAverage(users));
