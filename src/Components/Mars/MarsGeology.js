import React from 'react'
import Source from '../../assets/icon-source.svg'
import mars from '../../assets/planet-mars.svg'
import marsgeology from '../../assets/geology-mars.png'


function MarsGeology() {
    return (
        <div>
            <div className='main'>
                <div className='planet-img'>
                    <img src={mars} alt="Picture of Mars" />
                    <img className='geology-image' src={marsgeology} alt="Picture of Mars" />

                </div>
                <div className='planet-info'>
                    <h1 className='planet-name'>Mars</h1>
                    <p>Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen,
                        metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic
                        basalt, although parts are more silica-rich than typical basalt.</p>
                    <p>Source: <a className='wikipedia' href='#'>Wikipedia <img src={Source} /> </a></p>
                    <form method="get" action="/mars">
                        <button type="submit" className='planet-btn overview'><p>01</p>Overview</button>
                    </form>
                    <form method="get" action="/mars-internal">
                        <button className='planet-btn structure'><p>02</p>Internal Structure</button>
                    </form>
                    <form method="get" action="/mars-geology">
                        <button className='planet-btn geology active-mars'><p>03</p>Surface Geology</button>
                    </form>
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

export default MarsGeology
