import React from "react";
import { Box, Progress, Skeleton, Stack } from "@chakra-ui/react";

const OutputSkeleton = ({ loading }) => {
  return (
    <Box display={loading ? "block" : "none"} maxW={"100%"}>
      <Box>
        <Progress hasStripe value={64} isIndeterminate={loading} />
      </Box>

      <Box>
        <Stack>
          <Skeleton isLoaded={!loading} height="20px" />
          <Skeleton isLoaded={!loading} height="20px" />
          <Skeleton isLoaded={!loading} height="20px" />
        </Stack>
      </Box>
    </Box>
  );
};

export default OutputSkeleton;
