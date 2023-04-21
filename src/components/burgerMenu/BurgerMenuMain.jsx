import React, { useState } from "react";
import '../../styles/burgerMenu/burgerMenuMain.scss'
import BurgerMenuHeader from "./BurgerMenuHeader";
import BurgerMenuInsights from "./BurgerMenuInsights";
import BurgerMenuGuides from "./BurgerMenuGuides";
import BurgerMenuSignIn from "./BurgerMenuSignIn";

const BurgerMenuMain = () => {
    const [isSignedIn, setIsSignedIn] = useState(false)

    return (
        <div className="burger-menu-main">
            <BurgerMenuHeader props={{isSignedIn}}/>
            <BurgerMenuInsights props={{isSignedIn}}/>
            {
                isSignedIn ?
                <BurgerMenuGuides />
                :
                <BurgerMenuSignIn props={{isSignedIn, setIsSignedIn}}/>
            }
        </div>
    );
}
 
export default BurgerMenuMain;