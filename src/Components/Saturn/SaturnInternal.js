import React from 'react'
import Source from '../../assets/icon-source.svg'
import saturn from '../../assets/planet-saturn-internal.svg'


function SaturnInternal() {
    return (
        <div>
            <div className='main'>
                <div className='planet-img'>
                    <img className='saturn-image' src={saturn} alt="Picture of Saturn Internal" />
                </div>
                <div className='planet-info'>
                <div className='left'>
                    <h1 className='planet-name'>Saturn</h1>
                    <p className='planet-info-text'>Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the
                        gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01
                        g/cm3, which is reached at a radius containing 99.9% of Saturn's mass.</p>
                    <p>Source: <a className='wikipedia' href='#'>Wikipedia <img src={Source} /> </a></p>
                </div>
                    <div className='right'>
                    <form method="get" action="/saturn">
                        <button type="submit" className='planet-btn overview '><p>01</p>Overview</button>
                    </form>
                    <form method="get" action="/saturn-internal">
                        <button className='planet-btn structure active-saturn'><p>02</p>Internal Structure</button>
                    </form>
                    <form method="get" action="/saturn-geology">
                        <button className='planet-btn geology'><p>03</p>Surface Geology</button>
                    </form>
                    </div>
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

export default SaturnInternal
