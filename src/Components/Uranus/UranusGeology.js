import React from 'react'
import Source from '../../assets/icon-source.svg'
import uranus from '../../assets/planet-uranus.svg'
import uranusgeology from '../../assets/geology-uranus.png'



function UranusGeology() {
    return (
        <div>
            <div className='main'>
                <div className='planet-img'>
                    <img src={uranus} alt="Picture of Uranus" />
                    <img className='geology-image' src={uranusgeology} alt="Picture of Uranus Geology" />

                </div>
                <div className='planet-info'>
                    <h1 className='planet-name'>Uranus</h1>
                    <p>The composition of Uranus's atmosphere is different from its bulk, consisting
                        mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of
                        helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere.</p>
                    <p>Source: <a className='wikipedia' href='#'>Wikipedia <img src={Source} /> </a></p>
                    <form method="get" action="/uranus">
                        <button type="submit" className='planet-btn overview'><p>01</p>Overview</button>
                    </form>
                    <form method="get" action="/uranus-internal">
                        <button className='planet-btn structure'><p>02</p>Internal Structure</button>
                    </form>
                    <form method="get" action="/uranus-geology">
                        <button className='planet-btn geology active-uranus'><p>03</p>Surface Geology</button>
                    </form>
                </div>
            </div>
            <div className='footer'>
                <div className='rotation-time'>
                    <p className='title'>ROTATION TIME</p>
                    <p className='value'>17.2 HOURS</p>
                </div>
                <div className='revolution-time'>
                    <p className='title'>REVOLUTION TIME</p>
                    <p className='value'>84.26 YEARS</p>
                </div>
                <div className='radius'>
                    <p className='title'>RADIUS</p>
                    <p className='value'>25,362 KM</p>
                </div>
                <div className='average-temp'>
                    <p className='title'>AVERAGE TEMP.</p>
                    <p className='value'>-195&#8451;</p>
                </div>
            </div>
        </div>

    )
}

export default UranusGeology
