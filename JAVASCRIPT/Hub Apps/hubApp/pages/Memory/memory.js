import { intervalos, limpiadorTiempos } from "../../utils/timeout";
import "./memory.css";
import JSConfetti from "js-confetti";

const template = () => `
  <div id="memoryContainer">
    <div id="time"></div>
    <section class="memory-game">
      <div class="memory-card" id="lavado" data-framework="lavado">
        <img
          class="front-face"
          src="https://res.cloudinary.com/dluwybogp/image/upload/v1690375981/240px-Rotom_lavado_HOME_gfvcqs.png"
          alt="Rotom Lavado"
        />
        <img
          class="back-face"
          src="https://res.cloudinary.com/dluwybogp/image/upload/v1690376176/Hub%20App/pokemon_card_backside_in_high_resolution_by_atomicmonkeytcg_dah43cy-pre_wcedyp.png"
          alt="Card Pokemon"
        />
      </div>
      <div class="memory-card" id="lavado" data-framework="lavado">
        <img
          class="front-face"
          src="https://res.cloudinary.com/dluwybogp/image/upload/v1690375981/240px-Rotom_lavado_HOME_gfvcqs.png"
          alt="Rotom Lavado"
        />
        <img
          class="back-face"
          src="https://res.cloudinary.com/dluwybogp/image/upload/v1690376176/Hub%20App/pokemon_card_backside_in_high_resolution_by_atomicmonkeytcg_dah43cy-pre_wcedyp.png"
          alt="Card Pokemon"
        />
      </div>

      <div class="memory-card" id="ventilador" data-framework="ventilador">
        <img
          class="front-face"
          src="https://res.cloudinary.com/dluwybogp/image/upload/v1690375981/240px-Rotom_ventilador_HOME_vc0xcw.png"
          alt="Rotom ventilador"
        />
        <img
          class="back-face"
          src="https://res.cloudinary.com/dluwybogp/image/upload/v1690376176/Hub%20App/pokemon_card_backside_in_high_resolution_by_atomicmonkeytcg_dah43cy-pre_wcedyp.png"
          alt="Card Pokemon"
        />
      </div>
      <div class="memory-card" id="ventilador" data-framework="ventilador">
        <img
          class="front-face"
          src="https://res.cloudinary.com/dluwybogp/image/upload/v1690375981/240px-Rotom_ventilador_HOME_vc0xcw.png"
          alt="Rotom ventilador"
        />
        <img
          class="back-face"
          src="https://res.cloudinary.com/dluwybogp/image/upload/v1690376176/Hub%20App/pokemon_card_backside_in_high_resolution_by_atomicmonkeytcg_dah43cy-pre_wcedyp.png"
          alt="Card Pokemon"
        />
      </div>

      <div class="memory-card" id="corte" data-framework="corte">
        <img
          class="front-face"
          src="https://res.cloudinary.com/dluwybogp/image/upload/v1690375981/240px-Rotom_corte_HOME_koypwn.png"
          alt="Rotom Corte"
        />
        <img
          class="back-face"
          src="https://res.cloudinary.com/dluwybogp/image/upload/v1690376176/Hub%20App/pokemon_card_backside_in_high_resolution_by_atomicmonkeytcg_dah43cy-pre_wcedyp.png"
          alt="Card Pokemon"
        />
      </div>
      <div class="memory-card" id="corte" data-framework="corte">
        <img
          class="front-face"
          src="https://res.cloudinary.com/dluwybogp/image/upload/v1690375981/240px-Rotom_corte_HOME_koypwn.png"
          alt="Rotom Corte"
        />
        <img
          class="back-face"
          src="https://res.cloudinary.com/dluwybogp/image/upload/v1690376176/Hub%20App/pokemon_card_backside_in_high_resolution_by_atomicmonkeytcg_dah43cy-pre_wcedyp.png"
          alt="Card Pokemon"
        />
      </div>

      <div class="memory-card" id="rotom" data-framework="rotom">
        <img
          class="front-face"
          src="https://res.cloudinary.com/dluwybogp/image/upload/v1690375981/240px-Rotom_HOME_ypkpoj.png"
          alt="Rotom normal"
        />
        <img
          class="back-face"
          src="https://res.cloudinary.com/dluwybogp/image/upload/v1690376176/Hub%20App/pokemon_card_backside_in_high_resolution_by_atomicmonkeytcg_dah43cy-pre_wcedyp.png"
          alt="Card Pokemon"
        />
      </div>
      <div class="memory-card" id="rotom" data-framework="rotom">
        <img
          class="front-face"
          src="https://res.cloudinary.com/dluwybogp/image/upload/v1690375981/240px-Rotom_HOME_ypkpoj.png"
          alt="Rotom normal"
        />
        <img
          class="back-face"
          src="https://res.cloudinary.com/dluwybogp/image/upload/v1690376176/Hub%20App/pokemon_card_backside_in_high_resolution_by_atomicmonkeytcg_dah43cy-pre_wcedyp.png"
          alt="Card Pokemon"
        />
      </div>

      <div class="memory-card" id="frio" data-framework="frio">
        <img
          class="front-face"
          src="https://res.cloudinary.com/dluwybogp/image/upload/v1690375980/240px-Rotom_fr%C3%ADo_HOME_qsu9bf.png"
          alt="Rotom frio"
        />
        <img
          class="back-face"
          src="https://res.cloudinary.com/dluwybogp/image/upload/v1690376176/Hub%20App/pokemon_card_backside_in_high_resolution_by_atomicmonkeytcg_dah43cy-pre_wcedyp.png"
          alt="Card Pokemon"
        />
      </div>
      <div class="memory-card" id="frio" data-framework="frio">
        <img
          class="front-face"
          src="https://res.cloudinary.com/dluwybogp/image/upload/v1690375980/240px-Rotom_fr%C3%ADo_HOME_qsu9bf.png"
          alt="Rotom frio"
        />
        <img
          class="back-face"
          src="https://res.cloudinary.com/dluwybogp/image/upload/v1690376176/Hub%20App/pokemon_card_backside_in_high_resolution_by_atomicmonkeytcg_dah43cy-pre_wcedyp.png"
          alt="Card Pokemon"
        />
      </div>

      <div class="memory-card" id="calor" data-framework="calor">
        <img
          class="front-face"
          src="https://res.cloudinary.com/dluwybogp/image/upload/v1690375980/240px-Rotom_calor_HOME_oeayeb.png"
          alt="Rotom calor"
        />
        <img
          class="back-face"
          src="https://res.cloudinary.com/dluwybogp/image/upload/v1690376176/Hub%20App/pokemon_card_backside_in_high_resolution_by_atomicmonkeytcg_dah43cy-pre_wcedyp.png"
          alt="Card Pokemon"
        />
      </div>
      <div class="memory-card" id="calor" data-framework="calor">
        <img
          class="front-face"
          src="https://res.cloudinary.com/dluwybogp/image/upload/v1690375980/240px-Rotom_calor_HOME_oeayeb.png"
          alt="Rotom calor"
        />
        <img
          class="back-face"
          src="https://res.cloudinary.com/dluwybogp/image/upload/v1690376176/Hub%20App/pokemon_card_backside_in_high_resolution_by_atomicmonkeytcg_dah43cy-pre_wcedyp.png"
          alt="Card Pokemon"
        />
      </div>
    </section>
  </div>
`;

let lockBoard = false;
let contador = 0;
let ok = 0;
let segundos;
let intervalo;
let team = document.querySelector("#logoText");

//? Lógica del juego

const flipCard = (e, card) => {
  if (!lockBoard) {
    card.classList.add("flip");
    const numberFlip = document.querySelectorAll(".flip");
    if (numberFlip.length === 2) {
      lockBoard = true;
      checkForMatch(numberFlip);
    }
  }
};

const checkForMatch = (numberFlip) => {
  contador++;
  let isMatch = numberFlip[0].id === numberFlip[1].id;
  isMatch ? disableCards(numberFlip) : unflipCards(numberFlip);
};

const disableCards = (numberFlip) => {
  ok++;
  numberFlip[0].removeEventListener("click", flipCard);
  numberFlip[1].removeEventListener("click", flipCard);
  numberFlip[0].classList.add("flipOk");
  numberFlip[1].classList.add("flipOk");
  numberFlip[0].classList.remove("flip");
  numberFlip[1].classList.remove("flip");

  resetBoard();
  ok === 6 && (segundos = 1);
};

const unflipCards = (numberFlip) => {
  lockBoard = true;

  setTimeout(() => {
    numberFlip[0].classList.remove("flip");
    numberFlip[1].classList.remove("flip");

    resetBoard();
  }, 1000);
};

const resetBoard = () => {
  lockBoard = false;
};

//? Lógica del pintado

const shuffle = () => {
  const cards = document.querySelectorAll(".memory-card");
  console.log(cards);
  cards.forEach((card) => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
  addListeners(cards);
  segundos = 30;
  intervalo = intervalos(time, 1000);
};

const addListeners = (cards) => {
  cards.forEach((card) =>
    card.addEventListener("click", (e) => flipCard(e, card))
  );
};

const time = () => {
  segundos--;
  const containerTime = document.getElementById("time");
  const segundosTime = `<h3>${segundos}</h3>`;
  containerTime.innerHTML = segundosTime;
  checkInterval();
};

const checkInterval = () => {
  if (segundos === 0) {
    limpiadorTiempos(intervalo, "intervalo");
    const timer = document.getElementById("time");
    timer.innerHTML = "";
    const memory = document.querySelector(".memory-game");
    const templateEnd = `<div class="containerEnd"><h1> Well done! </h1><h3>${
      ok === 6 ? ` ${team} wins! ` : " Try next time... "
    }</h3><h5>Attempts: ${contador}</h5><button id="resetButton">RESTART</button></div>`;
    if (ok === 6) {
      const jsConfetti = new JSConfetti();

      jsConfetti.addConfetti();
    } else {
      const jsConfetti = new JSConfetti();

      jsConfetti.addConfetti({
        emojis: ["😭"],
      });
    }

    memory.innerHTML = "";
    memory.innerHTML = templateEnd;
    const reset = document.querySelector("#resetButton");
    reset.addEventListener("click", () => {
      contador = 0;
      ok = 0;
      segundos = 30;
      document.querySelector("main").innerHTML = template();
      shuffle();
    });
  }
};

export const PrintMemoryGame = () => {
  document.querySelector("main").innerHTML = template();
  shuffle();
};
