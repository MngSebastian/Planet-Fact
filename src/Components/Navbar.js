import React from 'react'

function Navbar() {
    return (
        <div className="navbar">

            <div className='home-btn'>
                <p>THE PLANETS</p>
            </div>

            <div className='planets-list'>
                <ul >
                    <li><a className='nav-mercury' href='/'>Mercury</a></li>
                    <li><a className='nav-venus' href='/venus'>Venus</a></li>
                    <li><a className='nav-earth' href='/earth'>Earth</a></li>
                    <li><a className='nav-mars' href='/mars'>Mars</a></li>
                    <li><a className='nav-jupiter' href='/jupiter'>Jupiter</a></li>
                    <li><a className='nav-saturn' href='/saturn'>Saturn</a></li>
                    <li><a className='nav-uranus' href='/uranus'>Uranus</a></li>
                    <li><a className='nav-neptune' href='/neptune'>Neptune</a></li>
                </ul>
            </div>






        </div>
    )
}

export default Navbar
