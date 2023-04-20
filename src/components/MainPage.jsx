import React, { createContext, useState } from "react";
import '../styles/mainPage.scss';
import MainChatWindow from "./MainChatWindow";
import Header from "./Header";
import InputWindow from "./InputWindow";

export const ChatContext = createContext();

const MainPage = () => {
    const [currentChat, setCurrentChat] = useState([{id: 'user', text: 'Test text'}, {id: 'chat', text: 'Test text chat'}, {id: 'user', text: 'Test text 10'}])
    const [input, setInput] = useState('')

    return (
        <ChatContext.Provider value={currentChat}>
            <div className="main-page-container">
                <Header />
                <MainChatWindow />
                <InputWindow props={{currentChat, setCurrentChat, input, setInput}}/>
            </div>
        </ChatContext.Provider>
    );
}
 
export default MainPage;
