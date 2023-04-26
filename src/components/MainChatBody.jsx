import React, { useContext, useEffect, useRef } from "react";
import '../styles/mainChatBody.scss';
import InsightChatBody from "./InsightChatBody";
import MainChatSignIn from "./MainChatSignIn";
import { Context } from "..";
import { observer } from "mobx-react-lite";

const MainChatBody = observer(({setShowInsight}) => {
    const {userState} = useContext(Context)
    const chatLatestMessage = useRef()

    useEffect(() => {
        chatLatestMessage.current.scrollIntoView({ behavior: "smooth" })
    }, [userState.userChatHistory])

    return (
        <div>
            <div className="chat-body-container">
                {
                    userState.userChatHistory.map((data, index) => (
                        ((data.message_type ==='chat' || data.message_type ==='user') &&
                        <div key={index} className={`${data.message_type!=='chat' ? 'user' : 'received'}`}>{data.message_text}</div>)
                        ||
                        (data.message_type ==='insight' &&
                        <div key={index}>
                            <div onClick={() => setShowInsight(true)}>
                                <InsightChatBody />
                            </div>
                            {userState.isAuth === false && <MainChatSignIn />}
                        </div>)
                    ))
                }
                {userState.userChatHistory[userState.userChatHistory.length-1].message_type==='user' && <div className='received pending'><span /><span /><span /></div>}
            </div>
            <div ref={chatLatestMessage}></div>
        </div>
    );
})
 
export default MainChatBody;



