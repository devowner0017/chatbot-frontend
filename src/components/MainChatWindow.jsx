import React, { useContext } from "react";
import '../styles/mainChatWindow.scss';
import MainChatHead from "./MainChatHead";
import MainChatBody from "./MainChatBody";
import DisplayInsight from "./DisplayInsight";
import Modal from 'react-modal';
import { Context } from "..";
import { observer } from "mobx-react-lite";

const MainChatWindow = observer(() => {
    const {insightsState} = useContext(Context)

    function closeModal() {
        insightsState.setDisplayInsight(false);
    }

    return (
        <div className="chat-container">
            <div className="chat-spacing">
                    <MainChatHead />
                    <MainChatBody />
                <Modal
                    isOpen={insightsState.displayInsight}
                    onRequestClose={closeModal}
                    ariaHideApp={false}
                    overlayClassName="modal-overlay"
                    className="modal"
                >
                    <DisplayInsight />
                </Modal>
            </div>
        </div>
    );
})
 
export default MainChatWindow;
