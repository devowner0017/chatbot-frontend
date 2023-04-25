import React, { useContext, useEffect, useRef } from "react";
import '../styles/mainChatBody.scss';
import { ChatContext } from "./MainPage";
import InsightChatBody from "./InsightChatBody";
import MainChatSignIn from "./MainChatSignIn";
import { Context } from "..";
import { observer } from "mobx-react-lite";

const MainChatBody = observer(({setShowInsight}) => {
    const {userState} = useContext(Context)
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
                        ((data.id ==='chat' || data.id ==='user') &&
                        <div key={index} className={`${data.id!=='chat' ? 'user' : 'received'}`}>{data.text}</div>)
                        ||
                        (data.id ==='insight' &&
                        <div key={index}>
                            <div onClick={() => setShowInsight(true)}>
                                <InsightChatBody />
                            </div>
                            {userState.isAuth === false && <MainChatSignIn />}
                        </div>)
                    ))
                }
                {currentChat[currentChat.length-1].id==='user' && <div className='received pending'><span /><span /><span /></div>}
            </div>
            <div ref={chatLatestMessage}></div>
        </div>
    );
})
 
export default MainChatBody;



