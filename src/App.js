import './App.scss';
import React, { useState, useEffect, useContext } from 'react'
import WeatherState from './context/WeatherState'
import Home from './pages/Home/Home'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <WeatherState>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home}/>
          </Switch>
        </BrowserRouter>
    </WeatherState>
  )
}

export default App;
