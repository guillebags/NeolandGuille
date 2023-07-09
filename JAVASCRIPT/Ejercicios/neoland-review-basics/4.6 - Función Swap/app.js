//! Iteración #6: Función swap
//Crea una función llamada swap() que reciba un array y dos parametros que sean indices del array. La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Retorna el array resultante.

const mandalorian = ["Grogu", "Mando", "Bo-Katan", "Boba Fett", "Kuiil"];

const swap = (arr, i1, i2) => {
  [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
  return arr;
};

console.log(swap(mandalorian, 3, 1));
