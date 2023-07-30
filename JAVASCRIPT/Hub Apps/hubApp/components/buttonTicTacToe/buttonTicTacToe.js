import { PrintTicTacToe } from "../../pages/Tic Tac Toe/tictactoe";
import { tictactoeService } from "../../services/tictactoe.service";
import "./buttonTicTacToe.css";

export const PrintButtonTicTacToe = () => {
  let placed = 0;

  const ticButtons = Array.from(document.getElementsByClassName("ticButton"));

  const setToken = (event) => {
    let clickedButton = event.target;

    tictactoeService.playerMove(clickedButton);

    placed++;

    tictactoeService.checkEnd(placed);

    tictactoeService.iaMove(ticButtons, placed);

    placed++;
  };

  ticButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      setToken(e);
    });
  });
};
