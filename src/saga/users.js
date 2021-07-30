/* eslint-disable react-hooks/rules-of-hooks */
import { call, put, takeEvery } from 'redux-saga/effects';
import {
    API_URL,
    FETCH_USERS_DATA,
    FETCH_USER_FAILURE,
    FETCH_USER_SUCCESS,
    UPDATE_FILTER
} from '../constants.js'

function fetchFilters({ users } = {}) {

    if(!users.length) {
        return {}
    }

    const uniqueCountries = [];

    for(const user of users) {

        if(uniqueCountries.includes(user.Country)) {
            continue;
        }

        uniqueCountries.push(user.Country);
    }

    return {
        country: uniqueCountries
    };
}

function* fetchUsers({ payload }) {

	var requestOptions = {
		method: 'GET',
	};
    
    const urlSearchParams = new URLSearchParams();

    urlSearchParams.set('_page', payload.page);
    urlSearchParams.set('_limit', payload.limit);

    if(payload.searchTerm) {
        urlSearchParams.set('q', payload.searchTerm);
    }

    if(payload.selected_country) {
        urlSearchParams.set('Country', payload.selected_country)
    }

    let users = [];
    const url = API_URL + '/users?' + urlSearchParams.toString();

	try {
		
        users = yield call(() =>
			fetch( url, requestOptions).then(
				(res) => res.json(),
			),
		);

        const filters = fetchFilters({users});

        yield put({ type: UPDATE_FILTER, payload: filters });
        yield put({ type: FETCH_USER_SUCCESS, payload: users });

	} catch (e) {

		yield put({ type: FETCH_USER_FAILURE, payload: 'Unable to fetch user details' });
	}
}

function* watchFetchUsers() {
	yield takeEvery(FETCH_USERS_DATA, fetchUsers);
}

const sagaWatcherFunctions = [watchFetchUsers()];

export default sagaWatcherFunctions;