const { uploadPlatform } = require("../../middleware/files.middleware");
const {
  postPlatform,
  getByName,
  getById,
  updatePlatform,
  toggleGame,
  deletePlatform,
  getAllPlatforms,
  getPopularPlatforms,
  getAmountPlatforms,
} = require("../controllers/Platform.controller");

const PlatformRoutes = require("express").Router();

PlatformRoutes.post("/", uploadPlatform.single("image"), postPlatform);
PlatformRoutes.get("/:id", getById);
PlatformRoutes.get("/getByName/name", getByName);
PlatformRoutes.get("/", getAllPlatforms);
PlatformRoutes.patch(
  "/update/:id",
  uploadPlatform.single("image"),
  updatePlatform,
);
PlatformRoutes.patch("/toggle/:id", toggleGame);
PlatformRoutes.delete("/:id", deletePlatform);
PlatformRoutes.get("/get/popular/platforms/sorted", getPopularPlatforms);
PlatformRoutes.get("/get/platforms/by/amount/of/games", getAmountPlatforms);

module.exports = PlatformRoutes;
