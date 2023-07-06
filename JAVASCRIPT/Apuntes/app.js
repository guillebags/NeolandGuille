//! --- APUNTES

console.log("🚀 ~ file: app.js:27 ~ veterinario:", "veterinario"); // ctrl + alt + l para hacer console.log sobre lo seleccionado con el TurboConsole

//! FOR EACH
const print = (elementPrint) => console.log(elementPrint);

const array = [];
array.forEach(print); // esto funciona porque asume los parametros

//el for each completo es:
array.forEach((element) => {
  print(element);
});

//! FOR OF
// for (const movie of movies){};
/**solo se utiliza para elementos iterables
 * Array
 * String
 * Map
 * Arguments

//! FOR IN

// for (const key in object) {
//   if (Object.hasOwnProperty.call(object, key)) {
//     const element = object[key];
//   }
// }

//! Objects
//object.entries, o hacer un arr con un obj

const person = {
  name: "Guille",
  adress: "Barcelona",
  age: 26,
};

const arrObj = Object.entries(person); // crea tuplas (tipo de dato en typescript arr de clave - valor)

//! RETURN IMPLÍCITO
// ES EN LAS ARROWS CUANDO NO LLEVEN LLAVE. EJ:
//paises.forEach((pais, index, (objCompleto) => console.log(pais)));

// ctrl + k + c = comenta la línea
// ctrl + ç = descomenta

//! SET - TIPO DE DATO

let colores = new Set();

colores.add("rojo");
colores.add("lila");
colores.add("amarillo");
colores.add("rojo");

colores.forEach(print);

*/
