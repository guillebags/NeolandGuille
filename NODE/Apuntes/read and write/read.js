const fs = require("fs");

fs.readFile("./players.json", (error, data) => {
  error ? console.log("error", error) : error;
  console.log("data", JSON.parse(data));
});
