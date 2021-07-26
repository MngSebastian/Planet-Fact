import React from 'react'
import Source from '../assets/icon-source.svg'
import Mercury from '../assets/planet-mercury.svg'


function Body() {
    return (
        <div className='main'>
            <div className='planet-img'>
                <img src={Mercury} alt="Picture of Mercury" />
            </div>
            <div className='planet-info'>
                <h1 className='planet-name'>MERCURY</h1>
                <p>Mercury is the smallest planet in the Solar System and the closest to the Sun. 
                Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. 
                Mercury is one of four terrestrial 
                planets in the Solar System, and is a rocky body like Earth.</p>
                <p>Source: <a className='wikipedia' href='#'>Wikipedia <img src={Source}/> </a></p>
                <button className='planet-btn overview'><p>01</p>Overview</button>
                <button className='planet-btn structure'><p>02</p>Internal Structure</button>
                <button className='planet-btn geology'><p>03</p>Surface Geology</button>
            </div>
        </div>
    )
}

export default Body
