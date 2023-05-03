import React, { useContext } from "react";
import '../../styles/burgerMenu/burgerMenuInsights.scss'
import { Context } from "../..";
import { observer } from "mobx-react-lite";

const BurgerMenuInsights = observer(() => {
    const { userState, insightsState } = useContext(Context)

    const openInsight = (id) => {
        insightsState.setInsightIdDisplay(id)
        insightsState.setDisplayInsight(true)
    }

    return (
        <div className="burger-menu-insights-container">
            <div className="burger-menu-insights-header">
                <img src="/icons/check-circle-1.svg" alt="icon" />
                <h1>Insights</h1>
            </div>
            <div className="burger-menu-insights-list">
                {
                    userState.userChatHistory.length && userState.userChatHistory?.map((data, index) => (
                        (data.message_type ==='insight' &&
                        <div key={index}>
                            <div onClick={() => openInsight(0, data.message_text[0])}>
                                <div
                                    className={`burger-menu-one-insight ${!userState.isAuth && 'not-active'}`}
                                    onClick={() => openInsight(data.message_id)}
                                    key={index}
                                >
                                    <img src="/images/img-1.svg" alt="icon" />
                                    <div>
                                        <h1>Personality insight</h1>
                                        <h2>{data.message_text[0].substring(0, 30) + "..."}</h2>
                                    </div>
                                </div>
                            </div>
                            <div onClick={() => openInsight(1, data.message_text[1])} className="mt-2">
                                <div
                                    className={`burger-menu-one-insight ${!userState.isAuth && 'not-active'}`}
                                    onClick={() => openInsight(data.message_id)}
                                    key={index}
                                >
                                    <img src="/images/img-2.svg" alt="icon" />
                                    <div>
                                        <h1>Work life</h1>
                                        <h2>{data.message_text[1].substring(0, 30) + "..."}</h2>
                                    </div>
                                </div>
                            </div>
                            <div onClick={() => openInsight(2, data.message_text[2])} className="mt-2">
                                <div
                                    className={`burger-menu-one-insight ${!userState.isAuth && 'not-active'}`}
                                    onClick={() => openInsight(data.message_id)}
                                    key={index}
                                >
                                    <img src="/images/img-3.svg" alt="icon" />
                                    <div>
                                        <h1>Career opportunities</h1>
                                        <h2>{data.message_text[2].substring(0, 30) + "..."}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    ))
                }
            </div>
        </div>
    );
})

export default BurgerMenuInsights;
