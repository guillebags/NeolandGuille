import "./App.css";
import { Outlet } from "react-router-dom";
import { AuthContextProvider } from "./context/authContext";
import { Footer, Header } from "./components";

const App = () => {
  return (
    <>
      <AuthContextProvider>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </AuthContextProvider>
    </>
  );
};

export default App;
