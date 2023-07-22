//! cómo nuestra app se va a comportar, controlador de lo que se renderiza en cada momento

import { printTemplateDashboard } from "../pages/Dashboard/Dashboard";

export const initControler = (path) => {
  switch (path) {
    case undefined:
      localStorage.getItem("user") ? "Dashboard()" : "Login()";
      break;

    case "Pokemon":
      "Pokemon()";
      break;

    case "Dashboard":
      printTemplateDashboard();
      break;
  }
};
