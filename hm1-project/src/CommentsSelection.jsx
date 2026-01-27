import PropTypes from 'prop-types';
import { useActionState, useOptimistic } from 'react';
import styles from './app.module.css';
import { sendMessage } from './action/sendMessage';

const initialState = {
	messages: [],
	error: null,
};

const CommentsSelection = () => {
	const [state, addCommentAction, pending] = useActionState(sendMessage, initialState);

	const [optimisticMessages, addOptimisticMessage] = useOptimistic(
		state.messages,
		(currentMessages, newMessage) => [...currentMessages, newMessage],
	);

	return (
		<>
			<div className={styles.windowWithMessage}>

					{optimisticMessages.map((message, index) => (
						<span key={index} className={styles.message}>
							{message}
						</span>
					))}

			</div>
			<div>{state.error && <p className={styles.error}>{state.error}</p>}</div>
			<div className={styles.windowOfInput}>
				<form action={addCommentAction} className={styles.form}>
					<textarea
						name="message"
						placeholder="Напишите сообщение..."
						className={styles.inputMessage}
						disabled={pending}
					/>
					<button
						type="submit"
						className={styles.inputButton}
						disabled={pending}
					>
						{pending ? 'Отправка...' : 'Отправить'}
					</button>
				</form>
			</div>
		</>
	);
};

export default CommentsSelection;
