import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import Clear from './Clear';
import CountryName from './CountryName';

function Filter() {

    const currentState = useSelector(state => state);
    const [show, setshow] = useState(false)

    const filters = currentState.filter;
    
    return (
        <div className="filter">
            <button onClick={() => setshow(!show)}> Filters:  </button>
            {
                show && 
                <div className="filter-container">
                    <span className="country">Country:</span><br />
                    <Clear />
                    {filters.country.length ? (
                        <div className="country-list">
                            {filters.country.map(c => (
                                <CountryName name={c} key={c} />
                            ))}
                        </div>  
                        ) 
                        : 
                        'No Filters'
                    }
                </div>
            }
        </div>
    )
}

export default Filter
