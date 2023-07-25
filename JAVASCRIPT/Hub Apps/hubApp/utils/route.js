//! cómo nuestra app se va a comportar, controlador de lo que se renderiza en cada momento

import { getUser } from "../Global/state/globalState";
import { Login, PrintPokemonPage, printTemplateDashboard } from "../pages";
import { PrintQuizPage } from "../pages/Quiz/quiz";

export const initControler = (path) => {
  switch (path) {
    case undefined:
      localStorage.getItem(getUser().name) ? printTemplateDashboard() : Login();
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
  }
};
