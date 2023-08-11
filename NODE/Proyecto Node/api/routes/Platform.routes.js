const { uploadPlatform } = require("../../middleware/files.middleware");
const {
  postPlatform,
  getByName,
  getById,
} = require("../controllers/Platform.controller");

const PlatformRoutes = require("express").Router();

PlatformRoutes.post("/", uploadPlatform.single("image"), postPlatform);
PlatformRoutes.get("/:id", getById);
PlatformRoutes.get("/getByName/name", getByName);

module.exports = PlatformRoutes;
