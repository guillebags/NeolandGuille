export const changeTeam = () => {
  document.getElementById("logoRotom").src =
    "https://i.pinimg.com/originals/b3/13/ac/b313ac49b92d1aefa643e789865cc9f7.png";
  document.getElementById("logoText").innerText = "Team Instinct";
  document.getElementById("dashboard").style.backgroundColor = "#fbd208";
};
//por cada click, hacer un bucle para que con cada click se pinte un tema diferente
//cómo le meto transición al cambiar de imagen?
