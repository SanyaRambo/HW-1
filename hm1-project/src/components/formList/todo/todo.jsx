import styles from '../formList.module.css';
import { ContainerButtonsOfList } from '../../buttons/containerOfButtonsOfList';
import { useMatch, useParams, Link } from 'react-router-dom';
import { Button } from '../../buttons/button';
import { useEffect, useState } from 'react';

export const Todo = ({
	isLoading,
	isError,
	editingTodo,
	updateTodo,
	updateTodoId,
	setUpdateTodoId,
	setUpdateTodo,
	submitUpdateTodo,
	handlerClickUpdate,
	isUpdate,
	handlerClickDelete,
	isDelete,
	filteredTodos,
}) => {
	const [title, setTitle] = useState('')

	useEffect((id) => {

		}, []);
	const params = useParams();
	console.log(useMatch(''));

	return (
		<>
			<title>Todos | Задачи</title>
			<div className={styles.windowTodos}>
				<div className={styles.containerHeader}>
					<h1 className={styles.headerTodos}> Todos | Задачи </h1>
					<Button
						type="button"
						style={styles.sortListTodos}
						onClick={''}
					>
						Сортировать ▤
					</Button>
				</div>

				<div className={styles.todos}>
					<texterea value={''}/>

					<ContainerButtonsOfList
						type="button"
						disabledUpdate={isUpdate}
						disabledDelete={isDelete}
						onClickUpdate={() => handlerClickUpdate(params.id)}
						onClickDelete={() => handlerClickDelete(params.id)}
						styleDelete={styles.deleteTodo}
						styleUpdate={styles.updateTodo}
						styleContainer={styles.buttonTodo}
						childrenUpdate={'✐'}
						childrenDelete={'✖'}
					/>
				</div>
			</div>
		</>
	);
};
