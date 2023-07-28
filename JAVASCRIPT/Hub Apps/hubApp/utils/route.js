//! cómo nuestra app se va a comportar, controlador de lo que se renderiza en cada momento

import { getCurrentUser } from "../Global/state/globalState";
import {
  Login,
  PrintMemoryGame,
  PrintPokemonPage,
  PrintTicTacToe,
  printTemplateDashboard,
} from "../pages";
import { PrintQuizPage } from "../pages/Quiz/quiz";

export const initControler = (path) => {
  switch (path) {
    case undefined:
      localStorage.getItem(getCurrentUser().name)
        ? printTemplateDashboard()
        : Login();
      break;

    case "Pokemon":
      PrintPokemonPage();
      break;

    case "Dashboard":
      printTemplateDashboard();
      break;

    case "Login":
      Login();
      break;

    case "Quiz":
      PrintQuizPage();
      break;

    case "Memory":
      PrintMemoryGame();
      break;

    case "TicTacToe":
      PrintTicTacToe();
      break;
  }
};
