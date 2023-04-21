import React, { useState } from "react";
import '../../styles/buttons/signInButton.scss';
import SignInModal from "../SignInModal";
import SignInModalSent from "../SignInModalSent";

const SignInButton = () => {
    const [isSignInSentOpen, setIsSignInSentOpen] = useState(false)
    const [isSignInModalOpen, setIsSignInModalOpen] = useState(false)
    const [signInModalInput, setSignInModalInput] = useState('')

    return (
        <div>
            <button className="sign-in-button" onClick={() => setIsSignInModalOpen(true)}>
                Sign-in
            </button>
            <SignInModal props={{isSignInModalOpen, setIsSignInModalOpen, signInModalInput, setSignInModalInput, setIsSignInSentOpen}}/>
            <SignInModalSent props={{isSignInSentOpen, setIsSignInSentOpen}}/>
        </div>
    );
}
 
export default SignInButton;