import React, { useContext, useState } from "react";
import '../../styles/burgerMenu/burgerMenuMain.scss'
import BurgerMenuHeader from "./BurgerMenuHeader";
import BurgerMenuInsights from "./BurgerMenuInsights";
import BurgerMenuGuides from "./BurgerMenuGuides";
import BurgerMenuSignIn from "./BurgerMenuSignIn";
import BurgerMenuSettings from "./BurgerMenuSettings";
import { Context } from "../..";
import { observer } from "mobx-react-lite";

const BurgerMenuMain = observer(() => {
    const {user} = useContext(Context)
    const [settingsOpen, setSettingsOpen] = useState(false)
    

    return (
        <div className="burger-menu-main">
            <BurgerMenuHeader setSettingsOpen={setSettingsOpen}/>
            <BurgerMenuInsights />
            {
                user.isAuth ?
                <BurgerMenuGuides />
                :
                <BurgerMenuSignIn />
            }
            {settingsOpen && <BurgerMenuSettings props={{settingsOpen, setSettingsOpen}}/>}
        </div>
    );
})
 
export default BurgerMenuMain;