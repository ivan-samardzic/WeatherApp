import React, {useContext } from 'react'
import Header from '../../components/Header/Header'
import InfoBox from '../../components/InfoBox/InfoBox'
import WeatherBox from '../../components/WeatherBox/WeatherBox'
import Footer from '../../components/Footer/Footer'
import WeatherContext from '../../context/weatherContext'
import '../../App.scss'

const Home = () => {
    const context = useContext(WeatherContext);
    const {cities} = context;
    return (
        <div className='container-fluid'>
          <Header />
          <div className='main-view'>
            {cities.length === 0 ? <InfoBox />  : <WeatherBox />}
          </div>
          <Footer />
        </div>
    )
}

export default Home
