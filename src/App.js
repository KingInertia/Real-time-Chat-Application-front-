import React, { useState } from 'react';  // Импорт useState
import JoinChatMenu from './components/JoinChatMenu';
import { HubConnectionBuilder } from '@microsoft/signalr';
import { Chat } from './components/Chat';

function App() {
    const [connection, setConnection] = useState(null);
    const [chatRoom, setChatRoom] = useState("");
    const [messages, setMessages] = useState([]);



    const joinChat = async (userName, chatRoom) => {
        const newConnection = new HubConnectionBuilder()
            .withUrl("http://localhost:5272/chat")
            .withAutomaticReconnect()
            .build();

        newConnection.on("ReceiveMessage", ( userName, message) => {
            
                setMessages((prevMessages) => [...prevMessages, { userName, message }]);
            
        });

        try {
            await newConnection.start();
            await newConnection.invoke("JoinChat", { userName, chatRoom });
            setConnection(newConnection);
            setChatRoom(chatRoom);
            console.log(newConnection); // Должно выводиться, если соединение успешно
        } catch (error) {
            console.log(error);
        }
    };

    const sendMessage = (message) => {
        connection.invoke("SendMessage", message);
    };

    const closeChat = async () => {
        await connection.stop();
        setConnection(null);
    };

    return (
        <div className="App">
            {connection ? (
                <Chat messages={messages} chatRoom={chatRoom} closeChat={closeChat} sendMessage={sendMessage} closeChat={closeChat}/>
            ) : (
                <JoinChatMenu joinChat={joinChat} />
            )}
        </div>
    );
}

export default App;


