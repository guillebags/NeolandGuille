const { uploadPlatform } = require("../../middleware/files.middleware");
const {
  postPlatform,
  getByName,
  getById,
  updatePlatform,
} = require("../controllers/Platform.controller");

const PlatformRoutes = require("express").Router();

PlatformRoutes.post("/", uploadPlatform.single("image"), postPlatform);
PlatformRoutes.get("/:id", getById);
PlatformRoutes.get("/getByName/name", getByName);
PlatformRoutes.patch(
  "/update/:id",
  uploadPlatform.single("image"),
  updatePlatform
);

module.exports = PlatformRoutes;
