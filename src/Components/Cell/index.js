import React from 'react';
import { SHAPES } from '../SHAPES';

// React.memo makes sure we only re-render the changed cells
const Cell = ({ type }) => {

    const color = SHAPES[type].color;

    return (
        <div
            style={{
                width: 'auto',
                /* border-radius: 5px; */
                background: `rgba(${color}, 0.8)`,
                border: `${type === 0 ? '0px solid' : '4px solid'}`,
                borderBottomColor: `rgba(${color}, 0.1)`,
                borderRightColor: `rgba(${color}, 1)`,
                borderTopColor: `rgba(${color}, 1)`,
                borderLeftColor: `rgba(${color}, 0.3)`
            }}
        >

        </div>
    );
}

export default React.memo(Cell);
