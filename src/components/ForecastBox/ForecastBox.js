import './ForecastBox.scss'
import React from 'react'

const ForecastBox = ({city, dayName, timeOffset}) => {

    let tempFirstMin = city.list[timeOffset].main.temp_min;
    let tempSecondMin = city.list[timeOffset-1].main.temp_min;
    let tempThirdMin = city.list[timeOffset-2].main.temp_min;
    let tempFourthMin = city.list[timeOffset-3].main.temp_min;

    let tempFirstMax = city.list[timeOffset].main.temp_max;
    let tempSecondMax = city.list[timeOffset-1].main.temp_max;
    let tempThirdMax = city.list[timeOffset-2].main.temp_max;
    let tempFourthMax = city.list[timeOffset-3].main.temp_max;

    const getMinTemp = (tempFirstMin, tempSecondMin, tempThirdMin, tempFourthMin) => {
        if(tempFirstMin <= tempSecondMin && tempFirstMin <= tempThirdMin && tempFirstMin <= tempFourthMin) {
            return tempFirstMin;
        } else if (tempSecondMin <= tempFirstMin && tempSecondMin <= tempThirdMin && tempSecondMin <= tempFourthMin) {
            return tempSecondMin;
        } else if (tempThirdMin <= tempFirstMin && tempThirdMin <= tempSecondMin && tempThirdMin <= tempFourthMin) {
            return tempThirdMin;
        } else {
            return tempFourthMin;
        }
    }

    const getMaxTemp = (tempFirstMax, tempSecondMax, tempThirdMax, tempFourthMax) => {
        if(tempFirstMax >= tempSecondMax && tempFirstMax >= tempThirdMax && tempFirstMin >= tempFourthMin) {
            return tempFirstMax;
        } else if (tempSecondMax >= tempFirstMax && tempSecondMax >= tempThirdMax && tempSecondMax >= tempFourthMax) {
            return tempSecondMax;
        } else if (tempThirdMax >= tempFirstMax && tempThirdMax >= tempSecondMax && tempThirdMax >= tempFourthMax) {
            return tempThirdMax;
        } else {
            return tempFourthMax;
        }
    }

    return (
        <div className="forecast-item">
            <img className='item-image' src={`https://www.bearvalley.com/wp-content/themes/bearvalley/library/images/weather/${city.list[timeOffset].weather[0].icon}.svg`} alt="weather-image" />
            <div className="item-max-temp">{Math.round(getMaxTemp(tempFirstMax, tempSecondMax, tempThirdMax, tempFourthMax))}<span>&deg;C</span></div>
            <div className="item-min-temp">{Math.round(getMinTemp(tempFirstMin, tempSecondMin, tempThirdMin, tempFourthMin))}<span>&deg;C</span></div>  
            <div className="item-day-name">{dayName}</div>
        </div>
    )
}

export default ForecastBox
