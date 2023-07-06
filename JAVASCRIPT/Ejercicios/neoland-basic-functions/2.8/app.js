//! Iteration #8: Contador de repeticiones
//Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.  Puedes usar este array para probar tu función:

const counterWords = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "upgrade",
  "code",
];
const repeatCounter = (arr) => {
  let counted = {};
  arr.forEach((word) => {
    counted.hasOwnProperty(word) ? (counted[word] += 1) : (counted[word] = 1);
    //si tiene la clave, le suma uno a su valor, si no la tiene, la crea con valor 1
  });
  return counted;
};
console.log(repeatCounter(counterWords));
