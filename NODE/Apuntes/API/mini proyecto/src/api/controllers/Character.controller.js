const { deleteImgCloudinary } = require("../../middleware/files.middleware");
const Character = require("../models/Character.model");

const createCharacter = async (req, res, next) => {
  let catchImage = req.file?.path;

  try {
    console.log(req.body);
    await Character.syncIndexes();
    const newCharacter = new Character(req.body);

    if (req.file) {
      newCharacter.image = catchImage;
    } else {
      newCharacter.image =
        "https://res.cloudinary.com/dluwybogp/image/upload/v1690754358/avatar_jmjnu1.png";
    }

    const savedCharacter = await newCharacter.save();

    if (savedCharacter) {
      return res.status(200).json(savedCharacter);
    } else {
      return res
        .status(404)
        .json("Error al guardar character en la base de datos");
    }
  } catch (error) {
    req.file?.path && deleteImgCloudinary(catchImage);
    return next(error);
  }
};

//!Get by id

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const characterById = await Character.findById(id);

    if (characterById) {
      return res.status(200).json({ data: characterById });
    } else {
      res.status(404).json("no se encuentra el character 🔍❌");
    }
  } catch (error) {
    return next(error);
  }
};

//!Get all

const getAll = async (req, res, next) => {
  try {
    const characterAll = await Character.find();

    if (characterAll.length > 0) {
      return res.status(200).json({ data: characterAll });
    } else {
      res.status(404).json("no se encuentra el character de all 👪❌");
    }
  } catch (error) {
    return next(error);
  }
};

//!Get by name

const getByName = async (req, res, next) => {
  try {
    const { name } = req.query;
    const characterByName = await Character.find({ name });

    if (characterByName.length > 0) {
      return res.status(200).json({ data: characterByName });
    } else {
      res.status(404).json("no se encuentra el character por name 🅰️❌");
    }
  } catch (error) {
    return next(error);
  }
};

module.exports = { createCharacter, getById, getAll, getByName };
