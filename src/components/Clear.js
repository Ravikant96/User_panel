import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {
    fetchUser,
    selectedCountry
} from '../actions'

function Clear() {

    const currentState = useSelector(state => state);
    const dispatch = useDispatch();

    const clearFilter = () => {

        const {page_no, limit, search, selected_country} = currentState;

        if(!selected_country) {
            return;
        }

        const payload = {
            page: page_no,
            limit,
            search,
        };

        dispatch(selectedCountry(''));

        dispatch(fetchUser(payload));
    }

    return (
        <button className="clear" onClick={clearFilter}>&times; Clear</button>
    )
}

export default Clear
