import React, { useState } from 'react';
import { Box, Button, Input, VStack, FormControl, FormLabel } from '@chakra-ui/react';

export const JoinChatMenu = ({ joinChat }) => {
  const [nickname, setNickname] = useState('');
  const [chatRoom, setChatRoom] = useState('');
    const onSubmit = (e) => {
        e.preventDefault();
        joinChat(nickname, chatRoom);
    }
  

  return (
      <Box
      as="form"
          onSubmit={onSubmit}
      bg="gray.700" 
      p={5} 
      rounded="md" 
      boxShadow="md"
      width="400px"  
      maxW="100%"   
      mx="auto"     
      mt={10}
    >
      <VStack spacing={4} width="100%">
        <FormControl id="nickname">
          <FormLabel color="white">Nickname</FormLabel>
          <Input 
            type="text" 
            placeholder="Enter your nickname" 
            value={nickname} 
            onChange={(e) => setNickname(e.target.value)} 
            bg="white"
            _placeholder={{ color: 'gray.500' }}
            size="md" // Размер полей остается стандартным
          />
        </FormControl>

        <FormControl id="chatRoom">
          <FormLabel color="white">Chat Room</FormLabel>
          <Input 
            type="text" 
            placeholder="Enter chat room name" 
            value={chatRoom} 
            onChange={(e) => setChatRoom(e.target.value)} 
            bg="white"
            _placeholder={{ color: 'gray.500' }}
            size="md" // Размер полей остается стандартным
          />
        </FormControl>

        <Button 
          type="submit"
          colorScheme="teal" 
          size="lg" 
                 // onClick={joinChat} 
          width="full" // Кнопка занимает всю ширину контейнера
        >
          Join Chat
        </Button>
      </VStack>
    </Box>
  );
};

export default JoinChatMenu;

