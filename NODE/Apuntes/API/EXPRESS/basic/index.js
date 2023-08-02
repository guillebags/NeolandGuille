// requerir express

const express = require("express");

// crear una variable con el puerto

const PORT = 8080;

// crear el servidor

const app = express();

// escuchamos el servidor en el puerto

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`);
});
