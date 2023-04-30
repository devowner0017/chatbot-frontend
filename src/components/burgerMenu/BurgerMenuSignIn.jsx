import React, { useContext, useState } from "react";
import '../../styles/burgerMenu/burgerMenuSignIn.scss'
import { Context } from "../..";
import auth from "../../firebase";
import { sendSignInLinkToEmail } from "firebase/auth";
import { observer } from "mobx-react-lite";

const BurgerMenuSignIn = observer(() => {
    const [signInModalInput, setSignInModalInput] = useState('')
    const { appState } = useContext(Context)

    const onSend = async (e) => {
        e.preventDefault()
        // open/close modal windows
        appState.setSignInRequest(true)
        sendSignInLinkToEmail(auth, signInModalInput, {
            url: process.env.REACT_APP_FRONTEND_URL,
            handleCodeInApp: true,
        })
            .then(() => localStorage.setItem('userEmail', signInModalInput))
    }

    return (
        <div className="sign-in-burger-container">
            <div className="sign-in-burger">
                <div className="sign-in-burger-header">
                    <img src="/icons/lightning-1.svg" alt='icon' />
                    <h1>Save your converstation</h1>
                </div>
                <div className="sign-in-burger-body">
                    <p>Add your email to save the conversation and receive tips every single day about how you can find out what you’re meant to do</p>
                    <form onSubmit={onSend} className="sign-in-burger-form">
                        <input
                            type="email" placeholder="Your E-mail"
                            required
                            value={signInModalInput}
                            onChange={(e) => { setSignInModalInput(e.target.value) }}
                        />
                        <button className="sign-in-burger-button" >
                            Save
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
})

export default BurgerMenuSignIn;