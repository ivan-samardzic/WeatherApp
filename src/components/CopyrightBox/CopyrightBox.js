import './CopyrightBox.scss'
import React from 'react'

const CopyrightBox = () => {
    return (
        <div className='copyright-box'>
            <h3 className='copyright-sign'><i className="far fa-copyright"></i> WeatherApp</h3>
            <h4 className='app-description'>Made To Show Weather Whatever City Name User Type In</h4>
            <h4 className='app-version'>This is App Version 1.0.0 And the Code Can Be Checked By Clicking 
                <a href='https://github.com/ivan-samardzic/WeatherApp'>Here</a> 
            </h4>
        </div>
    )
}

export default CopyrightBox
