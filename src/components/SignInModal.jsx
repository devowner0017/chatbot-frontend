import React from "react";
import Modal from 'react-modal';
import '../styles/signInModal.scss';

const SignInModal = ({props}) => {
    function closeModal() {
        props.setIsSignInModalOpen(false);
    }

    function sendRequest() {
        props.setIsSignInModalOpen(false);
        props.setIsSignInSentOpen(true)
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
                    <img src="/icons/mail-icon-1.svg" alt='icon'/>
                    <h1>Sign in</h1>
                </div>
                <div className="sign-in-modal-body">
                    <p>Enter your email address to continue to Apt.</p>
                    <form onSubmit={e => { e.preventDefault() }} className="sign-in-modal-form">
                        <input 
                            type="email" placeholder="Your E-mail"
                            required
                            value={props.signInModalInput}
                            onChange={(e) => {props.setSignInModalInput(e.target.value)}}
                            // onKeyDown={}
                        />
                        <button className="sign-in-modal-button" onClick={() => sendRequest()}>
                            Continue
                        </button>
                    </form>
                </div>
            </div>
        </Modal>
    );
}
 
export default SignInModal;