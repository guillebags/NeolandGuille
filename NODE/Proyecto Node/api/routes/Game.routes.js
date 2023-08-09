const { uploadGame } = require("../../middleware/files.middleware");
const {
  postGame,
  getById,
  getByName,
} = require("../controllers/Game.controller");

const GameRoutes = require("express").Router();

GameRoutes.post("/", uploadGame.single("image"), postGame);
GameRoutes.get("/:id", getById);
GameRoutes.get("/getByName/name", getByName);

module.exports = GameRoutes;
