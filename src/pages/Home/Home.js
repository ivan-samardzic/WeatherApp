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
        <div className='container-fluid' >
          <Header onAdd={() => setSidebarOpen(!sidebarOpen)} sidebarOpen={sidebarOpen} />
          <div className='main-view'>
            {cities.length === 0 ? <InfoBox />  : <WeatherBox />}
          </div>
          <div className='sidebar' style={sidebarOpen ? sidebarStyleActive : sidebarStyleUnactive} >
              <Sidebar sidebarOpen={sidebarOpen} onAdd={() => setSidebarOpen(!sidebarOpen)}/>
          </div>
          <Footer />
        </div>
    )
}


const sidebarStyleActive= {
  'position': 'fixed',
  'width': '100%',
  'height': '100%',
  'top': '0',
  'left': '0',
  'backdrop-filter': 'blur(10px)',
}

const sidebarStyleUnactive= {
  'position': 'fixed',
  'width': '0%',
  'height': '0%',
  'top': '0',
  'left': '0',
  'backdrop-filter': 'none',
  'display': 'none'
}
export default Home

