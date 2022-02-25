import React from 'react';
import './style.css'

const StartButton = ({ callBack }) => {
    return (
        <div className='startBtn' onClick={callBack}>
            Start Game
        </div>
    );
};

export default StartButton;
