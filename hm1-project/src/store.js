import { gameReducer } from './reducer';

const createStore = (reducer) => {
	let state = reducer(undefined, { type: '@@INIT' });
	let listeners = [];

	return {
		dispatch: (action) => {
			if(!action || !action.type) return;
			state = reducer(state, action);
			console.log(state);
			listeners.forEach(listener => listener())
		},
		getState: () => state,
		subscribe: (listener) => {
			listeners.push(listener);
			return () => {
				listeners = listeners.filter(l => l !== listener);
			};
		},
	};
};
export const store = createStore(gameReducer);

// Изменить store,
// Разбить reducer на два reducer, то есть на reducerInformation и reducerField, объединить их в combineReducers
// Вынести action тоже в функции
// Для обновления состояния использовать селекторы, диспатчи для отправки
