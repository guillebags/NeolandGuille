import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import "./index.css";

// Import Pages
import DigitalClock from "./pages/Digital Clock/DigitalClock";
import Home from "./pages/Home/Home";
import Countdown from "./pages/Countdown/Countdown";
import Timer from "./pages/Timer/Timer";
import Pokedex from "./pages/Pokedex/Pokedex";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="clock" element={<DigitalClock />} />
          <Route path="countdown" element={<Countdown />} />
          <Route path="timer" element={<Timer />} />
          <Route path="pokedex" element={<Pokedex />} />

          <Route
            path="*"
            element={
              <main>
                <p>404 - No existe la ruta!</p>
              </main>
            }
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
