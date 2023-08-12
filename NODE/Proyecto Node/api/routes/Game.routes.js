const { uploadGame } = require("../../middleware/files.middleware");
const {
  postGame,
  getById,
  getByName,
  updateGame,
  togglePlatform,
} = require("../controllers/Game.controller");

const GameRoutes = require("express").Router();

GameRoutes.post("/", uploadGame.single("image"), postGame);
GameRoutes.get("/:id", getById);
GameRoutes.get("/getByName/name", getByName);
GameRoutes.patch("/update/:id", uploadGame.single("image"), updateGame);
GameRoutes.patch("/toggle/:id", togglePlatform);

module.exports = GameRoutes;
