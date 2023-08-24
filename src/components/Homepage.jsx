import React from 'react'
import boardImg from '../images/150.png'
import ShowChesssBoard from './ShowChesssBoard';

export default function Homepage() {
    var boxes = Array.from(Array(64).keys())
    console.log(boxes);


    return (
        <div className=' p-5 bg-dark vh-100 text-light overflow-hidden' >
            {/* <img src={boardImg} className='h-100 ' /> */}
            <ShowChesssBoard />
        </div>
    )
}
