const fs = require("fs");

fs.readFile("players.string", (error, players) => {
  if (error) {
    console.log("There was an error reading the file!");
  } else {
    const parsedPlayers = JSON.parse(players);
    console.log(parsedPlayers);
  }
});
