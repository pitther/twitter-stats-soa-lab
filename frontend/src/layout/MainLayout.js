import React from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Spacer,
  useColorMode,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const MainLayout = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box w={"100%"} p={4} bg={colorMode === "light" ? "red.300" : "tomato"}>
        <Flex>
          <Box>
            <Heading>SOA</Heading>
          </Box>
          <Box>
            <Heading fontSize={"md"}>-LAB8</Heading>
          </Box>
          <Spacer />
          <Box>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Box>
        </Flex>
      </Box>
      <Box py={4} w={"100%"}>
        <Center>{children}</Center>
      </Box>
    </>
  );
};

export default MainLayout;
