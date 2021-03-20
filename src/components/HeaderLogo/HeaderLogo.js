import './HeaderLogo.scss'
import React from 'react'
import CirclesBox from '../CirclesBox/CirclesBox'
import LogoBox from '../LogoBox/LogoBox'

const HeaderLogo = () => {
    return (
        <div className='d-flex flex-row justify-content-center align-items-center'>
            <CirclesBox />
            <LogoBox />
        </div>
    )
}

export default HeaderLogo
