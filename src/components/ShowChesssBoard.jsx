import React from 'react'
import './Style.css'

function ShowChesssBoard() {
    const cols = 8, rows = 8;
    var prevSelectedPawn = undefined
    var prevSelectedPawnBgColor = undefined
    var chessboard = [];
    let temp = 0;


    // change the background color of selected pawn
    var setPawn = (className, e) => {
        if (prevSelectedPawn) {
            prevSelectedPawn.style.backgroundColor = prevSelectedPawnBgColor
        }
        var box = document.getElementsByClassName(className)[0]
        prevSelectedPawnBgColor = box.style.backgroundColor
        box.style.backgroundColor = '#70CAE0'


        prevSelectedPawn = box;
    }

    for (let row = 1; row <= rows; row++) {
        for (let col = 1; col <= cols; col++) {
            const boxClassName = `box${row}${col}`
            const box = <div className={`${boxClassName} box-size`}
                key={boxClassName}
                style={{
                    borderTopLeftRadius: `${col === 1 && row === 1 ? '5px' : ''}`,
                    borderTopRightRadius: `${col === 8 && row === 1 ? '5px' : ''}`,
                    borderBottomLeftRadius: `${col === 1 && row === 8 ? '5px' : ''}`,
                    borderBottomRightRadius: `${col === 8 && row === 8 ? '5px' : ''}`,
                    backgroundColor: `${temp % 2 === 0 ? '#e9edcc' : '#779954'}`
                }}
                onClick={(e) => { setPawn(boxClassName, e) }}
            >
                {/* {row}{col} */}
            </div>

            chessboard.push(box);
            temp++;
        }
        temp % 2 === 0 ? temp = 1 : temp = 0;
    }

    return (
        <div className='chessboard row p-1'>
            {chessboard}

        </div>
    )
}

export default ShowChesssBoard
