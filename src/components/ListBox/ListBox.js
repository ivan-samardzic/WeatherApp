import './ListBox.scss'
import React, {useState, useEffect, useContext} from 'react'
import WeatherContext from '../../context/weatherContext'
import RemoveFavorite from '../RemoveFavorite/RemoveFavorite'

const ListBox = () => {
    const context = useContext(WeatherContext)
    const {favorites, deleteCity, setCurrentCity} = context;
    console.log(favorites)
    return (
        <div className='list-box'>
            <div className='list-box-name'>Favorites</div>
            {favorites.length > 0 ?
                favorites.map((favorite, index) => 
                <div className="list-item m-3">
                    <div className="list-item-name" onClick={() => setCurrentCity(favorite)}>
                        {favorite.city.name}
                    </div>
                    <div className="list-item-temp">
                    {Math.round(favorite.list[0].main.temp)}<span>&deg;C</span>
                    </div>
                    <div onClick={() => deleteCity(favorite)}>
                        <RemoveFavorite />
                    </div>
                </div>
                ) :
                <p style={{color : "grey", fontSize : "16px"}}>No Cities In Favorites List</p>
                }
        </div>
    )
}

export default ListBox
