import { useState } from 'react';

export const useUpdateRequestTodo = (setIsError,
		setRefreshProducts, refreshProducts) => {
const [isUpdate, setIsUpdate] = useState(false)

	const updateRequestTodo = (id, updateTodo) => {
		if (updateTodo === '') {
			setIsError({
				errorStatus: true,
				message:
					'ОШИБКА. Задача не может быть пустой',
			});
			setIsUpdate(false);
			return;
		} else {
			setIsUpdate(true)

		fetch(`http://localhost:3000/todos/${id}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
					title: updateTodo.trim(),
				})
				})
				.then((response) => {
					if (!response.ok) {
						throw new Error(`ОШИБКА: ${response.status}`);
					}
					return response.json();
				})
				.then((updateTodo) => {
					console.log('Задача обновлена:', updateTodo);
					setRefreshProducts(!refreshProducts);
				})
				.catch((error) =>
					setIsError({ errorStatus: true, message: `ОШИБКА: ${error}` }),
				)
				.finally(() => {
					setIsUpdate(false);
				})
		}

	};
	return {isUpdate, updateRequestTodo}
};
