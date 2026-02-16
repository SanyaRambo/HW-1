import { SET_IS_DELETE, SET_IS_ERROR, GET_TODOS } from "../actions";

export const deleteTodo = (id) => async (dispatch) => {
	dispatch(SET_IS_DELETE(true));

	try {
		const response = await fetch(`http://localhost:3000/todos/${id}`, {
			method: 'DELETE',
		});

		if (!response.ok) throw new Error('Ошибка удаления задачи');

		dispatch({ type: 'DELETE_TODO', payload: id });
		dispatch(GET_TODOS());
	} catch (error) {
		dispatch(SET_IS_ERROR({ errorStatus: true, message: `ОШИБКА: ${error}` }));
	} finally {
		dispatch(SET_IS_DELETE(false));
	}
};
