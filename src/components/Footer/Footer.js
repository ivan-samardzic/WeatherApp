import './Footer.scss'
import React from 'react'
import LogoBox from '../LogoBox/LogoBox'
import CopyrightBox from '../CopyrightBox/CopyrightBox'
import SocialMediaBox from '../SocialMediaBox/SocialMediaBox'

const Footer = () => {
    return (
        <div className='footer-box'>
            <LogoBox />
            <CopyrightBox />
            <SocialMediaBox />
        </div>
    )
}

export default Footer
