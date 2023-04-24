import React, { useContext, useState } from "react";
import '../styles/mainChatSignIn.scss'
import { Context } from "..";

const MainChatSignIn = () => {
    const [signInModalInput, setSignInModalInput] = useState('')
    const {user} = useContext(Context)

    const onSend = () => {
        user.setIsAuth(!user.isAuth)
    }

    return (
        <div className="sign-in-main-chat-container">
            <div className="sign-in-main-chat">
                <div className="sign-in-main-chat-body">
                    <p>Save your personalized insights and recommendations. Get advice on how to pursue a meaningful, fulfilling life. Save your progress.</p>
                    <form onSubmit={e => { e.preventDefault() }} className="sign-in-main-chat-form">
                        <input 
                            type="email" placeholder="Your E-mail"
                            required
                            value={signInModalInput}
                            onChange={(e) => {setSignInModalInput(e.target.value)}}
                            // onKeyDown={}
                        />
                        <button className="sign-in-main-chat-button" onClick={() => onSend()}>
                            Save
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default MainChatSignIn;