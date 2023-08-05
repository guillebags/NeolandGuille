const { isAuth, isAuthAdmin } = require("../../middleware/auth.middleware");
const { upload } = require("../../middleware/files.middleware");
const register = require("../controllers/User.controller");

const express = require("express");
const UserRoutes = express.Router();

UserRoutes.post("/register", upload.single("image"), register);

module.exports = UserRoutes;
