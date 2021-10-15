import React from 'react'

function Navbar() {
    return (
        <div className="navbar">

            <div className='home-btn'>
                <p>THE PLANETS</p>
            </div>

            <div className='planets-list'>
                <ul >
                    <li><a className='nav-mercury' href='/'>MERCURY</a></li>
                    <li><a className='nav-venus' href='/venus'>VENUS</a></li>
                    <li><a className='nav-earth' href='/earth'>EARTH</a></li>
                    <li><a className='nav-mars' href='/mars'>MARS</a></li>
                    <li><a className='nav-jupiter' href='/jupiter'>JUPITER</a></li>
                    <li><a className='nav-saturn' href='/saturn'>SATURN</a></li>
                    <li><a className='nav-uranus' href='/uranus'>URANUS</a></li>
                    <li><a className='nav-neptune' href='/neptune'>NEPTUNE</a></li>
                </ul>
            </div>






        </div>
    )
}

export default Navbar
