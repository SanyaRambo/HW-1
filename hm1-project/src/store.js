import {createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { fieldReducer, informationReducer, sharedReducer } from './reducers';

const reducerOfGame = combineReducers({
	fieldState: fieldReducer,
	informationState: informationReducer,
	sharedState: sharedReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducerOfGame, composeEnhancers(applyMiddleware()));
