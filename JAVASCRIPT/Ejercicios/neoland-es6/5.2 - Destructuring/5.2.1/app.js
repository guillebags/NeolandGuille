//!Iteración #2: Destructuring
//En base al siguiente javascript, crea variables en base a las propiedades del objeto usando object destructuring e imprimelas por consola. Cuidado, no hace falta hacer destructuring del array, solo del objeto.

const game = {
  title: "The last us 2",
  gender: ["action", "zombie", "survival"],
  year: 2020,
};

({ title } = game); //? así me lo recomienda el visual?
const { gender } = game; // se puede hacer en una línea pero así veo que identifica el nombre de las claves
const { year } = game;
console.log(title, gender, year);
