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
                <img src="/icon-share.svg" alt="Share Icon"/>
            </div>
            <div className={`active-share ${isActive ? 'visible' : ''}`}>
                SHARE
                <img src="/icon-facebook.svg" alt="Facebook Icon"/>
                <img src="/icon-pinterest.svg" alt="Pinterest Icon"/>
                <img src="/icon-twitter.svg" alt="Twitter Icon"/>
            <div className="triangle-box"></div>
            </div>
        </div>
    );
}

export default ShareBox;
