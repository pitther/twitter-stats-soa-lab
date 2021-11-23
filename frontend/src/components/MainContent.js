import React, { useState } from "react";
import { Box, Center, Heading, Text, useToast } from "@chakra-ui/react";
import InputForm from "./InputForm";
import OutputDeck from "./OutputDeck";

const MainContent = () => {
  const [userName, setUserName] = useState("");
  const [data, setData] = useState();
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  const analyze = async () => {
    if (!userName) {
      toast({
        title: "Enter username",
        status: "warning",
        duration: 2000,
        position: "bottom-left",
        isClosable: true,
      });
      return;
    }
    setLoading(true);
    try {
      const response = await fetch(
          `/api/?userName=${userName}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
      );

      const data = await response.json();
      if (data.data) {
        toast({
          title: "Account found",
          description: "Data is being processed.",
          status: "success",
          duration: 4000,
          position: "bottom-left",
          isClosable: true,
        });
        setData({ error: false, ...data.data[0] });
      } else {
        toast({
          title: "Account is not found.",
          description: "Doublecheck username you provided.",
          status: "error",
          duration: 4000,
          position: "bottom-left",
          isClosable: true,
        });
        setData({ error: true });
      }
      setLoading(false);

    } catch (e) {
      toast({
        title: "Cannot send request to server.",
        description: e.toString(),
        status: "error",
        duration: 4000,
        position: "bottom-left",
        isClosable: true,
      });
      setData({ error: true });
      setLoading(false);
    }


  };

  return (
    <Center w={"100%"}>
      <Box
        m={4}
        w={[
          "100%", // 0-30em
          "100%", // 0-30em
          "500px", // 48em-62em
          "500px", // 48em-62em
          "500px", // 62em+
        ]}
      >
        <Heading>This app</Heading>
        <Text>allows you to rate twitter users accounts</Text>
        <InputForm
          analyze={analyze}
          userName={userName}
          setUserName={setUserName}
        />
        <OutputDeck data={data} loading={loading} />
      </Box>
    </Center>
  );
};

export default MainContent;
