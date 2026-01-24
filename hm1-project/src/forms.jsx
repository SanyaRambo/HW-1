import { useState } from 'react';
import styles from './forms.module.css';
import { useStore } from './Hooks';
import { onChange, onEmailChange } from './Changes';
import { onBlur } from './onBlur';

const Forms = () => {
	const { getState, updateState, statusState } = useStore();
	const [loginError, setLoginError] = useState(null);

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

	return (
		<>
			<div className={styles.app}>
				<form className={styles.windowOfForms} onSubmit={onSubmit}>
					<input
						name="email"
						type="email"
						value={email}
						autoComplete="email"
						placeholder="Почта"
						className={styles.form}
						onChange={(event) =>
							onEmailChange(event, updateState, setLoginError)
						}
						onBlur={(event) => onBlur(event, setLoginError)}
					/>
					<input
						name="password"
						type="password"
						value={password}
						autoComplete="new-password"
						placeholder="Пароль"
						className={styles.form}
						onChange={(event) => onChange(event, updateState, setLoginError)}
						onBlur={(event) =>
							onBlur(
								event,
								setLoginError,
								password,
								passwordReplay,
							)
						}
					/>
					<input
						name="passwordReplay"
						type="password"
						value={passwordReplay}
						autoComplete="new-password"
						placeholder="Повтор пароля"
						className={styles.form}
						onChange={(event) => onChange(event, updateState, setLoginError)}
						onBlur={(event) =>
							onBlur(event, setLoginError, password, passwordReplay)
						}
					/>
					<button
						className={styles.buttonOfForm}
						type="submit"
						disabled={!flagDisable}
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
