import React from 'react';
import './App.css';
import ShareBox from './ShareBox';

function App() {
  return (
    <>
    <div className="web-wrapper">
    <div className='web-containner'>
      <div className="left-box-containner">
      <img className="drawwer-image" src="../public/images/drawers.jpg" alt="drawers"width={500} height={500} />
      </div>
      <div className="right-box-containner">
        <div className="right-text-box"> 
        <div className="title-box"> Shift the overall look and feel by <br/> adding these wonderful
        touches to <br/> furniture in your home.</div>
        <br/>
        <div className="subtext-box">Ever been in a room and felt like something was missing? <br/>Perhaps
        it felt slightly bare and uninviting. I’ve got some <br/> simple tips
        to help you make any room feel complete.</div>
        </div>
        <div className="name-box">
          <div className="name-textbox"> 
          <img className="img-avatar" src='../public/images/avatar-michelle.jpg'/>
           <div className="name-context"> 
           <div className='name-title'>
           Michelle Appleton
          </div> 
          28 Jun 2020 
          </div>
          </div>
          <ShareBox />
        </div>
      </div>
    </div>
    <br/>
       <div className="attribution">
       Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer">Frontend Mentor</a>.
       Coded by <a href="#">Rachaphol Plookaom</a>.
     </div>
     </div>
    </>
  );
}

export default App;
