import './ListBox.scss'
import React from 'react'

const ListBox = ({cities}) => {
    return (
        <div className='list-box'>
            {cities.map((city, index) => 
                <div className='list-item'>
                    <div className='city-name'>{city.name}</div>
                    <div className='city-temp'>{Math.round(city.main.temp)}<span>&deg;C</span></div>
                </div>
            )}
        </div>
    )
}

export default ListBox
