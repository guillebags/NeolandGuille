import { useState } from "react";
import "./App.css";
import Movie from "./components/Movie";
import Review from "./components/Review";

const App = () => {
  const [score, setScore] = useState(0);

  const useChangeScore = (e) => {
    return setScore(e.target.valueAsNumber);
  };

  return (
    <>
      <div className="App">
        <Movie
          title="Guardianes de la Galaxia"
          poster="https://m.media-amazon.com/images/I/61-ndDQWTdL._AC_.jpg"
        />
        <hr />

        <label>Cambia tu puntuación:</label>
        <br />
        <input type="number" value={score} onChange={useChangeScore} />
        <Review
          title="La he disfrutado muchísimo, siempre es un placer ver a los guardianes en acción"
          score={score}
        />
      </div>
    </>
  );
};

export default App;
