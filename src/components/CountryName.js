import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    fetchUser,
    selectedCountry
} from '../actions'

function CountryName(props) {
    
    const {name} = props;
    const currentState = useSelector(state => state )
    const dispatch = useDispatch();

    const filterResult = () => {

        const {page_no, limit, search} = currentState;
        const payload = {
            page: page_no,
            limit,
            search,
            selected_country: name
        };

        dispatch(selectedCountry(name))
        dispatch(fetchUser(payload));
    }

    return (
        <input readOnly type="text" onClick={filterResult} value={name}/>
    )
}

export default CountryName
