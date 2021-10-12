import React from 'react'
import Source from '../../assets/icon-source.svg'
import Mercury from '../../assets/planet-mercury-internal.svg'

function MercuryInternal() {
    return (
        <div>
            <div className='main'>
                <div className='planet-img'>
                    <img src={Mercury} alt="Picture of Mercury" />
                </div>
                <div className='planet-info'>
                    <h1 className='planet-name'>MERCURY</h1>
                    <p>Mercury appears to have a solid silicate crust and mantle overlying a solid, iron
                        sulfide outer core layer, a deeper liquid core layer, and a solid inner core.
                        The planet's density is the second highest in the Solar System at 5.427 g/cm3 ,
                        only slightly less than Earth's density.</p>
                    <p>Source: <a className='wikipedia' href='#'>Wikipedia <img src={Source} /> </a></p>
                    <form method="get" action="/">
                        <button type="submit" className='planet-btn overview'><p>01</p>Overview</button>
                    </form>
                    <form method="get" action="/mercury-internal">
                        <button className='planet-btn structure active-mercury'><p>02</p>Internal Structure</button>
                    </form>
                    <form method="get" action="/mercury-geology">
                        <button className='planet-btn geology'><p>03</p>Surface Geology</button>
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
