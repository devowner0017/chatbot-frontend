import React, { useContext, useEffect, useState } from "react";
import '../styles/displayInsight.scss';
import { Context } from "..";
import { observer } from "mobx-react-lite";

const DisplayInsight = observer(() => {
    const {insightsState} = useContext(Context)
    const [insightMainText, setInsightMainText] = useState('')

    useEffect(() => {
        insightsState.insightsList.map(insight => {
            if (insight.message_id===insightsState.insightIdDisplay) {
                setInsightMainText(insight.message_text)
            }
        })
    }, [insightsState.insightIdDisplay])

    return (
        <div className={"insight-container"}> 
            <div className="insight-top-menu">
                <img src="/icons/arrow-left-1.svg" alt='icon' onClick={() => insightsState.setDisplayInsight(false)}/>
                <p>Reader</p>
                <img src="/icons/check-circle-1.svg" alt='icon'/>
            </div>
            <div className="insight-content">
                {insightsState.insightIdDisplay === 0 && <img src="/images/img-1.svg" alt='icon'/>}
                {insightsState.insightIdDisplay === 1 && <img src="/images/img-2.svg" alt='icon'/>}
                {insightsState.insightIdDisplay === 2 && <img src="/images/img-3.svg" alt='icon'/>}
                <div className="insight-text-area">
                    <h5>Career</h5>
                    {insightsState.insightIdDisplay === 0 && <h1>Personality insight</h1>}
                    {insightsState.insightIdDisplay === 1 && <h1>Work life</h1>}
                    {insightsState.insightIdDisplay === 2 && <h1>Career opportunities</h1>}
                    <h4>Taking into consideration the diverse passions and perspectives you've shared, it becomes clear that as an individual, you embody the following traits:</h4>
                    <p>
                        {insightsState.insightText}
                    </p>
                </div>
            </div>
        </div>
    );
})
 
export default DisplayInsight;