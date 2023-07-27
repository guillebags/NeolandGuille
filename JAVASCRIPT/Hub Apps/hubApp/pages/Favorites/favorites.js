//imports

//!Aquí iría el template
// const template = () => `
//   <div id="pokemon">
//     <div id="containerFilter">
//       <div id="filterButton"></div>

//       <input type="text" id="inputPokemon" placeholder="Search..." />
//     </div>
//     <div id="paginacion"></div>
//     <div id="spinner"></div>
//     <div id="galleryPokemon"></div>
//   </div>
// `;

//!Hacer una función similar a dataService pero haciendo un .filter de pokemonData para que coja SOLO los pokemon cuyos ID se INCLUYAN en el array guardado en el localStorage
//?En el evento click de la estrella de favoritos pintada en las cartas, parsearlo, hacer push, y meterlo en el localStorage haciendo stringify

// const dataService = async () => {
//     const getData = await dataPokemon();

//     const { pokemonData, type } = getData;

//     cardsPokemons(pokemonData);
//     document.getElementById("spinner").innerHTML = "";
//     PrintButton(type);
//     addListeners(type);
//     Paginacion(pokemonData, 9);
//   };

//!Con esta función de la página Login reviso la manera de meter al LocalStorage
// const addListeners = () => {
//     const buttonLogin = document.getElementById("buttonLogin");
//     const username = document.getElementById("username");
//     buttonLogin.addEventListener("click", () => {
//       const valueInput = username.value;
//       const userToLocalStorage = {
//         token: true,
//         name: valueInput,
//         fav: [""],
//       };
//       const stringUser = JSON.stringify(userToLocalStorage);
//       localStorage.setItem(`${valueInput}USER`, stringUser);
//       sessionStorage.setItem("currentUser", `${valueInput}USER`);
//       setUser(`${valueInput}USER`);
//       initControler();
//     });
//   };
