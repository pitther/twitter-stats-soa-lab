import React from "react";
import {
  Box,
  Button,
  Center,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { AtSignIcon, Search2Icon } from "@chakra-ui/icons";

const InputForm = ({ analyze, setUserName, userName }) => {
  const onInputUserName = (value) => {
    setUserName(value.target.value);
  };
  return (
    <Box my={4} borderRadius={10} p={4}>
      <Box>
        <Box w={"100%"}>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<AtSignIcon color="gray.300" />}
            />
            <Input
              onChange={onInputUserName}
              value={userName}
              type="tel"
              placeholder="Input user name"
            />
          </InputGroup>
        </Box>
      </Box>
      <Box w={"100%"} mt={4}>
        <Center>
          <Button
            size={"sm"}
            variant="primary-outline"
            onClick={analyze}
            rightIcon={<Search2Icon />}
          >
            Analyze
          </Button>
        </Center>
      </Box>
    </Box>
  );
};

export default InputForm;
