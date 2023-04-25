import React, { useContext } from "react";
import '../styles/header.scss';
import BurgerMenuButton from "./buttons/BurgerMenuButton";
import SignInButton from "./buttons/SignInButton";
import { Context } from "..";
import { observer } from "mobx-react-lite";

const Header = observer(() => {
    const {userState} = useContext(Context)

    return (
        <div className="header-container">
            <div className="left-header">
                <BurgerMenuButton />
                <span>apt</span>
            </div>
            <div className="right-header">
                {!userState.isAuth && <SignInButton />}
            </div>
        </div>
    );
})
 
export default Header;