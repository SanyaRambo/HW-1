import { useCallback } from 'react';

export const useTodoHandlers = ({
	setTodo,
	addRequestTodo,
	deleteRequestTodo,
	updateRequestTodo,
	setUpdateTodo,
	setUpdateTodoId,
	setTodos,
	todos,
}) => {
	const handlerClickDelete = useCallback(
		(id) => {
			deleteRequestTodo(id);
		},
		[deleteRequestTodo],
	);

	const handlerClickSort = useCallback(() => {
		const sortedTodos = [...todos].sort((a, b) =>
			a.title.toLowerCase().localeCompare(b.title.toLowerCase()),
		);
		setTodos(sortedTodos);
	}, [todos, setTodos]);

	const submitTodoToDateBase = useCallback(
		(event) => {
			event.preventDefault();
			addRequestTodo();
			setTodo('');
		},
		[addRequestTodo, setTodo],
	);

	const editingTodo = useCallback(
		(event, updateTodo, id) => {
			event.preventDefault();
			setUpdateTodo('');
			setUpdateTodoId(null);
			updateRequestTodo(id, updateTodo);
		},
		[setUpdateTodo, setUpdateTodoId, updateRequestTodo],
	);

	return {
		handlerClickDelete,
		handlerClickSort,
		submitTodoToDateBase,
		editingTodo,
	};
};

