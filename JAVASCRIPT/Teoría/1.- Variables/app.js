// 3 tipos variable: var - let - const

//! ---- VAR ----

// Var nos deja volver a crear la variable con el mismo nombre
var saludo = "Buenos días";
var saludo = "Buenas tardes";

// Var tiene scope global de su posición de memoria, no de su valor

const pruebaArrow = () => {
  var curso = "julio";
};

//console.log(curso); // no está definido porque no coge el dato

curso = 12345;

console.log(curso);

//! CONST
// Si es un array/objeto se puede modificar

const array1 = [1]; // referencia 1425654
const array2 = [1]; // referencia 165743789

if (array1 == array2) {
  console.log("son iguales");
} else {
  console.log("no son iguales");
}
// Para comparar objetos, hay que poner el método .tostring()
