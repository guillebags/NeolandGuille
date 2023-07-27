import "./buttonFilter.css";
import { filterPokemon } from "../../utils";

export const PrintButton = (types) => {
  types.forEach((type) => {
    const buttonType = `<button class="buttonFilter ${type}">
      ${type}
      <i></i>
    </button>`;
    const containerFilter = document.getElementById("filterButton");
    containerFilter.innerHTML += buttonType;
  });
  addListeners(types);
};

const addListeners = (types) => {
  types.forEach((type) => {
    const buttonType = document.querySelector(`.${type}`);
    buttonType.addEventListener("click", (e) => {
      filterPokemon(type, "type");
    });
  });

  const buttonResize = () => {
    let containerFilter = document.querySelector("#filterButton");

    containerFilter.innerHTML = "";
    containerFilter.innerHTML = `
      <select id="selectType"></select>`;
    let selectorType = document.querySelector("#selectType");
    types.forEach((type) => {
      const option = document.createElement("option");
      // option.classList.add(`${type}`);
      selectorType.appendChild(option);

      option.classList.add(`${type}`);
      option.innerText = `${type}`;
    });
    selectorType.addEventListener("change", (e) => {
      console.log("entro", e.target.value);
      filterPokemon(e.target.value, "type");
    });
  };
  window.addEventListener("resize", () => {
    if (window.innerWidth < 630) {
      buttonResize();
    }
  });
};
