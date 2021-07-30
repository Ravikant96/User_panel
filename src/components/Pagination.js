/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {
    changePageNo,
    changePageLimit,
    fetchUser
} from '../actions';

function pagination() {
    
    const currentState = useSelector(state => state);

    const [page, setpage] = useState(currentState.page_no);
    const [limit, setlimit] = useState(currentState.limit);
    const [change, setchange] = useState(false)

    useEffect(() => {
        
        const payload = {
            page,
            limit
        };

        if(currentState.selected_country) {
            payload.selected_country = currentState.selected_country
        }

        if(currentState.search) {
            payload.searchTerm = currentState.search;
        }
console.log('---ddd--', currentState);
console.log('--w---', payload);

        dispatch(fetchUser(payload));
    }, [change]);

    let pageNumberTimer = '';
    let limitTimer = '';

    const dispatch = useDispatch()

    const changePage = (value) => {

        if(pageNumberTimer) {
            clearInterval(pageNumberTimer);
        }

        let pageNo = value;
        if(!pageNo) {
            pageNo = 1;
        }

        pageNumberTimer = setTimeout(() => {

            setpage(pageNo);
            setchange(!change);
            dispatch(changePageNo({page: pageNo}));
        }, 300)
    }

    const changeLimit = (value) => {
        
        if(limitTimer) {
            clearInterval(limitTimer);
        }

        let limit = value
        if(!limit) {
            limit = 10;
        }

        limitTimer = setTimeout(() => {

            setlimit(limit);
            setchange(!change);
            dispatch(changePageLimit({limit}));
        }, 300)
    }

    return (
        <div className="pagination-bar">
            <div className="pageNo">
                Page No.
                <span onClick={() => changePage('1')}>1</span>
                <span onClick={() => changePage('2')}>2</span>
                <span onClick={() => changePage('3')}>3</span>
                <input type="number" onChange={(e) => changePage(e.currentTarget.value)} />
            </div>

            <span className="info">Current Page: {page} || Limit: {limit} || FIlter: Country = {currentState.selected_country || 'all'}</span>

            <div className="limit">
                Limit
                <span onClick={() => changeLimit('10')}>10</span>
                <span onClick={() => changeLimit('20')}>20</span>
                <span onClick={() => changeLimit('30')}>30</span>
                <input type="number" onChange={(e) => changeLimit(e.currentTarget.value)} />
            </div>
        </div>
    )
}

export default pagination
