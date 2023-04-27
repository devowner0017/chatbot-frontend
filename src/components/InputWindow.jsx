import React, { useContext, useState } from "react";
import { toJS } from "mobx";
import '../styles/inputWindow.scss';
import { Context } from "..";
import { sendMessageNotRegisteredUser, sendMessageRegisteredUser } from "../api/messageAPI";


const InputWindow = () => {
    const {userState} = useContext(Context)
    const [displayText, setDisplayText] = useState(true)
    const [input, setInput] = useState('')

    const sendText = () => {
        if (userState.isAuth===true && input.length) {
            //Show useer his last message
            userState.setUserChatHistory([
                ...userState.userChatHistory, 
                {
                    message_id: userState.userChatHistory.length,
                    message_type: 'user',
                    message_text: input,
                    created_at: '',
                }
            ])
            localStorage.setItem('userChatHistory', JSON.stringify(userState.userChatHistory));
            sendMessageRegisteredUser(userState.userId, input)
            .then((res) => {
                //Update current message list with recieved messages
                const chatCurrent = toJS(userState.userChatHistory).slice(0, -1)
                const chatUpdate = res.chat
                userState.setUserChatHistory([...chatCurrent, ...chatUpdate])
            })
            setInput('')
        }

        else if (userState.isAuth===false && input.length) {
            userState.setUserChatHistory([
                ...userState.userChatHistory, 
                {
                    message_id: userState.userChatHistory.length,
                    message_type: 'user',
                    message_text: input,
                    created_at: new Date(),
                }
            ])
            localStorage.setItem('userChatHistory', JSON.stringify(userState.userChatHistory));
            sendMessageNotRegisteredUser(input)
            .then((res) => {
                //Update current message list with recieved messages
                const chatCurrent = toJS(userState.userChatHistory).slice(0, -1)
                const chatUpdate = res.chat
                userState.setUserChatHistory([...chatCurrent, ...chatUpdate])
                localStorage.setItem('userChatHistory', JSON.stringify(userState.userChatHistory));
            })
            setInput('')
        }
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
                    displayText && !localStorage.getItem('userChatHistory') &&
                    <div className="headline-absolute">
                        <div>Start chatting</div>
                        <img src="/icons/arrow-down-1.svg" alt="icon"/>
                    </div>
                }
                <span />
                <form onSubmit={e => { e.preventDefault(); }}>
                    <input 
                        type='text' placeholder="Your answer..."  
                        value={input}
                        onChange={(e) => {setInput(e.target.value); displayText && setDisplayText(false)}}
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
