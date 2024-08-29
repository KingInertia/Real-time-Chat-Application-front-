import React from 'react';
import { Box, Text } from '@chakra-ui/react';

export const Message = ({ messageInfo }) => {
    return (
        <Box p={2} borderRadius="md" bg="blue.100" maxWidth="80%">
            <Text fontWeight="bold">{messageInfo.userName}</Text>
            <Text>{messageInfo.message}</Text>
        </Box>
    );
};