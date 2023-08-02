//requerir el protocolo http

const http = require("http");

//crear el servidor web

const app = http.createServer((req, res) => {
  //?configuramos la respuesta del servidor

  res.statusCode = 200; //todo ok
  res.setHeader("Content-Type", "text/plain");
  res.end("tengo hambre");
});

//asignar un puerto al server y lo "escuchamos" listen

app.listen(8080, () => {
  console.log("Server listening on port http://localhost:8080");
});
