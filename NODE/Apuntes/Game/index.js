//imports

import fs from "fs";
import puppeteer from "puppeteer";

//funcion que hace el scrapping

const scrapping = async () => {
  const BASE_URL = "https://www.game.es/buscar/reserva-brv";

  //creamos el browser /el explorador
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"],
  });

  //abrimos una pagina en el navegador
  const page = await browser.newPage();

  //le metemos la url para que navegue
  await page.goto(BASE_URL);

  //le decimos que espere unos segundos porque tarda
  await page.waitForTimeout(4000); //--> esperamos 4s

  //hacemos varios scrolls para que obtenga todos los datos
  await page.evaluate(() => {
    //tengo que ver que elemento del html tengo al final para apuntar a el
    const endElement = document.getElementById("l-footer");
    const y = endElement.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: y });
  });

  await page.waitForTimeout(6000);

  await page.evaluate(() => {
    //tengo que ver que elemento del html tengo al final para apuntar a el
    const endElement = document.getElementById("l-footer");
    const y = endElement.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: y });
  });

  await page.waitForTimeout(6000);

  await page.evaluate(() => {
    //tengo que ver que elemento del html tengo al final para apuntar a el
    const endElement = document.getElementById("l-footer");
    const y = endElement.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: y });
  });

  await page.waitForTimeout(6000);

  await page.evaluate(() => {
    //tengo que ver que elemento del html tengo al final para apuntar a el
    const endElement = document.getElementById("l-footer");
    const y = endElement.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: y });
  });

  await page.waitForTimeout(6000);

  //vamos a esperar a que los elementos esten disponibles
  await page.waitForSelector(".search-item");

  //capturamos los elementos en pantalla

  const titles = await page.$$eval("a.cm-txt", (nodes) =>
    nodes.map((node) => node.innerText)
  );
  const images = await page.$$eval(".img-responsive", (nodes) =>
    nodes.map((node) => node.src)
  );
  const prices = await page.$$eval("div.buy--price", (nodes) =>
    nodes.map((node) => node.innerText)
  );

  //como son arrays paralelos, podemos construir un array con los tres elementos caracteristicos del scrapping
  const gameProducts = titles.map((item, index) => ({
    title: titles[index],
    image: images[index],
    price: prices[index],
  }));

  //la posicion ultima de gameProducts es vacía ---> pop()
  gameProducts.pop();
  3;

  const gameString = JSON.stringify(gameProducts);

  fs.writeFile("prueba.json", gameString, () =>
    console.log("archivo escrito...👌")
  );

  //cerramos el navegador
  await browser.close();
};

//llamar a la funcion
scrapping();
