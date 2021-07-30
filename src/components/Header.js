import React from 'react'
import AddNew from './AddNew'
import Filters from './Filters'
import Search from './Search'

function Header(prop) {

    return (
        <div className="header">
            <Filters />
            <Search />
            <AddNew />
        </div>
    )
}

export default Header
