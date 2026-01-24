export const onBlur = ({ target }, setLoginError, password, passwordReplay) => {
	const value = target.value.trim();

	if (target.name === 'email') {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(value)) {
			setLoginError(
				'Ошибка. Некорректный формат почты (требуется: example@domain.com).',
			);
			return;
		}
	} else if (target.value.length < 3) {
		setLoginError('Ошибка. Пароль должен быть 3 символа минимум.');
		return;
	} else if (password !== passwordReplay) {
		setLoginError('Ошибка. Пароли не совпадают');
		return;
	}

	if (!/^(?=.*[a-z])(?=.*[A-Z]).+$/.test(target.value)) {
		setLoginError(
			'Напишите такой пароль, чтобы были маленькие и заглавные ЛАТИНСКИЕ буквы.',
		);
		return;
	}
};
