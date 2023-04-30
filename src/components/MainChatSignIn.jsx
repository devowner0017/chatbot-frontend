import React, { useContext, useState } from "react";
import '../styles/mainChatSignIn.scss'
import { Context } from "..";
import { sendSignInLinkToEmail } from "firebase/auth";
import auth from "../firebase";

const MainChatSignIn = () => {
    const [signInModalInput, setSignInModalInput] = useState('')
    const { appState } = useContext(Context)

    const onSend = async (e) => {
        e.preventDefault()
        // open/close modal windows
        appState.setSignInRequest(true)
        sendSignInLinkToEmail(auth, signInModalInput, {
            url: process.env.REACT_APP_BACKEND_URL,
            handleCodeInApp: true,
        })
            .then(() => localStorage.setItem('userEmail', signInModalInput))
    }

    return (
        <div className="sign-in-main-chat-container">
            <div className="sign-in-main-chat">
                <div className="sign-in-main-chat-body">
                    <p>Save your personalized insights and recommendations. Get advice on how to pursue a meaningful, fulfilling life. Save your progress.</p>
                    <form onSubmit={onSend} className="sign-in-main-chat-form">
                        <input
                            type="email" placeholder="Your E-mail"
                            required
                            value={signInModalInput}
                            onChange={(e) => { setSignInModalInput(e.target.value) }}
                        />
                        <button className="sign-in-main-chat-button">
                            Save
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default MainChatSignIn;