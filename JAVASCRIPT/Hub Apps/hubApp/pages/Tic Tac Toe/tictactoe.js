import { PrintButtonTicTacToe } from "../../components/buttonTicTacToe/buttonTicTacToe";
import "./tictactoe.css";
//imports

const template = `
  <div id="ticPageContainer">
    <h2>Tic Tac Toe</h2>
    <div id="chooseContainer"></div>
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
  </div>
`;

const addListeners = () => {};

export const PrintTicTacToe = () => {
  document.querySelector("main").innerHTML = "";
  document.querySelector("main").innerHTML = template;
  PrintButtonTicTacToe();
};

//!to do choose player icon
