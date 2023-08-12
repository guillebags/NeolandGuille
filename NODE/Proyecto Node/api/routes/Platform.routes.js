const { uploadPlatform } = require("../../middleware/files.middleware");
const {
  postPlatform,
  getByName,
  getById,
  updatePlatform,
  toggleGame,
  deletePlatform,
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
PlatformRoutes.patch("/toggle/:id", toggleGame);
PlatformRoutes.delete("/", deletePlatform);

module.exports = PlatformRoutes;
