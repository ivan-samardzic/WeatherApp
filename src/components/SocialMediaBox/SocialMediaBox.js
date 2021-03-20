import './SocialMediaBox.scss'
import React from 'react'

const SocialMediaBox = () => {
    return (
        <div className='social-media-box'>
            <h3 className='social-media-box-title'>Add Me On Social Networks</h3>
            <ul className="social-media-box-list">
                <li>
                    <a href='https://www.facebook.com/ivan.samardzic.4'>
                        <i className="fab fa-facebook-square"></i>
                    </a>
                </li>
                <li>
                    <a href='https://github.com/ivan-samardzic'>
                        <i className="fab fa-github-square"></i>
                    </a>
                </li>
                <li>
                    <a href='https://www.linkedin.com/in/ivan-samard%C5%BEi%C4%87-a968a21b7/'>
                        <i className="fab fa-linkedin"></i>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default SocialMediaBox
