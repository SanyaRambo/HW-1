export const onChange = ({ target }, updateState, setLoginError) => {
	updateState(target.name, target.value);
	let newError = null;

	if (target.value.length > 20) {
		newError = 'Ошибка. Пароль должен быть 20 символов максимум.';
	}

	if (!/^(?=.*[a-z])(?=.*[A-Z]).+$/.test(target.value) && target.value.length >= 3) {
		setLoginError(
			'Напишите такой пароль, чтобы были маленькие и заглавные ЛАТИНСКИЕ буквы.',
		);
		return;
	}
	setLoginError(newError);
};
