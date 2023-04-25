import React, { useContext, useEffect, useState } from "react";
import '../styles/mainChatSignIn.scss'
import { Context } from "..";
import { isSignInWithEmailLink, sendSignInLinkToEmail, signInWithEmailLink } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase";

const MainChatSignIn = () => {
    const [signInModalInput, setSignInModalInput] = useState('')
    const {userState, appState} = useContext(Context)
    const [user] = useAuthState(auth)
    
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
        sendSignInLinkToEmail(auth, signInModalInput, {
            url: 'http://localhost:3000',
            handleCodeInApp: true,
        })
        .then(()=> localStorage.setItem('userEmail', signInModalInput))
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
                            onChange={(e) => {setSignInModalInput(e.target.value)}}
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