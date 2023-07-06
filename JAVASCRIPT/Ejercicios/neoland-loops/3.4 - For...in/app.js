//! Iteración #4: Probando For...in
// Usa un for...in para imprimir por consola los datos del alienígena..

const alien = {
  name: "Wormuck",
  race: "Cucusumusu",
  planet: "Eden",
  weight: "259kg",
};

const printData = (obj) => {
  for (const key in obj) {
    console.log(obj[key]);
  }
};

printData(alien);
