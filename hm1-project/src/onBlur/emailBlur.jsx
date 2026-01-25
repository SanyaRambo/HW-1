export const emailBlur = ({ target }, setLoginError, password, passwordReplay) => {
	if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(target.value)) {
		setLoginError(
			'Ошибка. Некорректный формат почты (требуется: example@domain.com).',
		);
		return;
	}

	if (password && passwordReplay && password !== passwordReplay) {
		setLoginError('Ошибка. Пароли не совпадают');
		return;
	}
	setLoginError(null);
};
