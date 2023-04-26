import React, { createContext, useContext, useEffect, useState } from "react";
import '../styles/mainPage.scss';
import MainChatWindow from "./MainChatWindow";
import Header from "./Header";
import InputWindow from "./InputWindow";
import BurgerMenuMain from "./burgerMenu/BurgerMenuMain";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase";
import { isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";
import { checkUser } from "../api/userAPI";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import { saveChatHistory } from "../api/messageAPI";

export const ChatContext = createContext();

const MainPage = observer(() => {
    const [isBurgerOpen, setIsBurgerOpen] = useState(false)

    const {userState} = useContext(Context)
    const [user] = useAuthState(auth)

    useEffect(() => {
        if (userState.isAuth === false && localStorage.getItem('userChatHistory')) {
            const savedChat = JSON.parse(localStorage.getItem('userChatHistory'))
            userState.setUserChatHistory(savedChat)
            // localStorage.removeItem('userChatHistory')
        }
    }, [])

    useEffect(() => {
        if (user) {
            userState.setIsAuth(true) 
            userState.setUserId(user.uid)
            userState.setUserEmail(user.email)
            checkUser(user.uid, user.email)
            .then(res => {
                if (res.chatHistory === "No chat history") {
                    if(localStorage.getItem('userChatHistory')) {
                        saveChatHistory(userState.userId, localStorage.getItem('userChatHistory'))
                    }
                } else {
                    userState.setUserChatHistory(res.chatHistory)
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
