const express = require("express");

const dotenv = require("dotenv");
const { configCloudinary } = require("./middleware/files.middleware");
const { connect } = require("./utils/DB.JS");
const UserRoutes = require("./api/routes/User.routes");

dotenv.config();

configCloudinary;

connect();

const PORT = process.env.PORT;

const app = express();

//limitacion de datos
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ limit: "5mb", extended: false }));

//rutas

app.use("*", (req, res, next) => {
  const error = new Error("Ruta no encontrada ❌");
  error.status = 404;
  return next(error);
});

app.use((error, req, res) => {
  return res
    .status(error.status || 500)
    .json(error.message || "Error inesperado 😯");
});

app.disable("x-powered-by");

app.listen(PORT, () => {
  console.log(
    `Servidor escuchando en el puerto: ${PORT}, en http://localhost:${PORT}`
  );
});

app.use("/api/v1/users", UserRoutes);
