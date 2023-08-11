const { deleteImgCloudinary } = require("../../middleware/files.middleware");
const Game = require("../models/Game.model");
const Platform = require("../models/Platform.model");

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
      element.name.includes(name)
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
/* const togglePlatform = async (req, res, next) => {
  try {
    let arrayPlatforms;
    const { id } = req.params;
    const { movies } = req.body;

    const characterById = await Character.findById(id);

    if (characterById) {
      let updateCharacter;
      let updateMovie;
      arrayPlatforms = movies.split(",");
      arrayPlatforms.forEach(async (element) => {
        if (characterById.movies.includes(element)) {
          console.log("💅😁");
          try {
            await Character.findByIdAndUpdate(id, {
              $pull: { movies: element },
            });
            updateCharacter = await Character.findById(id);
            try {
              await Movie.findByIdAndUpdate(element, {
                $pull: { characters: id },
              });

              updateMovie = await Movie.findById(element);
            } catch (error) {
              return res.status(404).json(error);
              //meter mensaje de movie not found?
            }
          } catch (error) {
            return res.status(404).json(error);
          }
        } else {
          console.log("💙😁");
          try {
            await Character.findByIdAndUpdate(id, {
              $push: { movies: element },
            });
            updateCharacter = await Character.findById(id);
            try {
              await Movie.findByIdAndUpdate(element, {
                $push: { characters: id },
              });
              updateMovie = await Character.findById(element);
            } catch (error) {
              return res.status(404).json(error);
            }
          } catch (error) {
            return res.status(404).json(error);
          }
        }
      });

      setTimeout(async () => {
        return res.status(200).json({
          update: await Character.findById(id).populate({
            path: "movies",
            populate: {
              path: "characters",
            },
          }),
        });
      }, 500);

    } else {
      return res.status(404).json("character not found");
    }
  } catch (error) {
    return next(error);
  }
}; */

module.exports = { postGame, getById, getByName, updateGame };
