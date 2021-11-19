import React, { useEffect, useState } from "react";
import {
  Badge,
  Box,
  Center,
  CircularProgress,
  CircularProgressLabel,
  Heading,
  HStack,
  Text,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import DataDisplayCircleUnit from "./DataDisplayCircleUnit";
import { getRatedUser } from "../util/util";
import { AtSignIcon, CalendarIcon, LinkIcon } from "@chakra-ui/icons";

const DataDisplay = ({ data }) => {
  const { colorMode } = useColorMode();
  const [userStats, setUserStats] = useState({ found: false });
  useEffect(() => {
    if (data && !data.error) {
      setUserStats(getRatedUser(data));
    } else {
      if (userStats.found) setUserStats({ found: false });
    }
  }, [data]);

  return (
    <Box w={"100%"}>
      <Box display={userStats.found ? "none" : "block"}>
        <Center>
          <Heading size={"md"}>No user data.</Heading>
        </Center>
      </Box>
      <Box p={2} display={userStats.found ? "block" : "none"}>
        <VStack w={"100%"} spacing={5} align="stretch">
          <Box>
            <Box height="auto">
              <HStack>
                <Box>
                  <Heading>{userStats.name}</Heading>
                </Box>
                <Box ml={2}>
                  <HStack style={{ marginBottom: "10px" }} spacing="10px">
                    {userStats?.badges?.map((badge) => (
                      <Badge
                        key={badge.label}
                        variant="solid"
                        colorScheme={badge.color}
                      >
                        {badge.label}
                      </Badge>
                    ))}
                  </HStack>
                </Box>
              </HStack>

              <Text size="md">
                <AtSignIcon mr={2} />
                {userStats.userName}
              </Text>
              <Text>
                <CalendarIcon mr={2} />
                {userStats.createdAt}
              </Text>
              <Text>
                <LinkIcon mr={2} />#{userStats.id}
              </Text>
            </Box>
          </Box>
          <DataDisplayCircleUnit
            stats={[
              {
                number: userStats?.publicMetrics?.followersCount,
                label: "Followers",
              },
            ]}
            color={"#F6E05E"}
            label={"POPULARITY"}
            percentage={100 * userStats?.stats?.popularity}
          />

          <DataDisplayCircleUnit
            stats={[
              {
                number: userStats?.publicMetrics?.followingCount,
                label: "Following",
              },
              {
                number: userStats?.publicMetrics?.tweetCount,
                label: "Tweets",
              },
            ]}
            color={"#68D391"}
            label={"ACTIVITY"}
            percentage={100 * userStats?.stats?.activity}
          />

          <DataDisplayCircleUnit
            stats={[
              {
                number: userStats?.publicMetrics?.listedCount,
                label: "Listed tweets",
              },
            ]}
            color={"#76E4F7"}
            label={"MENTIONING"}
            percentage={100 * userStats?.stats?.mentioning}
          />
          <hr
            style={{
              borderTop: "2px dashed",
              borderColor: colorMode === "light" ? "#d0d1d4" : "rgb(31,39,50)",
            }}
          />
          <Center>
            <Heading size={"md"}>Total score</Heading>
          </Center>
          <Center>
            <CircularProgress
              size={40}
              value={userStats?.stats?.overall * 100}
              color={"#B794F4"}
            >
              <CircularProgressLabel fontSize={20}>
                {(userStats?.stats?.overall * 10).toFixed()}/10
              </CircularProgressLabel>
            </CircularProgress>
          </Center>
        </VStack>
      </Box>
    </Box>
  );
};

export default DataDisplay;
