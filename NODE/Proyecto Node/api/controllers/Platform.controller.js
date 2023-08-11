const { deleteImgCloudinary } = require("../../middleware/files.middleware");
const Game = require("../models/Game.model");
const Platform = require("../models/Platform.model");
const User = require("../models/User.model");

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

module.exports = { postPlatform };
