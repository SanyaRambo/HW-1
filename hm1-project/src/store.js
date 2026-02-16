import {createStore, applyMiddleware, combineReducers, compose} from 'redux'
import { thunk } from 'redux-thunk'
import { formHeaderReducer, formListReducer, reducerCRUD } from './reducers';

const appReducers =  combineReducers({
	formHeaderState: formHeaderReducer,
	formListState: formListReducer,
	stateCRUD: reducerCRUD
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(appReducers, composeEnhancers(applyMiddleware(thunk)))


