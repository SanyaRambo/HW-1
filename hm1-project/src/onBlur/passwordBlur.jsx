export const passwordBlur = ({ target }, setLoginError, passwordReplay) => {
	if (target.value.length < 3) {
		setLoginError('Ошибка. Пароль должен быть 3 символа минимум.');
		return;
	}

	if (target.value && passwordReplay && target.value !== passwordReplay) {
		setLoginError('Ошибка. Пароли не совпадают');
		return;
	}

	setLoginError(null);
};
