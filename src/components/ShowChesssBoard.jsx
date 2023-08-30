import React, { useState } from 'react'
import './Style.css'

function ShowChesssBoard() {

    const cols = 8, rows = 8;
    const [selectedBox, setSelectedBox] = useState(null);

    // Function to toggle the background color of a selected pawn box
    var toggleBackgroundColor = (box) => { 
        if (selectedBox) {
            selectedBox.style.backgroundColor = selectedBox.previousColor;
        }
        // const newColor = box.style.backgroundColor === 'white' ? '#70CAE0' : 'white';
        const newColor = '#70CAE0';
        box.previousColor = box.style.backgroundColor;
        box.style.backgroundColor = newColor;
        setSelectedBox(box);
    }

    var chessboard = [];
    // show chess board UI
    for (let row = 1; row <= rows; row++) {
        for (let col = 1; col <= cols; col++) {
            const boxClassName = `box${row}${col}`
            const backgroundColor = (row + col) % 2 === 0 ? '#779954' : '#e9edcc';
            const boxStyle = {
                borderTopLeftRadius: `${col === 1 && row === 1 ? '5px' : ''}`,
                borderTopRightRadius: `${col === 8 && row === 1 ? '5px' : ''}`,
                borderBottomLeftRadius: `${col === 1 && row === 8 ? '5px' : ''}`,
                borderBottomRightRadius: `${col === 8 && row === 8 ? '5px' : ''}`,
                backgroundColor: backgroundColor
            }

            const box = (
                <div
                    className={`${boxClassName} box-size`}
                    key={boxClassName}
                    style={boxStyle}
                    onClick={(e) => toggleBackgroundColor(e.target)}
                >
                    {/* {row}{col} */}
                </div>
            )
            chessboard.push(box);
        }
    }

    return (
        <div className='chessboard row p-1'>
            {chessboard}

        </div>
    )
}


export default ShowChesssBoard
