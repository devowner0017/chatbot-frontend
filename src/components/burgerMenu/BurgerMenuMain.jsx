import React, { useContext } from "react";
import '../../styles/burgerMenu/burgerMenuMain.scss'
import BurgerMenuHeader from "./BurgerMenuHeader";
import BurgerMenuInsights from "./BurgerMenuInsights";
import BurgerMenuGuides from "./BurgerMenuGuides";
import BurgerMenuSignIn from "./BurgerMenuSignIn";
import { Context } from "../..";
import { observer } from "mobx-react-lite";

const BurgerMenuMain = observer(() => {
    const {user} = useContext(Context)

    return (
        <div className="burger-menu-main">
            <BurgerMenuHeader />
            <BurgerMenuInsights />
            {
                user.isAuth ?
                <BurgerMenuGuides />
                :
                <BurgerMenuSignIn />
            }
        </div>
    );
})
 
export default BurgerMenuMain;