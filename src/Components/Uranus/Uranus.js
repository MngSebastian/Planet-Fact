import React from 'react'
import Source from '../../assets/icon-source.svg'
import uranus from '../../assets/planet-uranus.svg'


function Uranus() {
    return (
        <div>
            <div className='main'>
                <div className='planet-img'>
                    <img src={uranus} alt="Picture of Uranus" />
                </div>
                <div className='planet-info'>
                    <h1 className='planet-name'>URANUS</h1>
                    <p className='planet-info-text'>Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god
                        of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares.
                        It has the third-largest planetary radius and fourth-largest planetary mass in the Solar
                        System.</p>
                    <p>Source: <a className='wikipedia' href='#'>Wikipedia <img src={Source} /> </a></p>
                    <form method="get" action="/uranus">
                        <button type="submit" className='planet-btn overview active-uranus'><p>01</p>Overview</button>
                    </form>
                    <form method="get" action="/uranus-internal">
                        <button className='planet-btn structure'><p>02</p>Internal Structure</button>
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

export default Uranus
