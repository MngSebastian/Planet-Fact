import React from 'react'

function Body() {
    return (
        <div className='main'>
            <div className='planet-img'>
                <img src='../assets/geology-mars.png' alt="Picture of Mercury" />
            </div>
            <div className='planet-info'>
                <h1 className='planet-name'>MERCURY</h1>
                <p>Mercury is the smallest planet in the Solar System and the closest to the Sun. 
                Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. 
                Mercury is one of four terrestrial 
                planets in the Solar System, and is a rocky body like Earth.</p>
                <p>Source: <a className='wikipedia' href='#'>Wikipedia</a></p>
                <button className='planet-btn overview'>01 Overview</button>
                <button className='planet-btn structure'>02 Internal Structure</button>
                <button className='planet-btn geology'>03 Surface Geology</button>
            </div>
        </div>
    )
}

export default Body
