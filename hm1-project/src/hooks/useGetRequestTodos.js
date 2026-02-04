import { useEffect, useState } from 'react';
import {ref, onValue} from 'firebase/database'
import { db } from '../firebase';

export const useGetRequestTodos = () => {
	const [todos, setTodos] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState({
		errorStatus: false,
		message: '',
	});
	useEffect(() => {
		const todosDbRef = ref(db, 'todos');

		return onValue(todosDbRef, (snapshot) => {
			const loadedTodos = snapshot.val() || {}
			setTodos(loadedTodos)
			setIsError({ ...isError, errorStatus: false });
			setIsLoading(false)
		} );

		}, []);

	return {todos, isLoading, isError, setIsError, setTodos}
};
