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
      document.getElementById("footer").style.backgroundColor = "#ffd200";
      break;

    case "changeTeamMystic":
      PrintTemplateFooter();

      document.getElementById("changeTeamMystic").style.display = "none";
      document.getElementById("logoRotom").src =
        "https://res.cloudinary.com/dluwybogp/image/upload/v1690328105/blue_sbdpmg.png";
      document.getElementById("logoText").innerText = "Team Mystic";
      document.getElementById("footer").style.backgroundColor = "#0677ee";
      break;

    case "changeTeamValor":
      PrintTemplateFooter();

      document.getElementById("changeTeamValor").style.display = "none";
      document.getElementById("logoRotom").src =
        "https://res.cloudinary.com/dluwybogp/image/upload/v1690328105/red_qi3wpb.png";
      document.getElementById("logoText").innerText = "Team Valor";
      document.getElementById("footer").style.backgroundColor = "#f3150";
  }
};
//por cada click, hacer un bucle para que con cada click se pinte un tema diferente
//cómo le meto transición al cambiar de imagen?
