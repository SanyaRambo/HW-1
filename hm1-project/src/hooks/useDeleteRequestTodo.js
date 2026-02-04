import { useState } from 'react';
import { ref, remove } from 'firebase/database';
import { db } from '../firebase';

export const useDeleteRequestTodo = (setIsError) => {
const [isDelete, setIsDelete] = useState(false)

	const deleteRequestTodo = (id) => {
			setIsDelete(true)

			const deleteTodoDbRef = ref(db, `todos/${id}`)

			remove(deleteTodoDbRef)

				.then(() => {
					console.log(`Задача удалена:`);
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
