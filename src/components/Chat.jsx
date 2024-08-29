import React, { useState, useRef, useEffect } from 'react';
import { CloseButton, Heading, Box, VStack, Flex, Input, Button } from "@chakra-ui/react";
import { Message } from "./Message";

export const Chat = ({ messages, chatRoom, closeChat, sendMessage }) => {
    const [message, setMessage] = useState('');
    const messagesEndRef = useRef();




    useEffect(() => {
        messagesEndRef.current.scrollIntoView();
    }, [messages])

    const OnsendMessage = () => {
        sendMessage(message);
        setMessage("");
    };

    return (
        <Box
            bg="white"
            p={8}
            rounded="md"
            shadow="md"
            width="80vh"
            maxW="1200px" // Максимальная ширина для ограничения размера
            height="80vh"
            maxH="80vh"
            mx="auto"
            display="flex"
            flexDirection="column"
        >
            <Flex direction="row" justify="space-between" align="center" mb={5}>
                <Heading size="lg">{chatRoom}</Heading>
                <CloseButton onClick={closeChat} />
            </Flex>
            <Box
                flex="1"
                overflowY="auto"
                p={3}
                borderWidth="1px"
                borderColor="gray.200"
                borderRadius="md"
                bg="gray.50"
                mb={4} // Отступ снизу для поля ввода и кнопки
            >
                <VStack spacing={3} align="stretch">
                    {messages.map((messageInfo, index) => (
                        <Message messageInfo={messageInfo} key={index} />
                    ))}
                    <span ref={messagesEndRef} />
                </VStack>
            </Box>
            <Flex direction="row" mt={2}>
                <Input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Enter your message"
                    mr={2}
                    flex="1"
                />
                <Button onClick={OnsendMessage} colorScheme="blue">
                    Send
                </Button>
            </Flex>
        </Box>
    );
};




