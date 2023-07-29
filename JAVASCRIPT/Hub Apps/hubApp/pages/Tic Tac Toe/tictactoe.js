import { PrintButtonTicTacToe } from "../../components/buttonTicTacToe/buttonTicTacToe";
import "./tictactoe.css";
//imports

const template = `
<div id="ticPageContainer">
    <h2>Tic Tac Toe</h2>
    <div id="chooseContainer"></div>
    <div id="boardTic">
        <button class="ticButton"></button><button class="ticButton"></button><button class="ticButton"></button><button class="ticButton"></button><button class="ticButton"></button><button class="ticButton"></button><button class="ticButton"></button><button class="ticButton"></button><button class="ticButton"></button>
    </div>
</div>
`;

export const PrintTicTacToe = () => {
  document.querySelector("main").innerHTML = "";
  document.querySelector("main").innerHTML = template;
  PrintButtonTicTacToe();
};

//!to do choose player icon
