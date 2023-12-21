import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Contact from "./Contact";
import { Container } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <div>
        <Container padding={50}>
          <Contact />
        </Container>
      </div>
    </ChakraProvider>
  );
}

export default App;
