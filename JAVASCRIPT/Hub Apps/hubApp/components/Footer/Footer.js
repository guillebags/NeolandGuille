import "./Footer.css";
const template = () => `
<img
  src="https://poketouch.files.wordpress.com/2018/05/pokemon_go_team_icons_mystic_articuno_valor_moltres_and_instinct_zapdos.png?w=584"
  alt="change team"
  id="changeTeam"
/>
`;

export const PrintTemplateFooter = () => {
  document.querySelector("footer").innerHTML = template();
};
