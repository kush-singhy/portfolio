import "./App.css";
import Navbar from "./Navbar";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <div>
        <Navbar />
      </div>
    </ChakraProvider>
  );
}

export default App;
