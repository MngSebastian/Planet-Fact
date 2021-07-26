import React from 'react'

function Footer() {
    return (
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
    )
}

export default Footer
