import styles from './formList.module.css';
import { ContainerButtonsOfList } from '../buttons/containerOfButtonsOfList';

export const FormListLayout = ({
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
	filteredTodos
}) => {
	
	return (
		<>
			<div className={styles.listOfTodos}>
				{isLoading && <h1>ЗАГРУЗКА...</h1>}
				{isError.errorStatus && (
					<div className={styles.containerError}>
						<h1 className={styles.error}>{isError.message}</h1>
					</div>
				)}

				{!isLoading &&
					Object.entries(filteredTodos).map(([id, {title}]) => (
						<form
							action=""
							key={id}
							className={styles.todos}
							onSubmit={(event) => editingTodo(event, updateTodo, id)}
						>
							<input
								className={styles.todo}
								value={updateTodoId === id ? updateTodo : title}
								onChange={(event) => {
									setUpdateTodo(event.target.value);
									setUpdateTodoId(id);
								}}
								ref={(el) => (submitUpdateTodo.current[id] = el)}
							/>
							<ContainerButtonsOfList
								type="button"
								disabledUpdate={isUpdate}
								disabledDelete={isDelete}
								onClickUpdate={() => handlerClickUpdate(id)}
								onClickDelete={() => handlerClickDelete(id)}
								styleDelete={styles.deleteTodo}
								styleUpdate={styles.updateTodo}
								styleContainer={styles.buttonTodo}
								childrenUpdate={'✐'}
								childrenDelete={'✖'}
							/>
						</form>
					))}
			</div>
		</>
	);
};
