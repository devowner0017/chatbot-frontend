import React, { useContext, useEffect, useState } from "react";
import '../../styles/burgerMenu/burgerMenuSignIn.scss'
import { Context } from "../..";
import auth from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth"
import { isSignInWithEmailLink, sendSignInLinkToEmail, signInWithEmailLink } from "firebase/auth";
import { observer } from "mobx-react-lite";

const BurgerMenuSignIn = observer(() => {
    const [signInModalInput, setSignInModalInput] = useState('')
    const {userState, appState} = useContext(Context)

    const [user] = useAuthState(auth)

    useEffect(() => {
        console.log(`useEffect user check start + ${localStorage.getItem('userEmail')}`)
        if (user) {
            userState.setIsAuth(!userState.isAuth) 
            userState.setUserId(user.uid)
            console.log(userState.userId)
        } else {
            if (isSignInWithEmailLink(auth, window.location.href)){
                let email = localStorage.getItem('userEmail')
                if (!email) {
                    email = window.prompt('Please provide your email')
                }
                signInWithEmailLink(auth, localStorage.getItem('userEmail'), window.location.href)
                .then((result) => {
                    console.log(`} else { ` + result.uid)
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
        <div className="sign-in-burger-container">
            <div className="sign-in-burger">
                <div className="sign-in-burger-header">
                    <img src="/icons/lightning-1.svg" alt='icon'/>
                    <h1>Save your converstation</h1>
                </div>
                <div className="sign-in-burger-body">
                    <p>Add your email to save the conversation and receive tips every single day about how you can find out what you’re meant to do</p>
                    <form onSubmit={onSend} className="sign-in-burger-form">
                        <input 
                            type="email" placeholder="Your E-mail"
                            required
                            value={signInModalInput}
                            onChange={(e) => {setSignInModalInput(e.target.value)}}
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