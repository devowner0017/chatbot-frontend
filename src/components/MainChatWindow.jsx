import React from "react";
import '../styles/mainChatWindow.scss';
import MainChatHead from "./MainChatHead";
import MainChatBody from "./MainChatBody";

const MainChatWindow = () => {
    return (
        <div className="chat-container">
            <div className="chat-spacing">
                <MainChatHead />
                <MainChatBody />
            </div>
        </div>
    );
}
 
export default MainChatWindow;