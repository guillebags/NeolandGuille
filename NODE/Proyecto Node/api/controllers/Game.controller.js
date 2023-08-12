const { deleteImgCloudinary } = require("../../middleware/files.middleware");
const Game = require("../models/Game.model");
const Platform = require("../models/Platform.model");
const User = require("../models/User.model");

//! CREATE GAME

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
    const gameByName = await Game.find();
    const filterGame = gameByName.filter((element) =>
      element.name.toLowerCase().includes(name.toLowerCase())
    );
    if (filterGame.length > 0) {
      return res.status(200).json({ data: filterGame });
    } else {
      res.status(404).json("game not found");
    }
  } catch (error) {
    return next(error);
  }
};

//! UPDATE GAME
const updateGame = async (req, res, next) => {
  let catchImg = req.file?.path;
  try {
    const { id } = req.params;

    const gameById = await Game.findById(id);
    if (gameById) {
      const oldImg = gameById.image;
      const customBody = {
        _id: gameById._id,
        name: gameById.name,
        image: req.file?.path ? req.file?.path : oldImg,
        genre: req.body?.genre ? req.body?.genre : gameById.genre,
        theme: req.body?.theme ? req.body?.theme : gameById.theme,
        year: req.body?.year ? req.body?.year : gameById.year,
      };
      await Game.findByIdAndUpdate(id, customBody);
      if (req.file?.path) {
        deleteImgCloudinary(oldImg);
      }

      const updatedNewGame = await Game.findById(id);
      const keysUpdate = Object.keys(req.body);

      let test = {};
      keysUpdate.forEach((item) => {
        if (gameById[item] !== updatedNewGame[item]) {
          test[item] = true;
        } else {
          test[item] = false;
        }

        if (req.file) {
          updatedNewGame.image == req.file?.path
            ? (test = { ...test, file: true })
            : (test = { ...test, file: false });
        }
      });

      if (req.body?._id || req.body?.name) {
        test._id = "id cannot be changed";
        test.name = "name cannot be changed";
      }

      let acc = 0;
      for (let key in test) {
        if (test[key] == false) acc++;
      }

      if (acc > 0) {
        return res.status(404).json({
          dataTest: test,
          update: "some items have not updated",
        });
      } else {
        return res.status(200).json({
          dataTest: test,
          update: updatedNewGame,
        });
      }
    } else {
      return res.status(404).json("game not found");
    }
  } catch (error) {
    if (req.file) deleteImgCloudinary(catchImg);
    return next(error);
  }
};

//! TOGGLE GAME
const togglePlatform = async (req, res, next) => {
  try {
    let arrayPlatforms;
    const { id } = req.params;
    const { platforms } = req.body;

    const gameById = await Game.findById(id);

    if (gameById) {
      arrayPlatforms = platforms.split(",");
      arrayPlatforms.forEach(async (element) => {
        if (gameById.platforms.includes(element)) {
          try {
            await Game.findByIdAndUpdate(id, {
              $pull: { platforms: element },
            });
            try {
              await Platform.findByIdAndUpdate(element, {
                $pull: { games: id },
              });

              updatePlatform = await Platform.findById(element);
            } catch (error) {
              return res.status(404).json({
                error: "error pulling game from platform model",
                message: error.message,
              });
            }
          } catch (error) {
            return res.status(404).json({
              error: "error pulling platform from game model",
              message: error.message,
            });
          }
        } else {
          try {
            await Game.findByIdAndUpdate(id, {
              $push: { platforms: element },
            });
            try {
              await Platform.findByIdAndUpdate(element, {
                $push: { games: id },
              });
            } catch (error) {
              return res.status(404).json({
                error: "error pushing game in platform model",
                message: error.message,
              });
            }
          } catch (error) {
            return res.status(404).json({
              error: "error pushing platform in game model",
              message: error.message,
            });
          }
        }
      });

      setTimeout(async () => {
        return res.status(200).json({
          update: await Game.findById(id).populate({
            path: "platforms",
            populate: {
              path: "games",
            },
          }),
        });
      }, 500);
    } else {
      return res.status(404).json("game not found");
    }
  } catch (error) {
    return next(error);
  }
};

//! DELETE GAME
const deleteGame = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Game.findByIdAndDelete(id);
    try {
      await Platform.updateMany({ games: id }, { $pull: { games: id } });
      try {
        await User.updateMany({ favGames: id }, { $pull: { favGames: id } });
      } catch (error) {
        return res
          .status(404)
          .json(
            "error deleting fav games in user while deleting game",
            error.message
          );
      }
    } catch (error) {
      return res
        .status(404)
        .json(
          "error deleting users in platform while deleting user",
          error.message
        );
    }
    if (await User.findById(_id)) {
      return res.status(404).json("Game not deleted");
    } else {
      deleteImgCloudinary(image);
      return res.status(200).json("Game deleted");
    }
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  postGame,
  getById,
  getByName,
  updateGame,
  togglePlatform,
  deleteGame,
};
