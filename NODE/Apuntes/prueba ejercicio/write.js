const fs = require("fs");

const players = [
  {
    name: "psyduck",
    src: "https://res.cloudinary.com/dluwybogp/image/upload/v1690555451/Pokemon_Go-39_icon-icons.com_67619_ldtpl2.png",
    view: false,
  },
  {
    name: "nidorina",
    src: "https://res.cloudinary.com/dluwybogp/image/upload/v1690555450/Pokemon_Go-29_icon-icons.com_67608_kkyzyu.png",
    view: false,
  },
  {
    name: "nidorino",
    src: "https://res.cloudinary.com/dluwybogp/image/upload/v1690555450/Pokemon_Go-30_icon-icons.com_67610_cn2sh1.png",
    view: false,
  },
  {
    name: "sandshrew",
    src: "https://res.cloudinary.com/dluwybogp/image/upload/v1690555450/Pokemon_Go-28_icon-icons.com_67623_cicvp2.png",
    view: false,
  },
  {
    name: "bulbasaur",
    src: "https://res.cloudinary.com/dluwybogp/image/upload/v1690555449/Pokemon_Go-21_icon-icons.com_67626_cwuqvw.png",
    view: false,
  },
  {
    name: "squirtle",
    src: "https://res.cloudinary.com/dluwybogp/image/upload/v1690555449/Pokemon_Go-23_icon-icons.com_67622_xo4rj0.png",
    view: false,
  },
  {
    name: "charmander",
    src: "https://res.cloudinary.com/dluwybogp/image/upload/v1690555449/Pokemon_Go-22_icon-icons.com_67617_myfgxx.png",
    view: false,
  },
  {
    name: "caterpie",
    src: "https://res.cloudinary.com/dluwybogp/image/upload/v1690555450/Pokemon_Go-12_icon-icons.com_67629_h6obz5.png",
    view: false,
  },
];

const playerString = JSON.stringify(players);

fs.writeFile("players.string", playerString, () => {
  console.log("player.string created!");
});
