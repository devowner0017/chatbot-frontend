import React, { useContext } from "react";
import Modal from 'react-modal';
import '../styles/signInModalSent.scss';
import { Context } from "..";
import { observer } from "mobx-react-lite";

const SignInModalSent = observer(() => {
    const {appState} = useContext(Context)

    function closeModal() {
        appState.setSignInRequest(!appState.isSignInRequest)
    }

    return (
        <Modal
            isOpen={appState.isSignInRequest}
            onRequestClose={closeModal}
            ariaHideApp={false}
            overlayClassName="modal-overlay-send"
            className="modal-send"
        >
            <div className="sign-in-modal-send">
                <div className="sign-in-modal-header-send">
                    <img src="/icons/mail-icon-1.svg" alt='icon'/>
                    <h1>Check your Email</h1>
                </div>
                <div className="sign-in-modal-body-send">
                    <p>We just emailed you a temporary link to sign in. Please check your inbox to continue to Apt.</p>
                </div>
            </div>
        </Modal>
    );
})
 
export default SignInModalSent;