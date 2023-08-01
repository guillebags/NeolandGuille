//importanciones

import fs from "fs";

//funcion que lee la informacion

const readData = () => {
  fs.readFile("ejemplo.txt", "utf-8", (error, data) => {
    error ? console.log("error", error) : correctData(data);
  });
};

//funcion que corrige la data

const correctData = (data) => {
  //El caracter \D representa cualquier caacter que no sea un digito.

  let fixedData = data.match(/\D/g).join("");
  writeCorrectText(fixedData);
};

//funcion que escribe la data en un nuevo archivo corregido
const writeCorrectText = (data) => {
  fs.writeFile("correctText.txt", data, () => {
    console.log("archivo creado 😍");
  });
};

readData();
