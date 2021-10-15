import React from 'react'
import Source from '../../assets/icon-source.svg'
import uranus from '../../assets/planet-uranus-internal.svg'


function UranusInternal() {
    return (
        <div>
            <div className='main'>
                <div className='planet-img'>
                    <img src={uranus} alt="Picture of Uranus" />
                </div>
                <div className='planet-info'>
                    <h1 className='planet-name'>Uranus</h1>
                    <p className='planet-info-text'>The standard model of Uranus's structure is that it consists of three layers:
                        a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an
                        outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of
                        only 0.55 Earth masses.</p>
                    <p>Source: <a className='wikipedia' href='#'>Wikipedia <img src={Source} /> </a></p>
                    <form method="get" action="/uranus">
                        <button type="submit" className='planet-btn overview'><p>01</p>Overview</button>
                    </form>
                    <form method="get" action="/uranus-internal">
                        <button className='planet-btn structure active-uranus'><p>02</p>Internal Structure</button>
                    </form>
                    <form method="get" action="/uranus-geology">
                        <button className='planet-btn geology'><p>03</p>Surface Geology</button>
                    </form>
                </div>
            </div>
            <div className='footer'>
                <div className='rotation-time'>
                    <p className='title'>ROTATION TIME</p>
                    <p className='value'>17.2 HOURS</p>
                </div>
                <div className='revolution-time'>
                    <p className='title'>REVOLUTION TIME</p>
                    <p className='value'>84.26 YEARS</p>
                </div>
                <div className='radius'>
                    <p className='title'>RADIUS</p>
                    <p className='value'>25,362 KM</p>
                </div>
                <div className='average-temp'>
                    <p className='title'>AVERAGE TEMP.</p>
                    <p className='value'>-195&#8451;</p>
                </div>
            </div>
        </div>

    )
}

export default UranusInternal
