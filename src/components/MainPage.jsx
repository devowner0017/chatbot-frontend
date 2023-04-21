import React, { createContext, useState } from "react";
import '../styles/mainPage.scss';
import MainChatWindow from "./MainChatWindow";
import Header from "./Header";
import InputWindow from "./InputWindow";
import BurgerMenuMain from "./burgerMenu/BurgerMenuMain";

export const ChatContext = createContext();

const MainPage = () => {
    const [currentChat, setCurrentChat] = useState([{id: 'user', text: 'Test text'}, {id: 'chat', text: 'Test text chat'}, {id: 'user', text: 'Test text 10'}])
    const [input, setInput] = useState('')
    const [isBurgerOpen, setIsBurgerOpen] = useState(false)

    return (
        <ChatContext.Provider value={{currentChat, isBurgerOpen, setIsBurgerOpen}}>
            <div className="main-container">
                <div className={`main-burger-display ${isBurgerOpen ? "" : 'main-burger-hidden'}`}> 
                    <BurgerMenuMain />
                </div>
                <div className="home-page-container">
                    <Header />
                    <MainChatWindow />
                    <InputWindow props={{currentChat, setCurrentChat, input, setInput}}/>
                </div>
            </div>
        </ChatContext.Provider>
    );
}
 
export default MainPage;
