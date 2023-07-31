const fs = require("fs");

fs.readFile("./players.json", (error, data) => {
  const player = [];
  error ? console.log("error", error) : player.push(JSON.parse(data));

  printPlayer(JSON.parse(data));
});

const printPlayer = (player) => {
  console.log("player", player);
};
