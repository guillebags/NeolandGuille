import "./buttonFilter.css";
import { filterPokemon } from "../../utils";

export const PrintButton = (types) => {
  let containerFilter = document.querySelector("#filterButton");

  containerFilter.innerHTML = "";
  if (window.innerWidth < 630) {
    containerFilter.innerHTML = `
    <select id="selectType"></select>`;
    let selectorType = document.querySelector("#selectType");
    types.forEach((type) => {
      const option = document.createElement("option");
      selectorType.appendChild(option);

      option.classList.add(`${type}`);
      option.innerText = `${type}`;
    });
    selectorType.addEventListener("change", (e) => {
      console.log("entro", e.target.value);
      filterPokemon(e.target.value, "type");
    });
  } else {
    types.forEach((type) => {
      const buttonType = `<button class="buttonFilter ${type}">
      ${type}
      <i></i>
    </button>`;
      containerFilter.innerHTML += buttonType;
    });
    const addListeners = (types) => {
      types.forEach((type) => {
        const buttonType = document.querySelector(`.${type}`);
        buttonType.addEventListener("click", (e) => {
          filterPokemon(type, "type");
        });
      });
    };
    addListeners(types);
  }
};
