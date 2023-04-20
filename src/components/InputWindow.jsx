import React, { useState } from "react";
import '../styles/inputWindow.scss';

const InputWindow = ({props}) => {
    const [displayText, setDisplayText] = useState(true)
    const sendText = () => {
        props.setCurrentChat([...props.currentChat, {id: 'user', text: `${props.input}`}])
        props.setInput('')
    }

    const handleKeypress = (e) => {
      if (e.keyCode === 13) {
        sendText();
      }
    };
    
    return (
        <div className="input-container">
            <div className="input-section">
                { 
                    displayText &&
                    <div className="headline-absolute">
                        <div>Start chatting</div>
                        <img src="/icons/arrow-down-1.svg" alt="icon"/>
                    </div>
                }
                <span />
                <form onSubmit={e => { e.preventDefault(); }}>
                    <input 
                        type='text' placeholder="Your answer..." 
                        autoFocus 
                        value={props.input}
                        onChange={(e) => {props.setInput(e.target.value); displayText && setDisplayText(false)}}
                        onKeyDown={(e)=> handleKeypress(e)}
                    />
                </form>
                <button className="input-button" onClick={() => sendText()}>
                    <img src='/icons/send-text-icon-1.svg' alt="icon" />
                </button>
            </div>
        </div>
    );
}
 
export default InputWindow;