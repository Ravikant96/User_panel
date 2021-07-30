/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { useSelector } from 'react-redux';
import Cards from './Cards.js';
import Header from './Header.js';
import NoUser from './NoUser.js';
import Pagination from './Pagination.js'


function Users() {

    const users = useSelector((state) => state.data);

    return (
        <div className="user-container">
            <Header />
            {users.length ? <Cards users={users} />  : <NoUser />}
            <Pagination />
        </div>
    )
}

export default Users
