import "./style.css";

//generamos una estructura de datos que nos permita seleccionar dichos datos
const COLOR_PALETTE = {
  "#e3170aff": "chili red",
  "#a9e5bbff": "celadon",
  "#0d1321ff": "rich black",
  "#ffc43dff": "amber",
  "#436436ff": "hunter green",
};

const addOptionsToColorPicker = () => {
  const colorPickerSelect = document.querySelector("#color-picker");

  for (let color in COLOR_PALETTE) {
    const option = document.createElement("option");
    option.value = color;
    option.innerText = COLOR_PALETTE[color];

    colorPickerSelect.append(option);
  }
};

const addEventListenerToColorPicker = () => {
  const colorPickerSelect = document.querySelector("#color-picker");
  const colorName = document.querySelector("#color-name");
  colorPickerSelect.addEventListener("change", (event) => {
    const newColor = event.target.value;
    //Almacenamos el código de color

    document.body.style.backgroundColor = newColor;
    //Le aplicamos el background color con el código de color seleccionado
    console.log(newColor);
    colorName.innerText = COLOR_PALETTE[newColor];
    console.log(colorName);
    //Le asignamos a nuestro h2 el valor de la clave que hay almacenada en newColor al igual que hemos hecho en la primera función
    const colorNameText = `${COLOR_PALETTE[newColor]} | ${newColor}`;
    console.log(colorNameText);
    colorName.innerText = COLOR_PALETTE[newColor] ? colorNameText : "-";
  });
};

addOptionsToColorPicker();
addEventListenerToColorPicker();
