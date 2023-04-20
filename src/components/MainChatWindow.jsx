import React, { useState } from "react";
import '../styles/mainChatWindow.scss';
import MainChatHead from "./MainChatHead";
import MainChatBody from "./MainChatBody";
import DisplayInsight from "./DisplayInsight";
import Modal from 'react-modal';

const MainChatWindow = () => {
    const [showInsight, setShowInsight] = useState(false)
    function closeModal() {
        setShowInsight(false);
    }

    return (
        <div className="chat-container">
            <div className="chat-spacing">
                    <MainChatHead />
                    <MainChatBody setShowInsight={setShowInsight}/>
                <Modal
                    isOpen={showInsight}
                    onRequestClose={closeModal}
                    overlayClassName="modal-overlay"
                    className="modal"
                >
                    <DisplayInsight setShowInsight={setShowInsight} showInsight={showInsight}/>
                </Modal>
            </div>
        </div>
    );
}
 
export default MainChatWindow;
