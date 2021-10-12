import React from 'react'
import Source from '../../assets/icon-source.svg'
import Venus from '../../assets/planet-venus-internal.svg'

function VenusInternal() {
    return (
        <div>
            <div className='main'>
                <div className='planet-img'>
                    <img src={Venus} alt="Picture of Venus" />
                </div>
                <div className='planet-info'>
                    <h1 className='planet-name'>Venus</h1>
                    <p>The similarity in size and density between Venus and Earth suggests they
                        share a similar internal structure: a core, mantle, and crust.
                        Like that of Earth, Venusian core is most likely at least partially liquid
                        because the two planets have been cooling at about the same rate.</p>
                    <p>Source: <a className='wikipedia' href='#'>Wikipedia <img src={Source} /> </a></p>
                    <form method="get" action="/venus">
                        <button type="submit" className='planet-btn overview'><p>01</p>Overview</button>
                    </form>
                    <form method="get" action="/venus-internal">
                        <button className='planet-btn structure active-venus'><p>02</p>Internal Structure</button>
                    </form>
                    <form method="get" action="/venus-geology">
                        <button className='planet-btn geology'><p>03</p>Surface Geology</button>
                    </form>
                </div>
            </div>
            <div className='footer'>
                <div className='rotation-time'>
                    <p className='title'>ROTATION TIME</p>
                    <p className='value'>243 DAYS</p>
                </div>
                <div className='revolution-time'>
                    <p className='title'>REVOLUTION TIME</p>
                    <p className='value'>224.7 DAYS</p>
                </div>
                <div className='radius'>
                    <p className='title'>RADIUS</p>
                    <p className='value'>6,051.8 KM</p>
                </div>
                <div className='average-temp'>
                    <p className='title'>AVERAGE TEMP.</p>
                    <p className='value'>471&#8451;</p>
                </div>
            </div>
        </div>

    )
}

export default VenusInternal
