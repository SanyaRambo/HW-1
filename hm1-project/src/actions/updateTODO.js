import { SET_IS_UPDATE, SET_IS_ERROR, GET_TODOS } from '.';

export const UPDATE_TODO = (id, title) => async (dispatch) => {
  dispatch(SET_IS_UPDATE(true));
  try {
    const response = await fetch(`http://localhost:3000/todos/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title }),
    });

    if (!response.ok) throw new Error('Ошибка обновления задачи');

    await response.json();
    dispatch(GET_TODOS());
  } catch (error) {
    dispatch(SET_IS_ERROR({ errorStatus: true, message: `ОШИБКА: ${error.message}` }));
  } finally {
    dispatch(SET_IS_UPDATE(false));
  }
};
