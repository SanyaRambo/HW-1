import { FormListLayout } from './formListLayout';
import { useRef, useEffect, useState } from 'react';
import debounce from 'debounce';
import { use } from 'react';
import { AppContext } from '../../context';

export const FormList = () => {
	const {
		todos,
		todo,
		editingTodo,
	} = use(AppContext);
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
				const result = todos.filter((todoItem) =>
					todoItem.title.toLowerCase().includes(todo.toLowerCase()),
				);
				setFilteredTodos(result);
			}
		}, 500);

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
			/>
		</>
	);
};
