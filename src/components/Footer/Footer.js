import './Footer.scss'
import React from 'react'
import LogoBox from '../LogoBox/LogoBox'
import CopyrightBox from '../CopyrightBox/CopyrightBox'
import SocialMediaBox from '../SocialMediaBox/SocialMediaBox'

const Footer = () => {
    return (
        <footer>
            <div className='footer-logo'>
                <LogoBox />
            </div>
            <CopyrightBox />
            <SocialMediaBox />
        </footer>
    )
}

export default Footer
