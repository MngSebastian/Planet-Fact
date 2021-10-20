import React from 'react'
import Source from '../../assets/icon-source.svg'
import mars from '../../assets/planet-mars.svg'


function Mars() {
    return (
        <div>
            <div className='main'>
                <div className='planet-img'>
                    <img src={mars} alt="Picture of Mars" />
                </div>
                <div className='planet-info'>
                <div className='left'>
                    <h1 className='planet-name'>MARS</h1>
                    <p className='planet-info-text'>Mars is the fourth planet from the Sun and the second-smallest planet in the
                        Solar System, being larger than only Mercury. In English, Mars carries the name
                        of the Roman god of war and is often referred to as the "Red Planet".</p>
                    <p>Source: <a className='wikipedia' href='#'>Wikipedia <img src={Source} /> </a></p>
                </div>
                <div className='right'>
                    <form method="get" action="/mars">
                        <button type="submit" className='planet-btn overview active-mars'><p>01</p>Overview</button>
                    </form>
                    <form method="get" action="/mars-internal">
                        <button className='planet-btn structure'><p>02</p>Internal Structure</button>
                    </form>
                    <form method="get" action="/mars-geology">
                        <button className='planet-btn geology'><p>03</p>Surface Geology</button>
                    </form>
                </div>
                </div>
            </div>
            <div className='footer'>
                <div className='rotation-time'>
                    <p className='title'>ROTATION TIME</p>
                    <p className='value'>1.03 DAYS</p>
                </div>
                <div className='revolution-time'>
                    <p className='title'>REVOLUTION TIME</p>
                    <p className='value'>1.88 YEARS</p>
                </div>
                <div className='radius'>
                    <p className='title'>RADIUS</p>
                    <p className='value'>3,389.5 KM</p>
                </div>
                <div className='average-temp'>
                    <p className='title'>AVERAGE TEMP.</p>
                    <p className='value'>-28&#8451;</p>
                </div>
            </div>
        </div>

    )
}

export default Mars
