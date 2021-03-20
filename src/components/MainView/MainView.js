import './MainView.scss'
import React from 'react'
import CityBox from '../CityBox/CityBox'
import ListBox from '../ListBox/ListBox'

const MainView = () => {
    return (
        <div className='grid-2 main-view'>
            <div>
                <CityBox />
            </div>
            <div>
                <ListBox />
            </div>
        </div>
    )
}

export default MainView
