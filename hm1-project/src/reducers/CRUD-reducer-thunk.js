const initialState = {
	isDelete: false,
	isCreate: false,
	isUpdate: false,
	updateTodo: '',
	updateTodoId: null,
}



export const reducerCRUD = (state = initialState, action) => {
const {type, payload} = action;

	switch(type) {
		case 'SET_IS_DELETE': {
			return {...state, isDelete: payload}
		}
		case 'SET_IS_CREATING': {
			return {...state, isCreate: payload}
		}
		case 'SET_IS_UPDATE': {
			return {...state, isUpdate: payload}
		}
		case 'UPDATE_TODO': {
			return {...state, updateTodo: payload}
		}
		case 'UPDATE_TODO_ID': {
			return {...state, updateTodoId: payload}
		}
		default: return state
	}
}
