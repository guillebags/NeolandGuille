//! Iteración #4: Métodos findArrayIndex
//Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro. Haz varios ejemplos y compruébalos.

const animals = ["Caracol", "Mosquito", "Salamandra", "Ajolote"];

const findArrayIndex = (arr, text) => arr.indexOf(text);

console.log(findArrayIndex(animals, "Mosquito"));
console.log(findArrayIndex(animals, "Ajolote"));
