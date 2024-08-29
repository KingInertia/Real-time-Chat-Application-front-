import React from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';

const Layout = ({ children }) => {
    return (
        <Flex
            direction="column"
            minH="100vh" // Минимальная высота 100% высоты экрана
            bg="gray.800" // Фон для всего контейнера
            p={4} // Отступы для контейнера
        >
            {/* Шапка */}
            <Box bg="gray.900" p={4} mb={6} textAlign="center">
                <Text color="white" fontSize="2xl" fontWeight="bold">
                    Chat Application
                </Text>
            </Box>

            {/* Основной контент */}
            <Flex
                direction="column"
                flex="1" // Позволяет основному контенту занимать оставшееся пространство
                align="center" // Центрирует контент по горизонтали
                justify="center" // Центрирует контент по вертикали
                width="100%" // Ширина на 100% для основного контента
                maxW="1600px" // Максимальная ширина для основного контента
                mx="auto" // Центрирование по горизонтали
            >
                {children}
            </Flex>

            {/* Футер */}
            <Box bg="gray.900" p={4} mt={6} textAlign="center">
                <Text color="white" fontSize="sm">
                    © 2024 Chat Application. All rights reserved.
                </Text>
            </Box>
        </Flex>
    );
};

export default Layout;




