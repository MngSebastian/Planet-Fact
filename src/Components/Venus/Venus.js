import React from 'react'
import Source from '../../assets/icon-source.svg'
import venus from '../../assets/planet-venus.svg'


function Venus() {
    return (
        <div>
            <div className='main'>
                <div className='planet-img'>
                    <img src={venus} alt="Picture of Venus" />
                </div>
                <div className='planet-info'>
                    <h1 className='planet-name'>VENUS</h1>
                    <p className='planet-info-text'>Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty.
                        As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and
                        can be, on rare occasions, visible to the naked eye in broad daylight.</p>
                    <p>Source: <a className='wikipedia' href='#'>Wikipedia <img src={Source} /> </a></p>
                    <form method="get" action="/venus">
                        <button type="submit" className='planet-btn overview active-venus'><p>01</p>Overview</button>
                    </form>
                    <form method="get" action="/venus-internal">
                        <button className='planet-btn structure '><p>02</p>Internal Structure</button>
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

export default Venus
