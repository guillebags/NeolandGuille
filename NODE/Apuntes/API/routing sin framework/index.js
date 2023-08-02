//requerir el protocolo http

const http = require("http");

//crear el servidor web

const requestHandler = (req, res) => {
  console.log(req.url);
  if (req.url === "/saludo") res.end("<h1>HOLAA</h1>");
  if (req.url === "/despedida") res.end("<h1>Adios adios</h1>");
  if (req.url === "/users" && req.method === "GET") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ saludo: "Hola", despedida: "Adiosh" }));
  }
};

const app = http.createServer(requestHandler);

//asignar un puerto al server y lo "escuchamos" listen

app.listen(8080, () => {
  console.log("Server listening on port http://localhost:8080");
});
