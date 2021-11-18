import React from 'react';
import {Box, Button, Center, Heading, Input, InputGroup, InputLeftElement, Text} from "@chakra-ui/react";
import {Search2Icon, ViewIcon} from "@chakra-ui/icons";

const MainContent = () => {
    return (
        <Center w={'100%'}>
            <Box m={4} w={['100%', '400px', '400px']}>
                <Heading>This app</Heading>
                <Text>allows you to rate twitter users accounts</Text>
                <Box my={4}>
                    <Box my={4}>
                        <Text>Input user name:</Text>
                        <Box w={'100%'}>
                            <InputGroup>
                                <InputLeftElement
                                    pointerEvents="none"
                                    children={<ViewIcon color="gray.300"/>}
                                />
                                <Input type="tel" placeholder="User nickname"/>
                            </InputGroup>
                        </Box>
                    </Box>
                    <Box>
                        <Text>Click analyze!</Text>
                        <Button colorScheme="blue" rightIcon={<Search2Icon/>}>
                            Analyze
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Center>
    );
};

export default MainContent;