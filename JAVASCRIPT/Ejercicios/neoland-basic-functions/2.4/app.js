//! Iteración #4: Calcular el promedio
// Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:

const numbers = [12, 21, 38, 5, 45, 37, 6];
const average = (param) => {
  let sum = 0;
  for (const number of param) {
    sum += number;
  }
  return sum / param.length;
};

console.log(average(numbers)); //?Math.floor() para redondear
