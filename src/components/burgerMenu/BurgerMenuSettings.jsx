import React from "react";
import '../../styles/burgerMenu/burgerMenuSettings.scss'

const BurgerMenuSettings = ({props}) => {
    return (
        <div className="burger-menu-settings-container">
            <div className="burger-menu-settings-header">
                <img src="/icons/arrow-left-1.svg" alt="icon" onClick={() => props.setSettingsOpen(!props.settingsOpen)}/>
                <h1>Settings</h1>
                <div></div>
            </div>
            <div className="burger-menu-settings-body">
                Body
            </div>
        </div>
    );
}
 
export default BurgerMenuSettings;
