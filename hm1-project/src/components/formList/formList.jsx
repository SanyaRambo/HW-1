import { FormListLayout } from './formListLayout';
import { useRef, useEffect, useState } from 'react';
import debounce from 'debounce';
import { useDispatch, useSelector } from 'react-redux';
import {
	deleteTodo,
	FILTERED_TODOS,
	GET_TODOS,
	SET_IS_DELETE,
	SET_IS_ERROR,
	UPDATE_TODO,
} from '../../actions';
import {
	selectError,
	selectFilteredTodos,
	selectIsCreate,
	selectIsDelete,
	selectIsLoading,
	selectIsUpdate,
	selectTodo,
	selectTodos,
} from '../../selectors';

export const FormList = () => {
	const dispatch = useDispatch();

	const todos = useSelector(selectTodos);
	const todoSearch = useSelector(selectTodo);
	const isLoading = useSelector(selectIsLoading);
	const isUpdate = useSelector(selectIsUpdate);
	const isCreate = useSelector(selectIsCreate);
	const isError = useSelector(selectError);
	const isDelete = useSelector(selectIsDelete);
	const filteredTodos = useSelector(selectFilteredTodos);

	const [updateLocalTodo, setUpdateLocalTodo] = useState('');
	const [updateLocalTodoId, setUpdateLocalTodoId] = useState(null);

	const submitUpdateTodo = useRef({});

	const handlerClickUpdate = (id) => {
		setUpdateLocalTodoId(id);
		const todoItem = filteredTodos.find((item) => item.id === id);
		if (todoItem) {
			setUpdateLocalTodo(todoItem.title);
		}
		setTimeout(() => {
			if (submitUpdateTodo.current[id]) {
				submitUpdateTodo.current[id].focus();
				submitUpdateTodo.current[id].select();
			}
		}, 0);
	};

	const handlerClickDelete = (id) => {
		dispatch(deleteTodo(id));
	};

	const editingTodo = (event, id) => {
		event.preventDefault();

		const currentUpdateTodo = updateLocalTodo?.trim();

		if (!currentUpdateTodo) {
			dispatch(
				SET_IS_ERROR({
					errorStatus: true,
					message: 'Название задачи не может быть пустым',
				}),
			);
			return;
		}

		dispatch(UPDATE_TODO(id, currentUpdateTodo));
		setUpdateLocalTodo('');
		setUpdateLocalTodoId(null);
		dispatch(SET_IS_ERROR());
	};

	useEffect(() => {
		const delayedFilter = debounce(() => {
			if (
				!todoSearch ||
				typeof todoSearch !== 'string' ||
				todoSearch.trim() === ''
			) {
				dispatch(FILTERED_TODOS(todos));
			} else {
				const searchTerm = todoSearch.trim().toLowerCase();
				const result = todos.filter(
					(todoItem) =>
						todoItem.title &&
						typeof todoItem.title === 'string' &&
						todoItem.title.toLowerCase().includes(searchTerm),
				);
				dispatch(FILTERED_TODOS(result));
			}
		}, 500);

		delayedFilter();
		return delayedFilter.clear;
	}, [todoSearch, todos]);

	return (
		<FormListLayout
			filteredTodos={filteredTodos}
			editingTodo={editingTodo}
			submitUpdateTodo={submitUpdateTodo}
			handlerClickUpdate={handlerClickUpdate}
			handlerClickDelete={handlerClickDelete}
			isDelete={isDelete}
			isLoading={isLoading}
			isError={isError}
			isCreate={isCreate}
			isUpdate={isUpdate}
			updateTodo={updateLocalTodo}
			updateTodoId={updateLocalTodoId}
			setUpdateTodo={setUpdateLocalTodo}
			setUpdateTodoId={setUpdateLocalTodoId}
		/>
	);
};
