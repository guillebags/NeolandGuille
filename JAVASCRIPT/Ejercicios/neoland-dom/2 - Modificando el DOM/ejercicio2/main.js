//! Modificando el DOM

//2.1 Inserta dinamicamente en un html un div vacio con javascript.

const main = document.querySelector("body");

main.innerHTML += `<div></div>`;

//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

main.innerHTML += `<div><p>soy el nuevo p</p></div>`;

//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

const divSix = document.createElement("div");
main.appendChild(divSix);
for (let i = 0; i <= 6; i++) {
  divSix.innerHTML += `<p>soy una de las seis p</p>`;
}

//2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

let p = document.createElement("p");
let textoP = document.createTextNode("Soy dinámico!");
p.appendChild(textoP);
main.appendChild(p);

//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const textoH2 = document.createTextNode("Wubba Lubba dub dub");
const h2 = document.h2.getElementsByClassName("fn-insert-here");

h2.innerText += "Wubba Lubba dub dub";
