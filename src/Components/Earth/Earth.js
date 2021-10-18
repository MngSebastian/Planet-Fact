import React from 'react'
import Source from '../../assets/icon-source.svg'
import earth from '../../assets/planet-earth.svg'


function Earth() {
    return (
        <div>
            <div className='main'>
                <div className='planet-img'>
                    <img src={earth} alt="Picture of Earth" />
                </div>
                <div className='planet-info'>
                    <div className='left'>
                        <h1 className='planet-name'>EARTH</h1>
                        <p className='planet-info-text'>Third planet from the Sun and the only known planet to harbor life. About 29.2%
                        of Earth's surface is land with remaining 70.8% is covered with water.
                        Earth's distance from the Sun, physical properties and geological history have allowed
                        life to evolve and thrive.</p>
                        <p>Source: <a className='wikipedia' href='#'>Wikipedia <img src={Source} /> </a></p>
                    </div>
                    <div className='right'>
                        <form method="get" action="/earth">
                            <button type="submit" className='planet-btn overview active-earth'><p>01</p>Overview</button>
                        </form>
                        <form method="get" action="/earth-internal">
                            <button className='planet-btn structure'><p>02</p>Internal Structure</button>
                        </form>
                        <form method="get" action="/earth-geology">
                            <button className='planet-btn geology'><p>03</p>Surface Geology</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='footer'>
                <div className='rotation-time'>
                    <p className='title'>ROTATION TIME</p>
                    <p className='value'>0.99 DAYS</p>
                </div>
                <div className='revolution-time'>
                    <p className='title'>REVOLUTION TIME</p>
                    <p className='value'>365.26 DAYS</p>
                </div>
                <div className='radius'>
                    <p className='title'>RADIUS</p>
                    <p className='value'>6,371 KM</p>
                </div>
                <div className='average-temp'>
                    <p className='title'>AVERAGE TEMP.</p>
                    <p className='value'>16&#8451;</p>
                </div>
            </div>
        </div>

    )
}

export default Earth
