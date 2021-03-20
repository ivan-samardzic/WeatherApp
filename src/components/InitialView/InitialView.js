import './InitialView.scss'
import React from 'react'
import PleadingFace from '../../assets/pleading-face.png'

const InitialView = () => {
    return (
        <div className="message-box">
            <img src={PleadingFace} alt="pleading-face" />
            <h3>Currently you dont have any locations</h3>
            <h4>It is easy! You can add your city easily just by clicking '+' Button and typing your city in.</h4>
        </div>
    )
}

export default InitialView
