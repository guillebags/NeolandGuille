import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Movie from "./components/Movie";
import Review from "./components/Review";

function App() {
  const [score, setScore] = useState(0);

  return (
    <>
      <Movie
        name={"Harry Potter"}
        cover={
          "https://i.blogs.es/2ad4d1/harry-potter-franquicia/1366_2000.jpg"
        }
      />
      <Review score={score} />
      <label>Por favor introduzca tu puntacion:</label>
      <input type="text" onChange={(e) => setScore(e.target.value)} />
    </>
  );
}

export default App;
