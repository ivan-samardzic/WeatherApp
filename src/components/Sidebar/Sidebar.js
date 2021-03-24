import './Sidebar.scss'
import React from 'react'
import SearchBox from '../SearchBox/SearchBox'
import ListBox from '../ListBox/ListBox'

const Sidebar = ({sidebarOpen, onAdd}) => {
    
    return (
        <div className='sidebar-div'>
            {sidebarOpen &&
            <div className='sidebar-list'>
                <SearchBox />
                <ListBox />
                <div className="hamburger-sidebar" onClick={onAdd}>
                    {sidebarOpen ?  <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
                </div>
            </div>
            }
            
        </div>
    )
}

export default Sidebar