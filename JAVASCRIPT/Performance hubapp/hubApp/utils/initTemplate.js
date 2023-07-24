import { printTemplate as Header } from "../components";
import { PrintTemplateFooter as Footer } from "../components/Footer/Footer";

export const initTemplate = () => {
  const app = document.getElementById("app");

  //creo los elementos

  const header = document.createElement("header");
  const main = document.createElement("main");
  const footer = document.createElement("footer");

  //inyectamos elementos en el contenedor de la app

  app.append(header, main, footer);
  Header();
  Footer();
};
