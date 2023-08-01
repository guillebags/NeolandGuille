const puppeteer = require("puppeteer");
const mongoose = require("mongoose");

//creo un modelo de datos llamado Data utilizando Mongoose con dos campos, título y precio
const Data = mongoose.model(
  "Data",
  new mongoose.Schema({
    title: String,
    price: String,
  })
);

//defino una funcion para conectarme a la base de datos de MongoDB
const connect = async () => {
  try {
    const URI =
      "mongodb+srv://guillebags:neoland@guillebags.v5aezmb.mongodb.net/?retryWrites=true&w=majority";
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB 👌");
  } catch (error) {
    console.log("Not connected to MongoDB 😢");
  }
};

//defino una funcion para extraert los datos de la pagina web
const scrapeProducts = async () => {
  //llamo a connect para conectarme a la base de datos
  await connect();

  //inicializo el navegador con puppeteer y se abre una nueva pestaña
  const url = "https://www.amazon.es/";

  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"],
  });

  const page = await browser.newPage();

  //navego a la url y hago una busqueda utilizando el str star wars
  await page.goto(url);

  await page.type("#twotabsearchtextbox", "star wars");

  await page.click("#nav-search-submit-button");

  //se espera a que la pagina se cargue y se hace scroll para ver todos los resultados de busqueda
  await page.waitForSelector(".s-pagination-next");

  //utilizo .$$eval de puppeteer y extraigo los titulos y precios de los productos
  const title = await page.$$eval("h2 span.a-color-base", (nodes) =>
    nodes.map((n) => n.innerText)
  );

  const price = await page.$$eval(
    'span.a-price[data-a-color="base"] span.a-offscreen',
    (nodes) => nodes.map((n) => n.innerText)
  );

  //creo un array con los datos extraídos y se convierte en un objeto JSON
  const amazonProduct = title.map((value, index) => {
    return {
      title: title[index],
      price: price[index],
    };
  });

  //guardo el JSON en la base de datos MongoDB
  amazonProduct.map(async (data) => {
    const dataSchema = new Data(data);
    try {
      await dataSchema.save();
      console.log(`Successfully saved ${dataSchema.title} to the database 😁`);
    } catch (error) {
      console.error(`Failed to save ${dataSchema.title} to the database ❌`);
    }
  });

  //cierro el navegador e imprimo un mensaje de exito
  await browser.close();
  console.log("All saved Successfully - Live Lady Gaga 💅");
};

//finalmente llamo a la funcion scrapeProducts para iniciar el proceso de extraccion y guardado de datos
scrapeProducts();
