import React from "react";
import '../styles/insightChatBody.scss';

const InsightChatBody = ({text, type}) => {
    return (
        <div className="insight-chat-body-container">
            <div className="insight-chat-body-main">
                <div className="insight-chat-body-header">
                    <div className="insight-chat-body-img">
                        {type === 0 && <img src="/images/img-1.svg" alt="icon"/> }
                        {type === 1 && <img src="/images/img-2.svg" alt="icon"/> }
                        {type === 2 && <img src="/images/img-3.svg" alt="icon"/> }
                    </div>
                    {type === 0 && <h1>Personality insight</h1>}
                    {type === 1 && <h1>Work life</h1>}
                    {type === 2 && <h1>Career opportunities</h1>}
                    <p>{text.length > 600 ? text.slice(0, 600) + '...' : text}</p>
                </div>
                <div className="insight-chat-body-footer">
                    <img src="/icons/check-circle-1.svg" alt="icon"/>
                    <p className="m-0">Saved</p>
                </div>
            </div>
        </div>
    );
}
 
export default InsightChatBody;