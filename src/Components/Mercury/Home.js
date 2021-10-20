import React from 'react'
import Source from '../../assets/icon-source.svg'
import Mercury from '../../assets/planet-mercury.svg'


function Body() {
    return (
        <div>
            <div className='main'>
                <div className='planet-img'>
                    <img src={Mercury} alt="Picture of Mercury" />

                </div>
                <div className='planet-info'>
                <div className='left'>
                    <h1 className='planet-name'>MERCURY</h1>
                    <p className='planet-info-text'>Mercury is the smallest planet in the Solar System and the closest to the Sun.
                        Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets.
                        Mercury is one of four terrestrial
                        planets in the Solar System, and is a rocky body like Earth.</p>
                    <p>Source: <a className='wikipedia' href='#'>Wikipedia <img src={Source} /> </a></p>
                </div>
                <div className='right'>
                    <form method="get" action="/">
                        <button type="submit" className='planet-btn overview active-mercury'><p>01</p>Overview</button>
                    </form>
                    <form method="get" action="/mercury-internal">
                        <button className='planet-btn structure'><p>02</p>Internal Structure</button>
                    </form>
                    <form method="get" action="/mercury-geology">
                        <button className='planet-btn geology'><p>03</p>Surface Geology</button>
                    </form>
                </div>
                </div>
            </div>
            <div className='footer'>
                <div className='rotation-time'>
                    <p className='title'>ROTATION TIME</p>
                    <p className='value'>58.6 DAYS</p>
                </div>
                <div className='revolution-time'>
                    <p className='title'>REVOLUTION TIME</p>
                    <p className='value'>87.97 DAYS</p>
                </div>
                <div className='radius'>
                    <p className='title'>RADIUS</p>
                    <p className='value'>2,439.7 DAYS</p>
                </div>
                <div className='average-temp'>
                    <p className='title'>AVERAGE TEMP.</p>
                    <p className='value'>430&#8451;</p>
                </div>
            </div>
        </div>

    )
}

export default Body
