import React from 'react'
import './Style.css'

function ShowChesssBoard() {
    const cols = 8, rows = 8;
 
    var chessboard = [];
    let temp = 0;

    for (let row = 1; row <= rows; row++) {
        for (let col = 1; col <= cols; col++) {
            const box = <div className={`box text-dark text-center`}
                style={{
                    borderTopLeftRadius: `${col == 1 && row == 1 ? '5px' : ''}`,
                    borderTopRightRadius: `${col == 8 && row == 1 ? '5px' : ''}`,
                    borderBottomLeftRadius: `${col == 1 && row == 8 ? '5px' : ''}`,
                    borderBottomRightRadius: `${col == 8 && row == 8 ? '5px' : ''}`,
                    backgroundColor: `${temp % 2 == 0 ? '#f6ffe3' : '#81b64c'}`
                }}>
                {row}{col}
            </div>
            chessboard.push(box);
            temp++;
        }
        temp % 2 == 0 ? temp = 1 : temp = 0;
    }

    return (
        <div className='chessboard row p-1'>
            {chessboard}
        </div>
    )
}

export default ShowChesssBoard
