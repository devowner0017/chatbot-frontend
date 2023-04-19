import React from "react";
import '../styles/mainChatHead.scss'; 

const MainChatHead = () => {
    return (
        <div className="chat-head-container">
            <h1>
                Discover your life's purpose and what you're meant 
                <span> <img src='/icons/decoration-icon-1.svg' alt="icon" /> </span>to do?
            </h1>
            <p>It starts with a quiz <span>(10min)</span></p>
        </div>
    );
}
 
export default MainChatHead;