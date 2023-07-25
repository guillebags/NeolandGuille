import { cardsPokemons } from "../components";

export const Paginacion = (data, numberElement) => {
  const longitud = data.length;
  const numberDigitOfPage = longitud / numberElement;
  document.getElementById("paginacion").innerHTML = "";

  if (numberDigitOfPage > 1) {
    for (let i = 0; i < numberDigitOfPage; i++) {
      const buttonNumber = document.createElement("button");
      buttonNumber.setAttribute("class", `${i + 1} buttonPaginacion`);
      document.getElementById("paginacion").appendChild(buttonNumber);
      addListeners(buttonNumber, data, numberElement, i, numberDigitOfPage);
    }
    cardsPokemons(data.slice(0, numberElement));
    const allButton = document.querySelectorAll(".buttonPaginacion");
    allButton.forEach((pag) => {
      pag.style.borderRadius = "50%";
      pag.style.background = "#eef0f2";
    });
    allButton[0].style.transform = "scale(1.2)";
    allButton[0].style.background = " #41c19e";
  }

  cardsPokemons(data.slice(0, numberElement));
};

const addListeners = (
  buttonNumber,
  data,
  numberElement,
  i,
  numberDigitOfPage
) => {
  buttonNumber.addEventListener("click", () => {
    const allButtonPag = document.querySelectorAll(".buttonPaginacion");
    allButtonPag.forEach((pag) => {
      pag.style.transform = "scale(1)";
      pag.style.background = "#eef0f2";
    });

    buttonNumber.style.transform = "scale(1.2)";
    buttonNumber.style.background = "#41c19e";
    const end = (i + 1) * numberElement;
    const start = end - numberElement < 0 ? 0 : end - numberElement;
    cardsPokemons(data.slice(start, end));
  });
};
