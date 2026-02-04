import { FormListLayout } from './formListLayout';
import { useRef, useEffect, useState } from 'react';
import debounce from 'debounce';

export const FormList = ({
	todos,
	todo,
	editingTodo,
	handlerClickDelete,
	editingState,
	operationStatus,
}) => {
	const [filteredTodos, setFilteredTodos] = useState(todos);

	const submitUpdateTodo = useRef({});

	const handlerClickUpdate = (id) => {
		submitUpdateTodo.current[id].focus();
	};

	useEffect(() => {
		const delayedFilter = debounce(() => {
			if (!todo) {
				setFilteredTodos(todos);
			} else {
				const entries = Object.entries(todos);

				const filteredEntries =
					entries.filter(([key, todoItem]) => {
						return (
							todoItem.title &&
							todoItem.title.toLowerCase().includes(todo.toLowerCase())
						);
					})


				const filteredObject = Object.fromEntries(filteredEntries);

				setFilteredTodos(filteredObject);
			}
		}, 0);

		delayedFilter();

		return delayedFilter.clear;
	}, [todo, todos]);

	return (
		<>
			<FormListLayout
				filteredTodos={filteredTodos}
				editingTodo={editingTodo}
				submitUpdateTodo={submitUpdateTodo}
				handlerClickUpdate={handlerClickUpdate}
				handlerClickDelete={handlerClickDelete}
				{...editingState}
				{...operationStatus}
			/>
		</>
	);
};
