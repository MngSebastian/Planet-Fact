import React from 'react'
import Source from '../../assets/icon-source.svg'
import neptune from '../../assets/planet-neptune.svg'
import neptunegeology from '../../assets/geology-neptune.png'


function NeptuneGeology() {
    return (
        <div>
            <div className='main'>
                <div className='planet-img'>
                    <img src={neptune} alt="Picture of Neptune" />
                    <img src={neptunegeology} alt="Picture of Neptune's Geology" />

                </div>
                <div className='planet-info'>
                    <h1 className='planet-name'>Neptune</h1>
                    <p>Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is
                        also present. Prominent absorption bands of methane exist at wavelengths above 600 nm,
                        in the red and infrared portion of the spectrum.</p>
                    <p>Source: <a className='wikipedia' href='#'>Wikipedia <img src={Source} /> </a></p>
                    <form method="get" action="/neptune">
                        <button type="submit" className='planet-btn overview'><p>01</p>Overview</button>
                    </form>
                    <form method="get" action="/neptune-internal">
                        <button className='planet-btn structure'><p>02</p>Internal Structure</button>
                    </form>
                    <form method="get" action="/neptune-geology">
                        <button className='planet-btn geology active-neptune'><p>03</p>Surface Geology</button>
                    </form>
                </div>
            </div>
            <div className='footer'>
                <div className='rotation-time'>
                    <p className='title'>ROTATION TIME</p>
                    <p className='value'>16.8 HOURS</p>
                </div>
                <div className='revolution-time'>
                    <p className='title'>REVOLUTION TIME</p>
                    <p className='value'>164.79 YEARS</p>
                </div>
                <div className='radius'>
                    <p className='title'>RADIUS</p>
                    <p className='value'>24,622 KM</p>
                </div>
                <div className='average-temp'>
                    <p className='title'>AVERAGE TEMP.</p>
                    <p className='value'>-201&#8451;</p>
                </div>
            </div>
        </div>

    )
}

export default NeptuneGeology
