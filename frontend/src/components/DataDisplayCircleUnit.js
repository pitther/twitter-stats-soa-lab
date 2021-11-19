import React from "react";
import {
  Box,
  Center,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Grid,
  GridItem,
  Stat,
  StatLabel,
  StatNumber,
  Text,
  useColorMode,
} from "@chakra-ui/react";

const DataDisplayCircleUnit = ({ label, stats, percentage, color }) => {
  const { colorMode } = useColorMode();
  percentage = percentage.toFixed();
  return (
    <Box>
      <Grid w={"100%"} templateColumns="repeat(10, 1fr)">
        <GridItem
          colSpan={6}
          borderRight={"2px dashed"}
          borderColor={
            colorMode === "light"
              ? "brand.borderDividerLight"
              : "brand.borderDividerDark"
          }
        >
          <Center>
            <Flex justifyContent={"space-around"}>
              {stats.map((stat) => (
                <Stat key={stat.label} mx={2} textAlign={"center"}>
                  <StatLabel>{stat.label}</StatLabel>
                  <StatNumber>{stat.number}</StatNumber>
                </Stat>
              ))}
            </Flex>
          </Center>
        </GridItem>
        <GridItem colSpan={4}>
          <Grid w={"100%"} templateColumns="repeat(10, 1fr)" gap={0}>
            <GridItem colSpan={2}>
              <Center>
                <Box
                  my={9}
                  width={"100px"}
                  transform={"rotate3d(0,0,1,-90deg)"}
                >
                  <Text>{label}</Text>
                </Box>
              </Center>
            </GridItem>

            <GridItem colSpan={8}>
              <Center>
                <CircularProgress
                  my={2}
                  size={20}
                  value={percentage}
                  color={color}
                >
                  <CircularProgressLabel fontSize={20}>
                    {percentage}%
                  </CircularProgressLabel>
                </CircularProgress>
              </Center>
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default DataDisplayCircleUnit;
