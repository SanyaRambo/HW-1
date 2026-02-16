import styles from './formHeader.module.css';
import { ContainerButtonsOfHeader } from '../buttons/containerButtonsOfHeader';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectIsCreate } from '../../selectors';
import { SUBMIT_TODO } from '../../actions/submit.-todo';
import { SET_IS_ERROR } from '../../actions';

export const FormHeader = () => {
	const dispatch = useDispatch();

	const [todoLocal, setTodoLocal] = useState('');

	const isCreate = useSelector(selectIsCreate);
	const handlerClickResetInput = (event) => {
		event.preventDefault();
		setTodoLocal('');
		dispatch(SET_IS_ERROR())
	};
	const submitTodoToDateBase = (event) => {
		event.preventDefault();
		dispatch(SUBMIT_TODO(todoLocal));
		setTodoLocal('');
	};

	return (
		<>
			<form onSubmit={submitTodoToDateBase}>
				<input
					name="todo"
					type="text"
					placeholder="Добавь или найди задачу..."
					value={todoLocal}
					onChange={(event) => setTodoLocal(event.target.value)}
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
