//! Iteración #5: Calcular promedio de strings
// Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:

const mixedElements = [6, 1, "Rayo", 1, "vallecano", "10", "upgrade", 8, "hub"];
const averageWord = (arr) => {
  let sumNum = 0; //suma total de los números
  let sumStr = 0; //suma total de los caracteres de los strings
  let countNum = 0; //total de números en array
  let countStr = 0; //total de strings en array
  for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i])) {
      sumStr += arr[i].length;
      countStr++;
    } else {
      sumNum += parseInt(arr[i]);
      countNum++;
    }
  }
  return [sumNum / countNum, sumStr / countStr];
};

console.log(averageWord(mixedElements));
