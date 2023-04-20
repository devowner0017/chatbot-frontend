import React from "react";
import '../styles/displayInsight.scss';

const DisplayInsight = ({setShowInsight}) => {
    return (
        <div className={"insight-container"}> 
            <div className="insight-top-menu">
                <img src="/icons/arrow-left-1.svg" alt='icon' onClick={() => setShowInsight(false)}/>
                <p>Reader</p>
                <img src="/icons/check-circle-1.svg" alt='icon'/>
            </div>
            <div className="insight-content">
                <img src="/images/img-1.jpg" alt='icon'/>
                <div className="insight-text-area">
                    <h5>Career</h5>
                    <h1>Work life</h1>
                    <h4>Taking into consideration the diverse passions and perspectives you've shared, it becomes clear that as an individual, you embody the following traits:</h4>
                    <p>
                        1. Detail-oriented and passionate about design, particularly type design and interactive design. <br />
                        2. Intrigued by historical patterns and their application in the digital age. <br />
                        3. Eager to combine diverse interests, such as sports, tech, design, and cooking, in a dynamic and challenging manner. <br />
                    </p>
                </div>
            </div>
        </div>
    );
}
 
export default DisplayInsight;