import React from 'react';
import {Box, Center, Flex, Heading, Spacer} from "@chakra-ui/react";

const MainLayout = ({children}) => {
    return (
        <>
            <Box w={"100%"} p={4} bg={'tomato'}>
                <Flex>
                    <Box>
                        <Heading>SOA</Heading>
                    </Box>
                    <Box>
                        <Heading fontSize={'md'}>-LAB8</Heading>
                    </Box>
                </Flex>
            </Box>
            <Box py={4} w={'100%'}>
                <Center>
                    {children}
                </Center>
            </Box>
        </>
    );
};

export default MainLayout;