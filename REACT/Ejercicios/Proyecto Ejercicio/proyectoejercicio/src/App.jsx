import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/UI/Header/Header";
import Footer from "./components/UI/Footer/Footer";
import Main from "./components/UI/Main/Main";

const App = () => {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};

export default App;
