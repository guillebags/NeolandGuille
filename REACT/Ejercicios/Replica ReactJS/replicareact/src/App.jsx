import "./App.css";
import { Outlet } from "react-router-dom";
import { ChakraProvider, Divider } from "@chakra-ui/react";
import { Footer, Header } from "./components";

const App = () => {
  return (
    <>
      <ChakraProvider>
        <Header />

        <main>
          <Divider />
          <Outlet />
        </main>
        <Footer />
      </ChakraProvider>
    </>
  );
};

export default App;
