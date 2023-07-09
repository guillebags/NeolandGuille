//!Iteración #4: Map
//4.1 Dado el siguiente array, devuelve un array con sus nombres utilizando .map().
const users = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];

const usersNames = users.map((obj) => {
  return obj.name;
});
console.log(usersNames);

//4.2 Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que empiece por 'A'.

const usersAnacleto = users.map((obj) => {
  if (obj.name.startsWith("A")) {
    obj.name = "Anacleto";
  }
  return obj.name;
});
console.log(usersAnacleto);

//4.3 Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y añade al valor de .name el string ' (Visitado)' cuando el valor de la propiedad isVisited = true.

const cities = [
  { isVisited: true, name: "Tokyo" },
  { isVisited: false, name: "Madagascar" },
  { isVisited: true, name: "Amsterdam" },
  { isVisited: false, name: "Seul" },
];

const citiesVisited = cities.map((obj) => {
  if (obj.isVisited) {
    obj.name += " (Visitado)";
  }
  return obj.name;
});
console.log(citiesVisited);
