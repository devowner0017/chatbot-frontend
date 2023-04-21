import React from "react";
import '../styles/header.scss';
import BurgerMenuButton from "./buttons/BurgerMenuButton";
import SignInButton from "./buttons/SignInButton";

const Header = () => {
    return (
        <div className="header-container">
            <div className="left-header">
                <BurgerMenuButton />
                <span>apt</span>
            </div>
            <div className="right-header">
                <SignInButton />
            </div>
        </div>
    );
}
 
export default Header;