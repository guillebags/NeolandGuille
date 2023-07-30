import { PrintTemplateFooter } from "../components/Footer/Footer";

export const changeTeam = (e) => {
  let team = e.target.id;

  switch (team) {
    case "changeTeamInstinct":
      PrintTemplateFooter();
      document.getElementById("changeTeamInstinct").style.display = "none";
      document.getElementById("logoRotom").src =
        "https://res.cloudinary.com/dluwybogp/image/upload/v1690328105/yellow_bzc7g6.png";
      document.getElementById("logoText").innerText = "Team Instinct";
      document.getElementById("footer").style.backgroundColor = "#ffffb3";
      document.getElementById("dashboard").style.backgroundColor = "#FBDF53";
      document.getElementById("favorites").style.backgroundColor = "#F2CB07";
      document.getElementById("pokedex").style.backgroundColor = "#F2CB07";
      document.getElementById("quiz").style.backgroundColor = "#F2CB07";
      document.getElementById("memory").style.backgroundColor = "#F2CB07";
      document.getElementById("ticTacToe").style.backgroundColor = "#F2CB07";
      break;

    case "changeTeamMystic":
      PrintTemplateFooter();

      document.getElementById("changeTeamMystic").style.display = "none";
      document.getElementById("logoRotom").src =
        "https://res.cloudinary.com/dluwybogp/image/upload/v1690328105/blue_sbdpmg.png";
      document.getElementById("logoText").innerText = "Team Mystic";
      document.getElementById("footer").style.backgroundColor = "#cce0ff";
      document.getElementById("dashboard").style.backgroundColor = "#99c2ff";
      document.getElementById("favorites").style.backgroundColor = "#077AF5";
      document.getElementById("pokedex").style.backgroundColor = "#077AF5";
      document.getElementById("quiz").style.backgroundColor = "#077AF5";
      document.getElementById("memory").style.backgroundColor = "#077AF5";
      document.getElementById("ticTacToe").style.backgroundColor = "#077AF5";
      break;

    case "changeTeamValor":
      PrintTemplateFooter();

      document.getElementById("changeTeamValor").style.display = "none";
      document.getElementById("logoRotom").src =
        "https://res.cloudinary.com/dluwybogp/image/upload/v1690328105/red_qi3wpb.png";
      document.getElementById("logoText").innerText = "Team Valor";
      document.getElementById("footer").style.backgroundColor = "#f0a8a9";
      document.getElementById("dashboard").style.backgroundColor = "#ff8080";
      document.getElementById("favorites").style.backgroundColor = "#C2150C";
      document.getElementById("pokedex").style.backgroundColor = "#C2150C";
      document.getElementById("quiz").style.backgroundColor = "#C2150C";
      document.getElementById("memory").style.backgroundColor = "#C2150C";
      document.getElementById("ticTacToe").style.backgroundColor = "#C2150C";
  }
};
//por cada click, hacer un bucle para que con cada click se pinte un tema diferente
//cómo le meto transición al cambiar de imagen?
