import { useState } from 'react';

export const useAddRequestTodo = (
	todo,
	setIsError,
	refreshProducts,
	setRefreshProducts,
) => {
	const [isCreate, setIsCreate] = useState(false);

	const addRequestTodo = () => {
		if (todo.trim() === '') {
			setIsError({
				errorStatus: true,
				message:
					'ОШИБКА. Задача не может быть пустой',
			});
			setIsCreate(false);
			return;
		} else {
			setIsCreate(true);
			fetch('http://localhost:3000/todos', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json;charset=utf-8' },
				body: JSON.stringify({
					title: todo.trim(),
				}),
			})
				.then((response) => {
					if (!response.ok) {
						throw new Error(`ОШИБКА: ${response.status}`);
					}
					return response.json();
				})
				.then((todo) => {
					console.log('Новая задача добавлена:', todo);
					setRefreshProducts(!refreshProducts);
				})
				.catch((error) =>
					setIsError({ errorStatus: true, message: `ОШИБКА: ${error}` }),
				)
				.finally(() => {
					setIsCreate(false);
				});
		}
	};
	return { isCreate, addRequestTodo };
};
