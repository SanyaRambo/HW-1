const initialState = {
	todo: '',
}



export const formHeaderReducer = (state = initialState, action) => {
const {type, payload} = action;

	switch(type) {
		case 'SUBMIT_TODO':
			return {
				todo: payload
			}
		default: return state
	}
}
