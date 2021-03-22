import React from 'react'

export default React.createContext({
    cities: [],
    favorites: [],
    city: {},
    cityName: '',
    addCity: city => {},
    deleteCity: deletedCity => {},
    addCityNameToUrl: name => {},
    loading: false,
    setCurrentCity: clickedCity => {}
})