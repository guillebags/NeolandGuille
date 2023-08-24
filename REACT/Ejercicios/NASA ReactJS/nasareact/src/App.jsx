import { useState } from "react";
import axios from "axios";
import "./App.css";
import { useEffect } from "react";
import Figure from "./components/Figure";

const App = () => {
  //Recuperamos la fecha actual en un formato ISO -> 2022-01-01
  const today = new Date(Date.now()).toISOString().slice(0, 10);
  //Creamos una variable de estado llamada apod inicializada como objeto vacío
  const [apod, setApod] = useState({});
  //Creamos una variable de estado llamada date con la fecha del día actual formateada
  const [date, setDate] = useState(today);
  //Almacenamos en una constante la URL de la NASA
  const NASA_URL = "https://api.nasa.gov/";
  //Almacenamos en una constante nuestra API Key, esto es recomendable almacenarlo en una variable de entorno
  const NASA_API_KEY = import.meta.env.VITE_APIKEY;

  useEffect(() => {
    const getApod = async () => {
      const data = await axios.get(
        `${NASA_URL}planetary/apod?date=${date}&api_key=${NASA_API_KEY}`
        //! ----------------hay que poner la api key personal aquí----------------
      );
      setApod(data.data);
    };
    getApod();
  }, [date]);

  const handleInput = (e) => {
    setDate(e.target.value.toLocaleString());
  };

  return (
    <>
      <div className="App">
        <h2 className="title">
          NASA API
          <img
            src="https://api.nasa.gov/assets/img/favicons/favicon-192.png"
            className="logo"
            alt="NASA LOGO"
          />
        </h2>
        <h1>Astronomy Picture of the Day</h1>
        <input type="date" id="photo-date" onChange={handleInput} />
        {date > today ? (
          <h2>Please choose a previous date</h2>
        ) : (
          <Figure data={apod} />
        )}
        <div className="standard-dialog center">
          <h1 className="dialog-text">
            <a href="https://api.nasa.gov/">https://api.nasa.gov/</a>
          </h1>
        </div>
      </div>
    </>
  );
};

export default App;
