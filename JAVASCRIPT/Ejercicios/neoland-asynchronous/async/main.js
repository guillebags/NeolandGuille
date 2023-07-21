//! 1.1
// Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para hacer un .fetch() y recibir los datos que devuelve. Imprimelo mediante un console.log(). Para ello, es necesario que crees un .html y un .js.
const getData = async () => {
  try {
    const response = await fetch("https://api.agify.io?name=michael");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

//console.log(await getData());

//! 1.2
// Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando fetch() para hacer una consulta a la api cuando se haga click en el botón, pasando como parametro de la api, el valor del input.const baseUrl = 'https://api.nationalize.io';

//!1.3
// En base al ejercicio anterior. Crea dinamicamente un elemento por cada petición
// a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.
// EJ: El nombre Pepe tiene un 22 porciento de ser de ET.

//!1.4
//En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno de los p que hayas insertado y que si el usuario hace click en este botón eliminemos el parrafo asociado.

//?selectores
const button = document.querySelector("button");

//?creo h2 en el elemento para pintar el total de personas con ese nombre
const h2 = document.createElement("h2");
const clearH2 = () => (h2.innerText = "");
const urlNation = "https://api.nationalize.io";
const printButton = document.createElement("button");

button.addEventListener("click", async () => {
  const value = document.querySelector("input").value;
  const dataNation = await getDataNation(urlNation, value);
  const elements = dataNation.country.map(({ country_id, probability }) => {
    //mapeo el array de paises para sacar un li con el texto por cada uno
    const li = document.createElement("li");
    li.append(printButton);
    li.innerText = `El nombre ${dataNation.name} tiene un ${
      probability * 100
    } porciento de ser de ${country_id}`;

    return li;
  });
  clearH2();
  h2.innerText = `Total ${dataNation.count}`;
  document.body.append(h2);
  document.querySelector("ul").replaceChildren(...elements);
});

const getDataNation = async (urlNation, value) => {
  try {
    const response = await fetch(`${urlNation}?name=${value}`);
    const data = await response.json();
    console.log(data);
    return data;

    // fetch(`${urlNation}?name=${value}`)
    // .then((response) => response.json())
    // .then((data) => console.log(data, "data 1"));
    // console.log(
    // );
  } catch (error) {
    console.log(error);
  }
};
