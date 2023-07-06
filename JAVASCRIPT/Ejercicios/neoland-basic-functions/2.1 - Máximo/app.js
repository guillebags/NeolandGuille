//! Iteración #1: Buscar el máximo
//Completa la función que tomando dos números como argumento devuelva el más alto.

const sum = (numberOne, numberTwo) => {
  return Math.max(numberOne, numberTwo);
};

//? También con return numberOne > numberTwo ? numberOne : numberTwo;

console.log(sum(3, 64));
