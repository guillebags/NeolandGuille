import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <>
      <h2>Home Page</h2>

      <ul>
        <li>
          <p>
            <span>Check our: </span>
            <Link to="clock">Digital Clock</Link>
          </p>
        </li>
        <li>
          <p>
            <span>Check our: </span>
            <Link to="countdown">Count down</Link>
          </p>
        </li>
        <li>
          <p>
            <span>Check our: </span>
            <Link to="timer">Timer</Link>
          </p>
        </li>
        <li>
          <p>
            <span>
              <span class="new">(new) </span> Check our:{" "}
            </span>
            <Link to="pokedex">Pokedex</Link>
          </p>
        </li>
      </ul>
    </>
  );
};

export default Home;
