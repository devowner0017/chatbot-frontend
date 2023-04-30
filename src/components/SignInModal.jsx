import React, { useContext } from "react";
import Modal from 'react-modal';
import '../styles/signInModal.scss';
import { Context } from "..";
import auth from "../firebase";
import { sendSignInLinkToEmail } from "firebase/auth";
import { observer } from "mobx-react-lite";

const SignInModal = observer(({ props }) => {
    const { appState } = useContext(Context)

    function closeModal() {
        props.setIsSignInModalOpen(false);
    }

    const onSend = async (e) => {
        e.preventDefault()
        // open/close modal windows
        appState.setSignInRequest(true)
        props.setIsSignInModalOpen(false);
        sendSignInLinkToEmail(auth, props.signInModalInput, {
            url: process.env.REACT_APP_BACKEND_URL,
            handleCodeInApp: true,
        })
            .then(() => localStorage.setItem('userEmail', props.signInModalInput))
    }

    return (
        <Modal
            isOpen={props.isSignInModalOpen}
            onRequestClose={closeModal}
            ariaHideApp={false}
            overlayClassName="modal-overlay-reg"
            className="modal-reg"
        >
            <div className="sign-in-modal">
                <div className="sign-in-modal-header">
                    <img src="/icons/mail-icon-1.svg" alt='icon' />
                    <h1>Sign in</h1>
                </div>
                <div className="sign-in-modal-body">
                    <p>Enter your email address to continue to Apt.</p>
                    <form onSubmit={onSend} className="sign-in-modal-form">
                        <input
                            type="email" placeholder="Your E-mail"
                            required
                            value={props.signInModalInput}
                            onChange={(e) => { props.setSignInModalInput(e.target.value) }}
                        />
                        <button className="sign-in-modal-button">
                            Continue
                        </button>
                    </form>
                </div>
            </div>
        </Modal>
    );
})

export default SignInModal;