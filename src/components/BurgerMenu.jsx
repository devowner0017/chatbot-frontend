import React, { useContext } from "react";
import '../styles/burgerMenu.scss';
import { ChatContext } from "./MainPage";

const BurgerMenu = () => {
    const { isBurgerOpen, setIsBurgerOpen } = useContext(ChatContext);

    return (
        <div className="burger-container" onClick={() => setIsBurgerOpen(!isBurgerOpen)}>
            <div />
            <div />
            <div />
        </div>
    );
}

export default BurgerMenu;