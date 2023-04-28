import React, { createContext, useContext, useEffect, useState } from "react";
import '../styles/mainPage.scss';
import MainChatWindow from "./MainChatWindow";
import Header from "./Header";
import InputWindow from "./InputWindow";
import BurgerMenuMain from "./burgerMenu/BurgerMenuMain";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase";
import { isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";
import { checkUser, getUserQuestionHistory, updateUserQuestionHistory } from "../api/userAPI";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import { saveChatHistory } from "../api/messageAPI";
import { getQuestionnaire } from "../api/questionnaireAPI";

export const ChatContext = createContext();

const MainPage = observer(() => {
    const [isBurgerOpen, setIsBurgerOpen] = useState(false)

    const {userState} = useContext(Context)
    const [user] = useAuthState(auth)

    //If user not registerd we get his last chat history from local storage
    useEffect(() => {
        if (userState.isAuth === false && localStorage.getItem('userChatHistory')) {
            const savedChat = JSON.parse(localStorage.getItem('userChatHistory'))
            userState.setUserChatHistory(savedChat)
            // localStorage.removeItem('userChatHistory')
            // localStorage.removeItem('introductionQuestionList')
        }
    }, [])

    //Keeping thrack of our Questionnaire state
    useEffect(() => {
        //If we haven't started our Questionnaire yet - display 1st question
        if (userState.isIntroductionQuestion === true && !localStorage.getItem('introductionQuestionList')) {
            getQuestionnaire().then(res => {
                userState.setIntroductionQuestionList(res.questionnaire)
                userState.setUserChatHistory([{
                    message_id: 0,
                    message_type: 'chat',
                    message_text: res.questionnaire[0],
                    created_at: new Date(),
                }])
                localStorage.setItem('isIntroductionQuestion', JSON.stringify(userState.isIntroductionQuestion));
                localStorage.setItem('introductionQuestionNumber', JSON.stringify(0));
                localStorage.setItem('introductionQuestionList', JSON.stringify(res.questionnaire));
                localStorage.setItem('introductionQuestionListLength', JSON.stringify(res.questionnaire.length));
                localStorage.setItem('userChatHistory', JSON.stringify(userState.userChatHistory))
            })
        }
        //If we started our Questionnaire but user is not registered and we need to keep track of questions localy
        if (userState.isAuth===false && userState.isIntroductionQuestion === true && localStorage.getItem('introductionQuestionList')) {
            userState.setIntroductionQuestionList(JSON.parse(localStorage.getItem('introductionQuestionList')))
            userState.setIntroductionQuestionNumber(JSON.parse(localStorage.getItem('introductionQuestionNumber')))
            userState.setIsIntroductionQuestion(JSON.parse(localStorage.getItem('isIntroductionQuestion')))
        }
        //If we started our Questionnaire and user is registered - get his question history from the backend
        if (userState.isUserDbTableCreated===true && userState.isIntroductionQuestion === true) {
            console.log('userState.isUserDbTableCreated' + userState.isUserDbTableCreated)
            getUserQuestionHistory(userState.userId).then(res => {
                userState.setIntroductionQuestionList(res.questionnaire)
                userState.setIntroductionQuestionNumber(res.introductionQuestionNumber)
                userState.setIsIntroductionQuestion(JSON.parse(res.isIntroductionQuestion))
                console.log(res.introductionQuestionNumber)
                console.log(res.isIntroductionQuestion)
                console.log(res.questionnaire)
            })
        }
        // createQuestionnaire('q1', ['Question1', 'Question2', 'Question3'])
    }, [userState.isUserDbTableCreated])

    //Keeping thrack if our user logged in
    //If so - updating app with the latest info from the backend
    useEffect(() => {
        if (user) {
            userState.setIsAuth(true) 
            userState.setUserId(user.uid)
            userState.setUserEmail(user.email)
            checkUser(user.uid, user.email)
            .then(res => {
                if (res.chatHistory === "No chat history") {
                    //If user has no saved chat on the backend but has chat history on the frontend that needs to be saved
                    if(localStorage.getItem('userChatHistory')) {
                        saveChatHistory(userState.userId, JSON.parse(localStorage.getItem('userChatHistory')))
                        .then((data) => {
                            userState.setUserChatHistory([...data.createChat])
                            localStorage.setItem('userChatHistory', JSON.stringify(userState.userChatHistory));
                        })
                        updateUserQuestionHistory(user.uid, userState.isIntroductionQuestion, userState.introductionQuestionNumber)
                        .then(() => userState.setIsUserDbTableCreated(true))
                        
                    }
                    //If user has neather saved chat on the backend nor started to chat on the frontend but his user was alredy created
                } else {
                    userState.setIsUserDbTableCreated(true)
                }
            })
        } else {
            if (isSignInWithEmailLink(auth, window.location.href)){
                let email = localStorage.getItem('userEmail')
                if (!email) {
                    email = window.prompt('Please provide your email')
                }
                signInWithEmailLink(auth, localStorage.getItem('userEmail'), window.location.href)
                .then((result) => {
                    userState.setIsAuth(true)
                    userState.setUserId(result.uid)
                    userState.setUserEmail(user.email)
                    checkUser(user.uid, user.email)
                    .then(res => userState.setUserChatHistory(res.chatHistory))
                    localStorage.removeItem('userEmail')
                })
                .catch((err) => console.log(err.message))
            }
        }
    }, [user])

    return (
        <ChatContext.Provider value={{isBurgerOpen, setIsBurgerOpen}}>
            <div className="main-container">
                <div className={`main-burger-display ${isBurgerOpen ? "" : 'main-burger-hidden'}`}> 
                    <BurgerMenuMain />
                </div>
                <div className={`home-page-container ${isBurgerOpen ? "home-page-hidden" : ''}`} >
                    <Header />
                    <MainChatWindow />
                    <InputWindow />
                </div>
            </div>
        </ChatContext.Provider>
    );
})
 
export default MainPage;
