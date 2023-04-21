import React, { useContext, useEffect, useRef } from "react";
import '../styles/mainChatBody.scss';
import { ChatContext } from "./MainPage";

const MainChatBody = ({setShowInsight}) => {
    const { currentChat } = useContext(ChatContext);
    const chatLatestMessage = useRef()
    useEffect(() => {
        chatLatestMessage.current.scrollIntoView({ behavior: "smooth" })
    }, [currentChat])

    return (
        <div>
            <div className="chat-body-container">
                {
                    currentChat.map((data, index) => (
                        <div key={index} className={`${data.id!=='chat' ? 'user' : 'received'}`}>{data.text}</div>
                    ))
                }
                {currentChat[currentChat.length-1].id==='user' && <div className='received pending' onClick={() => setShowInsight(true)}><span /><span /><span /></div>}
            </div>
            <div ref={chatLatestMessage}></div>
        </div>
    );
}
 
export default MainChatBody;



