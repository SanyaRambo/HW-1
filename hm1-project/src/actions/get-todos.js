import { SET_IS_LOADING, SET_IS_ERROR } from '../actions';

export const GET_TODOS = () => async (dispatch) => {
	dispatch(SET_IS_LOADING(true));

	try {
		const response = await fetch('http://localhost:3000/todos');

		if (!response.ok) {
			throw new Error(`ОШИБКА ;( :${response.status} `);
		}

		const dataTodos = await response.json();
		dispatch({
			type: 'GET_TODOS',
			payload: dataTodos,
		});
	} catch (error) {
		dispatch(SET_IS_ERROR({ errorStatus: true, message: `ОШИБКА: ${error}` }));
	} finally {
		dispatch(SET_IS_LOADING(false));
	}
};




