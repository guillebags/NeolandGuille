//!Iteración #5: Probando For
// Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y 40. Imprime en un console log el array.

const placesToTravel = [
  { id: 5, name: "Japan" },
  { id: 11, name: "Venecia" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
  { id: 59, name: "Madagascar" },
];

const filterId = (arrObj) => {
  for (i = 0; i < arrObj.length; i++) {
    (arrObj[i].id == 11 || arrObj[i].id == 40) && arrObj.splice([i], [1]);
    console.log(arrObj);
  }
  console.log(arrObj);
};

filterId(placesToTravel);
