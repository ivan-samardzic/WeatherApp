import './Header.scss'
import React from 'react'
import HeaderLogo from '../HeaderLogo/HeaderLogo'
import SearchBox from '../SearchBox/SearchBox'
const Header = () => {
    return (
        <div className='header-box'>
            <HeaderLogo />
            <SearchBox />
        </div>
    )
}

export default Header
