import { useEffect, useState } from 'react';

export const useGetRequestTodos = (refreshProducts) => {
	const [todos, setTodos] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState({
		errorStatus: false,
		message: '',
	});
	useEffect(() => {
			setIsLoading(true);
			setIsError({ ...isError, errorStatus: false });
			fetch('http://localhost:3000/todos')
				.then((todos) => todos.json())
				.then((todos) => {
					setTodos(todos);
					console.log(todos);
				})
				.catch((error) =>
					setIsError({ errorStatus: true, message: `ОШИБКА: ${error}` }),
				)
				.finally(() => {
					setIsLoading(false);
				});
		}, [refreshProducts]);

	return {todos, isLoading, isError, setIsError, setTodos}
};
