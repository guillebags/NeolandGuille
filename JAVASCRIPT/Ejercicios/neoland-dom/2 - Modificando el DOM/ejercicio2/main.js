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

const h2 = document.querySelector(".fn-insert-here");

h2.innerText = "Wubba Lubba dub dub";

//2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.

const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];

const ul = document.createElement("ul");

main.appendChild(ul);

for (let i = 0; i < apps.length; i++) {
  const li = document.createElement("li");
  li.innerText = apps[i];
  ul.appendChild(li);
}

//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const removedItems = document.getElementsByClassName("fn-remove-me");

while (removedItems.length > 0) {
  main.removeChild(removedItems[0]);
}

//2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.

const divIns = document.querySelector("div");
divIns.insertAdjacentHTML("afterend", "<p>Voy en medio!</p>");

//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

let allDivs = document.querySelectorAll("div.fn-insert-here");

for (let i = 0; i < allDivs.length; i++) {
  allDivs[i].innerHTML = "<p>Voy dentro!</p>";
}
