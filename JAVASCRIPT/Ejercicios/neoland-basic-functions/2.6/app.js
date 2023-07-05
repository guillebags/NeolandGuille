//! Iteración #6: Valores únicos
// Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función:

const duplicates = [
  "sushi",
  "pizza",
  "burger",
  "potatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];
const removeDuplicates = (arr) => {
  let noDuplicates = []; //creo lo que será el array sin duplicados
  arr.forEach((element) => {
    !noDuplicates.includes(element) && noDuplicates.push(element); //recorriendo el antiguo array, meto en el nuevo los elementos si NO están aún
  });
  return noDuplicates;
};

console.log(removeDuplicates(duplicates));
