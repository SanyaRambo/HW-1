const initialState = {
	filteredTodos: [],
	todos: [],
	isLoading: false,
	isError: {
		errorStatus: false,
		message: '',
	},
};

export const formListReducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'GET_TODOS':
			return { ...state, todos: payload };
		case 'SET_IS_ERROR':
			return { ...state, isError: payload || { errorStatus: false, message: '' } };
		case 'SET_IS_LOADING':
			return { ...state, isLoading: payload };
		case 'FILTERED_TODOS':
		return { ...state, filteredTodos: payload}
		case 'SORT_TODOS':
		return { ...state, todos: payload}
		default:
			return state;
	}
};
