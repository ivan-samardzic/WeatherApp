import './InfoBox.scss'
import React from 'react'
import PleadingFace from '../../assets/pleading-face.png'

const InfoBox = () => {
    return (
        <div className="message-box">
            <img src={PleadingFace} alt="pleading-face" />
            <h3>Currently you dont have any locations</h3>
            <h4>It is easy! You can add your city easily just by clicking Burger Button and typing your city in or directly in the search box!</h4>
        </div>
    )
}

export default InfoBox
