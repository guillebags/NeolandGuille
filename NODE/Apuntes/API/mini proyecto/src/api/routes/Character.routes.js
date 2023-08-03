const { upload } = require("../../middleware/files.middleware");
const {
  createCharacter,
  getById,
  getAll,
  getByName,
} = require("../controllers/Character.controller");

const express = require("express");

const CharacterRoutes = express.Router();

CharacterRoutes.post("/create", upload.single("image"), createCharacter);

CharacterRoutes.get("/getbyid/:id", getById);

CharacterRoutes.get("/", getAll);

CharacterRoutes.get("/getbyname/:name", getByName);

module.exports = CharacterRoutes;
