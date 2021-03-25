import './CityBox.scss'
import React, {useState, useContext} from 'react'
import AddFavorite from '../AddFavorite/AddFavorite'
import WeatherContext from '../../context/weatherContext'
import Spinner from '../Spinner/Spinner'
import ForecastBox from '../ForecastBox/ForecastBox'

const CityBox = () => {
    const context = useContext(WeatherContext)
    const {loading, city, addCity} = context;
    const image_base= 'https://www.bearvalley.com/wp-content/themes/bearvalley/library/images/weather/';
    const handleDirection = (direction) => {
        let stringDir = '';
        if((direction > 337.5 && direction < 22.5 ) || (direction === 0)  ||(direction === 360)) {
            stringDir = 'N';
        } else if (direction >= 22.5 && direction < 67.5) {
            stringDir = 'NE';
        } else if (direction >= 67.5 && direction < 112.5) {
            stringDir = 'E';
        } else if (direction >= 112.5 && direction < 157.5) {
            stringDir = 'SE';
        } else if (direction >= 157.5 && direction < 202.5) {
            stringDir = 'S';
        } else if (direction >= 202.5 && direction < 247.5) {
            stringDir = 'SW';
        } else if (direction >= 247.5 && direction < 292.5) {
            stringDir = 'W';
        } else if (direction >= 292.5 && direction < 337.5) {
            stringDir = 'NW';
        }
        return stringDir;
    }

    const handleTime = (time, timezone) => {
        let zone = timezone / 3600;
        let date = new Date(time * 1000);
        let hours = date.getHours();
        let minutes = "0" + date.getMinutes();
        let formattedTime = (hours + zone) + ':' + minutes.substr(-2);
        return formattedTime;
    }

    const handleDay = (dayOffset) => {
        let date = new Date();
        let day = date.getDay();
        day += dayOffset;
        let today = '';
        switch (day % 7) {
          case 0:
            today = 'Sunday';
            break;
          case 1:
            today = 'Monday';
            break;
          case 2:
            today = 'Tuesday';
            break;
          case 3:
            today = 'Wednesday';
            break;
          case 4:
            today = 'Thursday';
            break;
          case 5:
            today = 'Friday';
            break;
          case 6:
            today = 'Saturday';
            break;
          default:
            today = '';
        }
    
        return today;
    }

    if(loading) {
        return <Spinner />
    }
    else {
        return (
        <div className='main-box'>
            <div className='city-box'>
                <div className='favorite-box' onClick={() => addCity(city)}>
                    <AddFavorite  />
                </div>
                <div className='first-row'>
                    <div className='left-corner'>
                        <div className='city-name'>{city.city.name}</div>
                        <div className='city-temp'><small>Temp.</small> {Math.round(city.list[0].main.temp)} <span>&deg;C</span></div>
                    </div>
                    <div className='right-corner'>
                        <img className="city-image" 
                        src={`${image_base}${city.list[0].weather[0].icon}.svg`} alt='weather-image' />
                        <div className='city-description'>{city.list[0].weather[0].main}</div>
                    </div>
                </div>
                <div className='second-row'>
                    <div className='city-temp-min-max'>
                        <div className='min-temp'><small>Min</small> {Math.round(city.list[0].main.temp_min)}<span>&deg;C</span></div>
                        <div className='max-temp'><small>Max</small> {Math.round(city.list[0].main.temp_max)}<span>&deg;C</span></div>
                    </div>
                    <div className='pressure-humidity-wind'>
                        <div className='city-wind-description'><small>Wind</small> {city.list[0].wind.speed} <span>km/h </span> 
                            {handleDirection(city.list[0].wind.deg)}
                        </div>
                        <div className='city-pressure'><small>Pressure</small> {city.list[0].main.pressure} <span>hPa</span>
                        </div>
                        <div className='city-humidity'><small>Humidity</small> {city.list[0].main.humidity} <span>%</span>
                        </div>
                    </div>
                    <div className='sunrise-sunset'>
                        <div className='city-sunrise'><small>Sunrise</small> {handleTime((city.city.sunrise),(city.city.timezone))}</div>
                        <div className='city-sunset'><small>Sunset</small> {handleTime((city.city.sunset),(city.city.timezone))}</div>
                    </div>
                </div>
            </div>
            <div className='forecast-box'>
                <ForecastBox city={city} dayName={handleDay(1)} timeOffset='8' />
                <ForecastBox city={city} dayName={handleDay(2)} timeOffset='17' />
                <ForecastBox city={city} dayName={handleDay(3)} timeOffset='25' />
            </div>
        </div>
        )
    }
    
}

export default CityBox
