import React, { useContext, useEffect } from "react";
import Modal from 'react-modal';
import '../styles/signInModal.scss';
import { Context } from "..";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase";
import { isSignInWithEmailLink, sendSignInLinkToEmail, signInWithEmailLink } from "firebase/auth";
import { observer } from "mobx-react-lite";

const SignInModal = observer(({props}) => {
    const {appState, userState} = useContext(Context)
    const [user] = useAuthState(auth)

    function closeModal() {
        props.setIsSignInModalOpen(false);
    }

    useEffect(() => {
        console.log(`useEffect user check start + ${localStorage.getItem('userEmail')}`)
        if (user) {
            userState.setIsAuth(!userState.isAuth)
        } else {
            if (isSignInWithEmailLink(auth, window.location.href)){
                let email = localStorage.getItem('userEmail')
                if (!email) {
                    email = window.prompt('Please provide your email')
                }
                signInWithEmailLink(auth, localStorage.getItem('userEmail'), window.location.href)
                .then((result) => {
                    console.log(result.user)
                    localStorage.removeItem('userEmail')
                    userState.setIsAuth(!userState.isAuth)
                })
                .catch((err) => console.log(err.message))
            }
        }
    },[user])

    const onSend = async (e) => {
        e.preventDefault()
        appState.setSignInRequest(true)
        props.setIsSignInModalOpen(false);
        sendSignInLinkToEmail(auth, props.signInModalInput, {
            url: 'http://localhost:3000',
            handleCodeInApp: true,
        })
        .then(()=> localStorage.setItem('userEmail', props.signInModalInput))
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
                    <form onSubmit={onSend} className="sign-in-modal-form">
                        <input 
                            type="email" placeholder="Your E-mail"
                            required
                            value={props.signInModalInput}
                            onChange={(e) => {props.setSignInModalInput(e.target.value)}}
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