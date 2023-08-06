import React, { useState } from 'react';
import './ShareBox.css';

function ShareBox() {
    const [isActive, setIsActive] = useState(false)

    const toggleActive = () => {
        setIsActive(!isActive);
    };

    return (
        <div className="share-box">
            <div className={`non-active-share ${isActive ? 'hidden' : ''}`} onClick={toggleActive}>
                <img src="../public/images/icon-share.svg" alt="Share Icon"/>
            </div>
            <div className={`active-share ${isActive ? 'visible' : ''}`}>
                SHARE
                <img src="../public/images/icon-facebook.svg" alt="Facebook Icon"/>
                <img src="../public/images/icon-pinterest.svg" alt="Pinterest Icon"/>
                <img src="../public/images/icon-twitter.svg" alt="Twitter Icon"/>
            <div className="triangle-box"></div>
            </div>
        </div>
    );
}

export default ShareBox;
