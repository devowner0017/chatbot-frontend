import React, { useContext } from "react"; 
import '../../styles/burgerMenu/burgerMenuInsights.scss'
import { Context } from "../..";
import { observer } from "mobx-react-lite";

const BurgerMenuInsights = observer(() => {
    const {userState, insightsState} = useContext(Context)

    const openInsight = (id) => {
        insightsState.setInsightIdDisplay(id)
        insightsState.setDisplayInsight(true)
    }

    return (
        <div className="burger-menu-insights-container">
            <div className="burger-menu-insights-header">
                <img src="/icons/check-circle-1.svg" alt="icon"/>
                <h1>Insights</h1>
            </div>
            <div className="burger-menu-insights-list">
                {
                    insightsState.insightsList.map((insight, index) => (
                        <div 
                            className={`burger-menu-one-insight ${!userState.isAuth && 'not-active'}`}
                            onClick={() => openInsight(insight.message_id)}
                            key={index}
                        >
                            <img src="/images/img-1.jpg" alt="icon"/>
                            <div>
                                <h1>Personality</h1>
                                <h2>{insight.message_text}</h2>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
})
 
export default BurgerMenuInsights;
