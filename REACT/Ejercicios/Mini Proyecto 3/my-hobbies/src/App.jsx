import "./App.css";
import Languages from "./components/Languages/Languages";
import Movies from "./components/Movies/Movies";
import Read from "./components/Read/Read";
import SongsHeard from "./components/SongsHeard/SongsHeard";
import Sports from "./components/Sports/Sports";

function App() {
  return (
    <>
      <h1>My main hobbies</h1>
      <Read />
      <Sports />
      <Movies />
      <Languages />
      <SongsHeard />
    </>
  );
}

export default App;
