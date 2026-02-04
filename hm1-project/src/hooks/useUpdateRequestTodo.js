import { useState } from 'react';
import { ref, set } from 'firebase/database';
import { db } from '../firebase';

export const useUpdateRequestTodo = (setIsError) => {
	const [isUpdate, setIsUpdate] = useState(false);

	const updateRequestTodo = (updateTodoId, updateTodo) => {
		if (!updateTodo || typeof updateTodo !== 'string' || updateTodo.trim() === '') {
			setIsError({
				errorStatus: true,
				message: 'ОШИБКА. Задача не может быть пустой',
			});
			setIsUpdate(false);
			return;
		} else {
			setIsUpdate(true);

			const updateTodoDbRef = ref(db, `todos/${updateTodoId}`);
			set(updateTodoDbRef, {
				title: updateTodo.trim(),
			})
				.then(() => {
					console.log(`Задача обновлена`);
				})
				.catch((error) =>
					setIsError({ errorStatus: true, message: `ОШИБКА: ${error}` }),
				)
				.finally(() => {
					setIsUpdate(false);
				});
		}
	};
	return { isUpdate, updateRequestTodo };
};
