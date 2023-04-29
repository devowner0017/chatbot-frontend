import React, { useState } from "react";
import '../../styles/burgerMenu/burgerMenuSettings.scss'

const SettingsForm = () => {
    const [settingsFormEmail, setSettingsFormEmail] = useState('')
    const [settingsFormPassword, setSettingsFormPassword] = useState('')

    const onSend = async (e) => {
        e.preventDefault()
    }
    
    return (
        <div className="burger-settings-form-container">
            <div className="burger-settings-form-body">
                <form onSubmit={onSend} className="burger-settings-form">
                    <label>E-mail</label>
                    <input 
                        type="email" placeholder="tomas@aptchat.com"
                        required
                        value={settingsFormEmail}
                        onChange={(e) => {setSettingsFormEmail(e.target.value)}}
                    />
                    <label>Name</label>
                    <input 
                        type="email" placeholder="Full Name"
                        required
                        value={settingsFormPassword}
                        onChange={(e) => {setSettingsFormPassword(e.target.value)}}
                    />
                </form>
            </div>
        </div>
    );
}
 
export default SettingsForm;