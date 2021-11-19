import React from "react";
import { Box, useColorMode } from "@chakra-ui/react";
import OutputSkeleton from "./OutputSkeleton";
import DataDisplay from "./DataDisplay";

const OutputDeck = ({ data, loading }) => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Box
        p={4}
        borderRadius={10}
        maxW={"100%"}
        bg={
          colorMode === "light" ? "brand.boxAccentLight" : "brand.boxAccentDark"
        }
      >
        {loading ? (
          <OutputSkeleton loading={loading} />
        ) : (
          <DataDisplay data={data} />
        )}
      </Box>
    </>
  );
};

export default OutputDeck;
