import React from 'react'
import Source from '../../assets/icon-source.svg'
import jupiter from '../../assets/planet-jupiter.svg'
import jupitergeology from '../../assets/geology-jupiter.png'



function JupiterGeology() {
    return (
        <div>
            <div className='main'>
                <div className='planet-img'>
                    <img className='jupiter-image' src={jupiter} alt="Picture of Jupiter" />
                    <img className='geology-image' src={jupitergeology} alt="Picture of Jupiter Geology" />

                </div>
                <div className='planet-info'>
                    <h1 className='planet-name'>Jupiter</h1>
                    <p className='planet-info-text'>The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located
                        22° south of the equator. It is known to have existed since at least 1831, and possibly since
                        1665.</p>
                    <p>Source: <a className='wikipedia' href='#'>Wikipedia <img src={Source} /> </a></p>
                    <form method="get" action="/jupiter">
                        <button type="submit" className='planet-btn overview'><p>01</p>Overview</button>
                    </form>
                    <form method="get" action="/jupiter-internal">
                        <button className='planet-btn structure'><p>02</p>Internal Structure</button>
                    </form>
                    <form method="get" action="/jupiter-geology">
                        <button className='planet-btn geology active-jupiter'><p>03</p>Surface Geology</button>
                    </form>
                </div>
            </div>
            <div className='footer'>
                <div className='rotation-time'>
                    <p className='title'>ROTATION TIME</p>
                    <p className='value'>9.93 DAYS</p>
                </div>
                <div className='revolution-time'>
                    <p className='title'>REVOLUTION TIME</p>
                    <p className='value'>11.86 YEARS</p>
                </div>
                <div className='radius'>
                    <p className='title'>RADIUS</p>
                    <p className='value'>69,911 KM</p>
                </div>
                <div className='average-temp'>
                    <p className='title'>AVERAGE TEMP.</p>
                    <p className='value'>-108&#8451;</p>
                </div>
            </div>
        </div>

    )
}

export default JupiterGeology
