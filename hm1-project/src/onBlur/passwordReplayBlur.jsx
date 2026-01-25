export const passwordReplayBlur = ({ target }, setLoginError, password) => {
	if (target.value.length < 3) {
		setLoginError('Ошибка. Пароль должен быть 3 символа минимум.');
		return;
	}

	if (password && target.value && password !== target.value) {
		setLoginError('Ошибка. Пароли не совпадают');
		return;
	}
	setLoginError(null);
};
