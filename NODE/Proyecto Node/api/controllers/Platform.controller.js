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
        "https://res.cloudinary.com/dluwybogp/image/upload/v1691748536/descarga_yxekgn.png";
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

module.exports = { postPlatform, getById, getByName };
