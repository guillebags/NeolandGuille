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

const urlNation = "https://api.nationalize.io";

const button = document.querySelector("button");

const h2 = document.createElement("h2");

button.addEventListener("click", async () => {
  const value = document.querySelector("input").value;
  const dataNation = await getDataNation(urlNation, value);
  const elements = dataNation.country.map(({ country_id, probability }) => {
    const li = document.createElement("li");
    li.innerText = `El nombre ${dataNation.name} tiene un ${
      probability * 100
    } porciento de ser de ${country_id}`;
    return li;
  });

  h2.innerText = "";
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
