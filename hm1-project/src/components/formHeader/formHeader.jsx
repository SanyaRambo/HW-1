import styles from './formHeader.module.css';
import { ContainerButtonsOfHeader } from '../buttons/containerButtonsOfHeader';

export const FormHeader = ({ submitTodoToDateBase, todo, setTodo, isCreate }) => {
	const handlerClickResetInput = (event) => {
		event.preventDefault();
		setTodo('');
	};

	return (
		<>
			<form onSubmit={submitTodoToDateBase}>
				<input
					name="todo"
					type="text"
					placeholder="Добавь или найди задачу..."
					value={todo}
					onChange={(event) => setTodo(event.target.value)}
					className={styles.inputList}
				/>
				<ContainerButtonsOfHeader
					type="submit"
					disabledAdd={isCreate}
					onClickReset={(event) => handlerClickResetInput(event)}
					styleAdd={styles.buttonAddInput}
					styleReset={styles.buttonResetInput}
					styleContainer={styles.containerButtonsOfInput}
					childrenAdd="✚"
					childrenReset="✖"
				/>
			</form>
		</>
	);
};
