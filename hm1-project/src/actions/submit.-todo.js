import { SET_IS_ERROR, SET_IS_CREATING, GET_TODOS } from '../actions';

export const SUBMIT_TODO = (todo) => async (dispatch) => {
	dispatch(SET_IS_CREATING(true));
	try {
		if (todo.trim() === '') {
			throw new Error('Поле задачи не может быть пустым');
		}
		const response = await fetch('http://localhost:3000/todos', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ title: todo.trim() }),
		});

		if (!response.ok) throw new Error('Ошибка добавления задачи');

		const newTodo = await response.json();
		dispatch({ type: 'SUBMIT_TODO', payload: newTodo });
		dispatch(GET_TODOS());
		dispatch(SET_IS_ERROR());
	} catch (error) {
		dispatch(SET_IS_ERROR({ errorStatus: true, message: `ОШИБКА: ${error}` }));
	} finally {
		dispatch(SET_IS_CREATING(false));
	}
};
