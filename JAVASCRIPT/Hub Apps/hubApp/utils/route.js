//! cómo nuestra app se va a comportar, controlador de lo que se renderiza en cada momento

import { getUser } from "../Global/state/globalState";
import { Login, printTemplateDashboard } from "../pages";

export const initControler = (path) => {
  switch (path) {
    case undefined:
      localStorage.getItem(getUser().name) ? printTemplateDashboard() : Login();
      break;

    case "Pokemon":
      "Pokemon()";
      break;

    case "Dashboard":
      printTemplateDashboard();
      break;
    case "Login":
      Login();
      break;
  }
};
