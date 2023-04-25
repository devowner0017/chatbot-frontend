import React, { useState } from "react";
import '../../styles/buttons/signInButton.scss';
import SignInModal from "../SignInModal";
import SignInModalSent from "../SignInModalSent";
import { observer } from "mobx-react-lite";

const SignInButton = observer(() => {
    const [isSignInModalOpen, setIsSignInModalOpen] = useState(false)
    const [signInModalInput, setSignInModalInput] = useState('')

    return (
        <div>
            <button className="sign-in-button" onClick={() => setIsSignInModalOpen(true)}>
                Sign-in
            </button>
            <SignInModal props={{isSignInModalOpen, setIsSignInModalOpen, signInModalInput, setSignInModalInput}}/>
            <SignInModalSent />
        </div>
    );
})
 
export default SignInButton;