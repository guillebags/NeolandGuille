//! Iteración #4: Calcular el promedio
// Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:

const numbers = [12, 21, 38, 5, 45, 37, 6];
const average = (arr) => {
  let sum = 0;
  for (const number of arr) {
    sum += number;
  }
  return sum / arr.length;
};

console.log(average(numbers)); //?Math.floor() para redondear
