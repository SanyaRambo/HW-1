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
		if (!todos) return;

		const entries = Object.entries(todos);

		const todosWithKeys = entries.map(([key, todo]) => ({
			...todo,
			id: key,
		}));

		const sortedTodos = todosWithKeys.sort((a, b) => {
			const aTitle = a.title.toLowerCase();
			const bTitle = b.title.toLowerCase();
			return aTitle.localeCompare(bTitle);
		});

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

			if (
				!updateTodo ||
				typeof updateTodo !== 'string' ||
				updateTodo.trim() === ''
			) {
				console.error('Некорректное значение updateTodo:', updateTodo);
				return;
			}
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
