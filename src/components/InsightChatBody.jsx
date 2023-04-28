import React from "react";
import '../styles/insightChatBody.scss';

const InsightChatBody = ({text}) => {
    return (
        <div className="insight-chat-body-container">
            <div className="insight-chat-body-main">
                <div className="insight-chat-body-header">
                    <div className="insight-chat-body-img">
                        <img src="/images/img-1.jpg" alt="icon"/>
                    </div>
                    <h1>Career opportunities</h1>
                    <p>{text}</p>
                </div>
                <div className="insight-chat-body-footer">
                    <img src="/icons/check-circle-1.svg" alt="icon"/>
                    <p>Saved</p>
                </div>
            </div>
        </div>
    );
}
 
export default InsightChatBody;