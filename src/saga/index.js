import { all } from 'redux-saga/effects';
import users from './users.js';

function* rootSaga() {
	yield all([...users]);
}

export default rootSaga;