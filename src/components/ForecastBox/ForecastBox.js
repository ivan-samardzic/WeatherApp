import './ForecastBox.scss'
import React from 'react'

const ForecastBox = ({city, dayOffset, timeOffset}) => {

    const handleDay = (dayOffset) => {
        let date = new Date();
        let day = date.getDay();
        day += dayOffset;
        let today = '';
        switch (day % 7) {
          case 0:
            today = 'Wednesday';
            break;
          case 1:
            today = 'Thursday';
            break;
          case 2:
            today = 'Friday';
            break;
          case 3:
            today = 'Saturday';
            break;
          case 4:
            today = 'Sunday';
            break;
          case 5:
            today = 'Monday';
            break;
          case 6:
            today = 'Tuesday';
            break;
          default:
            today = '';
        }
    
        return today;
    }

    return (
        <div className="forecast-item">
            <img className='item-image' src={`https://www.bearvalley.com/wp-content/themes/bearvalley/library/images/weather/${city.list[timeOffset].weather[0].icon}.svg`} alt="weather-image" />
            <div className="item-max-temp">{Math.round(city.list[timeOffset - 2].main.temp_max)}<span>&deg;C</span></div>
            <div className="item-min-temp">{Math.round(city.list[timeOffset].main.temp_min)}<span>&deg;C</span></div>  
            <div className="item-day-name">{handleDay(dayOffset)}</div>
        </div>
    )
}

export default ForecastBox
