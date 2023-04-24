import React, { useContext, useState } from "react";
import '../../styles/burgerMenu/burgerMenuSignIn.scss'
import { Context } from "../..";

const BurgerMenuSignIn = () => {
    const [signInModalInput, setSignInModalInput] = useState('')
    const {user} = useContext(Context)

    const onSend = () => {
        user.setIsAuth(!user.isAuth)
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
                    <form onSubmit={e => { e.preventDefault() }} className="sign-in-burger-form">
                        <input 
                            type="email" placeholder="Your E-mail"
                            required
                            value={signInModalInput}
                            onChange={(e) => {setSignInModalInput(e.target.value)}}
                            // onKeyDown={}
                        />
                        <button className="sign-in-burger-button" onClick={() => onSend()}>
                            Save
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default BurgerMenuSignIn;