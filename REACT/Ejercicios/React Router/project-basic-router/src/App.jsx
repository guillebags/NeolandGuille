import "./App.css";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  return (
    <div className="App">
      <header className="header">
        <h1>React Router v6 🧪</h1>
        <NavBar />
      </header>
      <main>
        <div>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default App;
