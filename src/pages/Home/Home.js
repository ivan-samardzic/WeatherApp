import React, {useContext } from 'react'
import Header from '../../components/Header/Header'
import InfoBox from '../../components/InfoBox/InfoBox'
import WeatherBox from '../../components/WeatherBox/WeatherBox'
import Footer from '../../components/Footer/Footer'
import WeatherContext from '../../context/weatherContext'
import Sidebar from '../../components/Sidebar/Sidebar'
import '../../App.scss'

const Home = () => {
    const context = useContext(WeatherContext);
    const {cities, sidebarOpen, setSidebarOpen} = context;
    return (
        <div className='container-fluid'>
          <Header onAdd={() => setSidebarOpen(!sidebarOpen)} sidebarOpen={sidebarOpen}/>
          <div className='main-view'>
            {cities.length === 0 ? <InfoBox />  : <WeatherBox />}
          </div>
          <Footer />

          <div className='sidebar' >
              <Sidebar sidebarOpen={sidebarOpen}/>
          </div>
        </div>
    )
}

export default Home
