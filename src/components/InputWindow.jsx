import React, { useContext, useState } from "react";
import { toJS } from "mobx";
import '../styles/inputWindow.scss';
import { Context } from "..";
import { sendMessageNotRegisteredUser, sendMessageRegisteredUser, sendQuestionResRegisteredUser, sendQuestionnaireFinishedNotRegisteredUser, sendQuestionnaireFinishedRegisteredUser } from "../api/messageAPI";


const InputWindow = () => {
    const {userState} = useContext(Context)
    const [displayText, setDisplayText] = useState(true)
    const [input, setInput] = useState('')

    const sendText = () => {
        //If user not registered and haven't completed questionary
        if (userState.isAuth===false && input.length && userState.introductionQuestionList && userState.isIntroductionQuestion) {
            if (userState.introductionQuestionNumber+1 < JSON.parse(localStorage.getItem('introductionQuestionListLength'))) {
                const nextQuestion = JSON.parse(localStorage.getItem('introductionQuestionList'))[userState.introductionQuestionNumber+1]
                userState.setUserChatHistory([
                    ...userState.userChatHistory, 
                    {
                        message_id: userState.userChatHistory.length,
                        message_type: 'user',
                        message_text: input,
                        created_at: new Date(),
                    },
                    {
                        message_id: userState.userChatHistory.length+1,
                        message_type: 'chat',
                        message_text: nextQuestion,
                        created_at: new Date(),
                    }
                ])
                userState.setIntroductionQuestionNumber(userState.introductionQuestionNumber+1)
                localStorage.setItem('introductionQuestionNumber', JSON.stringify(userState.introductionQuestionNumber));
                localStorage.setItem('userChatHistory', JSON.stringify(userState.userChatHistory));
                setInput('')
            } else if (userState.introductionQuestionNumber+1 === JSON.parse(localStorage.getItem('introductionQuestionListLength'))) {
                userState.setUserChatHistory([
                    ...userState.userChatHistory, 
                    {
                        message_id: userState.userChatHistory.length,
                        message_type: 'user',
                        message_text: input,
                        created_at: new Date(),
                    }
                ])
                userState.setIntroductionQuestionNumber(userState.introductionQuestionNumber+1)
                userState.setIsIntroductionQuestion(false)
                localStorage.setItem('introductionQuestionNumber', JSON.stringify(userState.introductionQuestionNumber));
                localStorage.setItem('isIntroductionQuestion', JSON.stringify(false));
                localStorage.setItem('userChatHistory', JSON.stringify(userState.userChatHistory));
                sendQuestionnaireFinishedNotRegisteredUser(
                    toJS(userState.userChatHistory)
                )
                .then(res => {
                    userState.setUserChatHistory([
                        ...userState.userChatHistory, 
                        {
                            message_id: userState.userChatHistory.length,
                            message_type: 'insight',
                            message_text: res.openaiResponse,
                            created_at: new Date(),
                        }
                    ]);
                    localStorage.setItem('userChatHistory', JSON.stringify(userState.userChatHistory));
                })
                setInput('')
            }
            return
        }

        //If user is registered but haven't completed questionary
        if (userState.isAuth===true && input.length && userState.introductionQuestionList && userState.isIntroductionQuestion) {
            if (userState.introductionQuestionNumber+1 < userState.introductionQuestionList.length) {
                const nextQuestion = userState.introductionQuestionList[userState.introductionQuestionNumber+1]
                userState.setUserChatHistory([
                    ...userState.userChatHistory, 
                    {
                        message_id: userState.userChatHistory.length,
                        message_type: 'user',
                        message_text: input,
                        created_at: new Date(),
                    },
                    {
                        message_id: userState.userChatHistory.length+1,
                        message_type: 'chat',
                        message_text: nextQuestion,
                        created_at: new Date(),
                    }
                ])
                userState.setIntroductionQuestionNumber(userState.introductionQuestionNumber+1)
                localStorage.setItem('introductionQuestionNumber', JSON.stringify(userState.introductionQuestionNumber));
                localStorage.setItem('userChatHistory', JSON.stringify(userState.userChatHistory));
                sendQuestionResRegisteredUser(
                    userState.userId,
                    toJS(userState.introductionQuestionNumber),
                    toJS(userState.userChatHistory)
                )
                setInput('')
            } else if (userState.introductionQuestionNumber+1 === userState.introductionQuestionList.length) {
                userState.setUserChatHistory([
                    ...userState.userChatHistory, 
                    {
                        message_id: userState.userChatHistory.length,
                        message_type: 'user',
                        message_text: input,
                        created_at: new Date(),
                    }
                ])
                userState.setIntroductionQuestionNumber(userState.introductionQuestionNumber+1)
                userState.setIsIntroductionQuestion(false)
                localStorage.setItem('userChatHistory', JSON.stringify(userState.userChatHistory));
                localStorage.setItem('introductionQuestionNumber', JSON.stringify(userState.introductionQuestionNumber));
                localStorage.setItem('isIntroductionQuestion', JSON.stringify(false));
                sendQuestionnaireFinishedRegisteredUser(
                    userState.userId,
                    toJS(userState.introductionQuestionNumber),
                    toJS(userState.userChatHistory),
                    toJS(userState.isIntroductionQuestion)
                )
                .then(res => {
                    userState.setUserChatHistory([
                        ...userState.userChatHistory, 
                        {
                            message_id: userState.userChatHistory.length,
                            message_type: 'insight',
                            message_text: res.openaiResponse,
                            created_at: new Date(),
                        }
                    ]);
                    localStorage.setItem('userChatHistory', JSON.stringify(userState.userChatHistory));
                })
                setInput('')
            }
            return
        }

        //If user registered and completed questionary
        if (userState.isAuth===true && input.length && !userState.isIntroductionQuestion) {
            //Show to user his last message
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

        //If user is not registered and completed questionary
        //For now if you're not registered you can not chat with chatGPT bot
        //That's why responsible for that logic below is commented out
        else if (userState.isAuth===false && input.length && !userState.isIntroductionQuestion) {
            // userState.setUserChatHistory([
            //     ...userState.userChatHistory, 
            //     {
            //         message_id: userState.userChatHistory.length,
            //         message_type: 'user',
            //         message_text: input,
            //         created_at: new Date(),
            //     }
            // ])
            // localStorage.setItem('userChatHistory', JSON.stringify(userState.userChatHistory));
            // sendMessageNotRegisteredUser(input)
            // .then((res) => {
            //     //Update current message list with recieved messages
            //     const chatCurrent = toJS(userState.userChatHistory).slice(0, -1)
            //     const chatUpdate = res.chat
            //     userState.setUserChatHistory([...chatCurrent, ...chatUpdate])
            //     localStorage.setItem('userChatHistory', JSON.stringify(userState.userChatHistory));
            // })
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
                <form onSubmit={e => { e.preventDefault() }}>
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
