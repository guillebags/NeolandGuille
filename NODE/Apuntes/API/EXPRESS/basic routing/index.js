// requerir express

const express = require("express");

// crear una variable con el puerto

const PORT = 8080;

// crear el servidor

const app = express();

//! ROUTING

const router = express.Router();

router.get("/", (req, res, next) => {
  //? es el controlador de la ruta
  res.send("<h1>Hello world 💅</h1>");
});

router.get("/movies", (req, res) => {
  const wizards = ["Hermione", "Draco", "Luna"];
  res.send(wizards); //! aquí no hace falta stringifarlo porque express tiene un proceso por detrás para ello
});

app.use("/api/v1/", router);

// escuchamos el servidor en el puerto

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`);
});
