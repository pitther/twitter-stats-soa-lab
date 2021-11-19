import MainLayout from "./layout/MainLayout";
import { ChakraProvider } from "@chakra-ui/react";
import MainContent from "./components/MainContent";
import { customTheme } from "./styles/theme";

function App() {
  return (
    <ChakraProvider resetCss theme={customTheme}>
      <MainLayout>
        <MainContent />
      </MainLayout>
    </ChakraProvider>
  );
}

export default App;
