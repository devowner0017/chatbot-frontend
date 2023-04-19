import React from "react";
import '../styles/header.scss';
import BurgerMenu from "./BurgerMenu";
import SignInButton from "./buttons/SignInButton";

const Header = () => {
    return (
        <div className="header-container">
            <div className="left-header">
                <BurgerMenu />
                <span>apt</span>
            </div>
            <div className="right-header">
                <SignInButton />
            </div>
        </div>
    );
}
 
export default Header;