import './App.scss';
import React, { useState } from 'react'
import Header from './components/Header/Header'
import MainView from './components/MainView/MainView'
import InitialView from './components/InitialView/InitialView'
import Footer from './components/Footer/Footer'

const App = () => {
  const [loading, setLoading] = useState(false)
  return (
    <div className='container-fluid'>
      <Header />
      {loading ? <InitialView /> : <MainView />}
      <Footer />
    </div>
  );
}

export default App;
