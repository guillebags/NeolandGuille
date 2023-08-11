const { uploadPlatform } = require("../../middleware/files.middleware");
const { postPlatform } = require("../controllers/Platform.controller");

const PlatformRoutes = require("express").Router();

PlatformRoutes.post("/", uploadPlatform.single("image"), postPlatform);

module.exports = PlatformRoutes;
