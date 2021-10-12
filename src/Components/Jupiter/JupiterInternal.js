import React from 'react'
import Source from '../../assets/icon-source.svg'
import jupiter from '../../assets/planet-jupiter-internal.svg'


function JupiterInternal() {
    return (
        <div>
            <div className='main'>
                <div className='planet-img'>
                    <img src={jupiter} alt="Picture of Jupiter" />
                </div>
                <div className='planet-info'>
                    <h1 className='planet-name'>Jupiter</h1>
                    <p>When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes
                        into its mantle. A possible cause is an impact from a planet of about ten Earth masses a
                        few million years after Jupiter's formation, which would have disrupted an originally
                        solid Jovian core.</p>
                    <p>Source: <a className='wikipedia' href='#'>Wikipedia <img src={Source} /> </a></p>
                    <form method="get" action="/jupiter">
                        <button type="submit" className='planet-btn overview'><p>01</p>Overview</button>
                    </form>
                    <form method="get" action="/jupiter-internal">
                        <button className='planet-btn structure active-jupiter'><p>02</p>Internal Structure</button>
                    </form>
                    <form method="get" action="/jupiter-geology">
                        <button className='planet-btn geology'><p>03</p>Surface Geology</button>
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

export default JupiterInternal
