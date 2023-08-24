import { changeTeam } from "../../utils";
import "./Footer.css";
const template = () => `
<div id ="footer">
<img 
  src="https://res.cloudinary.com/dluwybogp/image/upload/v1690328105/Hub%20App/yellow_bzc7g6.png"
  alt="change team instinct"
  class="changeTeam"
  id="changeTeamInstinct"
/>
<img 
  src="https://res.cloudinary.com/dluwybogp/image/upload/v1690328105/Hub%20App/blue_sbdpmg.png"
  alt="change team mystic"
  class="changeTeam"
  id="changeTeamMystic"
/>
<img 
  src="https://res.cloudinary.com/dluwybogp/image/upload/v1690328105/Hub%20App/red_qi3wpb.png"
  alt="change team valor"
  class="changeTeam"
  id="changeTeamValor"
/>
</div>
`;

export const PrintTemplateFooter = () => {
  document.querySelector("footer").innerHTML = template();
  addListeners();
};

const addListeners = () => {
  const imagesTeams = document.querySelectorAll(".changeTeam");
  imagesTeams.forEach((img) => {
    img.addEventListener("click", (e) => changeTeam(e));
  });
};
