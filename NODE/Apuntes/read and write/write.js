const fs = require("fs");
//se puede convertir si hacer hover en require

const players = [
  {
    name: "psyduck",
    src: "https://res.cloudinary.com/dluwybogp/image/upload/v1690555451/Pokemon_Go-39_icon-icons.com_67619_ldtpl2.png",
  },
  {
    name: "nidorina",
    src: "https://res.cloudinary.com/dluwybogp/image/upload/v1690555450/Pokemon_Go-29_icon-icons.com_67608_kkyzyu.png",
  },
  {
    name: "nidorino",
    src: "https://res.cloudinary.com/dluwybogp/image/upload/v1690555450/Pokemon_Go-30_icon-icons.com_67610_cn2sh1.png",
  },
  {
    name: "sandshrew",
    src: "https://res.cloudinary.com/dluwybogp/image/upload/v1690555450/Pokemon_Go-28_icon-icons.com_67623_cicvp2.png",
  },
  {
    name: "bulbasaur",
    src: "https://res.cloudinary.com/dluwybogp/image/upload/v1690555449/Pokemon_Go-21_icon-icons.com_67626_cwuqvw.png",
  },
  {
    name: "squirtle",
    src: "https://res.cloudinary.com/dluwybogp/image/upload/v1690555449/Pokemon_Go-23_icon-icons.com_67622_xo4rj0.png",
  },
  {
    name: "charmander",
    src: "https://res.cloudinary.com/dluwybogp/image/upload/v1690555449/Pokemon_Go-22_icon-icons.com_67617_myfgxx.png",
  },
  {
    name: "caterpie",
    src: "https://res.cloudinary.com/dluwybogp/image/upload/v1690555450/Pokemon_Go-12_icon-icons.com_67629_h6obz5.png",
  },
];

const newObjectPlayers = players.map((element) => ({
  ...element,
  view: false,
}));

//convertir a texto plano porque fs lee y escribe texto plano
const playerToString = JSON.stringify(newObjectPlayers);

fs.writeFile("players.json", playerToString, () => {
  console.log("archivo escrito ♥");
});
