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
  getPopularGames,
} = require("../controllers/Game.controller");

const GameRoutes = require("express").Router();

GameRoutes.post("/", uploadGame.single("image"), postGame);
GameRoutes.get("/:id", getById);
GameRoutes.get("/getByName/name", getByName);
GameRoutes.get("/get/all/skip", getSkip);
GameRoutes.get("/", getAllGames);
GameRoutes.patch("/update/:id", uploadGame.single("image"), updateGame);
GameRoutes.patch("/toggle/:id", togglePlatform);
GameRoutes.get("/get/popular/games/sorted", getPopularGames);
GameRoutes.delete("/:id", [isAuth], deleteGame);

module.exports = GameRoutes;
