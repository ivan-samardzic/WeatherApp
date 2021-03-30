import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios'

import WeatherContext from './weatherContext';
import { weatherReducer, ADD_CITY, DELETE_CITY, ADD_CITY_TO_URL} from './weatherReducer';

const WeatherState = props => {
    const [cityName, setCityName] = useState(undefined)
    const [loading, setLoading] = useState(false)
    const [city, setCity] = useState({})
    const [cities, setCities] = useState([])
    const [favorites, setFavorites] = useState([])
    const [sidebarOpen, setSidebarOpen] = useState(false)

    useEffect(() => {
        const API_KEY = 'd10c65b95175a57139959df263291a04';
        setLoading(true)
        const searchCityWeather = async(cityName) => {
            const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}&units=metric&cnt=32`;
            const response = await axios.get(url);
            const responseJSON = await response.data;

            if (responseJSON) {
                console.log(responseJSON)
                setCity(responseJSON);
                setCities([...cities, responseJSON]);
                setLoading(false)
            }
        };

        searchCityWeather(cityName);
    }, [cityName])

    const addCityNameToUrl = (name) => {
        setCityName(name);
        setTimeout(() => {
            setSidebarOpen(false)
        }, 50);
    }

    const addCity = (city) => {
        const updatedCityIndex = favorites.findIndex(favorite => favorite.city.id === city.city.id);
        if (updatedCityIndex < 0) {
            const newFavoritesList = [...favorites, city];
            setFavorites(newFavoritesList);
        }
        else {
            console.log('City is already in favorites list');
        }
    }

    const deleteCity = (deleteCity) => {
        const newFavoriteList = favorites.filter((favorite) => 
        favorite.city.id !== deleteCity.city.id
        );
        setFavorites(newFavoriteList);
    }

    const setCurrentCity = (clickedCity) => { 
        setTimeout(() => {
            setCity(clickedCity);
            setSidebarOpen(false)
        }, 100);
    };

    return(
        <WeatherContext.Provider
        value={{
            cities: cities,
            favorites: favorites,
            city: city,
            addCity: addCity,
            deleteCity: deleteCity,
            addCityNameToUrl: addCityNameToUrl,
            cityName: cityName,
            loading: loading,
            setCurrentCity: setCurrentCity,
            sidebarOpen: sidebarOpen, 
            setSidebarOpen: setSidebarOpen,
        }}>
            {props.children}
        </WeatherContext.Provider>
    )
}

export default WeatherState;