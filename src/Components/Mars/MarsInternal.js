import React from 'react'
import Source from '../../assets/icon-source.svg'
import mars from '../../assets/planet-mars-internal.svg'


function MarsInternal() {
    return (
        <div>
            <div className='main'>
                <div className='planet-img'>
                    <img src={mars} alt="Picture of Mars" />
                </div>
                <div className='planet-info'>

                <div className='left'>
                    <h1 className='planet-name'>Mars</h1>
                    <p className='planet-info-text'>Like Earth, Mars has differentiated into a dense metallic core overlaid by
                        less dense materials. Scientists initially determined that the core is at least
                        partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.</p>
                    <p>Source: <a className='wikipedia' href='#'>Wikipedia <img src={Source} /> </a></p>
                </div>
                <div className='right'>
                    <form method="get" action="/mars">
                        <button type="submit" className='planet-btn overview'><p>01</p>Overview</button>
                    </form>
                    <form method="get" action="/mars-internal">
                        <button className='planet-btn structure active-mars'><p>02</p>Internal Structure</button>
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

export default MarsInternal
