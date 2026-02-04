import { useState } from 'react';
import { ref, push } from 'firebase/database'
import { db } from '../firebase';

export const useAddRequestTodo = (
	todo,
	setIsError
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
			const todosDbRef = ref(db, 'todos')

			push(todosDbRef, {
				title: todo.trim(),
			})
				.then((todo) => {
					console.log('Новая задача добавлена:', todo);
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
