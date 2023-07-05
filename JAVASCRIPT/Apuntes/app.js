//! --- APUNTES

//Repaso objetos

const car = {
  year: 2000,
  marca: "renault",
  modelo: "clio",
  cv: 120,
};

//métodos object
Object.keys(car);
Object.values(car);

//para hacer una copia
const copyCar = { ...car, year: 1999 }; //para cambiar directamente una propiedad de la copia del objeto

//! --- Métodos String

//? Strings

let dog = "Multiform";

const veterinario = `El perro llamado ${dog} ha ido al veterinario`;

console.log("🚀 ~ file: app.js:27 ~ veterinario:", veterinario); // ctrl + alt + l para hacer console.log sobre lo seleccionado con el TurboConsole

//cómo acceder a un carácter del string

console.log(veterinario[1]);

// También se puede con el método charAt

veterinario.charAt(2);
console.log(
  "🚀 ~ file: app.js:36 ~ veterinario.charAt(2):",
  veterinario.charAt(2)
);

//length

veterinario.length;

//includes

const year = "2013";
console.log(year.includes("2"));
console.log(year.includes("j"));

// repeat
const droid = "roger";
console.log(droid.repeat(2)); // devuelve "roger roger"

//replace all

const frase = " Buenos días, estamos a día 5 de julio";
const replace = frase.replaceAll("Buenos", "hi");

//slice

const bootcamp = "Estamos en el bootcamp de neoland";
console.log(bootcamp.slice(7, 14));

//split convierte str en arr. se suele utilizar para elminar palabras, lo convierto array, veo la posición de la palabra, la elimino y lo vuelvo a convertir a str

const quixote = "En un lugar de la mancha";
console.log(quixote.split(" "));

//toLowerCase

const heroe = "Spiderman";
console.log(heroe.toLowerCase());
console.log(heroe.toUpperCase);

//trim elimina los espacios delante y detrás

const trimExample = " Esto es un ejemplo de trim ";
console.log(trimExample.trim());

//! --- Arrays

const heroAll = [
  { name: "Spiderman", age: 28 },
  { name: "Thor", age: 987 },
];

//! Métodos de Array

//length

let random = [1, 4, 5, 2, 523];
console.log(random.length);

//pop

console.log(random.pop());
ulti = random.pop();
console.log(ulti);

//push

console.log(random.push("Soy el útlimo"));

//shift

random.shift();

//unshift

random.unshift(2, 4, 5);
console.log(random);

//sort

const numberList = [1, 3, 45, 2, 5, 24];
numberList.sort();
console.log(numberList); //ordena solo por el primer carácter

//para solucionarlo, necesitamos una callback

numberList.sort((a, b) => a - b); //ordena de menor a mayor
numberList.sort((a, b) => b - a); // ordena de mayor a menor

//para los str no hace falta lo hace solo

const alumns = ["Igor", "Jaime", "Joan", "Ana", "Belén"];
alumns.sort();

//reverse da la vuelta

numberList.reverse();

//splice elimina y sustituye

alumns.splice(1, 2, "Fer");

//join convierte un arr a str y acepta parámetros a diferencia del toString()

const saludo = ["s", "a", "l", "a"];
const saludoString = saludo.join(""); // para sustituir las comas por nada
console.log(saludo.toString);

//concat para meter cosas nuevas a un array ya hecho

alumns.concat(saludo);

//slice sirve para eliminar elementos pero tambien para devolver esos elementos

console.log(saludo.slice(1, 2));

//indexOf solo funciona con arrays

//? Toda la familia Math repasar

//! DIFERENCIAS DE LAS ARROW CON LAS FUNCTION

// Arrow no pueden utilizar this
// Arrow no pueden ser utilizadas como constructores
// Arrow no pueden utilizar el método para sacar los ARGUMENTS
// Arrow no pueden ser utilizadas como métodos

const obj = {
  name: "Pedro",
  sayHi: () => console.log("Buenos días" + this.name),
}; // no acepta this, sale undefined

//! CLASES

class Rectangulo {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }
  //getter
  get area() {
    return this.calcularArea();
  }
  calcularArea() {
    return this.alto * this.ancho;
  }
}
//instanciamos la clase, el nuevo object-position:
const rectangulo = new Rectangulo(10, 20);
console.log("area del rectangulo", rectangulo.area);

//! Arguments
// es un método que te crea un array de los argumentos que le pases a la función. NO FUNCIONA CON ARROWS
function argumentos(a, b, c) {
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
}

//! FOR OF
// for (const movie of movies){};

//! FOR IN

for (const key in object) {
  if (Object.hasOwnProperty.call(object, key)) {
    const element = object[key];
  }
}
