import { useState, useRef, useEffect } from 'react';
import styles from './forms.module.css';
import { useStore } from './Hooks';
import { onChange, onEmailChange } from './Changes';
import { passwordBlur, passwordReplayBlur, emailBlur } from './onBlur';
import { Field } from './components';

const Forms = () => {
	const { getState, updateState, statusState } = useStore();
	const [loginError, setLoginError] = useState(null);
	const submitButtonRef = useRef(null);

	const sendFormData = (formData) => {
		console.log(formData);
	};

	const onSubmit = (event) => {
		event.preventDefault();
		sendFormData(getState());
	};

	const { email, password, passwordReplay } = getState();

	const flagDisable =
		loginError === null && statusState(email, password, passwordReplay);

	useEffect(() => {
		if (flagDisable) {
			submitButtonRef.current.focus();
		}
	}, [flagDisable]);

	return (
		<>
			<div className={styles.app}>
				<form className={styles.windowOfForms} onSubmit={onSubmit}>
					<Field
						name="email"
						type="email"
						value={email}
						autoComplete="email"
						placeholder="Почта..."
						onChange={(event) =>
							onEmailChange(event, updateState, setLoginError)
						}
						onBlur={(event) =>
							emailBlur(event, setLoginError, password, passwordReplay)
						}
					/>
					<Field
						name="password"
						type="password"
						value={password}
						autoComplete="new-password"
						placeholder="Пароль..."
						onChange={(event) => onChange(event, updateState, setLoginError)}
						onBlur={(event) =>
							passwordBlur(event, setLoginError, passwordReplay)
						}
					/>
					<Field
						name="passwordReplay"
						type="password"
						value={passwordReplay}
						autoComplete="new-password"
						placeholder="Повторите пароль..."
						onChange={(event) => onChange(event, updateState, setLoginError)}
						onBlur={(event) =>
							passwordReplayBlur(event, setLoginError, password)
						}
					/>
					<button
						className={styles.buttonOfForm}
						type="submit"
						disabled={!flagDisable}
						ref={submitButtonRef}
					>
						Зарегистрироваться
					</button>
				</form>
				<div className={styles.windowOfError}>
					{loginError && <p className={styles.error}>{loginError}</p>}
				</div>
			</div>
		</>
	);
};

export default Forms;
