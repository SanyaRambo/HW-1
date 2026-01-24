export const onChange = ({ target }, updateState, setLoginError) => {
	updateState(target.name, target.value);
	let newError = null;

	if (target.value.length > 20) {
		newError = 'Ошибка. Пароль должен быть 20 символов максимум.';
	}
	setLoginError(newError);
};
