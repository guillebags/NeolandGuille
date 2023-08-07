const { isAuth, isAuthAdmin } = require("../../middleware/auth.middleware");
const { upload } = require("../../middleware/files.middleware");
const {
  register,
  checkNewUser,
  resendCode,
  login,
  autoLogin,
  changePassword,
  sendPassword,
  modifyPassword,
  update,
  deleteUser,
} = require("../controllers/User.controller");

const express = require("express");
const UserRoutes = express.Router();

UserRoutes.post("/register", upload.single("image"), register);
UserRoutes.post("/check", checkNewUser);
UserRoutes.post("/resend", resendCode);
UserRoutes.post("/login", login);
UserRoutes.post("/login/autologin", autoLogin);
UserRoutes.patch("/forgotpassword/forgotpassword", changePassword);
UserRoutes.patch("/sendPassword/:id", sendPassword);
UserRoutes.patch("/changepassword", [isAuth], modifyPassword);
UserRoutes.patch("/update/update", [isAuth], upload.single("image"), update);
UserRoutes.delete("/", [isAuth], deleteUser);

module.exports = UserRoutes;
