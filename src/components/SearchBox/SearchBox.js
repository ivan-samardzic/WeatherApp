import './SearchBox.scss'
import React from 'react'

const SearchBox = () => {
    return (
        <form className="form">
            <input type="text" className="form-control"
            placeholder="Search City..." 
            />
            <button type="submit" className="btn"></button>
            <i className="fas fa-search"></i>
        </form>
    )
}

export default SearchBox