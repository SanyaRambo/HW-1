import { useState } from 'react';

export const useDeleteRequestTodo = (setIsError,
		setRefreshProducts, refreshProducts) => {
const [isDelete, setIsDelete] = useState(false)

	const deleteRequestTodo = (id) => {
			setIsDelete(true)

		fetch(`http://localhost:3000/todos/${id}`, {
			method: 'DELETE',
				})
				.then((response) => {
					if (!response.ok) {
						throw new Error(`ОШИБКА: ${response.status}`);
					}
					return response.json();
				})
				.then((response) => {
					console.log(`Задача удалена: ${response}`);
					setRefreshProducts(!refreshProducts);
				})
				.catch((error) =>
					setIsError({ errorStatus: true, message: `ОШИБКА: ${error}` }),
				)
				.finally(() => {
					setIsDelete(false);
				})
		}


	return {isDelete, deleteRequestTodo}
};
