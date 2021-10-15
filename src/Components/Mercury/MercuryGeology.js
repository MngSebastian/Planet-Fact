import React from 'react'
import Source from '../../assets/icon-source.svg'

import mercury from '../../assets/planet-mercury.svg'
import mercurygeology from '../../assets/geology-mercury.png'

function MercuryInternal() {
    return (
        <div>
            <div className='main'>
                <div className='planet-img'>
                    <img src={mercury} alt="Picture of Mercury" />
                    <img className='geology-image' src={mercurygeology} alt="Picture of Mercury Geology" />
                </div>
                <div className='planet-info'>
                    <h1 className='planet-name'>MERCURY</h1>
                    <p className='planet-info-text'>Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like
                        plains and heavy cratering, indicating that it has been geologically inactive for billions of
                        years. It is more heterogeneous than either Mars's or the Moon’s.</p>
                    <p>Source: <a className='wikipedia' href='#'>Wikipedia <img src={Source} /> </a></p>
                    <form method="get" action="/">
                        <button type="submit" className='planet-btn overview'><p>01</p>Overview</button>
                    </form>
                    <form method="get" action="/mercury-internal">
                        <button className='planet-btn structure'><p>02</p>Internal Structure</button>
                    </form>
                    <form method="get" action="/mercury-geology">
                        <button className='planet-btn geology active-mercury'><p>03</p>Surface Geology</button>
                    </form>
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

export default MercuryInternal
