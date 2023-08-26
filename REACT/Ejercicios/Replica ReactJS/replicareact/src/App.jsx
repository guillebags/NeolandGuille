import "./App.css";
import { Outlet } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Footer, Header } from "./components";

const App = () => {
  return (
    <>
      <ChakraProvider>
        <Header />

        <main>
          <Outlet />
        </main>
        <Footer />
      </ChakraProvider>
    </>
  );
};

export default App;
