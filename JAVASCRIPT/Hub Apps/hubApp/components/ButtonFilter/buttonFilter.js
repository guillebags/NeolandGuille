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
      selectorType.innerHTML += `<option>${type}</option>`;
    });
  };
  window.addEventListener("resize", () => {
    if (window.innerWidth < 630) {
      buttonResize();
    }
  });
};
