import React from 'react'

function Navbar() {
    return (
        <div className="navbar">

            <div className='home-btn'>
                <p>THE PLANETS</p>
            </div>

            <div className='planets-list'>
                <ul>
                    <li><a href='/'>Mercury</a></li>
                    <li><a href='/venus'>Venus</a></li>
                    <li><a href='/earth'>Earth</a></li>
                    <li><a href='/mars'>Mars</a></li>
                    <li><a href='/jupiter'>Jupiter</a></li>
                    <li><a href='/saturn'>Saturn</a></li>
                    <li><a href='/uranus'>Uranus</a></li>
                    <li><a href='/neptune'>Neptune</a></li>
                </ul>
            </div>






        </div>
    )
}

export default Navbar
