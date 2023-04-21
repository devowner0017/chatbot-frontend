import React, { useContext, useEffect, useRef, useState } from "react";
import '../styles/mainChatBody.scss';
import { ChatContext } from "./MainPage";
import SignInModal from "./SignInModal";
import SignInModalSent from "./SignInModalSent";

const MainChatBody = ({setShowInsight}) => {
    const [isSignInSentOpen, setIsSignInSentOpen] = useState(false)
    const [isSignInModalOpen, setIsSignInModalOpen] = useState(false)
    const [signInModalInput, setSignInModalInput] = useState('')
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
                        <div key={index} className={`${data.id!=='chat' ? 'user' : 'received'}`} onClick={() => setIsSignInModalOpen(true)}>{data.text}</div>
                    ))
                }
                {currentChat[currentChat.length-1].id==='user' && <div className='received pending' onClick={() => setShowInsight(true)}><span /><span /><span /></div>}
            </div>
            <SignInModal props={{isSignInModalOpen, setIsSignInModalOpen, signInModalInput, setSignInModalInput, setIsSignInSentOpen}}/>
            <SignInModalSent props={{isSignInSentOpen, setIsSignInSentOpen}}/>
            <div ref={chatLatestMessage}></div>
        </div>
    );
}
 
export default MainChatBody;



