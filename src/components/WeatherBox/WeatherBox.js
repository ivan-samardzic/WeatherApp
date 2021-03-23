import './WeatherBox.scss'
import React, {useState, useEffect, useContext} from 'react'
import CityBox from '../CityBox/CityBox'
import ListBox from '../ListBox/ListBox'

const WeatherBox = () => {
    return (
        <div className='weather-box'>
            <div>
                <CityBox />
            </div>
            <div className='lists-box'>
                <ListBox />
            </div>
        </div>
    )
}

export default WeatherBox
