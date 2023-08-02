//requerir express, nodemailer y dotenv

const express = require("express");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

//ejecutamos dotenv

dotenv.config();

//llamamos al servidor

const server = express();

//creamos una ruta

const router = express.Router();

const URL = process.env.URL;

const PORT = process.env.PORT;

router.get("/sendNewMail", (req, res) => {
  const EMAIL_NODEMAILER = process.env.EMAIL_ENV;

  const PASSWORD = process.env.PASSWORD_ENV;
  console.log("CONTRASEÑA", PASSWORD);
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: EMAIL_NODEMAILER,
      pass: PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailOptions = {
    from: EMAIL_NODEMAILER,
    to: "guillebags@gmail.com",
    subject: "Confirmation TEST NODEMAILER",
    text: `este mail lo he enviado automáticamente con mi código`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    console.log(error);
    if (error) {
      return error;
    } else {
      return res.status(200).json("Email enviado" + info.response);
    }
  });
});

server.use("/", router);

server.listen(PORT, () => {
  console.log(`server running on ${URL}`);
});
