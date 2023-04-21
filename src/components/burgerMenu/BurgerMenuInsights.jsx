import React from "react"; 
import '../../styles/burgerMenu/burgerMenuInsights.scss'

const BurgerMenuInsights = ({props}) => {
    return (
        <div className="burger-menu-insights-container">
            <div className="burger-menu-insights-header">
                <img src="/icons/check-circle-1.svg" alt="icon"/>
                <h1>Insights</h1>
            </div>
            <div className="burger-menu-insights-list">
                <div className={`burger-menu-one-insight ${!props.isSignedIn && 'not-active'}`}>
                    <img src="/images/img-1.jpg" alt="icon"/>
                    <div>
                        <h1>Personality</h1>
                        <h2>A new beginning</h2>
                    </div>
                </div>
                <div className={`burger-menu-one-insight ${!props.isSignedIn && 'not-active'}`}>
                    <img src="/images/img-1.jpg" alt="icon"/>
                    <div>
                        <h1>Personality</h1>
                        <h2>A new beginning</h2>
                    </div>
                </div>
                <div className={`burger-menu-one-insight ${!props.isSignedIn && 'not-active'}`}>
                    <img src="/images/img-1.jpg" alt="icon"/>
                    <div>
                        <h1>Personality</h1>
                        <h2>A new beginning</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default BurgerMenuInsights;