import React, { useContext, useState } from "react";
import '../../styles/burgerMenu/burgerMenuHeader.scss'
import Modal from 'react-modal';
import { Context } from "../..";

const BurgerMenuHeader = () => {
    const {user} = useContext(Context)
    const [settingsOpen, setSettingsOpen] = useState(false)
    function closeModal() {
        setSettingsOpen(false);
    }

    return (
        <div className="burger-menu-header-container">
            <div className="burger-menu-header-section">
                <h1>My Journey</h1>
                <p>The co-pilot for your career. Discover your path, shape your future. Choose your career with confidence.</p>
            </div>
            <img src="/icons/settings-1.svg" alt="icon" className={!user.isAuth && 'hide-settings'} onClick={() => setSettingsOpen(true)}/>
            {/* <Modal
                isOpen={settingsOpen}
                onRequestClose={closeModal}
                ariaHideApp={false}
                overlayClassName="modal-overlay-settings"
                className="modal-settings"
            >
                <div className="sign-in-modal-send">
                    <img src="/icons/settings-1.svg" alt="icon" className={!user.isAuth && 'hide-settings'}/>
                </div>
            </Modal> */}
        </div>
    );
}

export default BurgerMenuHeader;