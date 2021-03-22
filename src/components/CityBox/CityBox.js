import './CityBox.scss'
import React, {useState, useContext} from 'react'
import AddFavorite from '../AddFavorite/AddFavorite'
import WeatherContext from '../../context/weatherContext'
import Spinner from '../Spinner/Spinner'

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

    if(loading) {
        return <Spinner />
    }
    else {
        return (
        <div className='city-box'>
            <div className='favorite-box' onClick={() => addCity(city)}>
                <AddFavorite  />
            </div>
            <div className='first-row'>
                <div className='left-corner'>
                    <div className='city-name'>{city.name}</div>
                    <div className='city-temp'><small>Temp.</small> {Math.round(city.main.temp)} <span>&deg;C</span></div>
                </div>
                <div className='right-corner'>
                    <img className="city-image" src={`${image_base}${city.weather[0].icon}.svg`} alt='weather-image' />
                    <div className='city-description'>{city.weather[0].main}</div>
                </div>
            </div>
            <div className='second-row'>
                <div className='city-temp-min-max'>
                    <div className='min-temp'><small>Min</small> {Math.round(city.main.temp_min)}<span>&deg;C</span></div>
                    <div className='max-temp'><small>Max</small> {Math.round(city.main.temp_max)}<span>&deg;C</span></div>
                </div>
                <div className='pressure-humidity-wind'>
                    <div className='city-wind-description'><small>Wind</small> {Math.round(city.wind.speed)} <span>km/h </span> 
                        {handleDirection(city.wind.deg)}
                    </div>
                    <div className='city-pressure'><small>Pressure</small> {city.main.pressure} <span>hPa</span>
                    </div>
                    <div className='city-humidity'><small>Humidity</small> {city.main.humidity} <span>%</span>
                    </div>
                </div>
                <div className='sunrise-sunset'>
                    <div className='city-sunrise'><small>Sunrise</small> {handleTime((city.sys.sunrise),(city.timezone))}</div>
                    <div className='city-sunset'><small>Sunset</small> {handleTime((city.sys.sunset),(city.timezone))}</div>
                </div>
            </div>
        </div>
        )
    }
    
}

export default CityBox
