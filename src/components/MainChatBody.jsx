import React, { useState } from "react";
import '../styles/mainChatBody.scss';

const MainChatBody = () => {
    const [currentChat, setCurrentChat] = useState([{id: 'user', text: 'Test text'}, {id: 'chat', text: 'Test text chat'}, {id: 'user', text: 'Test text 10'}])

    return (
        <div className="chat-body-container">
            {
                currentChat.map((data, index) => (
                    <div key={index} className={`${data.id!=='chat' ? 'user' : 'received'}`}>{data.text}</div>
                ))
            }

        </div>
    );
}
 
export default MainChatBody;