const { deleteImgCloudinary } = require("../../middleware/files.middleware");
const {
  getTestEmailSend,
  setTestEmailSend,
} = require("../../state/state.data");
const randomCode = require("../../utils/randomCode");
const sendEmail = require("../../utils/sendEmail");
const User = require("../models/User.model");

//! REGISTER CONTROLLER
const register = async (req, res, next) => {
  let catchImg = req.file?.path;
  try {
    await User.syncIndexes();
    let confirmationCode = randomCode();
    const { email, name } = req.body;
    //aqui ponemos el email y el name por separado porque ambos son unique 💅, si no, {email:req.body.email, name:req.body.name}
    const userExist = await User.findOne(
      { email: req.body.email },
      { name: req.body.name }
    );

    if (!userExist) {
      const newUser = new User({ ...req.body, confirmationCode });
      if (req.file) {
        newUser.image = req.file.path;
      } else {
        newUser.image =
          "https://res.cloudinary.com/dluwybogp/image/upload/v1690188399/Hub%20App/logoRotom_aprkjj.png";
      }

      try {
        const userSave = await newUser.save();

        if (userSave) {
          sendEmail(email, name, confirmationCode);
          setTimeout(() => {
            if (getTestEmailSend()) {
              setTestEmailSend(false);
              return res.status(200).json({
                user: userSave,
                confirmationCode,
              });
            } else {
              setTestEmailSend(false);
              return res.status(404).json({
                user: userSave,
                confirmationCode: "error, resend code",
              });
            }
          }, 1100);
        }
      } catch (error) {
        return res.status(404).json(error.message);
      }
    } else {
      if (req.file) deleteImgCloudinary(catchImg);
      return res.status(409).json("this user already exists");
    }
  } catch (error) {
    if (req.file) deleteImgCloudinary(catchImg);
    return next(error);
  }
};

module.exports = register;
