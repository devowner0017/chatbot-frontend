import React from "react";
import '../styles/insightChatBody.scss';

const InsightChatBody = () => {
    return (
        <div className="insight-chat-body-container">
            <div className="insight-chat-body-main">
                <div className="insight-chat-body-header">
                    <div className="insight-chat-body-img">
                        <img src="/images/img-1.jpg" alt="icon"/>
                    </div>
                    <h1>Career opportunities</h1>
                    <p>Taking into consideration the diverse passions and perspectives you've shared, it becomes clear that as an individual, you embody the following traits...</p>
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