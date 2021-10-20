import React from 'react'
import Source from '../../assets/icon-source.svg'
import Earth from '../../assets/planet-earth.svg'
import earthgeology from '../../assets/geology-earth.png'


function EarthGeology() {
    return (
        <div>
            <div className='main'>
                <div className='planet-img'>
                    <img src={Earth} alt="Picture of Earth" />
                    <img className='geology-image' src={earthgeology} alt="Picture of Earth" />

                </div>
                <div className='planet-info'>
                <div className='left'>
                    <h1 className='planet-name'>Earth</h1>
                    <p className='planet-info-text'>Earth's interior, like that of the other terrestrial planets, is divided into layers by
                        their chemical or physical (rheological) properties. The outer layer is a chemically distinct
                        silicate solid crust, which is underlain by a highly viscous solid mantle.</p>
                    <p>Source: <a className='wikipedia' href='#'>Wikipedia <img src={Source} /> </a></p>
                </div>
                <div className='right'>
                    <form method="get" action="/earth">
                        <button type="submit" className='planet-btn overview'><p>01</p>Overview</button>
                    </form>
                    <form method="get" action="/earth-internal">
                        <button className='planet-btn structure'><p>02</p>Internal Structure</button>
                    </form>
                    <form method="get" action="/earth-geology">
                        <button className='planet-btn geology active-earth'><p>03</p>Surface Geology</button>
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

export default EarthGeology
