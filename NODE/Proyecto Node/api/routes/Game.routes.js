const { isAuth } = require("../../middleware/auth.middleware");
const { uploadGame } = require("../../middleware/files.middleware");
const {
  postGame,
  getById,
  getByName,
  updateGame,
  togglePlatform,
  deleteGame,
  getSkip,
  getAllGames,
  deleteGameUser,
} = require("../controllers/Game.controller");

const GameRoutes = require("express").Router();

GameRoutes.post("/", uploadGame.single("image"), postGame);
GameRoutes.get("/:id", getById);
GameRoutes.get("/getByName/name", getByName);
GameRoutes.get("/get/all/skip", getSkip);
GameRoutes.get("/", getAllGames);
GameRoutes.patch("/update/:id", uploadGame.single("image"), updateGame);
GameRoutes.patch("/toggle/:id", togglePlatform);
GameRoutes.delete("/:id", [isAuth], deleteGame);
GameRoutes.delete("/delete/:id", [isAuth], deleteGameUser);

module.exports = GameRoutes;
