import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "../reducers";
import sagas from "../saga"; 

const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware(sagaMiddleware);

const store = createStore(
    reducers,
    middleware
);
window.STORE = store;

export default store;

sagaMiddleware.run(sagas);