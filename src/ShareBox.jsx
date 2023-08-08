import  { useState } from 'react';
import './ShareBox.css';
import ShareIcon from './assets/icon-share.svg';
import FacebookIcon from './assets/icon-facebook.svg';
import PinterestIcon from './assets/icon-pinterest.svg';
import TwitterIcon from './assets/icon-twitter.svg';


function ShareBox() {
    const [isActive, setIsActive] = useState(false)

    const toggleActive = () => {
        setIsActive(!isActive);
    };

    return (
        <div className="share-box">
            <div className={`non-active-share ${isActive ? 'hidden' : ''}`} onClick={toggleActive}>
                <img src={ShareIcon} alt="Share Icon"/>
            </div>
            <div className={`active-share ${isActive ? 'visible' : ''}`}>
                SHARE
                <img src={FacebookIcon} alt="Facebook Icon"/>
                <img src={PinterestIcon} alt="Pinterest Icon"/>
                <img src={TwitterIcon} alt="Twitter Icon"/>
            <div className="triangle-box"></div>
            </div>
        </div>
    );
}

export default ShareBox;
