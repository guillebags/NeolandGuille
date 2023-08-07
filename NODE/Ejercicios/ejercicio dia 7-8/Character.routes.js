const { upload } = require("../../middleware/files.middleware");
const {
  createCharacter,
  getById,
  getAll,
  getByName,
  updateCharacter,
  toggleMovie,
} = require("../controllers/Character.controllers");

const CharacterRoutes = require("express").Router();

CharacterRoutes.post("/", upload.single("image"), createCharacter);
CharacterRoutes.get("/:id", getById);
CharacterRoutes.get("/", getAll);
CharacterRoutes.get("/getByName/name", getByName);
CharacterRoutes.patch("/update/:id", upload.single("image"), updateCharacter);
CharacterRoutes.patch("/toggle/:id", toggleMovie);

module.exports = CharacterRoutes;
