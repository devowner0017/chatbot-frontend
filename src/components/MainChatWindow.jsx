import React, { useState } from "react";
import '../styles/mainChatWindow.scss';
import MainChatHead from "./MainChatHead";
import MainChatBody from "./MainChatBody";
import DisplayInsight from "./DisplayInsight";

const MainChatWindow = () => {
    const [showInsight, setShowInsight] = useState(false)

    return (
        <div className="chat-container">
            <div className="chat-spacing">
                <div className={showInsight ? "hide" : ""}>
                    <MainChatHead />
                    <MainChatBody setShowInsight={setShowInsight}/>
                </div>
                <DisplayInsight setShowInsight={setShowInsight} showInsight={showInsight}/>
            </div>
        </div>
    );
}
 
export default MainChatWindow;
