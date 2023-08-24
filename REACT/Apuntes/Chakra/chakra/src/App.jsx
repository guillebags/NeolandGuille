import "./App.css";
import Avatars from "./components/Avatars/Avatars";
import Hero from "./components/Hero/Hero";
import Media from "./components/Media/Media";
import GridExample from "./components/GridExample/GridExample";
import DrawerEx from "./components/DrawerEx/DrawerEx";

function App() {
  return (
    <>
      <Media />
      <Hero />
      <Avatars />
      <GridExample />
      <DrawerEx />
    </>
  );
}

export default App;
