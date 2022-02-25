import React from 'react';
import './style.css'

const Display = ({ gameOver, text }) => {
    return (
        <div
            className='display'
            style={{ color: `${gameOver ? 'red' : '#999'}` }}
        >
            {text}
        </div>
    );
};

export default Display;
