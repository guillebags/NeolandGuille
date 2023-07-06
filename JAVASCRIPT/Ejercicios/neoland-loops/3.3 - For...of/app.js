//! Iteración #3: Probando For...of
// Usa un bucle forof para recorrer todos los destinos del array. Imprime en un ***console.log*** sus valores.

const placesToTravel = [
  "Japon",
  "Venecia",
  "Murcia",
  "Santander",
  "Filipinas",
  "Madagascar",
];

const printDestinations = (arr) => {
  for (const destination of arr) {
    console.log(destination);
  }
};

printDestinations(placesToTravel);
