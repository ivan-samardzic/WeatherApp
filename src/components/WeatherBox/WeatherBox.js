import './WeatherBox.scss'
import React from 'react'
import CityBox from '../CityBox/CityBox'
import ListBox from '../ListBox/ListBox'

const WeatherBox = ({cities}) => {
    return (
        <div className='weather-box'>
            <div>
                <CityBox cities={cities} />
            </div>
            <div>
                <ListBox cities={cities} />
            </div>
        </div>
    )
}

export default WeatherBox
