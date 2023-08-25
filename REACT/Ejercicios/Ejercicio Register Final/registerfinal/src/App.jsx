import "./App.css";
import { Outlet } from "react-router-dom";
import { AuthContextProvider } from "./context/authContext";
import { Footer, Header } from "./components";
import { ChakraProvider } from "@chakra-ui/react";

const App = () => {
  return (
    <>
      <ChakraProvider>
        <AuthContextProvider>
          <Header />
          <main>
            <Outlet />
          </main>
          <Footer />
        </AuthContextProvider>
      </ChakraProvider>
    </>
  );
};

export default App;
