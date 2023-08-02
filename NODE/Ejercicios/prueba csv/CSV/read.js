//necesitamos lo primero las importaciones
const csv = require("csv-parser");
const fs = require("fs");

//luego necesitamos un objeto donde metamos la info parseada
const dataArray = [];

//luego hacemos la funcion de lectura del archivo (que no tengo pero llamamos indicator)
fs.createReadStream("indicator.csv")
  .pipe(csv({ separator: ";" }))
  .on("data", (data) => dataArray.push(data))
  .on("end", () => console.log(dataArray));

//funcion que se encargue de procesar la info
