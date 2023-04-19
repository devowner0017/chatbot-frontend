import React from "react";
import '../styles/mainPage.scss';
import MainChatWindow from "./MainChatWindow";
import Header from "./Header";
import InputWindow from "./InputWindow";

const MainPage = () => {
    return (
        <div className="main-page-container">
            <Header />
            <MainChatWindow />
            <InputWindow />
        </div>
    );
}
 
export default MainPage;
