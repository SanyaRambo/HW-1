import { useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from './forms.module.css';
import { registrationFormSchema } from './registration-form-schema';
import { Field } from './components';

const Forms = () => {
	const {
		register,
		handleSubmit,
		formState: { isValid, errors },
	} = useForm({
		defaultValues: {
			email: '',
			password: '',
			passwordReplay: '',
		},
		resolver: yupResolver(registrationFormSchema),
		mode: 'onTouched',
	});

	const submitButtonRef = useRef(null);

	const sendFormData = (formData) => {
		console.log(formData);
	};

	const onSubmit = ({ email, password, passwordReplay }) => {
		sendFormData({ email, password, passwordReplay });
	};

	useEffect(() => {
		if (isValid) {
			submitButtonRef.current.focus();
		}
	}, [isValid]);

	return (
		<>
			<div className={styles.app}>
				<form className={styles.windowOfForms} onSubmit={handleSubmit(onSubmit)}>
					<Field
						type="email"
						autoComplete="email"
						placeholder="Почта..."
						error={errors.email?.message}
						{...register('email')}
					/>
					<Field
						type="password"
						autoComplete="new-password"
						placeholder="Пароль..."
						error={errors.email?.message}
						{...register('password')}
					/>
					<Field
						type="password"
						autoComplete="new-password"
						placeholder="Повторите пароль..."
						error={errors.passwordReplay?.message}
						{...register('passwordReplay')}
					/>
					<button
						className={styles.buttonOfForm}
						type="submit"
						disabled={!isValid}
						ref={submitButtonRef}
					>
						Зарегистрироваться
					</button>
				</form>
				<div className={styles.windowOfError}>
					{Object.keys(errors).length > 0 && (
						<ul className={styles.error}>
							{Object.values(errors).map((error, index) => (
								<li key={index} className={styles.errorItem}>
									{error.message}
								</li>
							))}
						</ul>
					)}
				</div>
			</div>
		</>
	);
};

export default Forms;
