import { changeTeam } from "../../utils";
import "./Footer.css";
const template = () => `
<div id ="footer">
<img 
  src="https://poketouch.files.wordpress.com/2018/05/pokemon_go_team_icons_mystic_articuno_valor_moltres_and_instinct_zapdos.png?w=584"
  alt="change team"
  id="changeTeamButton"
/>
</div>
`;

export const PrintTemplateFooter = () => {
  document.querySelector("footer").innerHTML = template();
  addListeners();
};

const addListeners = () => {
  document
    .getElementById("changeTeamButton")
    .addEventListener("click", () => changeTeam());
};
