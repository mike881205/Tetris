import React from 'react';
import Stage from '../Stage';
import StartButton from '../StartButton';
import './style.css';

const Tetris = () => {

    return (
        <div
            className='wrapper'
            role="button"
            tabIndex="0"
            onKeyDown={e => move(e)}
            onKeyUp={keyUp}
        >
            <div className='game'>
                <Stage stage={stage} />
                <aside>
                    {
                        gameOver ?
                            <Display gameOver={gameOver} text="Game Over" />
                            :
                            <div>
                                <Display text={`Score: ${score}`} />
                                <Display text={`rows: ${rows}`} />
                                <Display text={`Level: ${level}`} />
                            </div>
                    }
                    <StartButton callBack={startGame} />
                </aside>
            </div>
        </div >
    );
};

export default Tetris;
