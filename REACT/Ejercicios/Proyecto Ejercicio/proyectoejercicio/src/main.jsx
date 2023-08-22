import React from "react";
import App from "./App.jsx";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import Characters from "./routes/Characters.jsx";
import Spells from "./routes/Spells.jsx";
import Home from "./routes/Home.jsx";
import Login from "./routes/Login.jsx";
import Register from "./routes/Register.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
      { path: "/", element: <Home /> },
      {
        path: "/characters",
        element: <Characters />,
      },
      { path: "/spells", element: <Spells /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
