import React, { useState } from "react";
import '../styles/inputWindow.scss';

const InputWindow = () => {
    const [currentChat, setCurrentChat] = useState([{id: 'user', text: 'Test text'}, {id: 'chat', text: 'Test text chat'}, {id: 'user', text: 'Test text 10'}])
    const [input, setInput] = useState('')

    const sendText = () => {
        setCurrentChat([...currentChat, {id: 'user', text: `${input}`}])
        setInput('')
    }
    
    return (
        <div className="input-container">
            <div className="input-section">
                <span />
                <form onSubmit={e => { e.preventDefault(); }}>
                    <input 
                        type='text' placeholder="Your answer..." 
                        required autofocus 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                </form>
                <button className="input-button" onClick={sendText}>
                    <img src='/icons/send-text-icon-1.svg' alt="icon" />
                </button>
            </div>
        </div>
    );
}
 
export default InputWindow;