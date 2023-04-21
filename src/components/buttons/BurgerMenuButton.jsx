import React, { useContext } from "react";
import '../../styles/buttons/burgerMenuButton.scss';
import { ChatContext } from "../MainPage";

const BurgerMenuButton = () => {
    const { isBurgerOpen, setIsBurgerOpen } = useContext(ChatContext);

    return (
        <div className="burger-container" onClick={() => setIsBurgerOpen(!isBurgerOpen)}>
            <div />
            <div />
            <div />
        </div>
    );
}

export default BurgerMenuButton;