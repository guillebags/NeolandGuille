//!Iteración #8: Bonus
//6.1 Dado el siguiente javascript filtra los videojuegos por gender = 'RPG' usando .filter() y usa .reduce() para conseguir la media de sus .score. La función .find() también podría ayudarte para el contrar el genero 'RPG' en el array .gender.

const videogames = [
  { name: "Greedfall", genders: ["RPG"], score: 9.5 },
  {
    name: "Assassins Creed Valhalla",
    genders: ["Aventura", "RPG"],
    score: 6.5,
  },
  { name: "The last of Us 2", genders: ["Acción", "Aventura"], score: 9.8 },
  { name: "Super Mario Bros", genders: ["Plataforma"], score: 8.5 },
  { name: "Genshin Impact", genders: ["RPG", "Aventura"], score: 7.5 },
  {
    name: "Hogwarts Legacy",
    genders: ["RPG", "La cosa más bonita que he visto nunca"],
    score: 10,
  },
];

const rpgFilter = videogames.filter(({ genders }) => genders.includes("RPG"));

const rpgScoreTotal = rpgFilter.reduce((acc, { score }) => acc + score, 0);

rpgAverage = rpgScoreTotal / rpgFilter.length;

console.log(rpgAverage);
