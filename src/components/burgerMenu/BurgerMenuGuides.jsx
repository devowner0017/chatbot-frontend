import React from "react";
import '../../styles/burgerMenu/burgerMenuGuides.scss'

const BurgerMenuGuides = () => {
    return (
        <div className="burger-menu-guides-container">
            <div className="burger-menu-guides-header">
                <img src="/icons/book-icon-1.svg" alt="icon"/>
                <h1>Guides</h1>
            </div>
            <div className="burger-menu-guides-list">
                <div className="burger-menu-one-guide"> 
                    <img src="/images/background-img-1.png" alt="icon"/>
                    <p>The Junior Engineer</p>
                </div>
                <div className="burger-menu-one-guide"> 
                    <img src="/images/background-img-1.png" alt="icon"/>
                    <p>The Junior Engineer</p>
                </div>
            </div>
        </div>
    );
}
 
export default BurgerMenuGuides;