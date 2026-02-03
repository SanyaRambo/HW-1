import styles from './app.module.css';
import { FormHeader } from './components/formHeader';
import { FormList } from './components/formList';
import { Button } from './components/buttons/button';
import {
	useGetRequestTodos,
	useAddRequestTodo,
	useUpdateRequestTodo,
	useDeleteRequestTodo,
} from './hooks';
import { useTodoHandlers } from './handlers/useTodoHandlers';
import { useState } from 'react';

const App = () => {
	const [refreshProducts, setRefreshProducts] = useState(false);
	const [todo, setTodo] = useState('');
	const [updateTodo, setUpdateTodo] = useState('');
	const [updateTodoId, setUpdateTodoId] = useState(null);


	const { isLoading, isError, setIsError, todos, setTodos } =
		useGetRequestTodos(refreshProducts);
	const { isCreate, addRequestTodo } = useAddRequestTodo(
		todo,
		setIsError,
		refreshProducts,
		setRefreshProducts,
	);
	const { isDelete, deleteRequestTodo } = useDeleteRequestTodo(
		setIsError,
		setRefreshProducts,
		refreshProducts,
	);
	const { isUpdate, updateRequestTodo } = useUpdateRequestTodo(
		setIsError,
		setRefreshProducts,
		refreshProducts,
	);


	const { handlerClickDelete, handlerClickSort, submitTodoToDateBase, editingTodo } =
		useTodoHandlers({
			setTodo,
			addRequestTodo,
			deleteRequestTodo,
			updateRequestTodo,
			setUpdateTodo,
			setUpdateTodoId,
			setTodos,
			todos,
		});

		
	return (
		<>
			<div>
				<div className={styles.windowTodos}>
					<div className={styles.containerHeader}>
						<h1 className={styles.headerTodos}> Todos | Задачи </h1>
						<Button
							type="button"
							style={styles.sortListTodos}
							onClick={handlerClickSort}
						>
							Сортировать ▤
						</Button>
					</div>
					<FormHeader
						submitTodoToDateBase={submitTodoToDateBase}
						todo={todo}
						setTodo={setTodo}
						isCreate={isCreate}
					/>
					<FormList
						todos={todos}
						todo={todo}
						editingTodo={editingTodo}
						editingState={{
							updateTodo,
							updateTodoId,
							setUpdateTodo,
							setUpdateTodoId,
						}}
						operationStatus={{
							isUpdate,
							isDelete,
							isLoading,
							isError,
						}}
						handlerClickDelete={handlerClickDelete}
					/>
				</div>
			</div>
		</>
	);
};

export default App;
