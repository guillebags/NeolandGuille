import "./App.css";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="App">
        <header className="header">
          <h1>React Router v6 🧪</h1>
        </header>
        <main>
          <div>
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
};

export default App;
