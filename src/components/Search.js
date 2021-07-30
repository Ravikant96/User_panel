import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {
    fetchUser,
    changeSearch
} from '../actions';

function Search() {

    const [searchTerm, setsearchTerm] = useState('');
    const dispatch = useDispatch();
    const currentState = useSelector(state => state);

    let searchTimer = '';

    const search = (event) => {

        if(searchTimer) {
            clearInterval(searchTimer);
        }
        
        const value = event.currentTarget.value;
        setsearchTerm(value);

        const payload = {
            page: currentState.page_no,
            limit: currentState.limit,
            searchTerm: value
        }

        searchTimer = setTimeout(() => {

            dispatch(changeSearch(value));
            dispatch(fetchUser(payload));
        }, 300)
    }

    return (
        <label className="search">
            <span>Search: </span>
            <input type="text" onChange={search} value={searchTerm} placeholder="Enter the text to search."/>
        </label>
    )
}

export default Search
