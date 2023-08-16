import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import List from "./components/List";

const App = () => {
  const [count, setCount] = useState(0);
  const [hour, setHour] = useState(0);
  const data = [
    { question: "Is this a question?", answer: "This is an answer" },
    { question: "¿Esto es una pregunta?", answer: "Esto es una respuesta" },
    { question: "Això és una pregunta?", answer: "Això és una resposta" },
  ];
  let darkMode = false;

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div>
        <input onChange={(e) => setHour(e.target.value)}></input>
      </div>
      <label>
        {hour > 5 && hour < 13
          ? " Buenos días"
          : hour > 12 && hour < 20
          ? " Buenas tardes"
          : (hour > 19 || hour < 6) && " Buenas noches"}
      </label>
      <div>
        {data.map((item, index) => (
          <List
            question={item.question}
            answer={item.answer}
            key={item.question + index}
          />
        ))}
      </div>

      <button
        onClick={() => {
          darkMode
            ? ((document.querySelector("body").style.background = "#404249"),
              (document.querySelector("body").style.color = "white"),
              (darkMode = false))
            : ((document.querySelector("body").style.background = "white"),
              (document.querySelector("body").style.color = "black"),
              (darkMode = true));
        }}
      >
        Dark Mode
      </button>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};

export default App;
