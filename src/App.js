import './App.scss';
import React, { useState, useEffect, useContext } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import WeatherContext from '../src/context/weatherContext'
import axios from 'axios'
import WeatherBox from './components/WeatherBox/WeatherBox';

const App = () => {
  const context = useContext(WeatherContext)
  const {cities, addCity, deleteCity} = context;
  console.log(cities)
  return (
      <div className='container-fluid'>
        <Header />
        <WeatherBox  cities={cities} />
        <Footer />
      </div>
  )
}

export default App;
