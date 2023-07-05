//! Iteración #2: Buscar la palabra más larga
// Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.

const avengers = [
  "Hulk",
  "Thor",
  "IronMan",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

const findLongestWord = (param) => {
  let longest = 0;
  let longestWord = "";
  for (let i = 0; i < param.length; i++) {
    if (param[i].length > longest) {
      longestWord = param[i];
      longest = param[i].length;
    }
  }
  return longestWord;
};

console.log(findLongestWord(avengers));
