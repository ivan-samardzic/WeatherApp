import './SearchBox.scss'
import React, { useState, useEffect, useContext } from 'react'
import WeatherContext from '../../context/weatherContext'

const SearchBox = () => {
    const [name, setName] = useState('')
    const context = useContext(WeatherContext);

    const handleSubmit = (event) => {
        event.preventDefault();

        context.addCityNameToUrl(name);
        setName('');
    }
    return (
        <form className="form" onSubmit={(event) => handleSubmit(event)}>
            <input type="text" className="form-control"
            placeholder="Search City..." 
            value={name} onChange={(event) => setName(event.target.value)}
            />
            <button type="submit" className="btn"></button>
            <i className="fas fa-search"></i>
        </form>
    )
}

export default SearchBox