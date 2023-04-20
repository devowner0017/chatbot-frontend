import React, { useContext, useEffect, useRef, useState } from "react";
import '../styles/mainChatBody.scss';
import { ChatContext } from "./MainPage";
import Modal from 'react-modal';

const MainChatBody = ({setShowInsight}) => {
    const currentChat = useContext(ChatContext);
    const chatLatestMessage = useRef()
    const [isModalOpen, setIsModalOpen] = useState(false)
    function closeModal() {
        setIsModalOpen(false);
    }
    
    useEffect(() => {
        chatLatestMessage.current.scrollIntoView({ behavior: "smooth" })
    }, [currentChat])

    return (
        <div>
            <div className="chat-body-container">
                {
                    currentChat.map((data, index) => (
                        <div key={index} className={`${data.id!=='chat' ? 'user' : 'received'}`} onClick={() => setIsModalOpen(true)}>{data.text}</div>
                    ))
                }
                {currentChat[currentChat.length-1].id==='user' && <div className='received pending' onClick={() => setShowInsight(true)}><span /><span /><span /></div>}
            </div>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                overlayClassName="modal-overlay-reg"
                className="modal-reg"
            >
                <div className="sign-in-modal">
                    Sign in
                </div>
            </Modal>
            <div ref={chatLatestMessage}></div>
        </div>
    );
}
 
export default MainChatBody;



