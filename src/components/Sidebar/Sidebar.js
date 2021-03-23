import './Sidebar.scss'
import React from 'react'
import SearchBox from '../SearchBox/SearchBox'
import ListBox from '../ListBox/ListBox'

const Sidebar = ({sidebarOpen}) => {
    
    return (
        <div className='sidebar-div'>
            {sidebarOpen &&
            <div className='sidebar-list'>
                <SearchBox />
                <ListBox />
            </div>
            }
            
        </div>
    )
}

export default Sidebar