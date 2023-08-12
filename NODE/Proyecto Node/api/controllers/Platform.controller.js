const { deleteImgCloudinary } = require("../../middleware/files.middleware");
const Game = require("../models/Game.model");
const Platform = require("../models/Platform.model");
const User = require("../models/User.model");

//! CREATE PLATFORM

const postPlatform = async (req, res, next) => {
  let catchImage = req.file?.path;
  try {
    await Platform.syncIndexes();

    const newPlatform = new Platform(req.body);

    if (req.file) {
      newPlatform.image = catchImage;
    } else {
      newPlatform.image =
        "https://res.cloudinary.com/dluwybogp/image/upload/v1691762145/proyectoNodeNeoland/platformStorage/descarga_hw3o9x.png";
    }

    const savedPlatform = await newPlatform.save();

    if (savedPlatform) {
      return res.status(200).json(savedPlatform);
    } else {
      return res.status(404).json("Platform not saved in database");
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
    const platformById = await Platform.findById(id);

    if (platformById) {
      return res.status(200).json({ data: platformById });
    } else {
      res.status(404).json("platform not found");
    }
  } catch (error) {
    return next(error);
  }
};

//! GET BY NAME
const getByName = async (req, res, next) => {
  try {
    const { name } = req.body;
    const platformByName = await Platform.find();
    const filterPlatform = platformByName.filter((element) =>
      element.name.includes(name)
    );
    if (filterPlatform.length > 0) {
      return res.status(200).json({ data: filterPlatform });
    } else {
      res.status(404).json("platform not found");
    }
  } catch (error) {
    return next(error);
  }
};

//! UPDATE PLATFORM
const updatePlatform = async (req, res, next) => {
  let catchImg = req.file?.path;
  try {
    const { id } = req.params;

    const platformById = await Platform.findById(id);
    if (platformById) {
      const oldImg = platformById.image;
      const customBody = {
        _id: platformById._id,
        name: req.body?.name ? req.body?.name : platformById.name,
        image: req.file?.path ? req.file?.path : oldImg,
        developer: req.body?.developer
          ? req.body?.developer
          : platformById.developer,
        devices: req.body?.devices ? req.body?.devices : platformById.devices,
      };
      await Platform.findByIdAndUpdate(id, customBody);
      if (req.file?.path) {
        deleteImgCloudinary(oldImg);
      }

      const updatedNewPlatform = await Platform.findById(id);
      const keysUpdate = Object.keys(req.body);

      let test = {};
      keysUpdate.forEach((item) => {
        if (platformById[item] !== updatedNewPlatform[item]) {
          test[item] = true;
        } else {
          test[item] = false;
        }

        if (req.file) {
          updatedNewPlatform.image == req.file?.path
            ? (test = { ...test, file: true })
            : (test = { ...test, file: false });
        }
      });

      if (req.body?._id) {
        test._id = "id cannot be changed";
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
          update: updatedNewPlatform,
        });
      }
    } else {
      return res.status(404).json("platform not found");
    }
  } catch (error) {
    if (req.file) deleteImgCloudinary(catchImg);
    return next(error);
  }
};

//! TOGGLE GAME
const toggleGame = async (req, res, next) => {
  try {
    let arrayGames;
    const { id } = req.params;
    const { games } = req.body;

    const platformById = await Platform.findById(id);

    if (platformById) {
      arrayGames = games.split(",");
      arrayGames.forEach(async (element) => {
        if (platformById.games.includes(element)) {
          try {
            await Platform.findByIdAndUpdate(id, {
              $pull: { games: element },
            });
            //?SOBRA?
            try {
              await Game.findByIdAndUpdate(element, {
                $pull: { platforms: id },
              });
            } catch (error) {
              return res.status(404).json({
                error: "error pulling platform from game model",
                message: error.message,
              });
            }
          } catch (error) {
            return res.status(404).json({
              error: "error pulling game from platform model",
              message: error.message,
            });
          }
        } else {
          try {
            await Platform.findByIdAndUpdate(id, {
              $push: { games: element },
            });
            try {
              await Game.findByIdAndUpdate(element, {
                $push: { platforms: id },
              });
            } catch (error) {
              return res.status(404).json({
                error: "error pushing platform in game model",
                message: error.message,
              });
            }
          } catch (error) {
            return res.status(404).json({
              error: "error pushing game in platform model",
              message: error.message,
            });
          }
        }
      });

      setTimeout(async () => {
        return res.status(200).json({
          update: await Platform.findById(id).populate({
            path: "games",
            populate: {
              path: "platforms",
            },
          }),
        });
      }, 500);
    } else {
      return res.status(404).json("platform not found");
    }
  } catch (error) {
    return next(error);
  }
};

//! DELETE PLATFORM
const deletePlatform = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Platform.findByIdAndDelete(id);
    try {
      await Game.updateMany({ platforms: id }, { $pull: { platforms: id } });
      try {
        await User.updateMany(
          { favPlatforms: id },
          { $pull: { favPlatforms: id } }
        );
      } catch (error) {
        return res
          .status(404)
          .json(
            "error deleting fav platforms in user while deleting platform",
            error.message
          );
      }
    } catch (error) {
      return res
        .status(404)
        .json(
          "error deleting platforms in game while deleting platform",
          error.message
        );
    }
    if (await User.findById(_id)) {
      return res.status(404).json("Platform not deleted");
    } else {
      deleteImgCloudinary(image);
      return res.status(200).json("Platform deleted");
    }
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  postPlatform,
  getById,
  getByName,
  updatePlatform,
  toggleGame,
  deletePlatform,
};
