import React, { useContext } from "react";
import '../../styles/burgerMenu/burgerMenuHeader.scss'
import { Context } from "../..";

const BurgerMenuHeader = () => {
    const {user} = useContext(Context)

    return (
        <div className="burger-menu-header-container">
            <div className="burger-menu-header-section">
                <h1>My Journey</h1>
                <p>The co-pilot for your career. Discover your path, shape your future. Choose your career with confidence.</p>
            </div>
            <img src="/icons/settings-1.svg" alt="icon" className={!user.isAuth && 'hide-settings'}/>
        </div>
    );
}

export default BurgerMenuHeader;