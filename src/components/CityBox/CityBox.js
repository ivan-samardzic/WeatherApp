import './CityBox.scss'
import React from 'react'
import WeatherBox from '../WeatherBox/WeatherBox'
import ForecastBox from '../ForecastBox/ForecastBox'

const CityBox = () => {
    return (
        <div className='city-box'>
            <WeatherBox />
            <ForecastBox />
        </div>
    )
}

export default CityBox
