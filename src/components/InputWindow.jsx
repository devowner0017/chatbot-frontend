import React from "react";
import '../styles/inputWindow.scss';

const InputWindow = () => {
    return (
        <div className="input-container">
            <div className="input-section">
                <span />
                <form onSubmit={e => { e.preventDefault(); }}>
                    <input type='text' placeholder="Your answer..." required autofocus/>
                </form>
                <button className="input-button"></button>
            </div>
        </div>
    );
}
 
export default InputWindow;