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

const findLongestWord = (arrStr) => {
  let longest = 0;
  let longestWord = "";
  for (let i = 0; i < arrStr.length; i++) {
    if (arrStr[i].length > longest) {
      longestWord = arrStr[i];
      longest = arrStr[i].length;
    }
  }
  return longestWord;
};

console.log(findLongestWord(avengers));
