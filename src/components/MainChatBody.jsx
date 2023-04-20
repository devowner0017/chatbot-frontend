import React, { useContext, useState } from "react";
import '../styles/mainChatBody.scss';
import { ChatContext } from "./MainPage";

const MainChatBody = ({setShowInsight, showInsight}) => {
    const currentChat = useContext(ChatContext);

    return (
        <div className="chat-body-container">
            {
                currentChat.map((data, index) => (
                    <div key={index} className={`${data.id!=='chat' ? 'user' : 'received'}`}>{data.text}</div>
                ))
            }
            {currentChat[currentChat.length-1].id==='user' && <div className='received pending' onClick={() => setShowInsight(true)}><span /><span /><span /></div>}
        </div>
    );
}
 
export default MainChatBody;



