const { deleteImgCloudinary } = require("../../middleware/files.middleware");
const Game = require("../models/Game.model");
const Platform = require("../models/Platform.model");

//! POST GAME

const postGame = async (req, res, next) => {
  let catchImage = req.file?.path;
  try {
    await Game.syncIndexes();

    const newGame = new Game(req.body);

    if (req.file) {
      newGame.image = catchImage;
    } else {
      newGame.image =
        "https://res.cloudinary.com/dluwybogp/image/upload/v1690232499/Hub%20App/pokedex1_nofgat.png";
    }

    const savedGame = await newGame.save();

    if (savedGame) {
      return res.status(200).json(savedGame);
    } else {
      return res.status(404).json("Game not saved in database");
    }
  } catch (error) {
    req.file?.path && deleteImgCloudinary(catchImage);
    return next(error);
  }
};

//! GET BY ID
const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const gameById = await Game.findById(id);

    if (gameById) {
      return res.status(200).json({ data: gameById });
    } else {
      res.status(404).json("game not found");
    }
  } catch (error) {
    return next(error);
  }
};

//! GET BY NAME
const getByName = async (req, res, next) => {
  try {
    const { name } = req.body;
    const gameByName = await Game.find({ name: name });
    //? TO DO FIND ALL WITH SAME NAME
    console.log("name", gameByName);
    if (gameByName.length > 0) {
      return res.status(200).json({ data: gameByName });
    } else {
      res.status(404).json("game not found");
    }
  } catch (error) {
    return next(error);
  }
};

module.exports = { postGame, getById, getByName };
