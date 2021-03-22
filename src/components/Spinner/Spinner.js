import React, { Fragment } from "react"
import spinner from "./spinner.gif"
import './Spinner.scss'

const Spinner = () => {
  return (
    <div className='spinner-box'>
      <img
        src={spinner}
        alt="Loading..."
        style={{width: "200px", margin: "auto", display: "block"}}
      />
      <h3 className="text-center">Loading...</h3>
    </div>
  )
}

export default Spinner