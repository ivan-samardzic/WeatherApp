import './Header.scss'
import React, {useState, useContext} from 'react'
import HeaderLogo from '../HeaderLogo/HeaderLogo'
import SearchBox from '../SearchBox/SearchBox'
import BurgerButton from '../BurgerButton/BurgerButton'
const Header = ({size,sidebarOpen, onAdd}) => {
    return (
        <div className='header'>
            <HeaderLogo />
            <div className='center-header-box'>
                <SearchBox />
            </div>
            <BurgerButton onAdd={onAdd} sidebarOpen={sidebarOpen} />
        </div>
    )
}

export default Header
