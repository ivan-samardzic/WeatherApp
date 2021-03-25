import './ForecastBox.scss'
import React from 'react'

const ForecastBox = ({city, dayName, timeOffset}) => {


    return (
        <div className="forecast-item">
            <img className='item-image' src={`https://www.bearvalley.com/wp-content/themes/bearvalley/library/images/weather/${city.list[timeOffset].weather[0].icon}.svg`} alt="weather-image" />
            <div className="item-max-temp">{Math.round(city.list[timeOffset - 2].main.temp_max)}<span>&deg;C</span></div>
            <div className="item-min-temp">{Math.round(city.list[timeOffset].main.temp_min)}<span>&deg;C</span></div>  
            <div className="item-day-name">{dayName}</div>
        </div>
    )
}

export default ForecastBox
