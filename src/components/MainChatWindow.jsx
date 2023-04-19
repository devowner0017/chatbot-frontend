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
                <p>Test</p>
                <p>Test</p>
                <p>Test</p>
                <p>Test</p>
                <p>Test</p>
                <p>Test</p>
            </div>
        </div>
    );
}
 
export default MainChatWindow;