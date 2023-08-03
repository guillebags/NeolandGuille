//! ---------------------- requerimos express y dotenv
const express = require("express");

const dotenv = require("dotenv");
dotenv.config();
//! ---------------------- crear una variable  con el puerto

const PORT = process.env.PORT;

//! ---------------------- creamos el servidor web
const app = express();

//! ---------------------- escuchamos en el puerto el servidor
app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`);
});
