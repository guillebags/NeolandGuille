import { PrintButtonTicTacToe } from "../../components/buttonTicTacToe/buttonTicTacToe";
import "./tictactoe.css";
//imports

const template = `
  <div id="ticPageContainer">
    <h1>Tic Tac Toe</h1>
    <div id="chooseContainer"></div>
    <h2 id="ticText"></h2>
    <div id="boardTic">
      <button class="ticButton" id="square1"></button
      ><button class="ticButton" id="square2"></button
      ><button class="ticButton" id="square3"></button
      ><button class="ticButton" id="square4"></button
      ><button class="ticButton" id="square5"></button
      ><button class="ticButton" id="square6"></button
      ><button class="ticButton" id="square7"></button
      ><button class="ticButton" id="square8"></button
      ><button class="ticButton" id="square9"></button>
    </div>
    <button id="ticRestart">Restart</button>
  </div>
`;

export const PrintTicTacToe = () => {
  document.querySelector("main").innerHTML = "";
  document.querySelector("main").innerHTML = template;
  PrintButtonTicTacToe();
  const restart = document.getElementById("ticRestart");
  restart.addEventListener("click", PrintTicTacToe());
};

//!to do choose player icon
