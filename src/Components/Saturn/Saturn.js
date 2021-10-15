import React from 'react'
import Source from '../../assets/icon-source.svg'
import saturn from '../../assets/planet-saturn.svg'


function Saturn() {
    return (
        <div>
            <div className='main'>
                <div className='planet-img'>
                    <img className='saturn-image' src={saturn} alt="Picture of Saturn" />
                </div>
                <div className='planet-info'>
                    <h1 className='planet-name'>SATURN</h1>
                    <p className='planet-info-text'>Saturn is the sixth planet from the Sun and the second-largest in the Solar System,
                        after Jupiter. It is a gas giant with an average radius of about nine and a half times that
                        of Earth.
                        It only has one-eighth the average density of Earth..</p>
                    <p>Source: <a className='wikipedia' href='#'>Wikipedia <img src={Source} /> </a></p>
                    <form method="get" action="/saturn">
                        <button type="submit" className='planet-btn overview active-saturn'><p>01</p>Overview</button>
                    </form>
                    <form method="get" action="/saturn-internal">
                        <button className='planet-btn structure'><p>02</p>Internal Structure</button>
                    </form>
                    <form method="get" action="/saturn-geology">
                        <button className='planet-btn geology'><p>03</p>Surface Geology</button>
                    </form>
                </div>
            </div>
            <div className='footer'>
                <div className='rotation-time'>
                    <p className='title'>ROTATION TIME</p>
                    <p className='value'>10.8 HOURS</p>
                </div>
                <div className='revolution-time'>
                    <p className='title'>REVOLUTION TIME</p>
                    <p className='value'>29.46 YEARS</p>
                </div>
                <div className='radius'>
                    <p className='title'>RADIUS</p>
                    <p className='value'>58,232 KM</p>
                </div>
                <div className='average-temp'>
                    <p className='title'>AVERAGE TEMP.</p>
                    <p className='value'>-138&#8451;</p>
                </div>
            </div>
        </div>

    )
}

export default Saturn
