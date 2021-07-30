import {
    FETCH_USERS_DATA,
    CHANGE_PAGE_NO,
    CHANGE_LIMIT,
    CHANGE_SEARCH,
    SELECTED_COUNTRY,
    ADD_USER,
    UPDATE_USER,
    DELETE_USER
} from '../constants.js'

export const fetchUser = (payload) => {

    return {
        type: FETCH_USERS_DATA,
        payload
    }
}

export const changePageNo = (payload) => {

    return {
        type: CHANGE_PAGE_NO,
        payload
    }
}

export const changePageLimit = (payload) => {

    return {
        type: CHANGE_LIMIT,
        payload
    }
}

export const changeSearch = (payload) => {

    return {
        type: CHANGE_SEARCH,
        payload
    }
}

export const selectedCountry = (payload) => {

    return {
        type: SELECTED_COUNTRY,
        payload
    }
}

export const addNewUser = (payload) => {

    return {
        type: ADD_USER,
        payload
    }
}

export const deleteUser = (payload) => {

    return {
        type: DELETE_USER,
        payload
    }
}

export const updateUser = (payload) => {

    return {
        type: UPDATE_USER,
        payload
    }
}